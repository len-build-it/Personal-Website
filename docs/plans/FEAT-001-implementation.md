# Implementation plan: FEAT-001 portfolio

Created: 2026-09-06T15:55:03+08:00
Updated: 2026-09-06T15:55:03+08:00
Revision: 1
Status: Ready for Gemini under delegated execution authority
Target branch: master, confirmed unborn on preparation; preserve the actual branch if subsequently changed.

## Authority and execution

Read root HANDOFF.md, FEAT-001 revision 3, and product documents revision 3.
Len requested this concrete plan for Gemini and explicitly instructed continuous execution from start to finish with commits.
Do not ask Len to separately approve this newly authored document as a routine gate.
Len did not separately review these exact revisions; the recorded authority is his delegation and acceptance of the review recommendations.
Execute all three phases in one continuous run where the environment permits.
No approval pause between phases, no fixed retry count, and no stop because optional Drive links or imagery are missing.
Investigate recoverable failures, adapt within scope, and proceed with independent work.
Never report a failed check or failed commit as success.
A real unavailable credential, prohibited operation, or irrecoverable environment issue may prevent affected work; document it honestly and complete everything else.
Do not broaden scope or bypass external tool permissions.

## Phase 1: reviewed content and project foundation

Requirements: FEAT-001/REQ-001 through REQ-006, REQ-009, REQ-012, REQ-013.
State: Complete (checkpoint pending commit).

- [x] Inspect git status --short --branch, git log -5 --oneline if commits exist, and any existing package files.
- [x] Check setup once with npx len-toolkit start if not checked in this Gemini session; inspect any changed instructions and preserve the project-specific continuous-execution override.
- [x] Read the updated resume, actual certificates, and existing GitHub profile with available document tools.
- [x] Record source mapping, duplicate certificate choices, verified claims, and omitted uncertainty in docs/evidence/FEAT-001-verification.md.
- [x] Confirm available Node and npm; initialize the small Vite project only if no app already exists, and preserve any later user changes.
- [x] Establish npm scripts dev, build, preview, and test, with Vite as the only app development dependency.
- [x] Build semantic page sections and canonical credential list with the correct contact links and reviewed public assets.
- [x] Make the page useful without JavaScript.
- [x] Run npm run build and inspect generated dist assets for accidental private files.
- [x] Review exact changes and update evidence, phase state, and HANDOFF.md.
- [ ] Stage reviewed planning/rule files relevant to this scope and app foundation paths explicitly; do not blanket-stage .agents or unrelated existing files.
- [ ] Inspect git diff --cached and commit: feat(portfolio): establish verified content and static foundation
- [ ] Confirm success using git log -1 --format="%h %s".
- [ ] Continue immediately to phase 2.

## Phase 2: mobile presentation and certificate interaction

Requirements: FEAT-001/REQ-001 through REQ-014.
State: Complete (checkpoint pending commit).

- [x] Apply the white minimal layout, project-first ordering, compact introduction, social rows, and responsive project sections.
- [x] Enhance the existing credential list with the requested carousel and keep all credential titles/original links discoverable.
- [x] Implement pause/resume, focus/manual stopping, visible-tab/viewport gating, reduced motion, and zero/one-item cases.
- [x] Add only meaningful small checks using Node's built-in test runner for carousel state rules and public asset/link integrity.
- [x] Run npm test and npm run build.
- [x] Start npm run dev -- --host 127.0.0.1 in a retained session; use its printed URL for browser review and avoid port guessing.
- [x] Review at 320, 390, 768, and 1440 widths, including 390x844 and 1440x900 initial views.
- [x] Review keyboard, 200% text enlargement, reduced motion, JavaScript-disabled text/link availability, broken image, and zero/one/multiple credential behavior.
- [x] Check gesture/vertical scrolling in available mobile emulation; record physical-device checks separately as Pending.
- [x] Review each supplied contact destination and available project/original links; record login restrictions instead of guessing alternate URLs.
- [x] Correct actual issues and save representative screenshots when browser tools are available.
- [x] Update evidence, phase state, and handoff; inspect/stage only reviewed related paths.
- [ ] Commit: feat(portfolio): add responsive layout and accessible credentials
- [ ] Verify Git reports the successful checkpoint and continue immediately.

## Phase 3: final production verification and delivery

Requirements: All FEAT-001 requirements; REQ-015 may remain Pending human participation.
State: Not started.

- [ ] Review text for source accuracy, duplicate claims, unsupported superlatives, and working resume/contact access.
- [ ] Confirm all local asset references resolve and compressed preview sizes meet the target or have justified exceptions.
- [ ] Run npm test and npm run build on the final tree.
- [ ] Run npm run preview -- --host 127.0.0.1 in a retained session and open the exact printed URL.
- [ ] Confirm a successful response and smoke-check the production page, main links, and carousel; development-server success alone is insufficient.
- [ ] Record actual final commands, times, results, screenshots, and limitations in the evidence.
- [ ] Keep human ten-second tests and physical-device checks Pending unless actually performed; give Len the short test procedure without pausing delivery for it.
- [ ] Add a concise README with install/run/build instructions and how to update projects, credentials, resume, and optional Drive originals.
- [ ] Mark completed versus unavailable checks accurately and update the handoff with any remaining limitations.
- [ ] Review/stage only relevant changes and commit: chore(portfolio): verify production build and document maintenance
- [ ] Verify the commit and final git status; preserve unrelated changes.
- [ ] Deliver the local production preview and a concise summary of checks and limitations.
- [ ] Do not push or publish publicly unless Len separately requests it.

## Commit and recovery rules

A checkpoint means required available checks passed, reviewed paths were staged, and Git confirmed the commit.
Do not create another commit solely to insert its own hash; unique messages identify checkpoints and subsequent phases can record previous hashes.
If commit identity or permissions prevent committing, preserve work, finish independent implementation and checks, and report exactly which checkpoints remain uncommitted.
Do not invent an author identity, use an agent co-author, discard edits, or reset the repository.
No repetitive identical retries: investigate the cause and use evidence to choose the next correction.
A failure remains open until verified resolved; persistence does not authorize claiming completion or bypassing security.
