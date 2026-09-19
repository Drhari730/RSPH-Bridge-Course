# RSPH PRISM 30-Day Bridge Course Portal — Complete Project Handoff Report

> **Project Owner**: Dr. Hariprakash M  
> **Institution**: Ramaiah School of Public Health (RSPH), M. S. Ramaiah University of Applied Sciences (MSRUAS), Bengaluru  
> **Date**: September 19, 2026  
> **Course Launch**: September 26, 2026 (3 days after 23rd)

---

## 1. What This Project Is

An **interactive, single-page web application** (SPA) that serves as the official **PRISM 30-Day Bridge Course Portal** for incoming MPH (Master of Public Health) and MHA (Master of Hospital Administration) candidates at Ramaiah School of Public Health.

### Live URLs
- **Firebase Hosting**: https://rsph-prism-2026-8d817.web.app
- **GitHub Repository**: https://github.com/Drhari730/RSPH-Bridge-Course

---

## 2. Project Location & Mirror

| Location | Path |
|:---|:---|
| **Primary Workspace (Antigravity)** | `d:\Antigravity projects\rsph-prism-portal\` |
| **Desktop Mirror** | `C:\Users\drhar\OneDrive\Desktop\MSRUAS\RSPH 26\PS and CS approved MPH MHA\` |

> [!IMPORTANT]
> Both directories must stay in sync. After editing `index.html`, always copy it to:
> 1. `RSPH_Bridge_Course_Portal_Interactive.html` (same directory)
> 2. Both files in the Desktop mirror directory

---

## 3. Technology Stack

| Component | Technology |
|:---|:---|
| **Frontend** | Single-file `index.html` (~668KB) — pure HTML/CSS/JS, zero build step |
| **CSS** | Inline `<style>` with CSS custom properties (`:root` variables) |
| **JavaScript** | Vanilla JS inside `<script>` tags at bottom of `index.html` |
| **RAG AI Knowledge Base** | `rag_knowledge_base.js` — external JS file with 50 academic units loaded via `<script src>` |
| **Cloud Database** | Google Cloud Firestore (Firebase project `rsph-prism-2026-8d817`) |
| **Hosting** | Firebase Hosting |
| **Backend (email only)** | `functions/` — Firebase Cloud Functions (Node 20), Resend API. Requires Blaze plan; not yet deployed — see §9a |
| **Authentication** | None (open registration); Faculty Roster passcode-gated (client-side: `rsph2026`) |
| **Version Control** | Git → GitHub (`Drhari730/RSPH-Bridge-Course`, branch `main`) |

---

## 4. Firebase Configuration

```
Firebase Project ID: rsph-prism-2026-8d817
Firebase Web App ID: 1:535427084339:web:10de0e7d86fd6ff591f346

firebaseConfig = {
  apiKey: "AIzaSyDt2cIExr_hEK_q_b9HhtnzKzeSbXsqT_I",
  authDomain: "rsph-prism-2026-8d817.firebaseapp.com",
  projectId: "rsph-prism-2026-8d817",
  storageBucket: "rsph-prism-2026-8d817.firebasestorage.app",
  messagingSenderId: "535427084339",
  appId: "1:535427084339:web:10de0e7d86fd6ff591f346",
  measurementId: "G-MEV86Z4P1D"
}
```

### Deploy Command
```bash
npx firebase-tools deploy --only hosting --project rsph-prism-2026-8d817
```

### Firestore
- **Collection**: `students` — keyed by student ID (e.g., `MPH-2026-4821`)
- **Security Rules**: Currently open (`allow read, write: if true;`) in `firestore.rules`
- **SDK**: Firebase v10.12.0 compat (loaded via CDN `<script>` tags in `<head>`)

---

## 5. Complete File Structure

```
rsph-prism-portal/
├── index.html                              # ★ MAIN APPLICATION (668KB single-page app)
├── RSPH_Bridge_Course_Portal_Interactive.html  # Exact mirror copy of index.html
├── rag_knowledge_base.js                   # 50-unit RAG AI Knowledge Base (192KB)
│
├── rsph_logo.svg                           # Official RSPH vector logo (primary)
├── rsph_official_logo.png                  # Fallback PNG logo
├── rsph_logo.png                           # Additional logo variant
├── rsph_icon.svg                           # Icon variant
│
├── prism_hero.jpg                          # Hero banner image
├── prism_mod1_art.jpg through mod6_art.jpg # Module infographic banners (6 total)
├── prism_health_systems.jpg                # Supplementary infographic
├── prism_data_science.jpg                  # Supplementary infographic
│
├── firebase.json                           # Firebase Hosting config (public: ".")
├── firestore.rules                         # Firestore security rules
├── .firebaserc                             # Firebase project binding
├── .gitignore                              # Git ignore rules
│
├── textbooks/                              # ★ PRESCRIBED TEXTBOOKS (PDFs)
│   ├── Medical-Terminology-for-Healthcare-Professions-1774967424.pdf (82MB)
│   ├── Medical-English-1779393688.pdf (7.5MB)
│   └── README.txt
│
├── bridge_course_mph_mha.md / .docx        # Bridge course framework document
├── modules_1_and_2_*.md / .docx            # Module 1 & 2 curriculum docs
├── modules_3_and_4_*.md / .docx            # Module 3 & 4 curriculum docs
├── module_5_*.md / .docx                   # Module 5 curriculum doc
├── diagnostic_pre_test_*.md / .docx        # 30-MCQ baseline assessment
├── mph_course_content_extracted.md          # Extracted MPH course content
│
├── MPH_Course Specifications_2022_Approved.pdf
├── MPH_Programme Specifications_2022_Approved.pdf
├── Masters in Hospital Administration.pdf
├── MPH MHA Curriculum Overlap Report.docx
├── MPH MHA Executive Summary.pdf
├── MPH_MHA_Curriculum_Overlap_Deck.pptx
├── MPH Fee Benchmarking India & Abroad.pdf
├── MPH_Course_Specifications.txt
├── MPH_Programme_Specifications.txt
│
├── RSPH_Bridge_Course_Portal_Mockup.png    # Original design mockup
├── RSPH_MPH_Course_Notes_Portal.html       # Separate MPH course notes page
└── RSPH_MPH_Website/                       # Separate MPH website (gitignored)
    └── (semester pages, course pages)
