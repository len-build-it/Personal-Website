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
| VIS-002: First project title placement | PASS | Measured via Chrome DevTools Protocol at 390x844: `firstProjectTitleTop` = 609.68px (target: <= 740px). At 1440x900: `firstProjectTitleTop` = 573.15px (visibly begun within 900px viewport). |
| REQ-008 / VIS-003: Horizontal overflow & responsive layout | PASS | Measured at 390px (`scrollWidth: 390`, `viewportWidth: 390`, `hasHorizontalOverflow: false`) and 1440px (`scrollWidth: 1425`, `viewportWidth: 1440`, `hasHorizontalOverflow: false`). |
| VIS-006: Computed font sizes | PASS | Body computed font size = 16px (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`). H1 computed font size = 30px mobile / 48px desktop (`Georgia, "Times New Roman", Times, serif`). |
| REQ-004: Featured builds accuracy | PASS | 3 builds featured: AqOne, Warang, Project Tabang with honest captions, truthful role definitions, stack, and active repository links. |
| REQ-006 / REQ-013: Contact destinations | PASS | All 6 destinations preserved: direct email (`mailto:olajaylenardangelo@gmail.com`), LinkedIn, GitHub, Instagram, Facebook, JobStreet. |
| REQ-009: Privacy | PASS | No private phone numbers, home addresses, secrets, or tracking scripts present. Automated test confirmed `09944891004` absent. |
| Core automated test suite | PASS | `npm test` executed: 12 tests passed, 0 failures. |
| Production build | PASS | `npm run build` completed in 170ms. Transferred dist: HTML 36.9 kB, CSS 18.0 kB, JS 6.1 kB (total gzipped: ~11.6 kB, well under 200 KB budget). |

## Measured viewport data

### Mobile (390x844)
- Viewport: 390 x 844 CSS px
- Page scroll width: 390 px (no horizontal scrollbar)
- Masthead height: 45 px
- Intro height: 386 px (bottom at y=475px)
- Builds section top: 475.22 px
- First project title top: 609.68 px (<= 740px criteria satisfied)
- Body font size: 16px
- H1 font size: 30px serif

### Desktop (1440x900)
- Viewport: 1440 x 900 CSS px
- Page scroll width: 1425 px (no horizontal scrollbar)
- Masthead height: 45 px
- Intro height: 324 px
- Builds section top: 448.98 px
- First project title top: 573.15 px (visible in opening view)
- Body font size: 16px
- H1 font size: 48px serif

## Artifacts & screenshots

- Before Mobile (390x844): `docs/evidence/screenshots/before-mobile-390x844.png`
- Before Desktop (1440x900): `docs/evidence/screenshots/before-desktop-1440x900.png`
- Phase 1 Mobile (390x844): `docs/evidence/screenshots/phase1-mobile-390x844.png`
- Phase 1 Desktop (1440x900): `docs/evidence/screenshots/phase1-desktop-1440x900.png`

## Limitations & pending checks

- Human 10-second comprehension testing (REQ-015) remains Pending until physical readers can be tested.
- Physical device testing on real hardware is handled by Len; browser emulation measurements establish the verified local behavior.
- Phase 2 will execute certificate gallery refinement, numeric counter, and compact text index.
