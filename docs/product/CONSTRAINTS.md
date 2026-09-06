# Shared quality constraints: portfolio

Created: 2026-09-06T15:40:38+08:00
Updated: 2026-09-06T15:55:03+08:00
Revision: 3
Status: Execution specification under Len's delegated planning authority

## Responsive and readable layout

Use a restrained centered reading width, approximately 1040px maximum, with body prose constrained to a comfortable line length.
Default body text to at least 16px and normal labels to at least 14px.
Use a system font stack to avoid a required remote-font request.
Keep mobile side padding at least 16px.
Stack project content and contact rows naturally on narrow screens.
Use wrapping anchor navigation without a hamburger menu.
Avoid fixed headers that obscure content or consume the small first viewport.
Use a visible skip link on focus and one main heading.
Target at least 44x44 CSS pixels for carousel buttons and principal touch actions.
Ensure ordinary text contrast of at least 4.5:1 and visible keyboard focus.
Do not use color alone to communicate a credential type or active position.
Allow long email addresses and URLs to wrap.
Do not reduce fonts to force a first-viewport fit.

Verify widths of 320, 390, 768, and 1440 CSS pixels with no page-level horizontal scrolling or clipped content.
At 200% text enlargement, preserve all content, controls, and navigation without overlap; the initial-viewport fit requirement does not apply at enlarged text.
At 390x844, put the introduction and primary links before the first scroll.
All secondary social links remain near the intro and may wrap below that initial viewport.
On mobile, show one certificate preview with readable metadata and thumb-sized controls.
Vertical scrolling must work naturally when a gesture starts over the carousel.

## Loading and fallback

Essential text, links, and credential list are present in initial HTML.
Compress previews and use explicit image dimensions or aspect ratios.
Lazy-load below-the-fold project and certificate images.
Do not load full-resolution certificate PDFs just to render thumbnails.
Target initial transferred HTML, CSS, and JavaScript below 200 KB compressed, and each preview at or below 200 KB where legibility permits.
Record actual measured sizes and justified exceptions.
No loading splash screen.
A missing image retains its title, metadata, and working document link when available.
Document rendering failures do not erase surrounding content.
A failed external destination is recorded and treated according to FEAT-001 rather than claimed permanently prevented.
No offline availability guarantee or service worker is required.

## Verification and evidence

Production build, preview response, internal asset/link integrity, and meaningful carousel behavior checks must pass before the corresponding phase is marked complete.
Check mouse, touch-sized layout, keyboard navigation, screen-reader naming, reduced motion, disabled JavaScript, broken image, and carousel zero/one/multiple-item states.
Use browser inspection and screenshots when available as required implementation QA.
Inspect representative desktop and mobile views and save screenshots with the evidence.
Browser emulation does not prove physical-device behavior.
Record unavailable test tools as limitations and complete independent checks without inventing a pass.
The human ten-second comprehension test stays Pending until actual readers participate; it does not block local delivery.
Do not claim performance scores or accessibility certification without actual measurements.

## Publication boundaries

Review public resume/certificate copies for unintended private details.
Publish only selected files, not the identity-document folder.
Do not alter Drive sharing permissions.
No unrequested analytics, tracking pixels, or remote social widgets.
Links may lead to services that request login; record the observed behavior instead of claiming guaranteed access.