```

---

## 6. Application Architecture (index.html)

### 6.1 CSS Variables (Design System)
```css
:root {
  --rsph-crimson: #A82042;        /* MSRUAS Crimson (primary accent) */
  --rsph-crimson-dark: #821531;
  --rsph-navy: #021152;           /* MSRUAS Royal Navy Blue (primary brand) */
  --rsph-royal-blue: #1E40AF;     /* Secondary blue */
  --rsph-bright-blue: #2563EB;
  --rsph-gold: #D97706;
  --rsph-bg: #F8FAFC;
  --rsph-card: #FFFFFF;
  --rsph-text: #1E293B;
  --rsph-muted: #64748B;
  --rsph-border: #E2E8F0;
}
```

### 6.2 Navigation Tabs (6 tabs)
1. **Home & Overview** (`#tab-home`) — Hero banner, metrics (30 lessons, 6 domains, 6 labs), PRISM acronym grid
2. **30-Day Learning Path** (`#tab-learning`) — Sidebar module navigator + lesson content viewer + animated SVG explainers + quizzes + Pink Certificates
3. **Baseline 30-MCQ Assessment** (`#tab-diagnostic`) — Pre-course diagnostic evaluation
4. **Course Certificate** (`#tab-certificate`) — Final Certificate of Competence generator
5. **Prescribed Textbooks** (`#tab-textbooks`) — 6 reference textbook cards (Gordis, Park, IPHS, Rothman/Daniel, + 2 Medical Terminology)
6. **About PRISM & Architecture** (`#tab-about`) — Program details, RAG architecture description, Pink Certificate explanation, admissions info

### 6.3 Curriculum Structure (30 Days, 6 Modules)
| Module | Days | Topic |
|:---|:---|:---|
| **Module 1** | Days 1–5 | Public Health Foundations & Health Systems Architecture |
| **Module 2** | Days 6–10 | Healthcare Management, Leadership & Operations |
| **Module 3** | Days 11–15 | Principles of Epidemiology & Disease Surveillance |
| **Module 4** | Days 16–20 | Biostatistics for Public Health & Hospital Administration |
| **Module 5** | Days 21–25 | Research Methodology, Health Informatics & Bioethics |
| **Module 6** | Days 26–30 | Medical Terminology & Clinical Coding |

### 6.4 Key JavaScript Functions
| Function | Purpose |
|:---|:---|
| `switchTab(tabId)` | Navigate between the 6 main tabs |
| `selectLesson(mIdx, lIdx)` | Load a specific lesson in the learning path |
| `submitModuleQuiz(mIdx)` | Score the 5-question quiz (≥80% = pass) |
| `generatePinkModuleCert(mIdx)` | Render per-module Pink Certificate |
| `generateCertificate()` | Render final course completion certificate |
| `saveStudentRegistration()` | Register student (dual-write: localStorage + Firestore) |
| `syncStudentToFirestore(profile)` | Push student data to Cloud Firestore |
| `openRosterModal()` / `verifyRosterAccess()` | Faculty roster with passcode gate |
| `loadRosterFromFirestore()` | Fetch all students from Firestore |
| `exportRosterCSV()` | Download student roster as CSV |
| `queryKnowledgeBase(query)` | RAG search across 50 knowledge base units |
| `renderTutorResponse(match)` | Format AI tutor response with citations |
| `openLab(id)` | Open interactive simulation lab modal |
| `openLightbox(src, caption)` | Full-screen image lightbox with zoom |

