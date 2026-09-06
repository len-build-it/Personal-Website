# Portfolio design specification and reference investigation

Created: 2026-09-06T16:46:55+08:00
Updated: 2026-09-06T16:46:55+08:00
Revision: 1
Status: Redesign specification prepared for Gemini under Len's delegated planning instruction

## Authority and interpretation

Len requested investigation of https://artem.vyraz.studio/ and an implementation plan integrating its design into his portfolio.
This direction replaces the earlier generic minimal treatment and Asi reference as the primary visual guide.
Preserve Len's existing white, single-page, mobile-friendly, information-first requirements and automatic certificate gallery.
This document supplies the visual decisions that were missing from the first implementation brief.
The current planning task changes documentation only; Gemini performs the redesign.
The choices below are authored under Len's delegation, not separately approved verbatim.

## Reference evidence

Inspected the live Work page in Slider and Grid modes, the Info page, and mobile Work/Info at 390x844 using screenshots, accessibility state, and rendered DOM/computed styles.
Desktop inspection used the browser's 1280x720 viewport.
These are observed public rendering details, not claims of access to the site's original repository.

| Observed implementation | Evidence from the reference | Application to Len's portfolio |
| --- | --- | --- |
| Near-white continuous canvas | Computed body background rgb(241, 240, 239), equivalent to #f1f0ef. | Retain Len's requested white page; use a light neutral only behind selected media. |
| Two complementary type families | Body/captions use georgiapro with Georgia fallback; controls/name labels use aktiv-grotesk with system fallbacks. | Use Georgia for editorial headlines/captions and system sans for UI/body/metadata; do not copy licensed font files. |
| Full-screen work stage | A 720px-high slider at the inspected desktop viewport, centered contained imagery, and a fixed 64px bottom caption/control bar. | Give project imagery room and use understated captions, but keep the portfolio in normal scrolling flow. |
| Sparse identity/navigation | Info at top center; first/last name plus graphic marks at opposite sides of a fixed mid-screen branding bar. | A simple in-flow masthead and text anchors; identity remains readable on every screen size. |
| Image-centered project presentation | A large image is the focal point, with a concise caption and counter; Grid introduces varied artwork-led tiles. | Use unboxed project figures and concise supporting contributions; use one fixed reading layout for all three builds. |
| Narrow editorial information | Info paragraphs measured about 452px wide at desktop; 16px serif text with 22px line height and small numbered labels. | Use narrow reading columns and restrained numbered section labels, with larger accessible label sizing. |
| Mobile adaptation | Name labels are display:none; Info/Work and bottom controls remain; captions wrap; media may extend beyond the viewport. | Keep Len's name and role, stack project content, and contain media without clipping; avoid fixed floating furniture. |
| Runtime assets | Script tags list GSAP 3.12.5, Matter.js 0.19.0, an analytics script, and site main.js; Adobe Typekit CSS is linked. | These dependencies are not needed for this adaptation; use the existing Vite/HTML/CSS/JS stack and no tracker. |

Observed controls include slideshow pause/play, Slider/Grid selection, image-detail buttons, and thumbnail navigation on some projects.
Grid mode showed a dense artwork layout; the observation does not establish every drag/physics behavior.
Full external CSS/JS source could not be retrieved through the web reader; implementation analysis is based on rendered DOM/styles, loaded resource URLs, and tested visible interactions.
Do not assert that a particular library implements a particular animation solely because its script is present.
Do not download or reuse Artem's artwork, logos, portrait, client material, proprietary fonts, or text.
Reference URLs:
- https://artem.vyraz.studio/
- https://artem.vyraz.studio/info.html

## Visual thesis

A quiet editorial portfolio where generous project imagery, serif headlines, precise alignment, and clear sans-serif text communicate craft.
The page should feel composed even with all movement paused.
Minimal means a deliberate hierarchy and consistent proportions.
Avoid applying the same rounded border container to every kind of content.

## Concrete tokens and composition

| Token or component | Starting specification |
| --- | --- |
| Canvas | #ffffff |
| Media surface | #f5f5f3, only within image stages |
| Main ink / secondary ink | #171717 / #525252 |
| Separators | #dededb, 1px only where they organize sections or list rows |
| Display/caption serif | Georgia, "Times New Roman", serif |
| Body/control sans | system-ui, -apple-system, "Segoe UI", sans-serif |
| Name headline | Serif, weight 400, 32px mobile to 48px desktop; line-height 1.1, slightly tight tracking |
| Section heading | Serif, weight 400, 28px mobile to 36px desktop |
| Project title | 24-30px serif, weight 400; use AqOne, Warang, Project Tabang as short titles |
| Body / normal labels | 16px minimum body, 14px minimum normal labels; body line-height 1.5-1.65 |
| Caption | 16px serif, approximately 1.4 line-height |
| Width | 1120px maximum content shell; prose around 55-65ch |
| Side gutters | 20px mobile, 32px tablet, 48px wide desktop; at 320px retain at least 16px |
| Spacing scale | 8, 12, 16, 24, 32, 48, 64, 80px; purposefully tighter on mobile |
| Section spacing | 48px mobile / 72px desktop, with smaller gaps within related groups |
| Corners/shadows | Media can have 4px corners; ordinary sections unboxed; no generic card shadows |
| Controls | Descriptive text anchors with subtle underline/arrow treatment; at most one filled primary action near the intro |
| Touch behavior | Minimum 44px principal control targets; visible focus; no hover-only information |

Tune these starting values against the screenshots and acceptance checks.
Do not shrink body text or hide overflow to manufacture a passing layout.

