/**
 * RSPH PRISM Bridge Course — email worker.
 *
 * Runs on a GitHub Actions schedule (see .github/workflows/prism-emails.yml).
 * Deliberately avoids Firebase Cloud Functions (which require the paid
 * Blaze plan) — instead it reads Firestore directly with the same public
 * web config already embedded in index.html (Firestore rules allow open
 * read/write, so no service-account secret is needed) and sends mail via
 * the Resend REST API using RESEND_API_KEY from the environment (set as a
 * GitHub Actions repository secret — never committed to git).
 *
 * Each run:
 *   1. Sends a registration-confirmation email for any student not yet notified.
 *   2. Sends a module/Pink Certificate email for any newly-earned pinkCert_mod_N.
 *   3. Sends a final-certificate email the first time finalCertificateAwarded flips true.
 *   4. Once a day (around 08:00 IST), sends every active student a progress digest.
 *   5. Once a day (around 21:00 IST), sends an end-of-day nudge to any student who
 *      hasn't opened a lesson yet that day and hasn't finished all 30 lessons —
 *      repeats every day until they either study or complete the course.
 * "Already notified" state is tracked in a single Firestore doc
 * (meta/emailAutomationState) so re-runs never double-send.
 */

const { initializeApp } = require('firebase/app');
const {
  initializeFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc
} = require('firebase/firestore');
const { registrationEmail, moduleCertEmail, finalCertEmail, digestEmail, nudgeEmail } = require('./email-templates');

const firebaseConfig = {
  apiKey: 'AIzaSyDt2cIExr_hEK_q_b9HhtnzKzeSbXsqT_I',
  authDomain: 'rsph-prism-2026-8d817.firebaseapp.com',
  projectId: 'rsph-prism-2026-8d817',
  storageBucket: 'rsph-prism-2026-8d817.firebasestorage.app',
  messagingSenderId: '535427084339',
  appId: '1:535427084339:web:10de0e7d86fd6ff591f346'
};

const FROM_EMAIL = 'PRISM Bridge Course <prism@drhari.co.in>';
const TOTAL_LESSONS = 30;
const TOTAL_MODULES = 6;
const DIGEST_HOUR_IST = 8; // send the daily digest during the 08:00 IST run
const NUDGE_HOUR_IST = 21; // send the end-of-day "you haven't studied today" nudge during the 21:00 IST run

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set — nothing to do.');
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

function isDemoId(id) {
  return typeof id === 'string' && id.startsWith('DEMO-');
}

function countPinkCerts(data) {
  return Object.keys(data).filter(k => k.startsWith('pinkCert_')).length;
}

function nowIST() {
  return new Date(Date.now() + 5.5 * 60 * 60 * 1000);
}

