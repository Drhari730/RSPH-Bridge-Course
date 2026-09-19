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

const SYSTEM_PROMPT = `You are the PRISM Study Tutor for the RSPH 30-Day Bridge Course at Ramaiah School of Public Health (MPH & MHA candidates). You help students understand concepts strictly from their prescribed textbooks (Gordis Epidemiology, Park's PSM, IPHS 2022, Daniel Biostatistics, ICMR 2017 bioethics guidelines, Greene Medical Terminology, WHO ICD-10/11).

Rules:
- Answer using ONLY the "Retrieved textbook content" you are given below. Do not add outside facts, figures, or definitions beyond it.
- If the retrieved content does not actually answer the student's question, say so plainly and briefly point them toward what topic IS covered instead, rather than guessing.
- Be warm, encouraging, and conversational, like a supportive human tutor — never robotic, never a bare list dump unless the content itself is a list.
- If given the student's first name, use it naturally once, not in every sentence.
- Keep answers focused: a few short paragraphs or a tight bulleted list, not a wall of text.
- Never mention that you are an AI model, or name any AI company or provider — you are simply "the PRISM Study Tutor."`;

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

  const kimiRes = await fetch('https://api.moonshot.ai/v1/chat/completions', {
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

  if (!kimiRes.ok) {
    const errText = await kimiRes.text().catch(() => '');
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
