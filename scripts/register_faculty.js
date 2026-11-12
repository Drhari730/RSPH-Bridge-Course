const { initializeApp } = require('firebase/app');
const { initializeFirestore, doc, setDoc, getDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyDt2cIExr_hEK_q_b9HhtnzKzeSbXsqT_I',
  authDomain: 'rsph-prism-2026-8d817.firebaseapp.com',
  projectId: 'rsph-prism-2026-8d817',
  storageBucket: 'rsph-prism-2026-8d817.firebasestorage.app',
  messagingSenderId: '535427084339',
  appId: '1:535427084339:web:10de0e7d86fd6ff591f346'
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

async function run() {
  const now = new Date().toISOString();

  // 1. Dr Nanda Kumar B S (Dean)
  const deanData = {
    id: 'FAC-2026-DEANNK',
    name: 'Dr Nanda Kumar B S',
    email: 'dean.rsph@msruas.ac.in',
    discipline: 'Dean & Director (Faculty Reviewer)',
    college: 'Ramaiah School of Public Health, MSRUAS',
    prior: 'MBBS, MD (Community Medicine) / Dean & Director',
    role: 'faculty',
    isFaculty: true,
    addedByFaculty: true,
    registeredAt: now,
    lastActive: now,
    completedLessons: [],
    passedQuizzes: []
  };

  // 2. Dr Shalini C Nooyi (Program Head - Academics)
  const shaliniData = {
    id: 'FAC-2026-SHALINI',
    name: 'Dr Shalini C Nooyi',
    email: 'shalinicnooyi@gmail.com',
    discipline: 'Program Head – Academics (Faculty Reviewer)',
    college: 'Ramaiah School of Public Health, MSRUAS',
    prior: 'MBBS, MD / Program Head – Academics',
    role: 'faculty',
    isFaculty: true,
    addedByFaculty: true,
    registeredAt: now,
    lastActive: now,
    completedLessons: [],
    passedQuizzes: []
  };

  console.log('Writing Dr Nanda Kumar B S to Firestore...');
  await setDoc(doc(db, 'students', deanData.id), deanData, { merge: true });
  console.log('  Done! ID:', deanData.id);

  console.log('Writing Dr Shalini C Nooyi to Firestore...');
  await setDoc(doc(db, 'students', shaliniData.id), shaliniData, { merge: true });
  console.log('  Done! ID:', shaliniData.id);

  // Check email automation state to make sure neither is marked notified yet
  const stateRef = doc(db, 'meta', 'emailAutomationState');
  const stateSnap = await getDoc(stateRef);
  if (stateSnap.exists()) {
    const data = stateSnap.data();
    const notified = new Set(data.notifiedRegistrations || []);
    let modified = false;
    if (notified.has(deanData.id)) {
      notified.delete(deanData.id);
      modified = true;
    }
    if (notified.has(shaliniData.id)) {
      notified.delete(shaliniData.id);
      modified = true;
    }
    if (modified) {
      await setDoc(stateRef, { notifiedRegistrations: Array.from(notified) }, { merge: true });
      console.log('Cleared previous notification flags to ensure welcome email sends.');
    }
  }

  console.log('Both faculty members are registered in Firestore successfully!');
  process.exit(0);
}

run().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
