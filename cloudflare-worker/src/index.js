/**
 * RSPH PRISM Study Tutor — Cloudflare Worker.
 *
 * Purpose: the client already does local retrieval (queryKnowledgeBase() in
 * index.html, matching the student's question against the 50 prescribed-
 * textbook units). This Worker is the "generation" half of RAG — it takes
 * that retrieved content plus the student's raw question and asks Kimi
 * (Moonshot AI) to phrase a natural, conversational answer, GROUNDED ONLY in
 * what was retrieved. The Kimi API key lives only here as a Worker secret —
 * never in the public page's JavaScript.
 *
 * Deploy: `npx wrangler deploy` from this directory (needs CLOUDFLARE_API_TOKEN
 * env var, or `wrangler login`). Secret: `npx wrangler secret put KIMI_API_KEY`.
 */

const ALLOWED_ORIGINS = new Set([
  'https://rsph-prism-2026-8d817.web.app',
  'https://rsph-prism-2026-8d817.firebaseapp.com',
  'http://localhost:8791'
]);

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.has(origin) ? origin : 'https://rsph-prism-2026-8d817.web.app';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
}

const SYSTEM_PROMPT = `You are Setu ("bridge" in Sanskrit), the AI study tutor for the RSPH 30-Day PRISM Bridge Course at Ramaiah School of Public Health (MPH & MHA candidates). Your job is to bridge students from the raw textbook page to real understanding, using strictly their prescribed textbooks (Gordis Epidemiology, Park's PSM, IPHS 2022, Daniel Biostatistics, ICMR 2017 bioethics guidelines, Greene Medical Terminology, WHO ICD-10/11).

Rules:
- Answer using ONLY the "Retrieved textbook content" you are given below. Do not add outside facts, figures, or definitions beyond it.
- If the retrieved content does not actually answer the student's question, say so plainly and briefly point them toward what topic IS covered instead, rather than guessing.
- Be warm, encouraging, and conversational, like a supportive human tutor — never robotic, never a bare list dump unless the content itself is a list.
- If given the student's first name, use it naturally once, not in every sentence.
- Keep answers focused: a few short paragraphs or a tight bulleted list, not a wall of text.
- If asked your name, you are Setu. Never mention that you are an AI model, or name any AI company or provider.

Formatting (your output is rendered as real HTML, so follow this exactly):
- Only use "## Heading" (or "###") to break the answer into named sections when it genuinely has 2+ distinct parts. For a short, single-point answer, skip headings entirely — do not force structure that isn't there.
- When comparing 3 or more structured items side by side (e.g. types of bias, test A vs test B vs test C, definitions), use a markdown pipe table: a header row, a "|---|---|" separator row, then data rows. Keep every cell to a few words — tables are for scanning, not paragraphs.
- When explaining a sequence of steps, a pathway, or a process (e.g. outbreak investigation steps, a referral pathway, a review process), represent it as a flow diagram using EXACTLY this fenced format, one step per line, nothing else inside it:
\`\`\`flow
Step one
Step two
Step three
\`\`\`
  Use this only for genuine ordered processes — never for a plain list of facts or a table comparison.
- Never output raw HTML tags. Use only: ## / ### headings, **bold**, *italic*, \`code\`, "- " or "1. " lists, pipe tables, and \`\`\`flow blocks as described above.`;

function stripHtml(html) {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

async function handleAsk(request, env) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.question !== 'string' || !body.question.trim()) {
    return { status: 400, data: { error: 'Missing question.' } };
  }

  const question = body.question.trim().slice(0, 500);
  const studentName = typeof body.studentName === 'string' ? body.studentName.trim().slice(0, 60) : '';
  const matches = Array.isArray(body.matches) ? body.matches.slice(0, 2) : [];

  let contextBlock = 'No matching unit was found in the 50 prescribed-textbook units for this question.';
  if (matches.length > 0) {
    contextBlock = matches.map((m, i) => {
      const text = stripHtml(m.contentHtml).slice(0, 1800);
      return `[Unit ${i + 1}] Topic: ${m.topic || ''}\nSource: ${m.source || ''}\nKey takeaway: ${m.takeaway || ''}\nContent: ${text}`;
    }).join('\n\n');
  }

  const userContent = `${studentName ? `Student's first name: ${studentName}\n` : ''}Retrieved textbook content:\n${contextBlock}\n\nStudent's question: ${question}`;

  // Kimi's account-level rate limit on this tier is very low (a handful of
  // requests/minute) — with a whole class asking questions around the same
  // time, hitting it is routine, not exceptional. Retry with backoff before
  // giving up (the client falls back to the rule-based answer if we still fail).
  const callKimi = () => fetch('https://api.moonshot.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.KIMI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'kimi-k2.6',
      max_tokens: 600,
      thinking: { type: 'disabled' },
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userContent }
      ]
    })
  });

  let kimiRes = await callKimi();
  let errText = '';
  // This Kimi account's rate-limit tier is tight (a handful of concurrent
  // requests). It recovers fast (Kimi's own Retry-After, typically ~1s) --
  // isolated/staggered questions almost always succeed on the first retry;
  // only a genuine simultaneous flood of many students needs several. Widening
  // jitter each attempt spreads collided requests apart instead of having
  // them all retry in lockstep and collide again.
  const MAX_ATTEMPTS = 5;
  for (let attempt = 0; kimiRes.status === 429 && attempt < MAX_ATTEMPTS; attempt++) {
    const retryAfterSec = parseFloat(kimiRes.headers.get('retry-after')) || 1;
    const jitter = Math.random() * (0.4 + attempt * 0.3);
    await new Promise(r => setTimeout(r, (retryAfterSec + jitter) * 1000));
    kimiRes = await callKimi();
  }

  if (!kimiRes.ok) {
    errText = await kimiRes.text().catch(() => '');
    return { status: 502, data: { error: 'Tutor backend error', detail: errText.slice(0, 300) } };
  }

  const kimiJson = await kimiRes.json();
  const answer = kimiJson.choices && kimiJson.choices[0] && kimiJson.choices[0].message
    ? kimiJson.choices[0].message.content
    : '';

  return { status: 200, data: { answer } };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders(origin) });
    }

    try {
      const { status, data } = await handleAsk(request, env);
      return new Response(JSON.stringify(data), { status, headers: corsHeaders(origin) });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Worker error', detail: String(err && err.message || err) }), { status: 500, headers: corsHeaders(origin) });
    }
  }
};