### 6.5 Data Structure
The curriculum data is stored as a JSON object `const courseData = {...}` embedded in `index.html`. Each module contains:
- `module_number`, `name`, `theme_letter`, `days`, `overview`
- `interactive_tool` (lab config)
- `lessons[]` — each with `day`, `title`, `objectives`, `competency`, `contentHtml` (full rich HTML lesson text), `quiz` (5 MCQs)

### 6.6 RAG Knowledge Base (`rag_knowledge_base.js`)
- Exports `const kb = [...]` with 50 academic units
- Each unit has: `id`, `topic`, `category`, `source`, `keywords[]`, `synonyms[]`, `takeaway`, `followups[]`, `contentHtml`
- Units 1–40: Epidemiology, Public Health, Biostatistics, Management, Research Ethics
- Units 41–50: Medical Terminology, ICD-10/11, CPT, SNOMED-CT, DRGs, Clinical Abbreviations
- Search algorithm: multi-token keyword scoring + semantic synonym expansion + intent matching

---

## 7. Strict Design Rules (MUST Follow)

> [!CAUTION]
> These rules were explicitly set by the project owner. Violating them will require rework.

1. **Colors**: Only MSRUAS Royal Navy Blue (`#021152`, `#1E40AF`) and Crimson (`#A82042`) as primary palette. Pink accents (`#BE185D`, `#9D174D`) for certificates only.
2. **NO AI/Robot Icons**: Zero AI, robot, neural network, or chatbot icons anywhere. Use academic emojis (🔍, 📚, 🎓, 🏥, 📋) only.
3. **NO "Faculty of Life and Allied Health Sciences"**: RSPH is a separate school under MSRUAS. Never mention this faculty name.
4. **NO Phone/Email in Footer**: Footer must not contain phone numbers or email addresses.
5. **Logo**: Use `rsph_logo.svg` with `onerror` fallback to `rsph_official_logo.png`. Height: 76px in header.
6. **Registration**: Exclusively for **MPH** and **MHA** candidates only.
7. **Typography**: Georgia/serif for headings, Helvetica Neue/Arial for body text.

---

## 8. Student Data Flow

```
Student Registration
     ↓
┌────────────────────────────┐
│  1. Browser localStorage   │ ← Always succeeds (offline-safe)
│  2. Cloud Firestore         │ ← Syncs when online
│     students/{MPH-2026-XXXX}│
└────────────────────────────┘
     ↓
Quiz Submission (≥80% pass)
     ↓
┌────────────────────────────┐
│  Firestore: quiz_mod_X     │ ← Score, timestamp
│  Firestore: pinkCert_mod_X │ ← Cert code, date
│  Firestore: passedQuizzes[] │
└────────────────────────────┘
     ↓
Faculty Roster (passcode: rsph2026)
     ↓
┌────────────────────────────┐
│  Reads Firestore students  │
│  Filter by MPH/MHA         │
│  Export to CSV              │
└────────────────────────────┘
```

---

## 9. Development History (What Was Built)

