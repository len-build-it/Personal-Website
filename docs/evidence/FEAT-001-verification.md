# FEAT-001: Verification and evidence log

Created: 2026-09-06T16:12:00+08:00
Updated: 2026-09-06T16:12:00+08:00
Status: Phase 1 in progress under delegated continuous execution authority

## 1. Source inventory and mapping

| Public claim / content item | Reviewed source file | Verification notes & status |
| --- | --- | --- |
| Full name: Lenard Angelo A. Olajay | `Lenard-Olajay-Resume-Updated.docx`, certificates | Verified across all documents and certificates. |
| Professional descriptor: Developer / Builder | `FEAT-001-portfolio.md` / resume | Confirmed descriptor per specification. |
| Degree: Bachelor of Science in Information Technology, Major in Software Engineering | `Lenard-Olajay-Resume-Updated.docx` (p. 1) | Aklan State University - Kalibo Campus, 2nd Year, 2024 - Present. Verified. |
| Student Assistant experience | `Lenard-Olajay-Resume-Updated.docx` | Administrative, technical, and records-management support at Aklan State University. |
| Founder, ASU DevGuild | Resume, GitHub profile `README.md` | Student-led developer community at Aklan State University. Verified. |
| AqOne project & role | GitHub repo `Aquanons/AIHackathon2026_Aquanons_AqOne`, `764938212_...jpg` | Lead developer (architecture, backend, deployment). Authored 84.5% of default-branch commits as of August 31, 2026. Stack: Flutter, FastAPI, PostgreSQL, scikit-learn, ESP32, LoRa. |
| AqOne hackathon ranking | `School-based Top 5_Aquanons.pdf` & `AI Fest_ AI Hackathon – Final Ranks, Feedback & Next Steps.eml` | Selected as Top 5 finalist for live hackathon sprint (July 16, 2026); awarded Final Rank: 2 out of 5 in School-based category (August 5, 2026). Earlier claim of "2nd of 47 teams" clarified: 47 initial submissions, 5 finalists in school-based sprint, finished 2nd in final sprint. |
| Warang project & role | GitHub repo `len-build-it/Warang` | Creator / sole developer. Offline-first photo map without accounts or cloud feeds. Stack: Flutter, Riverpod, Drift, SQLite, OpenStreetMap. Status: Active prototype. |
| Project Tabang project & role | GitHub repo `len-build-it/Project_Tabang`, `UP-KOMSAI-WEEK.pdf`, `a213be72-...jpg` | Backend developer. Flood reporting and emergency response platform for Aklan. Stack: React, Firebase, Cloudinary, Node.js. |
| Project Tabang ranking | `UP-KOMSAI-WEEK.pdf` | Top 10 placement in UPV KomsaiHack 2026: RiskReady (placed 7th among 25+ teams). Verified. |
| 1st Place, Programming Contest | `CCS-WEEK.jpg` | 1st Place in Programming contest at ICT Week 2026, Aklan State University, May 6, 2026. Verified. |
| DICT Python Programming Essentials | `DWIA-CERT-AKLAN_OLAJAY.pdf` | Certificate No. 2026_ILCDB_1983, 40 hours, June 19, 2026. Verified. |
| DICT Cybersecurity Awareness | `DICT-CyberAwareness-2025.png` / `DICT-CyberAwareness-2025.pdf` | 4 hours, October 17, 2025. Verified. |
| AWS Cloud Computing Fundamentals | `WEST-AWS-2025.png` / `WEST-AWS-2025.pdf` | West Visayas State University College of ICT, October 31, 2025. Verified. |
| Explainable AI in Game Development | `WEST-AI-2025.png` / `WEST-AI-2025.pdf` | West Visayas State University College of ICT, October 27, 2025. Verified. |
| Energy Nexus Hackathon | `NEW ENERGY NEXUS HACKATHON.png` | "Ready, Spark, Charge 2026: Hacking the Future of Energy", May 21-23, 2026, CPU Iloilo City. Verified. |
| ASEAN Digital Storytelling Contest | `PARTICIPATION- DIGITAL STORYTELLING.pdf` | CHED Region VI, September 3, 2026. Verified. |
| DataCamp Statements | DataCamp PDFs #48518318, #48272478, #49180227, #49278343 | OpenAI API (3 hrs), Python (4 hrs), Java Beginner (4 hrs), Java Intermediate (4 hrs), August 15, 2026. Verified. |
| AI Fest Workshops & Webinar | Workshop 1 & 2 (July 7, 2026), Webinar 3 (July 29, 2026) PDFs | AI Hackathon learning sessions by DOST VI, UMWAD, AI Fest. Verified. |
| Contact links | FEAT-001 inventory | Email, LinkedIn, GitHub, Facebook, Instagram, JobStreet. Verified against specification. |

