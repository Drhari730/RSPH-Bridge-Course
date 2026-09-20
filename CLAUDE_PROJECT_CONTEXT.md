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
| **Backend (email only)** | `scripts/` — Node worker run by GitHub Actions on a schedule, Resend API. No billing plan required — see §9a |
| **AI Study Tutor backend** | `cloudflare-worker/` — Cloudflare Worker (free tier, no card), calls Kimi/Moonshot AI (`kimi-k2.6`) to generate grounded, conversational answers from the RAG-retrieved units — see §9b |
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
├── rsph_logo.svg                           # Official RSPH vector logo — the ONLY logo used
│                                            #   sitewide (favicon, header, footer, certificates).
│                                            #   A prior custom "prism_icon.svg" program mark was
│                                            #   tried and reverted (Phase 11) — do not re-add it
│                                            #   without explicit sign-off, it did not land well.
├── rsph_official_logo.png                  # PNG fallback (onerror target for rsph_logo.svg)
│
├── prism_hero.jpg                          # Hero banner image
├── prism_mod1_art.jpg through mod6_art.jpg # Module infographic banners (6 total)
├── prism_health_systems.jpg                # Supplementary infographic
├── prism_data_science.jpg                  # Supplementary infographic
│
├── scripts/                                # ★ EMAIL WORKER (no Firebase billing plan needed)
│   ├── send-emails.js                      # Reads Firestore, sends via Resend, tracks state
│   ├── email-templates.js                  # Branded HTML templates (registration/module/final/digest)
│   └── package.json                        # firebase (web SDK) dependency; run via GitHub Actions
├── .github/workflows/prism-emails.yml      # Runs scripts/send-emails.js every 15 min (free, public repo)
│
├── firebase.json                           # Firebase Hosting config (public: "."); scripts/** ignored
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
| `verifyCertStudentId()` | Look up a Student ID (own profile fast-path, else Firestore) and unlock certificate generation only on a match |
| `generateCertificate()` | Render final course completion certificate — requires `verifiedCertStudent` to be set first; no more free-typed names |
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
| **Phase 10** | Registration form changed from free-text name entry to a Program→Name dropdown sourced from the admissions cohort list (with a "not listed" manual fallback). First attempt at automated email used Firebase Cloud Functions + Resend, but this required the paid Blaze plan — abandoned in Phase 11 in favor of a billing-free approach. |
| **Phase 11** | Replaced the Firebase Functions email idea with a **free GitHub Actions worker** (`scripts/send-emails.js`, runs every 15 min via `.github/workflows/prism-emails.yml`) that emails via Resend — no billing plan of any kind. Redesigned all four email templates (`scripts/email-templates.js`) as polished branded HTML (matching the Pariksha portal's email style) with the student's name, a prominent Student ID badge, and tiered motivational messaging. Reworked Certificate generation to require **Student ID verification** (looked up against Firestore) instead of free-typing any name — makes the Student ID actually load-bearing. Reverted the custom `prism_icon.svg` program mark (didn't land well) back to the official RSPH logo for the favicon and hero. |
| **Phase 12** | Certificate generation now also gated on **course completion** — `generateCertificate()`/`verifyCertStudentId()` check `passedQuizzes` against `courseData.modules.length` and keep the button locked/disabled until all 6 module quizzes are passed. Replaced every native `alert()`/`confirm()` (14 call sites) with a custom animated in-page notice system (`showNotice()`/`showConfirmNotice()`/`closeNotice()`, overlay markup `#noticeOverlay` near end of `<body>`) styled in the site's navy/crimson palette. Fixed the RAG chatbot's search: added Levenshtein-distance fuzzy token matching (`levenshteinDistance()`/`fuzzyTokenMatches()` in `queryKnowledgeBase()`) so common misspellings of course terminology (e.g. "prevelance") still surface the correct knowledge-base entry instead of the generic "no match" fallback; also personalized the chat greeting (`resetChat()`) with the registered student's first name. Wired the "Guest Scholar" header pill to open registration on click. Added a decorative diagonal light-beam CSS pattern (`.hero-banner::after`) to fill empty gradient space on wide viewports — no new image asset. |
| **Phase 13** | Upgraded the chatbot from pure keyword-template retrieval into a real conversational RAG tutor. `queryKnowledgeBase()` now also returns a second-best match; `sendChat()` sends the top 1-2 retrieved units + the raw question + the student's first name to a new **Cloudflare Worker** (`cloudflare-worker/`, `prism-study-tutor`, deployed at `https://prism-study-tutor.hariprakash607.workers.dev`), which calls **Kimi (Moonshot AI, model `kimi-k2.6`, `thinking: {type:"disabled"}` — it's a reasoning model and burns the token budget on hidden reasoning if left enabled)** to phrase a natural, grounded answer — grounded because the Worker's system prompt forbids using anything beyond the retrieved snippets. `renderAiTutorResponse()` renders the answer with the existing citation/follow-up-chip styling. **Automatic, silent fallback** to the old rule-based `renderTutorResponse()`/`renderFallbackResponse()` if the Worker is unreachable or `TUTOR_WORKER_URL` is unset — the feature can never fully break the chat. Chosen over Firebase Functions specifically because Blaze was not active and the project owner did not want another billing-card requirement; Cloudflare Workers' free tier needs no card at all. Secrets: `KIMI_API_KEY` is a Wrangler secret (`npx wrangler secret put KIMI_API_KEY`, from the `cloudflare-worker/` directory), never committed. Redeploy with `CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=bbc944a64834aeeb43721e122a809bf7 npx wrangler deploy` from that directory. Cost is real but small (~$0.002-0.004/exchange with k2.6) — the project owner is using a personal Kimi balance with auto-recharge OFF, and plans to revoke the key once the course ends. |
| **Phase 14** | Load-tested the AI tutor with realistic student phrasing (casual/slang, ELI5 requests, abbreviation-only questions, off-topic questions, single-word queries) — quality was consistently strong: grounded, personalized, correctly declines off-topic/unmatched questions instead of hallucinating, never reveals the underlying provider. **Found a real constraint**: this Kimi account's rate-limit tier is tight (roughly a handful of concurrent requests tolerated; heavier bursts return HTTP 429 with an honest but short `Retry-After`, typically ~1s). Added retry-with-jitter in the Worker (`MAX_ATTEMPTS = 5`, widening jitter per attempt so collided concurrent requests desync instead of retrying in lockstep) and raised the client's abort timeout to 24s to give room for it. Staggered/naturally-spaced questions succeed reliably; a genuine simultaneous flood from several students still exceeds the account's throughput and those requests gracefully fall back to the rule-based answer (never an error shown to the student). **Not fully fixable in code** — if AI-answer reliability under concurrent classroom load matters, the project owner should check platform.kimi.ai's usage/rate-limit page for how to raise this account's tier (verification level, spend history, or a support request) before relying on it for a live 50-80 student class. |
| **Phase 15** | Renamed the AI tutor **Setu** ("bridge" in Sanskrit — ties to "Bridge Course") across the UI and the Worker's system prompt; added a chat-header expand/collapse toggle (`toggleChatExpand()`) for a full-width reading view. **Corrected an earlier mis-audit**: every one of the 30 lessons already had a rich `explainer_html` visual (not "12 missing" as first reported) — 18 were the fully interactive animated kind (`class="explainer"`, play/pause/scene-dots), the other 12 (Modules 3, 4, 5 — Days 11-14, 16-19, 21-24) were well-designed *static* boxes. Converted all 12 static ones into the same interactive animated pattern: `bathtub_model` (11), `study_hierarchy` (12), `screening_2x2` (13), `epidemic_curves` (14), `skewness_shift` (16), `empirical_rule` (17), `hypothesis_tree` (18), `parametric_concordance` (19), `pico_architecture` (21), `ethics_pathway` (22), `abdm_highway` (23), `reporting_guidelines` (24) — new SVG markup + `EXPLAINERS` config entries + scene-reveal CSS for each, verified visually and via an automated integrity pass (`data-explainer` key exists, matches an `EXPLAINERS` entry, `cap`/`dwell` array lengths agree) across all 30 lessons. `EXPLAINERS` now has 30 total keys, one per day. Hit and fixed a JSON-escaping bug in the batch-edit tooling twice (two captions with literal quoted phrases needed `\"` in the file, not a raw `"`) — both caused a page-wide `SyntaxError` until corrected; also learned that `getComputedStyle().opacity` on SVG `<g>` elements is unreliable via this session's remote-debugging tooling (routinely reports stale/zero values that don't match what's actually painted) — trust real screenshots over computed-style checks for SVG animation verification here. |
| **Phase 16** | **Fixed the real cause of "bad" Setu chat output**: `simpleMarkdownToHtml()` only ever handled `**bold**` and `- list` lines — it had no idea what `## heading` or a markdown pipe table (`\| a \| b \|` / `\|---\|---\|`) were, so the model's (perfectly valid) markdown was showing up as literal `##` text and raw dashes instead of rendering. Rewrote it as a real block-level parser (`blockMdToHtml()` + `inlineMdEscaped()`/`inlineMdRaw()`) that handles `#`/`##`/`###` headings, ordered/unordered lists, inline `code`/`**bold**`/`*italic*`, markdown pipe tables (`renderMarkdownTable()` → real `<table class="tutor-table">`), and a new custom fenced syntax the Worker is now instructed to use for sequential processes — ` ```flow\nStep one\nStep two\n``` ` → connected `.tutor-flow-box` chips with arrow connectors (`renderFlowBlock()`). Updated the Worker's `SYSTEM_PROMPT` with explicit formatting rules (headings only when genuinely multi-section, tables only for 3+ item comparisons, flow blocks only for genuine ordered processes, never raw HTML). Verified live on the deployed site (not just unit-tested) by asking Setu a real question and screenshotting the rendered `##` heading. **Added real per-lesson YouTube videos**: every one of the 30 lessons now has a `video: {youtube_id, title, channel, note}` field (added via a byte-precise Node script anchored on each `"day": N,` → `"readings": [` pair, same safe pattern as the Phase 15 explainer batch scripts) and a new `.video-section` card in `renderLesson()` (responsive 16:9 `<iframe>` embed + title/channel/note) rendered between the explainer animation and the comparison table. All 30 video IDs were found via web search and **individually verified real and embeddable** through YouTube's public oEmbed endpoint (`https://www.youtube.com/oembed?url=...`) before being committed — two initial candidates (an Environmental Epidemiology pick for Day 15, an ICER pick for Day 25) failed that check (embedding disabled / video not found) and were swapped for verified alternatives. Sources are a mix of WHO/CDC/Cochrane/Ministry-of-Health official channels and reputable independent educators (StatQuest, MarinStatsLectures, Osmosis-style explainers) — never fabricated IDs. |
| **Phase 17** | **Explainer autoplay**: `Explainer` constructor now calls `this.play()` right after building — the 30 animated scenes play on their own the instant a lesson opens; the Play/Pause button still lets students stop and re-read. **Day-specific visual banners**: replaced the repeated per-module JPG banner (same photo shown on all 5 days of a module) with a generated inline-SVG banner unique to every lesson — `MODULE_THEME_COLORS` (6 module gradient themes) + `DAY_VISUALS` (30 entries: one icon + short concept tag each) feed `buildDayVisualSVG()`, rendered inside `.day-visual-banner` with a floating-icon CSS animation. The original module JPG infographic is still one click away via a "View Full Module Infographic" link in the banner's caption bar (still uses the existing lightbox). No new image-generation tool was available this session, so this is built entirely from SVG/CSS, not new photos. **Faculty Admin moved to its own full page** (`admin.html`) — the old in-page roster modal, student-detail modal, and their ~370 lines of JS (`openRosterModal`, `loadRosterFromFirestore`, `renderRosterList`, `viewStudentDetail`, `filterRosterTable`, `exportRosterCSV`, `renderCohortChecklist`, `launchFacultyDemoMode`, etc.) were deleted from `index.html`; the footer "Faculty Portal" link now opens `admin.html` in a new tab. `admin.html` is a self-contained file (own Firebase config/init, own copy of `expectedCohortRoster` + notice-overlay system) with: a **live roster** via `db.collection('students').onSnapshot(...)` (real Firestore push updates, not polling) instead of the old one-time `.get()`; a stats bar (Total Enrolled, 🟢 Active Now [last-active ≤5 min], Logged In Today, Avg Minutes Active Today, Finished All 30 Days, Pink Certs); the same search/filter/CSV-export/student-detail-drilldown the old modal had; the admissions cohort checklist; and two new panels — a **Dean signature uploader** for the Certificate of Competence (client-side `<canvas>` chroma-keys near-white background pixels to transparent, saves the resulting PNG as a data URL to Firestore `meta/certificateConfig`; `index.html`'s `loadCertSignatureConfig()` reads it on load and swaps in an `<img>` in place of the old cursive-text placeholder) and an **automated-email status** panel (reads `meta/emailAutomationState`). A **"Preview as Student"** button opens `index.html?facultyDemo=1` in a new tab; `index.html`'s `DOMContentLoaded` handler detects that query param and activates the same demo profile the old in-page button used, skipping the confirm dialog since the admin passcode already gated the action. **Per-student "minutes active" tracking**: a new `startActivityTracking()` heartbeat in `index.html` writes `activeDateStamp`/`activeSecondsToday` to the student's Firestore doc every 30s while the tab is actually visible (`document.visibilityState`), via the existing `syncStudentToFirestore()` merge-write; resets at local-midnight rollover; per-device localStorage counter (a student on two devices the same day doesn't get true summed minutes — last write wins, a known/documented approximation). Demo/faculty-preview profiles are never tracked, matching every other write in the app. **Automated EOD completion nudge**: extended `scripts/send-emails.js` (already running every 15 min via the existing GitHub Actions cron — no workflow YAML change needed) with a 5th step that fires once daily in the 21:00 IST run: any registered student with `completedLessons.length < 30` and no activity recorded that day (`activeDateStamp` or `lastActive` doesn't match today, IST) gets a new `nudgeEmail()` (added to `scripts/email-templates.js`) — repeats every day until they either study or finish the course, tracked idempotently via `state.lastNudgeDate` in the same `meta/emailAutomationState` doc the daily digest already uses. |
| **Phase 18** | **Fixed lesson content formulas and lists rendering as broken raw text.** Two bugs found from a user screenshot of Day 16: (1) `lesson.content` markdown was being converted with a crude regex chain (`.replace(/\n- (.*?)/g, '<li>...</li>')`) whose non-greedy `.*?` had no terminator, so it matched **zero characters** — every `- ` bullet became an empty `<li>` with the actual bullet text left dangling as unindented plain text right after it (visible in the screenshot as lone "•" markers). (2) The same code had no concept of LaTeX at all, so every `$\bar{X}$` / `$$\frac{\sum X_i}{n}$$` statistics formula in the biostatistics lessons (Days 16-20 especially) rendered as literal dollar-sign-and-backslash text instead of a typeset equation. Fixed by adding **KaTeX** (`katex@0.16.9` via jsdelivr CDN, `<link>` + `defer <script>` in `<head>`) and replacing the old regex chain with a real function, `renderLessonContent()`: extracts `$$...$$` (display) and `$...$` (inline) math first via `katex.renderToString(..., {throwOnError:false})` (falls back to escaped raw text in a `<code>` tag if KaTeX hasn't loaded yet or the LaTeX is malformed — never blank-pages), then markdown pipe tables (reusing `renderMarkdownTable()`, now parametrized with `wrapClass`/`tableClass` args so lesson content gets its own `.lesson-md-table` styling instead of colliding with the chat's `.tutor-table`), then does proper block-level parsing of `###`/`####` headings, **correctly `<ul>`/`<ol>`-wrapped** bullet and numbered lists, and `**bold**`/`*italic*` — all via the same placeholder-extraction pattern (`@@MATH0@@`, `@@TABLE0@@`) already proven out in Phase 16's chat renderer. The outer template in `renderLesson()` also had to drop the `<p>${bodyContent}</p>` wrapper it used before (block elements like `<h3>`/`<ul>` can't validly nest inside a `<p>`) — `bodyContent` now inserts directly into `.lesson-body`. Added the same `$...$`/`$$...$$` math extraction to the chatbot's `simpleMarkdownToHtml()` for consistency (Setu discusses the same formulas), and told the Worker's `SYSTEM_PROMPT` to always use real LaTeX for statistical formulas instead of spelling them out as plain text. Verified on the live deployed site (not just locally) against the exact Day 16 section from the user's screenshot — formulas now render as typeset math (fraction bars, summation signs, square roots) and every bullet/numbered list is properly indented under its marker. |
| **Phase 19** | **Fixed the automated email sender domain.** Checked the live Resend account directly (via the Resend MCP connector) rather than assuming — `drhari.co.in` (root) was never verified, only `phamora.drhari.co.in` and `vicharaqda.in` were, so every PRISM email (registration, Pink Certs, final certificate, digest, the new EOD nudge) had been sending from an unverified domain and silently getting a 403 from Resend since Phase 11. Registered `prism.drhari.co.in` in Resend (same pattern as `phamora.drhari.co.in`) and updated `FROM_EMAIL` in `scripts/send-emails.js` to `PRISM Bridge Course <noreply@prism.drhari.co.in>`. **Also confirmed `onboarding@resend.dev` was never a viable production fallback** regardless of student count — it only delivers to the Resend account owner's own inbox, not to arbitrary recipients, so it was always test-only (as already noted in section 9a). DNS records (DKIM TXT, SPF MX + TXT, tracking CNAME) were handed to the project owner to add at their registrar. **Verified and confirmed live the same day**: the project owner added the records at GoDaddy, `prism.drhari.co.in` shows all 4 records **Verified** at https://resend.com/domains, and two test sends through the real Resend account (a plain confirmation + the actual `registrationEmail()` template) both delivered to a real inbox, landing straight in Inbox (not spam). The automated worker's next run will start actually delivering registration/Pink-Cert/final-cert/digest/nudge emails instead of silently 403'ing. Also updated the "About PRISM & Architecture" page: the "Advanced Neural RAG Engine" card and its deep-dive section still described the old rule-based retrieval system and never mentioned **Setu** by name, even though the chatbot had been renamed and upgraded to a real AI tutor several phases earlier — rewrote both to describe what Setu actually is (a two-stage RAG tutor: client-side textbook retrieval, then a grounded conversational explanation layer), per the project owner's explicit instruction, **without naming the underlying LLM provider or hosting platform anywhere on the page** (consistent with the Worker's existing system-prompt rule that Setu never names an AI company or provider). |
| **Phase 20** | **Real logo adopted (after two rejected hand-drawn SVG attempts)** — the project owner supplied the actual icon artwork; it's cropped-to-content and saved as `prism_logo_icon.png` (transparent PNG), used site-wide instead of any recreated version. Hero banner shows it in a white card next to a real HTML "PRISM / 30-DAY BRIDGE COURSE" wordmark (not baked into the image, so it stays crisp and theme-consistent) — Phase 21 below then added animation to this card. **Email header reverted**: an icon+white-header redesign was tried in emails too, but the project owner explicitly preferred the original dark navy-to-crimson gradient header with plain "PRISM / BRIDGE COURSE" text — reverted `shell()` in `scripts/email-templates.js` to that, keeping the earlier footer-text-color fix (`#64748b`, not the invisible `#cbd5e1`). **Lesson learned**: when the user rejects a generated design and says "use this image" / points at a specific example, stop iterating on a recreation and either use their literal asset or literally revert to the cited example — don't keep refining a from-scratch interpretation. |
| **Phase 21** | **Animated the hero logo card**: one-time fade+scale entrance on load, a continuous gentle float/tilt on the icon, a periodic diagonal shine sweep across the white card, and three staggered twinkling sparkles near the icon's spark accent — all disabled under `prefers-reduced-motion`, leaving just the entrance fade. **Fixed two real mobile/tablet bugs**, found by testing at actual device widths (360/390px phone, 768px tablet) via DOM measurement (`scrollWidth` vs `viewportWidth`, not just screenshots — screenshots render unreliably at custom viewport sizes in this session's browser tool, a tooling quirk worth remembering, not a real site bug): (1) the "Ask Setu" FAB was a full pill button with text at every width, overlapping the metric cards and nav tabs on phones — now a compact 52px circular icon button below 600px; (2) at 768px tablet width the lesson sidebar+viewer grid was forcing ~48px of page-level horizontal overflow — CSS grid tracks default to a content-based minimum width, so a wide element inside either column (a table, image, or explainer SVG) silently stretches the whole grid past the viewport; fixed with `min-width: 0` on both grid items plus `overflow-x: auto` as a backstop. Verified `scrollWidth === viewportWidth` with zero overflowing elements at both widths across Home, Lesson, Certificate tabs and `admin.html`. |
| **Phase 22** | **Pre-launch audit, triggered by the project owner asking "are we good to launch."** Found and fixed a real gap: the "Comprehensive 30-MCQ Diagnostic Assessment" (intended per its own on-page copy to be "administered Day 1, re-administered at completion") computed and displayed a score but **never saved it anywhere** — no Firestore field, no localStorage, nothing visible in admin. Fixed in `submitDiagnosticTest()`: the first attempt on record saves as `baselineScorePct`/`baselineDate`, any attempt after that overwrites `postTestScorePct`/`postTestDate` (matching the "Day 1 / re-administered at completion" framing already on the page) — persisted to both Firestore (via the existing `syncStudentToFirestore()` merge-write) and `localStorage` (needed because `studentProfile` itself is rebuilt from localStorage on every page load — without also persisting there, the very next reload would forget the baseline and silently re-record a fresh one instead of a post-test). Unregistered Guest Scholars still see their result on screen but get an inline note that it isn't being saved (no Firestore doc to attach it to). `admin.html` now shows a **"Pre → Post MCQ"** column in the roster table (e.g. "13% → 100%"), full baseline/post dates in the student detail drill-down, and both fields in the CSV export. Verified end-to-end locally with `db` deliberately set to `null` first (to guarantee zero writes to the real production Firestore during testing): submitted the diagnostic once (saved as baseline), reloaded the page (confirmed the baseline survived via `localStorage`, not just in-memory state), submitted again with correct answers (confirmed it was recognized as the post-test, with the correct point-gain message), then confirmed the admin table, detail modal, and CSV all read the fields correctly. Also smoke-tested (with `db = null`) the registration-validation gate and the module-quiz-to-Pink-Certificate path to confirm neither regressed from earlier phases. |

