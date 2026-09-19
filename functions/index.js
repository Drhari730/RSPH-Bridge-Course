/**
 * RSPH PRISM Bridge Course — server-side email delivery via Resend.
 *
 * Why this exists: the portal itself (index.html) is a static, client-only
 * page with no backend. A Resend API key must never be embedded in that
 * public JavaScript (anyone could view-source and steal it), so all actual
 * email sending happens here, server-side, reacting to Firestore writes the
 * client already makes.
 *
 * SETUP (one-time):
 *   1. `firebase use rsph-prism-2026-8d817` (from the project root)
 *   2. `firebase functions:secrets:set RESEND_API_KEY`   (paste your Resend key)
 *   3. Edit FROM_EMAIL default below (or set via
 *      `firebase functions:config` / the RESEND_FROM_EMAIL param) to a
 *      sender address on a domain verified in your Resend account.
 *   4. `firebase deploy --only functions`   (requires the Blaze plan)
 */

const { onDocumentCreated, onDocumentUpdated } = require('firebase-functions/v2/firestore');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { defineSecret, defineString } = require('firebase-functions/params');
const { logger } = require('firebase-functions');
const admin = require('firebase-admin');
const { Resend } = require('resend');

admin.initializeApp();
const db = admin.firestore();

const RESEND_API_KEY = defineSecret('RESEND_API_KEY');
const FROM_EMAIL = defineString('RESEND_FROM_EMAIL', {
  default: 'RSPH PRISM Bridge Course <prism@rsph-portal.example>'
});

const TOTAL_LESSONS = 30;
const TOTAL_MODULES = 6;

function isDemoId(id) {
  return typeof id === 'string' && id.startsWith('DEMO-');
}

async function sendEmail({ to, subject, html, apiKey, from }) {
  if (!to) return;
  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({ from, to, subject, html });
    logger.info(`Email sent: "${subject}" -> ${to}`);
  } catch (err) {
    logger.error(`Email failed: "${subject}" -> ${to}`, err);
  }
}

function countPinkCerts(data) {
  return Object.keys(data).filter(k => k.startsWith('pinkCert_')).length;
}

// 1) REGISTRATION CONFIRMATION — fires once, the moment a student's doc is
//    first created in Firestore (i.e. right after they self-register).
exports.onStudentRegistered = onDocumentCreated(
  { document: 'students/{studentId}', secrets: [RESEND_API_KEY] },
  async (event) => {
    const data = event.data.data();
    if (!data || isDemoId(data.id) || !data.email) return;

    await sendEmail({
      to: data.email,
      from: FROM_EMAIL.value(),
      apiKey: RESEND_API_KEY.value(),
      subject: 'Welcome to the RSPH PRISM Bridge Course',
      html: `
        <p>Dear ${data.name || 'Scholar'},</p>
        <p>Your registration for the <strong>RSPH PRISM 30-Day Bridge Course</strong> is confirmed.</p>
        <p><strong>Student ID:</strong> ${data.id}<br/>
           <strong>Program:</strong> ${data.discipline || ''}</p>
        <p>You now have full access to all 30 daily lessons, interactive labs, quizzes and Pink Certificates. Log back in any time at your course portal to continue.</p>
        <p>— Ramaiah School of Public Health (RSPH), MSRUAS</p>
      `
    });
  }
);