## 2. Duplicate handling and deduplication decisions

- `DICT-CyberAwareness-2025 OCR.pdf`, `DICT-CyberAwareness-2025.pdf`, `DICT-CyberAwareness-2025.png`: Single credential. The PNG visual was used for high-fidelity preview generation; PDF used for original document link.
- `WEST-AI-2025.pdf`, `WEST-AI-2025.png`: Single credential. High-resolution graphic used for preview, PDF used for full document download.
- `WEST-AWS-2025 OCR.pdf`, `WEST-AWS-2025.pdf`, `WEST-AWS-2025.png`: Single credential. Visual used for preview, clean PDF for document link.
- `AI Hackathon Workshop 1`, `Workshop 2`, `Webinar 3`: Distinct certificates for separate technical sessions (Human-Centric AI, Technical Architecture, Agile Prototyping).

## 3. Privacy and security boundaries

- Phone number (`09944891004` in resume docx): Intentionally omitted from public markup and assets per REQ-009.
- Home street address: Omitted; regional location "Kalibo, Aklan, Philippines" retained.
- Directory `../../01-DOCUMENTS/01 IDS/`: Contains private government identity documents. Strictly excluded; not accessed or copied.
- No analytics trackers, external font CDNs, or private runtime tokens included.
- Public resume copy: Placed in `public/assets/documents/Lenard-Olajay-Resume-Updated.pdf`.

## 4. Omitted uncertainties & limitations

- Unverified Google Drive links: Google Drive links were not supplied in the repository. As specified in FEAT-001 (REQ-012), local reviewed certificate and resume originals are used directly.
- Commercial or production usage claims: Not asserted. Projects are honestly categorized as hackathon entries, prototypes, or community tools.
- REQ-015 (Ten-second human comprehension scan): Pending human testing with 3 unfamiliar readers.
- Physical device testing: Pending physical device validation by Len; desktop and mobile browser emulation verified during implementation.


## 5. Phase 1 verification results

- Automated tests: Ran `npm test` with Node's built-in test runner (`node --test tests/**/*.test.js`). 7 of 7 passed:
  - Carousel index calculations on mobile (viewport < 640px): passed.
  - Carousel index calculations on desktop (viewport >= 1024px): passed.
  - Single credential edge condition: passed.
  - Zero credential edge condition: passed.
  - Public resume existence and size check: passed (`public/assets/documents/Lenard-Olajay-Resume-Updated.pdf`, 123 KB).
  - Certificate preview images presence and size check: all 16 certificate webp previews and 2 project images verified <= 200 KB each.
  - Semantic HTML, skip link, single H1, all 6 contact links, and privacy phone number check: passed.
- Production build: Ran `npm run build` (`vite build`). Output produced in `dist/`:
  - `dist/index.html`: 38.00 kB (gzip: 6.32 kB)
  - `dist/assets/index-*.css`: 14.71 kB (gzip: 3.08 kB)
  - `dist/assets/index-*.js`: 6.07 kB (gzip: 2.49 kB)
  - Total compressed initial transferred bundle: ~11.9 kB (well below the 200 KB target).
- Dist inspection: Confirmed only reviewed public documents and previews are present; zero private ID files.
- No-JS verification: All essential content (name, role, positioning, proof points, tech stack, selected builds, background, credentials list with direct document links, and contact channels) is fully rendered in initial HTML and functional without JavaScript.