| Phase | What Was Done |
|:---|:---|
| **Phase 1** | Built initial 20-day, 5-module portal with full curriculum, animated SVG explainers, interactive simulation labs, RAG AI tutor, baseline 30-MCQ assessment, course certificate, and Pink Module Certificates |
| **Phase 2** | Added official RSPH logo (SVG + PNG fallback), removed all AI/robot icons, cleaned footer, added About page with admissions info and RAG architecture description |
| **Phase 3** | Trained RAG knowledge base to 40 units with rich structured responses from Gordis, Park, IPHS, Daniel, and ICMR textbooks |
| **Phase 4** | Migrated project to Antigravity IDE workspace (`d:\Antigravity projects\rsph-prism-portal\`) |
| **Phase 5** | Integrated Firebase Firestore central database with dual-write (localStorage + cloud), built Faculty/Admin Roster modal with passcode, search, filter, CSV export |
| **Phase 6** | Added Module 6 (Medical Terminology & Clinical Coding, Days 21–25 initially), expanded RAG to 50 units from 2 new prescribed textbooks |
| **Phase 7** | Restructured to **30-Day course** (6 modules × 5 days = 30 days), added 5 new daily lessons across Modules 1–5, reindexed Module 6 to Days 26–30, updated all metadata |
| **Phase 8** | Pushed complete codebase to GitHub (`Drhari730/RSPH-Bridge-Course`) |
| **Phase 9** | Added Faculty/Admin progress dashboard (per-day lesson tracking, quiz scores, Pink Cert codes, drill-down detail view), registration gate on the Learning Path, passcode-gated Faculty Demo Preview account, 9-step User Guide flowchart on Home, admissions-cohort checklist (MPH+MHA name list cross-checked against live registrations), removed Registrar signature from the final certificate (Dean only), added a dedicated `prism_icon.svg` program mark used as the browser favicon and hero accent |
| **Phase 10** | Registration form changed from free-text name entry to a Program→Name dropdown sourced from the admissions cohort list (with a "not listed" manual fallback); added `functions/` — Firebase Cloud Functions (Node 20) that send transactional email via **Resend** server-side, reacting to Firestore writes: registration confirmation, module/Pink Certificate award, final certificate, and a daily progress digest (Cloud Scheduler, 08:00 IST) |

---

## 9a. Automated Email (Resend via Firebase Cloud Functions)

Client-side email (EmailJS) was deliberately removed — a Resend API key must never live in this page's public JavaScript. Email is instead sent server-side by Cloud Functions in `functions/index.js`, triggered automatically by the same Firestore writes the client already makes (no client code needs to call anything to send an email):

| Function | Trigger | Sends |
|:---|:---|:---|
| `onStudentRegistered` | `onDocumentCreated` on `students/{id}` | Registration confirmation (once, at first registration) |
| `onStudentProgressUpdated` | `onDocumentUpdated` on `students/{id}` | Diffs before/after: new `pinkCert_mod_N` → module/Pink Cert email; `finalCertificateAwarded` false→true → final certificate email |
| `dailyProgressDigest` | `onSchedule` (`0 8 * * *`, Asia/Kolkata) | Once-daily progress summary to every registered scholar who has started at least one lesson/quiz |

**Setup (not yet deployed as of Phase 10 — needs the project owner to do these manually):**
1. Upgrade `rsph-prism-2026-8d817` to the Firebase **Blaze** (pay-as-you-go) plan in the Firebase Console — required for any Cloud Functions deploy and for the scheduled function's Cloud Scheduler job. Usage at this course's scale (~30 students) stays within the free monthly quota.
2. `firebase functions:secrets:set RESEND_API_KEY` (from the project root) — paste an existing or new Resend API key. Never commit this key to git.
3. Set the sender address to a domain verified in Resend, either by editing the `FROM_EMAIL` default in `functions/index.js` or via `firebase functions:config` — do not use an unverified domain, Resend will reject sends.
4. `cd functions && npm install`
5. `firebase deploy --only functions --project rsph-prism-2026-8d817`

Demo/faculty-preview profiles (`DEMO-` prefixed student IDs) are explicitly excluded from all three functions.

---

## 10. Common Development Commands

```bash
# Deploy to Firebase Hosting
npx firebase-tools deploy --only hosting --project rsph-prism-2026-8d817

# Deploy Firestore security rules
npx firebase-tools deploy --only firestore:rules --project rsph-prism-2026-8d817

# Get Firebase SDK config
npx firebase-tools apps:sdkconfig WEB 1:535427084339:web:10de0e7d86fd6ff591f346

# Git push
git add -A && git commit -m "description" && git push origin main

# Mirror files after editing index.html
copy index.html RSPH_Bridge_Course_Portal_Interactive.html
copy index.html "C:\Users\drhar\OneDrive\Desktop\MSRUAS\RSPH 26\PS and CS approved MPH MHA\index.html"
copy index.html "C:\Users\drhar\OneDrive\Desktop\MSRUAS\RSPH 26\PS and CS approved MPH MHA\RSPH_Bridge_Course_Portal_Interactive.html"
```

---

## 11. Known Considerations

1. **Large File**: `textbooks/Medical-Terminology-for-Healthcare-Professions-1774967424.pdf` is 82MB. GitHub warns about this. Consider Git LFS for future large files.
2. **Firestore Rules**: Currently wide open (`allow read, write: if true`). Should be tightened before production if sensitive data is stored.
3. **Single HTML File**: `index.html` is ~668KB. All CSS, JS, and lesson content is inline. This is intentional (zero-build, instant deploy) but means edits require careful text replacement.
4. **Faculty Roster Passcode**: Client-side only (`rsph2026`, `admin`, `faculty`). Not cryptographically secure — suitable for academic convenience only.