// 2) MODULE / PINK CERTIFICATE + FINAL CERTIFICATE — fires on every write to
//    a student's doc; diffs before/after to detect exactly what changed.
exports.onStudentProgressUpdated = onDocumentUpdated(
  { document: 'students/{studentId}', secrets: [RESEND_API_KEY] },
  async (event) => {
    const before = event.data.before.data() || {};
    const after = event.data.after.data() || {};
    if (isDemoId(after.id) || !after.email) return;

    const apiKey = RESEND_API_KEY.value();
    const from = FROM_EMAIL.value();

    // Newly-awarded Pink Certificates (module completion)
    for (const key of Object.keys(after)) {
      if (key.startsWith('pinkCert_mod_') && !before[key] && after[key]) {
        const cert = after[key];
        await sendEmail({
          to: after.email,
          from,
          apiKey,
          subject: `Module ${cert.moduleNum} Complete — Pink Certificate Awarded`,
          html: `
            <p>Dear ${after.name || 'Scholar'},</p>
            <p>Congratulations! You've passed the quiz for <strong>Module ${cert.moduleNum}: ${cert.moduleName}</strong> and earned your Pink Certificate of Module Mastery.</p>
            <p><strong>Certificate Code:</strong> ${cert.code}<br/>
               <strong>Awarded:</strong> ${cert.awardedDate}</p>
            <p>Keep going — ${TOTAL_MODULES - countPinkCerts(after)} module(s) remaining to complete the full course.</p>
            <p>— Ramaiah School of Public Health (RSPH), MSRUAS</p>
          `
        });
      }
    }

    // Final course certificate transition (false/undefined -> true)
    if (!before.finalCertificateAwarded && after.finalCertificateAwarded) {
      await sendEmail({
        to: after.email,
        from,
        apiKey,
        subject: 'PRISM Course Completion Certificate Issued',
        html: `
          <p>Dear ${after.name || 'Scholar'},</p>
          <p>Congratulations on completing the full 30-Day PRISM Bridge Course!</p>
          <p>Your official <strong>Certificate of Competence</strong> has been issued.</p>
          <p><strong>Certificate ID:</strong> ${after.finalCertificateId || ''}<br/>
             <strong>Date:</strong> ${after.finalCertificateDate || ''}</p>
          <p>— Ramaiah School of Public Health (RSPH), MSRUAS</p>
        `
      });
    }
  }
);

// 3) DAILY PROGRESS DIGEST — once a day, every registered scholar with an
//    email gets a summary of their cumulative progress so far.
exports.dailyProgressDigest = onSchedule(
  { schedule: '0 8 * * *', timeZone: 'Asia/Kolkata', secrets: [RESEND_API_KEY] },
  async () => {
    const apiKey = RESEND_API_KEY.value();
    const from = FROM_EMAIL.value();

    const snapshot = await db.collection('students').get();
    let sent = 0;

    for (const doc of snapshot.docs) {
      const s = doc.data();
      if (!s || isDemoId(s.id) || !s.email) continue;

      const lessonsDone = Array.isArray(s.completedLessons) ? s.completedLessons.length : 0;
      const quizzesPassed = Array.isArray(s.passedQuizzes) ? s.passedQuizzes.length : 0;
      const pinkCerts = countPinkCerts(s);
      const finalStatus = s.finalCertificateAwarded ? 'Issued 🎓' : 'Not yet issued';

      // Skip the digest for scholars who haven't started anything yet —
      // avoids emailing day-zero registrants who haven't touched a lesson.
      if (lessonsDone === 0 && quizzesPassed === 0) continue;

      await sendEmail({
        to: s.email,
        from,
        apiKey,
        subject: 'Your RSPH PRISM Daily Progress Update',
        html: `
          <p>Dear ${s.name || 'Scholar'},</p>
          <p>Here's where you stand in the 30-Day PRISM Bridge Course:</p>
          <ul>
            <li><strong>Lessons completed:</strong> ${lessonsDone} / ${TOTAL_LESSONS}</li>
            <li><strong>Module quizzes passed:</strong> ${quizzesPassed} / ${TOTAL_MODULES}</li>
            <li><strong>Pink Certificates earned:</strong> ${pinkCerts}</li>
            <li><strong>Final Certificate:</strong> ${finalStatus}</li>
          </ul>
          <p>Keep up the momentum — log back in to continue your next lesson.</p>
          <p>— Ramaiah School of Public Health (RSPH), MSRUAS</p>
        `
      });
      sent++;
    }

    logger.info(`Daily progress digest sent to ${sent} scholar(s).`);
  }
);
