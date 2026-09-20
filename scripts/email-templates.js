/**
 * Branded HTML email templates for the RSPH PRISM Bridge Course, styled to
 * match the Pariksha exam portal's result emails (table-based layout for
 * email-client compatibility, gradient header banner, motivational
 * headline+note pairing, stat rows) but in RSPH's navy/crimson palette.
 */

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function statRow(label, value) {
  return `<tr>
    <td style="padding:8px 0;color:#64748b;font-size:13px;">${label}</td>
    <td style="padding:8px 0;text-align:right;font-size:13px;font-weight:700;color:#0f172a;">${value}</td>
  </tr>`;
}

function idBadge(studentId, note) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FDF2F8;border:1.5px dashed #F472B6;border-radius:12px;margin:6px 0 4px;">
    <tr><td style="padding:16px 18px;text-align:center;">
      <div style="font-size:10.5px;font-weight:800;letter-spacing:1.5px;color:#9D174D;text-transform:uppercase;">Your Student ID</div>
      <div style="font-size:24px;font-weight:800;color:#0F172A;font-family:'Courier New',monospace;letter-spacing:1px;margin:6px 0 2px;">${esc(studentId)}</div>
      <div style="font-size:11.5px;color:#9D174D;">${note}</div>
    </td></tr>
  </table>`;
}

const LOGO_ICON_URL = 'https://rsph-prism-2026-8d817.web.app/prism_logo_icon.png';

function shell({ bodyHtml, footerNote = '' }) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#F1F5F9;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:24px 12px;">
<tr><td align="center">
  <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;background:#FFFFFF;border-radius:16px;overflow:hidden;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;box-shadow:0 8px 30px rgba(2,6,23,.12);">
    <tr><td style="background:#FFFFFF;padding:20px 26px;border-bottom:3px solid #CF3E30;">
      <table role="presentation" cellpadding="0" cellspacing="0"><tr>
        <td style="padding-right:12px;"><img src="${LOGO_ICON_URL}" width="52" alt="PRISM" style="display:block;width:52px;height:auto;border:0;" /></td>
        <td style="vertical-align:middle;">
          <div style="font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:24px;color:#A82042;line-height:1;">PRISM</div>
          <div style="font-weight:700;font-size:10px;letter-spacing:2px;color:#334155;margin-top:4px;">30-DAY BRIDGE COURSE</div>
        </td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:0;">
      ${bodyHtml}
    </td></tr>
    <tr><td style="padding:16px 26px 24px;border-top:1px solid #eef2f7;">
      <p style="margin:0;font-size:11.5px;color:#94a3b8;line-height:1.6;">${footerNote || 'This is an automated message from the RSPH PRISM Bridge Course portal.'}</p>
      <p style="margin:10px 0 0;font-size:10px;font-weight:700;letter-spacing:2px;color:#64748b;">RAMAIAH SCHOOL OF PUBLIC HEALTH &middot; MSRUAS</p>
    </td></tr>
  </table>
</td></tr>
</table>
</body></html>`;
}

function registrationEmail({ name, studentId, discipline }) {
  const body = `
    <tr><td style="padding:26px 26px 8px;">
      <p style="margin:0 0 4px;font-size:15px;color:#0f172a;">Dear ${esc(name)},</p>
      <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;">Welcome to the <b>RSPH PRISM 30-Day Bridge Course</b>! Your registration as a <b>${esc(discipline || 'PRISM Scholar')}</b> is confirmed.</p>
    </td></tr>
    <tr><td style="padding:14px 26px 4px;">${idBadge(studentId, 'Save this — you\'ll need it to verify your identity and generate your final certificate')}</td></tr>
    <tr><td style="padding:16px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:12px;">
        <tr>
          <td style="padding:14px 16px;font-size:26px;vertical-align:top;width:44px;">🚀</td>
          <td style="padding:14px 8px 14px 0;">
            <div style="font-size:14px;font-weight:800;color:#0f172a;">You're all set to begin</div>
            <div style="font-size:12.5px;color:#475569;line-height:1.55;margin-top:2px;">30 daily lessons, 6 interactive simulation labs, and a Pink Certificate waiting at the end of every module. Log back in any time — your progress and this ID are what carry you through to your final Certificate of Competence.</div>
          </td>
        </tr>
      </table>
    </td></tr>
  `;
  return shell({ bodyHtml: body, footerNote: 'This is an automated registration confirmation. Keep this email for your Student ID.' });
}

