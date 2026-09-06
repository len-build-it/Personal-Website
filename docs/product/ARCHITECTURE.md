# Architecture: static single-page portfolio

Created: 2026-09-06T15:40:38+08:00
Updated: 2026-09-06T16:46:55+08:00
Revision: 4
Status: Execution specification under Len's delegated planning authority

## Observed facts and chosen implementation

The repository now has a Vite static site in index.html, src/styles.css, and src/main.js, committed through 9c75da3 at redesign preparation.
Preserve the installed dependencies and package lock; no setup scaffold is required.
Refine the existing semantic HTML, CSS, and minimal JavaScript module.
Use Vite as the sole development/build dependency, with npm and a committed package-lock.json.
Do not add a frontend framework, carousel library, CMS, backend, or UI component package.
This stack choice is an agent-authored decision under the user's delegated planning authority, not a claim of separate user selection.
The setup dependency is within this documented execution scope; do not treat the generic no-dependency rule as a reason to pause before installing it.

Use index.html, src/styles.css, src/main.js, and selected public assets.
Keep canonical credential text and links in semantic HTML; JavaScript progressively enhances that same credential content into the carousel.
Do not maintain a duplicate handwritten data list that can drift from the readable credential list.
Use ordinary anchors, buttons, CSS layout, and browser APIs.
Keep the essential page readable and linked when JavaScript is unavailable.
Use npm scripts dev, build, preview, and test.
The test script may use Node's built-in test runner for meaningful carousel-state and content/link integrity checks without a test framework.

## Boundaries and asset flow

Reviewed local source documents -> selected public copies and compressed previews -> static build in dist/.
Only dist/ is a publishable output, never the parent workspace.
External profile links and optional public Drive originals are ordinary outbound navigation.
No Drive token, runtime API, file sync, or embedded authentication is required.
Do not copy environment files or source evidence notes into public assets.
Source documents remain outside the public asset folder.

## Delivery

Complete the local production build and reviewable preview as Gemini's required deliverable.
Public publishing is not explicitly requested by the current instruction and is not required to declare local implementation complete.
Keep dist/ suitable for an ordinary static host.
If publishing is later requested, follow the available hosting tools and their instructions, reusing any existing hosting identity.
Do not provision accounts, purchase a domain, create a remote repository, or push as an inferred setup step.

## Trade-offs

Static HTML makes content visible without scripts and limits code to the requested gallery behavior.
Vite provides a standard local development and production workflow.
Manual credential updates require an edit and rebuild, appropriate for this small portfolio.
Consider a CMS or Drive synchronization only if frequent updates create a demonstrated maintenance burden.
Only consider a larger frontend framework when future scope needs application state or more complex routes.

## Redesign integration

Follow [DESIGN.md](DESIGN.md) and preserve the current stack and output directory.
No GSAP, Matter.js, Typekit, trackers, project-grid engine, or separate Info route is required.
Use system sans-serif plus Georgia for the documented typographic pairing.
The credential list remains canonical; its preview metadata feeds the one-visible-slide gallery without repeating index thumbnails.
Tests must exercise production behavior, not a second implementation of carousel arithmetic.