## Page blueprint

### Masthead and introduction

Use an in-flow masthead with a small Len / len.build.it identifier and simple Work, About, Credentials, Contact anchors.
Keep the full name as the one visible H1 in the introduction.
Use the serif headline to establish identity and a 25-40-word supporting paragraph that identifies the discipline and contribution.
Use two compact verified proof points; move the long technology inventory and education details to their relevant sections.
Place Resume and Email as the clearest actions, with LinkedIn/GitHub and the remaining socials as a quiet wrapping row.
Use human labels; show the full email once and use Email where a compact action is needed.
Avoid uppercase pill badges, emoji decorations, two navigation rows, and boxed social links.

### Work

Use three consistent editorial project rows: one large figure, one text block, a short caption, and an unboxed metadata line.
At widths >=900px, use approximately 58% image / 42% text with a 32-48px gutter.
At smaller widths, use image and caption followed by the title, role, contribution summary, stack, and repository link.
At desktop the first project should visually begin within the initial viewport.
At 390x844 the first project title must appear at or above y=740px at normal text size.
Keep essential identity and resume/email links above that point.
Do not require visitors to use a new project slideshow or grid toggle to discover builds.
The reference's visual language is the goal; its navigation model is not an additional feature requirement.

Use actual software screenshots already available or safely obtainable from the user's accessible project sources.
No new assets are required to finish this redesign.
If product screenshots are unavailable, use the existing project/event photo with an honest caption, or a purposeful text-only row with matching typography/alignment.
Do not invent a Warang screenshot, display a fake interface, add a placeholder panel, or stretch event imagery to fill an arbitrary tall card.
Keep each image's content readable and its natural aspect ratio; do not crop interface text.
Explain in the evidence which imagery is product evidence and which is an event photograph.
De-emphasize commit percentage and remove it if it distracts from the actual engineering contribution.
Preserve supported facts while shortening prose; do not introduce stronger efficacy claims.

### About, leadership, and education

Use a small numbered section label, a readable heading, and editorial text.
At desktop use two balanced columns for background/leadership and education; stack on mobile.
Remove the repeated full-width bordered info cards.
Keep useful experience and contributions; cut repeated introduction/stack copy.
Do not use universal claims such as every pull request being security-validated unless actually supported.

### Credentials

Use the reference's large contained imagery and quiet caption/control approach within the existing certificate section.
Show one prominent certificate at a time at every breakpoint, with previous/next, pause/resume, and a single numeric position such as 01 / 16.
At desktop pair the figure with its title/issuer/type/date; at mobile place those below the figure.
This supersedes the old three-across desktop carousel rule.
Keep six-second autoplay, offscreen/background pause, reduced motion, manual-stop behavior, keyboard navigation, and original-document links.
Keep controls in normal flow below the figure; avoid fixed bottom bars.
Do not add a custom modal or download full PDFs for gallery thumbnails.

Below the gallery, use a compact text index with all 16 current credentials.
Use title, issuer/date, type, and one View document link per item.
Do not repeat the thumbnail or full-card treatment in this index.
Maintain the same semantic canonical source for carousel content.
When removing visible thumbnails, migrate the carousel's preview source to an explicit data attribute on the canonical list item, or otherwise preserve a single reviewed mapping.
Keep all credential titles and available document links accessible without JavaScript or autoplay.

Target credentials section height <=4200px at 390px wide with current content and normal text size, versus the previously measured 6667px.
The target is achieved by removing redundant presentation, not deleting qualifications or making text tiny.
At 200% text enlargement prioritize full readability over any height target.

### Contact and footer

End with a confident serif invitation, a clear email link, and inline/social rows.
Retain all supplied contact destinations and resume access.
Remove the boxed contact grid and raw LinkedIn slug.
Remove implementation-oriented footer prose about tests, static builds, cookies, and font requests.
A small name/copyright line and Back to top link are sufficient.

## Mobile and acceptance requirements

| ID | Check |
| --- | --- |
| VIS-001 | White canvas, visible serif/sans distinction, unboxed editorial projects, and restrained text controls are present in actual rendered screenshots. |
| VIS-002 | At 390x844, name/role and resume/email are visible without scrolling and first project title top <=740px; at 1440x900, the first project is visible in the opening view. |
| VIS-003 | At 320, 390, 768, 1024, and 1440px widths, no unintended horizontal overflow, clipped labels, cut certificate controls, or fixed overlays. |
| VIS-004 | All three projects and all 16 existing credential titles/original links remain available; no 16-card thumbnail duplication below the gallery. |
| VIS-005 | At 390px normal text size, credentials section height <=4200px; final production screenshots verify the result. |
| VIS-006 | Real body text computes to >=16px, controls remain usable at 200% text enlargement, keyboard focus is visible, and reduced motion removes automatic movement. |
| VIS-007 | Advancing to every certificate, including the last, aligns the figure accurately; resizing and focus handling do not clip a slide or restart a manual pause. |
| VIS-008 | Local previews/originals, resume, contact/social URLs, and no-JS content remain functional; no new dependency, tracker, backend, or reference-site assets. |
| VIS-009 | The page visibly differs from the old stacked-card treatment across intro, projects, credentials, and contact; merely changing colors or font family does not satisfy the redesign. |

Visual verification is part of completion and cannot be replaced by HTTP-200 or text-matching tests.
Keep representative before/after desktop and mobile screenshots when supported and record their actual paths.
If browser verification cannot be performed, keep visual checks explicitly unverified and report the limitation; do not claim a finished visual redesign from compilation alone.