function moduleCertEmail({ name, studentId, moduleNum, moduleName, certCode, awardedDate, modulesRemaining }) {
  const perfect = modulesRemaining === 0;
  const headline = perfect ? '🏆 Final module complete!' : '🌸 Module mastery achieved';
  const note = perfect
    ? 'That was your last module quiz — head to the Course Certificate tab with your Student ID to generate your official Certificate of Competence.'
    : `${modulesRemaining} module${modulesRemaining === 1 ? '' : 's'} to go. You're building real momentum — keep the streak alive.`;
  const body = `
    <tr><td style="padding:26px 26px 8px;">
      <p style="margin:0 0 4px;font-size:15px;color:#0f172a;">Dear ${esc(name)},</p>
      <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;">You passed the quiz for <b>Module ${moduleNum}: ${esc(moduleName)}</b>.</p>
    </td></tr>
    <tr><td style="padding:14px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FDF2F8;border-radius:14px;">
        <tr><td style="padding:20px 22px;text-align:center;">
          <div style="font-size:12px;font-weight:700;letter-spacing:1.5px;color:#BE185D;text-transform:uppercase;">Pink Certificate Awarded</div>
          <div style="font-size:22px;font-weight:800;color:#0f172a;margin:8px 0 2px;">Module ${moduleNum} Mastery</div>
          <div style="display:inline-block;background:#BE185D;color:#fff;font-size:12px;font-weight:700;border-radius:999px;padding:4px 14px;font-family:'Courier New',monospace;">${esc(certCode)}</div>
          <div style="font-size:11px;color:#9D174D;margin-top:8px;">Awarded ${esc(awardedDate)}</div>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:16px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:12px;">
        <tr>
          <td style="padding:14px 16px;font-size:26px;vertical-align:top;width:44px;">${perfect ? '🏆' : '🌸'}</td>
          <td style="padding:14px 8px 14px 0;">
            <div style="font-size:14px;font-weight:800;color:#0f172a;">${headline}</div>
            <div style="font-size:12.5px;color:#475569;line-height:1.55;margin-top:2px;">${note}</div>
          </td>
        </tr>
      </table>
    </td></tr>
    <tr><td style="padding:6px 26px 4px;">${idBadge(studentId, 'Your Student ID — you\'ll need it for your final certificate')}</td></tr>
  `;
  return shell({ bodyHtml: body, footerNote: 'This is an automated Pink Certificate notification.' });
}

function finalCertEmail({ name, studentId, certId, certDate }) {
  const body = `
    <tr><td style="padding:26px 26px 8px;">
      <p style="margin:0 0 4px;font-size:15px;color:#0f172a;">Dear ${esc(name)},</p>
      <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;">Congratulations — you've completed the full <b>30-Day PRISM Bridge Course</b>.</p>
    </td></tr>
    <tr><td style="padding:14px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#021152,#1E40AF);border-radius:14px;">
        <tr><td style="padding:24px 22px;text-align:center;">
          <div style="font-size:34px;">🎓</div>
          <div style="font-size:12px;font-weight:700;letter-spacing:1.5px;color:#93C5FD;text-transform:uppercase;margin-top:4px;">Certificate of Competence</div>
          <div style="font-size:20px;font-weight:800;color:#fff;margin:6px 0 10px;">Ramaiah School of Public Health</div>
          <div style="display:inline-block;background:#fff;color:#021152;font-size:12px;font-weight:700;border-radius:999px;padding:4px 14px;font-family:'Courier New',monospace;">${esc(certId)}</div>
          <div style="font-size:11px;color:#BFDBFE;margin-top:8px;">Issued ${esc(certDate)}</div>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:16px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:12px;">
        <tr>
          <td style="padding:14px 16px;font-size:26px;vertical-align:top;width:44px;">🌟</td>
          <td style="padding:14px 8px 14px 0;">
            <div style="font-size:14px;font-weight:800;color:#0f172a;">Well earned</div>
            <div style="font-size:12.5px;color:#475569;line-height:1.55;margin-top:2px;">30 lessons, 6 modules, 6 Pink Certificates and one full Certificate of Competence — all verified against your Student ID <b>${esc(studentId)}</b>. Print or save it as a PDF from the Course Certificate tab any time.</div>
          </td>
        </tr>
      </table>
    </td></tr>
  `;
  return shell({ bodyHtml: body, footerNote: 'This is an automated course-completion notification.' });
}