async function sendEmail(to, subject, html) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html })
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Resend API ${res.status}: ${body}`);
  }
  console.log(`  sent: "${subject}" -> ${to}`);
}

async function main() {
  const stateRef = doc(db, 'meta', 'emailAutomationState');
  const stateSnap = await getDoc(stateRef);
  const state = stateSnap.exists() ? stateSnap.data() : {};
  const notifiedRegistrations = new Set(state.notifiedRegistrations || []);
  const notifiedFinal = new Set(state.notifiedFinal || []);
  const notifiedCerts = state.notifiedCerts || {}; // { studentId: [moduleNum, ...] }
  const lastDigestDate = state.lastDigestDate || '';
  const lastNudgeDate = state.lastNudgeDate || '';

  const snapshot = await getDocs(collection(db, 'students'));
  const students = snapshot.docs.map(d => d.data()).filter(s => s && !isDemoId(s.id));

  let sentCount = 0;

  for (const s of students) {
    if (!s.email || !s.id) continue;

    // 1) Registration confirmation
    if (!notifiedRegistrations.has(s.id)) {
      try {
        await sendEmail(
          s.email,
          'Welcome to the RSPH PRISM Bridge Course',
          registrationEmail({ name: s.name || 'Scholar', studentId: s.id, discipline: s.discipline })
        );
        notifiedRegistrations.add(s.id);
        sentCount++;
      } catch (err) {
        console.error(`  registration email failed for ${s.id}:`, err.message);
      }
    }

    // 2) Module / Pink Certificate emails
    const alreadyNotifiedMods = new Set(notifiedCerts[s.id] || []);
    const totalCertsSoFar = countPinkCerts(s);
    for (const key of Object.keys(s)) {
      if (!key.startsWith('pinkCert_mod_')) continue;
      const cert = s[key];
      if (!cert || alreadyNotifiedMods.has(cert.moduleNum)) continue;
      try {
        await sendEmail(
          s.email,
          `Module ${cert.moduleNum} Complete — Pink Certificate Awarded`,
          moduleCertEmail({
            name: s.name || 'Scholar',
            studentId: s.id,
            moduleNum: cert.moduleNum,
            moduleName: cert.moduleName,
            certCode: cert.code,
            awardedDate: cert.awardedDate,
            modulesRemaining: Math.max(0, TOTAL_MODULES - totalCertsSoFar)
          })
        );
        alreadyNotifiedMods.add(cert.moduleNum);
        sentCount++;
      } catch (err) {
        console.error(`  module cert email failed for ${s.id} module ${cert.moduleNum}:`, err.message);
      }
    }
    notifiedCerts[s.id] = Array.from(alreadyNotifiedMods);

    // 3) Final certificate
    if (s.finalCertificateAwarded && !notifiedFinal.has(s.id)) {
      try {
        await sendEmail(
          s.email,
          'PRISM Course Completion Certificate Issued',
          finalCertEmail({
            name: s.name || 'Scholar',
            studentId: s.id,
            certId: s.finalCertificateId || '',
            certDate: s.finalCertificateDate || ''
          })
        );
        notifiedFinal.add(s.id);
        sentCount++;
      } catch (err) {
        console.error(`  final certificate email failed for ${s.id}:`, err.message);
      }
    }
  }

  // 4) Daily progress digest
  const ist = nowIST();
  const todayIST = ist.toISOString().slice(0, 10);
  const hourIST = ist.getUTCHours();
  if (hourIST === DIGEST_HOUR_IST && todayIST !== lastDigestDate) {
    for (const s of students) {
      if (!s.email || !s.id) continue;
      const lessonsDone = Array.isArray(s.completedLessons) ? s.completedLessons.length : 0;
      const quizzesPassed = Array.isArray(s.passedQuizzes) ? s.passedQuizzes.length : 0;
      if (lessonsDone === 0 && quizzesPassed === 0) continue; // skip day-zero registrants

      try {
        await sendEmail(
          s.email,
          'Your RSPH PRISM Daily Progress Update',
          digestEmail({
            name: s.name || 'Scholar',
            studentId: s.id,
            lessonsDone,
            totalLessons: TOTAL_LESSONS,
            quizzesPassed,
            totalModules: TOTAL_MODULES,
            pinkCerts: countPinkCerts(s),
            finalAwarded: !!s.finalCertificateAwarded
          })
        );
        sentCount++;
      } catch (err) {
        console.error(`  digest email failed for ${s.id}:`, err.message);
      }
    }
    state.lastDigestDate = todayIST;
  }

  // 5) End-of-day "you haven't studied today" nudge — anyone registered, not yet
  // finished all 30 lessons, and with no activity recorded today. `activeDateStamp`
  // is written by index.html's client-side activity heartbeat; a student who never
  // reaches that instrumentation (e.g. very short visit) falls back to comparing
  // `lastActive` against today's date, which every page load already updates.
  if (hourIST === NUDGE_HOUR_IST && todayIST !== lastNudgeDate) {
    for (const s of students) {
      if (!s.email || !s.id) continue;
      const lessonsDone = Array.isArray(s.completedLessons) ? s.completedLessons.length : 0;
      if (lessonsDone >= TOTAL_LESSONS) continue; // course already finished
      const lastActiveDateIST = s.lastActive ? new Date(new Date(s.lastActive).getTime() + 5.5 * 60 * 60 * 1000).toISOString().slice(0, 10) : '';
      const studiedToday = s.activeDateStamp === todayIST || lastActiveDateIST === todayIST;
      if (studiedToday) continue;

      try {
        await sendEmail(
          s.email,
          "Don't lose your streak — finish today's PRISM lesson",
          nudgeEmail({ name: s.name || 'Scholar', studentId: s.id, lessonsDone, totalLessons: TOTAL_LESSONS })
        );
        sentCount++;
      } catch (err) {
        console.error(`  nudge email failed for ${s.id}:`, err.message);
      }
    }
    state.lastNudgeDate = todayIST;
  }

  state.notifiedRegistrations = Array.from(notifiedRegistrations);
  state.notifiedFinal = Array.from(notifiedFinal);
  state.notifiedCerts = notifiedCerts;
  await setDoc(stateRef, state, { merge: true });

  console.log(`Done. ${sentCount} email(s) sent this run.`);
}

main().catch(err => {
  console.error('Email worker failed:', err);
  process.exit(1);
});