---

## 9a. Automated Email (Resend via a free GitHub Actions worker)

Client-side email (EmailJS) and a server-side Firebase Cloud Functions approach were both tried and abandoned — EmailJS can't run unattended (no scheduling for the daily digest), and Cloud Functions require the paid Blaze plan. The current approach needs **no billing plan at all**:

- **`scripts/send-emails.js`** — a Node script that reads the `students` collection directly using the same public Firebase web config already in `index.html` (Firestore rules allow open read, so no service-account secret is needed), and sends mail via the **Resend REST API**.
- **`scripts/email-templates.js`** — the four branded HTML templates (registration, module/Pink Certificate, final certificate, daily digest), styled to match Pariksha's result-email design (table-based layout, gradient header, motivational headline+note, stat rows) in RSPH navy/crimson/pink.
- **`.github/workflows/prism-emails.yml`** — runs the script every 15 minutes via GitHub Actions `schedule` (free and unlimited since this repo is public), plus `workflow_dispatch` for manual runs.
- **State**: a single Firestore doc `meta/emailAutomationState` tracks which registrations/module-certs/final-certs have already been emailed, so re-runs never double-send. The daily digest fires once during the run that lands in the 08:00–08:59 IST window.
- **Secret**: `RESEND_API_KEY` is stored as a GitHub Actions **repository secret** (`gh secret set RESEND_API_KEY --repo Drhari730/RSPH-Bridge-Course`) — never committed to git, never touches Firebase.
- **Sender**: `PRISM Bridge Course <noreply@prism.drhari.co.in>` (changed from `prism@drhari.co.in` in Phase 19 — the root `drhari.co.in` was never verified in Resend, so every send had been silently 403'ing). `prism.drhari.co.in` was registered in Resend the same way as the existing `phamora.drhari.co.in` — check https://resend.com/domains shows it **Verified** before assuming email is live; DNS (DKIM TXT + SPF MX/TXT + tracking CNAME) needs to propagate first.

Demo/faculty-preview profiles (`DEMO-` prefixed student IDs) are excluded from all sends. To test without a verified domain, temporarily send via Resend's built-in `onboarding@resend.dev` sender (no verification needed) — see git history for the throwaway diagnostic script pattern (reads the API key from stdin, never as a literal in a command).

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
4. **Faculty Roster Passcode**: Client-side only (`rsph2026`, `admin`, `faculty`), now gating `admin.html` (moved out of `index.html` in Phase 17). Not cryptographically secure — suitable for academic convenience only.
5. **`admin.html` deploys as a fully public static file**: exactly like `index.html`, the passcode is the only gate — anyone with the URL and passcode gets full roster/signature-upload access. Fine for a single-cohort bridge course; would need real auth before wider use.
6. **"Minutes active" is a per-device approximation**: `activeSecondsToday` is tracked in each browser's `localStorage` before syncing to Firestore, so a student switching devices mid-day doesn't get summed minutes across devices — last device to write wins for that day.
