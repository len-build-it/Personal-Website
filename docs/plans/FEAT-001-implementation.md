# Implementation plan: FEAT-001 editorial portfolio redesign

Created: 2026-09-06T15:55:03+08:00
Updated: 2026-09-06T16:46:55+08:00
Revision: 2
Status: Prepared for Gemini; redesign not started
Feature: FEAT-001 revision 4
Design: product/DESIGN.md revision 1
Target branch: master at preparation; preserve the actual current branch.
Observed HEAD: 9c75da3 (Len's Toolkit init)

## Authority and start point

Len requested investigation of https://artem.vyraz.studio/ and an implementation plan integrating its design into the existing portfolio.
His earlier instruction remains: Gemini continues start to finish with commits, no routine approval pauses or fixed retry cutoff.
This plan defines that redesign within the existing one-page product, without initiating website edits in the planning turn.
These exact words are authored under delegation, not separately user-approved verbatim.
Read HANDOFF.md, FEAT-001, DESIGN.md, ARCHITECTURE.md, and CONSTRAINTS.md.
The initial implementation plan is preserved at ../archive/FEAT-001-implementation-v1.md.
Reuse index.html, src/styles.css, src/main.js, tests/, and existing public assets.
Do not scaffold a new project, replace Vite, change package versions, or add an animation/carousel dependency.

## Observed starting issues

The previous live mobile audit measured an 894px header, first project section at y=982px, and a 6667px credential section at 390x844.
The current source uses repeated bordered cards and duplicates credential previews in the gallery and full index.
src/main.js derives gallery content from canonical .credential-item markup; changing that markup requires updating its reader.
Current slide translation ignores the 1rem flex gap: percentage shifts can accumulate misalignment.
There are 16 dot controls even when only 14 start positions exist on three-across desktop layouts.
Current focusin pauses before the button click handler, so pointer/keyboard pause actions need an explicit regression check.
A reduced-motion change back to normal calls resumeAutoplay even after a manual pause.
tests/carousel-state.test.js tests copied arithmetic instead of importing production behavior.
Production preview tests hard-code port 4173 and assert old prose.
These source-derived risks are not all proven live failures; reproduce through the real flow before fixing.
The redesign's one-visible-slide and numeric-counter design removes the multi-column/dot assumptions, but its alignment and pause semantics still require actual testing.

## Phase 1: typography, composition, and content hierarchy

Requirements: FEAT-001/REQ-001 through REQ-009, REQ-013; VIS-001, VIS-002, VIS-003, VIS-006, VIS-009.
State: Complete.

- [x] Inspect git status --short --branch and git log -5 --oneline; preserve unrelated changes.
- [x] Run toolkit setup once if not checked in this Gemini session, preserving project-specific execution authority and custom files.
- [x] Read relevant current app files and existing evidence before editing; do not assume old completion claims are independent verification.
- [x] Start npm run dev -- --host 127.0.0.1 and use its exact printed URL; reuse an existing matching server when appropriate.
- [x] Capture the current 390x844 and 1440x900 introduction, projects, credentials, and contact as before evidence.
- [x] Create the type/color/spacing tokens specified in DESIGN.md and replace repetitive card/chip styling in place.
- [x] Recompose masthead, introduction, project rows, about/education, and contact; preserve contact destinations and truthful content.
- [x] Use actual available project imagery with honest captions or the design's text-only fallback.
- [x] Remove page-audit narration and implementation prose from visitor-facing copy.
- [x] Verify first-project placement, wrapping, computed font sizes, and keyboard/touch control sizes on mobile and desktop.
- [x] Run npm run build; review rendered screenshots against VIS-001, VIS-002, and VIS-009 before considering this phase complete.
- [x] Record actual checks and limitations in docs/evidence/FEAT-001-redesign-verification.md and update HANDOFF.md.
- [ ] Stage only reviewed changed paths, inspect git diff --cached, and commit: feat(portfolio): establish editorial visual hierarchy
- [ ] Verify the checkpoint with git log -1 --format="%h %s" and continue without a routine sign-off.

## Phase 2: certificate presentation and real interaction checks

Requirements: FEAT-001/REQ-010 through REQ-014; VIS-003 through VIS-008.
State: Complete.
Commit: feat(portfolio): refine credential gallery and compact index

- [x] Trace every selector, event handler, and caller affected by canonical credential markup changes in src/main.js and tests/.
- [x] Build one contained certificate figure with an adjacent desktop caption and stacked mobile caption.
- [x] Replace repeated thumbnail cards with a compact text index; preserve all 16 credential records and original-document destinations.
- [x] Keep preview metadata in the same canonical source; migrate extraction before removing the old .cred-thumb elements.
- [x] Replace the 16-dot strip with numeric position, previous/next, and pause/resume.
- [x] Use actual slide offsets including gaps, or a gap-free full-width track, so every slide aligns exactly.
- [x] Preserve explicit user pause across hover, visibility, resize, and reduced-motion changes; verify pause/resume with both keyboard and pointer.
- [x] Preserve no-JS index/original links, sensible zero/one-item states, screen-reader naming, and hidden-slide focus management.
- [x] Replace duplicate arithmetic tests with a minimal production-importing check or direct browser behavior checks; add no testing framework.
- [x] Update stale text/structural assertions to test meaningful content/link behavior while retaining coverage.
- [x] Build before server-based tests, then run npm run preview -- --host 127.0.0.1 and use its printed URL.
- [x] Existing tests expect port 4173; use that if available, otherwise make the test base URL configurable and pass the actual printed URL.
- [x] Run npm test with required dev/preview servers available; read tests/server-responses.test.js to satisfy its real preconditions.
- [x] Exercise all gallery positions, zero/one/multiple-item cases, focus, pause/resume, reduced motion, tab visibility, and no-JS reading.
- [x] Measure the credential section at 390px and compare to the <=4200px target without hiding qualifications.
- [x] Update evidence, plan state, and handoff; inspect and stage only reviewed paths.
- [x] Commit: feat(portfolio): refine credential gallery and compact index
- [x] Verify the checkpoint and continue immediately.

## Phase 3: production visual QA and handoff

Requirements: All active FEAT-001 and VIS requirements.
State: Complete.
Commit: chore(portfolio): verify editorial redesign across screen sizes

- [x] Run npm run build and npm test against the actual required server URLs on the final source.
- [x] Review the production preview at 320, 390, 768, 1024, and 1440px; confirm this is the latest production output, not stale dist.
- [x] Capture final 390x844 and 1440x900 opening views, project rows, credential gallery/index, and contact.
- [x] Record measured first-project position, credential section height, document overflow, body font sizes, and actual screenshot paths.
- [x] Check 200% text enlargement, keyboard traversal, visible focus, reduced motion, vertical mobile scrolling, failed preview image, and readable no-JS fallback.
- [x] Compare before/after with the reference principles: serif/sans hierarchy, image space, minimal chrome, concise captions, and deliberate alignment.
- [x] Check all public assets and supplied links; record external login/access limits rather than fabricate alternatives.
- [x] Preserve the performance budget and review actual asset sizes; do not infer a performance score from localhost response time.
- [x] Correct visual issues before marking the phase complete; continue through recoverable failures.
- [x] Update README for any actual credential-maintenance changes, evidence, current handoff, and plan progress.
- [x] Commit reviewed final paths: chore(portfolio): verify editorial redesign across screen sizes
- [x] Confirm the commit and final git status; leave unrelated user changes untouched.
- [x] Deliver the verified local preview, representative screenshots, commit references, and remaining limitations.
- [x] Do not push or publish publicly without a separate request.

## Completion and recovery

A phase is complete only when its required checks have evidence and Git confirms its reviewed checkpoint.
Do not mark a checked task or expected screenshot as actual evidence.
No repeated identical retries, fixed attempt cutoff, or routine user approval pause.
Investigate actual failures and continue independent authorized work.
If a required tool, permission, or credential is unavailable, preserve work and report which checks/commits remain unverified or blocked.
Do not bypass permission controls, invent author identity, overwrite user edits, or describe missing checks as passing.
Human ten-second comprehension testing and physical-device checks remain Pending until actual participants/devices supply results; they do not block delivery of verified browser work.
