# FEAT-001 Redesign Verification Evidence

Created: 2026-09-06T17:15:00+08:00
Updated: 2026-09-06T17:15:00+08:00
Feature: FEAT-001 revision 4
Plan: FEAT-001-implementation.md revision 2
Design: DESIGN.md revision 1

## Summary of checks

| Requirement / Check | Status | Verification method & evidence |
| --- | --- | --- |
| REQ-001 / VIS-002: Identity, role, and immediate contact | PASS | Edge headless CDP rendered at 390x844 and 1440x900. Name, role, positioning paragraph, resume PDF link, and email link are visible in initial viewport before scrolling. Screenshot: `docs/evidence/screenshots/phase1-mobile-390x844.png`, `docs/evidence/screenshots/phase1-desktop-1440x900.png`. |
| VIS-001 / VIS-009: Artem-inspired typography & palette | PASS | Georgia serif headlines/captions, system sans-serif UI/body/metadata, white canvas (`#ffffff`), media stages (`#f5f5f3`), subtle dividers (`#dededb`). Card-box borders and generic chip tags eliminated. |
| VIS-002: First project title placement | PASS | Measured via Chrome DevTools Protocol at 390x844: `firstProjectTitleTop` = 608.09px (target: <= 740px). At 1440x900: `firstProjectTitleTop` = 571.56px (visibly begun within 900px viewport). |
| REQ-008 / VIS-003: Horizontal overflow & responsive layout | PASS | Measured at 390px (`scrollWidth: 390`, `viewportWidth: 390`, `hasHorizontalOverflow: false`) and 1440px (`scrollWidth: 1425`, `viewportWidth: 1440`, `hasHorizontalOverflow: false`). |
| VIS-004: Contained 1-slide certificate gallery | PASS | Verified exactly 1 certificate slide visible at all viewport widths. Contained media stage with aspect ratio 16/11 and object-fit contain. |
| VIS-004 / VIS-007: Numeric counter & gallery controls | PASS | Toolbar features `01 / 16` numeric indicator, prev/next buttons, and pause/resume button. Tested via CDP: next increments to `02 / 16` and pauses autoplay, prev decrements, pause/resume toggles correctly. |
| VIS-004: Inactive slide link focus handling | PASS | Links on hidden slides receive `tabindex="-1"`; active slide links have `tabindex` cleared for accessible keyboard navigation. |
| VIS-005: Compact credentials index height | PASS | Canonical text index replaced repeated 16 thumbnail card boxes with dense metadata rows and direct document links. Credentials section total height on 390x844 mobile measured at 3026px (target: <= 4200px, down from 6667px). |
| VIS-006: Computed font sizes | PASS | Body computed font size = 16px (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`). H1 computed font size = 30px mobile / 48px desktop (`Georgia, "Times New Roman", Times, serif`). |
| REQ-004: Featured builds accuracy | PASS | 3 builds featured: AqOne, Warang, Project Tabang with honest captions, truthful role definitions, stack, and active repository links. |
| REQ-005 / REQ-014: Certificate and document resolution | PASS | All 16 credentials verified with valid image previews and direct document/letter links resolving HTTP 200. |
| REQ-006 / REQ-013: Contact destinations | PASS | All 6 destinations preserved: direct email (`mailto:olajaylenardangelo@gmail.com`), LinkedIn, GitHub, Instagram, Facebook, JobStreet. |
| REQ-009: Privacy | PASS | No private phone numbers, home addresses, secrets, or tracking scripts present. Automated test confirmed `09944891004` absent. |
| Core automated test suite | PASS | `npm test` executed: 12 tests passed, 0 failures. |
| Production build & budget | PASS | `npm run build` completed in ~200ms. Production dist: HTML 34.8 kB (gzip: 5.9 kB), CSS 15.5 kB (gzip: 2.9 kB), JS 6.1 kB (gzip: 2.5 kB). Total transferred gzip: ~11.2 kB, well under 200 KB budget. |
| Cross-breakpoint responsiveness | PASS | Verified on production preview server at 320, 390, 768, 1024, and 1440px widths. `hasHorizontalOverflow: false` across all form factors. |
| Progressive enhancement / No-JS | PASS | With JS execution disabled via CDP: clean layout renders semantic masthead, intro, builds, background, credentials list, and contact links. Carousel cleanly hidden. All 16 documents and letters accessible. |
| Accessibility: 200% text zoom | PASS | Verified with html fontSize set to 200% (32px body font): layout adapts without text clipping or horizontal document overflow (`scrollWidth: 1239` <= `innerWidth: 1254`). |
| Accessibility: Focus indicators | PASS | Interactive controls and skip link have visible focus outline (`outline: 2px solid var(--color-focus)`). |

## Measured viewport data across breakpoints (Production Preview)

### Compact Mobile (320x640)
- Viewport: 320 x 640 CSS px
- Page scroll width: 320 px (no horizontal scrollbar)
- First project title top: 693.73 px (<= 740px satisfied)
- Credentials section height: 3408 px (<= 4200px satisfied)
- Body font size: 16px

### Standard Mobile (390x844)
- Viewport: 390 x 844 CSS px
- Page scroll width: 390 px (no horizontal scrollbar)
- Masthead height: 45 px
- Intro height: 386 px (bottom at y=475px)
- Builds section top: 475.22 px
- First project title top: 608.09 px (<= 740px criteria satisfied)
- Credentials section top: 3605.39 px
- Credentials section height: 3026 px (<= 4200px criteria satisfied, down from 6667px)
- Body font size: 16px
- H1 font size: 30px serif

### Tablet (768x1024)
- Viewport: 768 x 1024 CSS px
- Page scroll width: 753 px (no horizontal scrollbar)
- First project title top: 555.56 px
- Credentials section height: 2323 px
- Body font size: 16px

### Laptop / Small Desktop (1024x768)
- Viewport: 1024 x 768 CSS px
- Page scroll width: 1009 px (no horizontal scrollbar)
- First project title top: 571.56 px
- Credentials section height: 2359 px
- Body font size: 16px

### Full Desktop (1440x900)
- Viewport: 1440 x 900 CSS px
- Page scroll width: 1425 px (no horizontal scrollbar)
- Masthead height: 45 px
- Intro height: 324 px
- Builds section top: 448.98 px
- First project title top: 571.56 px (visible in opening view)
- Credentials section top: 2723.47 px
- Credentials section height: 2403 px
- Body font size: 16px
- H1 font size: 48px serif

### No-JS Fallback (390x844)
- Page scroll width: 390 px
- Carousel container display: `none`
- Canonical credentials list items: 16
- All original PDF documents and certificates directly linked with HTTP 200 resolution.

## Artifacts & screenshots

- Before Mobile (390x844): `docs/evidence/screenshots/before-mobile-390x844.png`
- Before Desktop (1440x900): `docs/evidence/screenshots/before-desktop-1440x900.png`
- Phase 1 Mobile (390x844): `docs/evidence/screenshots/phase1-mobile-390x844.png`
- Phase 1 Desktop (1440x900): `docs/evidence/screenshots/phase1-desktop-1440x900.png`
- Phase 2 Mobile (390x844): `docs/evidence/screenshots/phase2-mobile-390x844.png`
- Phase 2 Desktop (1440x900): `docs/evidence/screenshots/phase2-desktop-1440x900.png`
- Phase 2 Credentials Mobile (390x844): `docs/evidence/screenshots/phase2-credentials-mobile-390x844.png`
- Phase 2 Credentials Desktop (1440x900): `docs/evidence/screenshots/phase2-credentials-desktop-1440x900.png`
- Final Production Compact Mobile (320x640): `docs/evidence/screenshots/final-compact-320x640.png`
- Final Production Mobile (390x844): `docs/evidence/screenshots/final-mobile-390x844.png`
- Final Production Tablet (768x1024): `docs/evidence/screenshots/final-tablet-768x1024.png`
- Final Production Laptop (1024x768): `docs/evidence/screenshots/final-desktop-1024x768.png`
- Final Production Desktop (1440x900): `docs/evidence/screenshots/final-desktop-1440x900.png`
- Final Production No-JS (390x844): `docs/evidence/screenshots/final-no-js-390x844.png`

## Limitations & pending checks

- Human 10-second comprehension testing (REQ-015) remains Pending until physical human participants are administered the test per the protocol in README.md.
- Physical device testing on physical hardware is handled by Len; browser emulation measurements establish the verified local behavior.