function digestEmail({ name, studentId, lessonsDone, totalLessons, quizzesPassed, totalModules, pinkCerts, finalAwarded }) {
  const pct = Math.round((lessonsDone / totalLessons) * 100);
  let emoji, headline, note;
  if (finalAwarded) {
    emoji = '🎓'; headline = 'Course complete — well done!';
    note = 'Your Certificate of Competence has already been issued. This is just a final recap of your journey.';
  } else if (pct >= 80) {
    emoji = '🔥'; headline = 'Final stretch — almost there';
    note = 'You are closing in on the finish line. A few more lessons and you will have earned every Pink Certificate.';
  } else if (pct >= 50) {
    emoji = '💪'; headline = 'Halfway and holding strong';
    note = 'Solid pace. Keep one lesson a day going and Module completion will take care of itself.';
  } else if (pct >= 20) {
    emoji = '📈'; headline = 'Building real momentum';
    note = 'You are past the early stretch — the daily rhythm is starting to compound. Keep going.';
  } else {
    emoji = '🌱'; headline = 'Every scholar starts here';
    note = 'A short lesson today keeps the 30-day streak alive. Small, consistent steps get you to the certificate.';
  }
  const body = `
    <tr><td style="padding:26px 26px 8px;">
      <p style="margin:0 0 4px;font-size:15px;color:#0f172a;">Dear ${esc(name)},</p>
      <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;">Here's your daily PRISM progress snapshot.</p>
    </td></tr>
    <tr><td style="padding:14px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FEF3EC;border-radius:14px;">
        <tr><td style="padding:20px 22px;text-align:center;">
          <div style="font-size:12px;font-weight:700;letter-spacing:1.5px;color:#A82042;text-transform:uppercase;">Course Progress</div>
          <div style="font-size:40px;font-weight:800;color:#0f172a;line-height:1.1;margin:6px 0 2px;">${pct}<span style="font-size:20px;color:#64748b;font-weight:700;">%</span></div>
          <div style="margin-top:14px;background:#ffffff;border-radius:999px;height:10px;overflow:hidden;">
            <div style="width:${Math.max(2, Math.min(100, pct))}%;background:linear-gradient(90deg,#A82042,#D97706);height:10px;border-radius:999px;"></div>
          </div>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:16px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:12px;">
        <tr>
          <td style="padding:14px 16px;font-size:26px;vertical-align:top;width:44px;">${emoji}</td>
          <td style="padding:14px 8px 14px 0;">
            <div style="font-size:14px;font-weight:800;color:#0f172a;">${headline}</div>
            <div style="font-size:12.5px;color:#475569;line-height:1.55;margin-top:2px;">${note}</div>
          </td>
        </tr>
      </table>
    </td></tr>
    <tr><td style="padding:8px 26px 6px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${statRow('Student ID', `<span style="font-family:'Courier New',monospace;">${esc(studentId)}</span>`)}
        ${statRow('Lessons completed', `${lessonsDone} / ${totalLessons}`)}
        ${statRow('Module quizzes passed', `${quizzesPassed} / ${totalModules}`)}
        ${statRow('Pink Certificates earned', String(pinkCerts))}
        ${statRow('Final Certificate', finalAwarded ? 'Issued 🎓' : 'Not yet issued')}
      </table>
    </td></tr>
  `;
  return shell({ bodyHtml: body, footerNote: 'This is an automated daily progress digest. It only arrives on days you have activity to report.' });
}

function nudgeEmail({ name, studentId, lessonsDone, totalLessons }) {
  const remaining = Math.max(0, totalLessons - lessonsDone);
  const pct = Math.round((lessonsDone / totalLessons) * 100);
  const body = `
    <tr><td style="padding:26px 26px 8px;">
      <p style="margin:0 0 4px;font-size:15px;color:#0f172a;">Dear ${esc(name)},</p>
      <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;">We noticed you haven't opened a PRISM lesson yet today — just a friendly nudge before the day closes out.</p>
    </td></tr>
    <tr><td style="padding:14px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFFBEB;border:1.5px dashed #F59E0B;border-radius:14px;">
        <tr><td style="padding:20px 22px;text-align:center;">
          <div style="font-size:12px;font-weight:700;letter-spacing:1.5px;color:#B45309;text-transform:uppercase;">${remaining} Lesson${remaining === 1 ? '' : 's'} Remaining</div>
          <div style="font-size:34px;font-weight:800;color:#0f172a;line-height:1.1;margin:6px 0 2px;">${pct}<span style="font-size:18px;color:#64748b;font-weight:700;">% complete</span></div>
          <div style="margin-top:14px;background:#ffffff;border-radius:999px;height:10px;overflow:hidden;">
            <div style="width:${Math.max(2, Math.min(100, pct))}%;background:linear-gradient(90deg,#F59E0B,#A82042);height:10px;border-radius:999px;"></div>
          </div>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:16px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:12px;">
        <tr>
          <td style="padding:14px 16px;font-size:26px;vertical-align:top;width:44px;">⏰</td>
          <td style="padding:14px 8px 14px 0;">
            <div style="font-size:14px;font-weight:800;color:#0f172a;">Keep the streak alive</div>
            <div style="font-size:12.5px;color:#475569;line-height:1.55;margin-top:2px;">Even one lesson today keeps your momentum going. Log back in with Student ID <b>${esc(studentId)}</b> and pick up right where you left off — it only takes a few minutes.</div>
          </td>
        </tr>
      </table>
    </td></tr>
  `;
  return shell({ bodyHtml: body, footerNote: 'This is an automated end-of-day reminder, sent only on days you have not yet studied. It stops once you complete the course.' });
}

module.exports = { registrationEmail, moduleCertEmail, finalCertEmail, digestEmail, nudgeEmail };
