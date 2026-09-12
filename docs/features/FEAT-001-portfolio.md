# FEAT-001: Lenard Angelo Olajay portfolio - Gemini project specification

Created: 2026-09-06T15:40:38+08:00
Updated: 2026-09-12T22:28:50+08:00
Revision: 5
Status: Execution specification under Len's delegated planning authority

## Authority and scope

Len approved the review recommendations, supplied the Instagram profile, requested mobile optimization, and instructed that Gemini continue from start to finish while committing.
His latest instruction authorizes completing this specification and execution plan without another routine approval round.
This revision was authored after that instruction; do not claim Len separately reviewed its exact wording.
The visual redesign is implemented; revision 5 adds Len's requested personal-name SEO scope.
Len requested SEO optimization in chat on 2026-09-12 and supplied https://lenardangeloolajay.onrender.com/ as the public URL.
The SEO requirements below are authored under that request and the portfolio continuous-execution authority, not separately reviewed verbatim by Len.
Read this document, the linked architecture and constraints, the implementation plan, and root HANDOFF.md before implementing.
Use this feature document as the canonical source of behavior and acceptance criteria.
For current visual composition, typography, responsive proportions, and the refined certificate presentation, follow [DESIGN.md](../product/DESIGN.md) revision 1.
The latest user request adopts Artem's design direction and supersedes the earlier generic visual treatment.
Preserve all existing functional scope except the explicitly revised gallery presentation below.

Build a public, single-page portfolio for recruiters and potential clients.
Make the first impression specific, credible, and easy to scan in approximately ten seconds.
Use a white background, near-black text, restrained dividers, readable typography, and compact spacing.
Use https://artem.vyraz.studio/ as the primary visual reference, adapted through DESIGN.md to this readable single-page portfolio.
The earlier Asi reference remains historical context, not the current design authority.
Do not add a blog, newsletter, database, account system, contact form, tracking, search, or separate project pages.

## Information order and content

### 1. Introduction and immediate contact

Show Lenard Angelo Olajay and the confirmed descriptor Developer / Builder.
Proposed supporting copy: "Software engineering student building mobile apps, backend systems, and tools for local communities."
Check the degree wording against the updated resume and use its accurate qualification name.
Keep the opening summary to about 25-40 words, with two short verified proof points and the hierarchy in DESIGN.md.
Prioritize evidence such as leading AqOne development and founding ASU DevGuild after checking source material.
Keep the full stack inventory beside the projects or background, with only the most useful capability summary near the introduction.
Show Resume, Email, LinkedIn, and GitHub as descriptive links close to the introduction.
Show Facebook, Instagram, and JobStreet in a secondary wrapping row in the introduction.
Repeat contact access near the end of the page if useful.
Do not extract and publish additional phone numbers, home addresses, or identity details merely because they occur in source files.
Availability, location, and degree year may be shown only when supported by current material.

### 2. Selected builds

Lead with AqOne, followed by Warang and Project Tabang unless source review establishes a better evidence-based order.
For each project, show purpose, Lenard's personal role, concrete contributions, technologies, present status when known, and useful evidence links.
Keep visible project summaries about 60-100 words plus concise metadata.
Differentiate team achievements from individual work and prototypes from deployed products.
Do not present commit counts as quality or impact measures.
Do not infer real-world safety effectiveness, users, production deployment, uptime, awards, or commercial outcomes from implementation.
A repository alone is not independent verification of outcome claims.
Include one useful screenshot per build if a suitable public source is available; readable text is sufficient otherwise.
Avoid stock artwork and generated depictions of actual project interfaces.
If a repository is unavailable, preserve supported descriptive content without inventing a working demo link.

Source leads from the local GitHub profile:
- AqOne: https://github.com/Aquanons/AIHackathon2026_Aquanons_AqOne
- Warang: https://github.com/len-build-it/Warang
- Project Tabang: https://github.com/len-build-it/Project_Tabang

### 3. Background and leadership

Merge biography, working approach, and community leadership into one concise section.
Describe ASU DevGuild separately from software projects so its contribution is clear.
Mention AI-assisted development as part of the working process with human review and testing, not as an unsupported quality guarantee.
Avoid duplicating the introduction or publishing a list of AI tools as a separate feature.

### 4. Education and credentials

Show verified education and relevant awards.
Include a certificate and badge carousel plus a compact readable list of all published credentials.
The list must be immediately available without waiting for slides, opening a modal, or changing pages.
Keep title, issuer, credential type, and date when known as selectable text.
Distinguish professional certification, course completion, participation, badge, and award according to the source.
Do not label every workshop certificate as a professional certification.
Prioritize relevant credentials first.
Treat PDF, image, and OCR copies of the same certificate as one credential.
Review actual source content; filenames alone are not proof of a credential or rank.
Keep a single locally hosted public resume available to view or download.

### 5. Contact

Use the supplied destinations below.
A supplied link is authorized for inclusion but has not necessarily been verified accessible.
Do not substitute similar handles or scrape profiles to infer additional personal details.

| Label | Destination |
| --- | --- |
| Email | mailto:olajaylenardangelo@gmail.com |
| LinkedIn | https://www.linkedin.com/in/lenard-angelo-olajay-35b083366/ |
| GitHub | https://github.com/len-build-it |
| Facebook | https://www.facebook.com/Ark.Dcl/ |
| Instagram | https://www.instagram.com/len.build.it/ |
| JobStreet | https://ph.jobstreet.com/profiles/lenardangelo-olajay-n2tQmgnjYd |

## Certificate carousel behavior

Automatic sliding is in scope; automatic synchronization with Drive is not.
Use a six-second interval as an implementation default and a short restrained slide transition.
Show one prominent contained certificate on all screens, with its metadata alongside on desktop and below on mobile, as specified in DESIGN.md.
Never stretch or crop certificate text; contain each image within a stable aspect-ratio area.
Show previous, next, pause/resume, and a compact numeric position indicator with accessible names.
Do not create one pagination dot per credential.
Swiping may be supported but must not be the only navigation method.
Never interfere with normal vertical page scrolling.

Begin automatic advancement only while the gallery is visible and the browser tab is active.
Hover temporarily pauses movement.
Keyboard focus entering the carousel, pressing pause, or manually navigating stops automatic advancement until explicit resume.
Do not move keyboard focus as a side effect of advancing.
Respect reduced-motion preferences by disabling autoplay and sliding transitions.
Keep manual navigation functional under reduced motion.
Do not announce every automatic slide through a live region; expose position and manual changes accessibly.
Hidden slides must not leave invisible links in the keyboard tab order.

With one credential, show a static item without timer or carousel controls.
With no publishable credentials, omit the gallery and record the limitation rather than publishing placeholder credentials.
With JavaScript unavailable, all credential titles and original-document links remain available in a normal list.
An image failure must leave its title, issuer, and document link readable.
The gallery must not delay the introduction or shift the surrounding page while loading.

## Certificate storage and Drive links

Store selected optimized previews locally and maintain one local credential list.
Each entry includes a stable ID, title, verified issuer, type, optional issue/expiry date, local preview, descriptive alternative text, and an optional original-document URL.
The readable index uses compact text rows without repeated thumbnails; keep preview metadata in this canonical entry for the carousel.
Keep local source paths and verification notes in the evidence document, not in public interface text.
Use original issuer verification links when supplied and verifiable, or an individual Drive viewer link when provided and accessible to a signed-out viewer.
Open an external original in a new tab and make that behavior apparent in its accessible link label.
Review public copies for unintended sensitive details.
Do not change Drive sharing permissions or upload files without explicit authorization.

No Drive folder has been supplied.
This is a nonblocking optional enhancement: use reviewed local certificate originals as the full-size document destinations for this release.
If a Drive original is restricted or unverified, use a local public copy when appropriate, otherwise omit that original link and retain the preview and metadata.
Never invent Drive file IDs, hotlink guessed thumbnails, or embed a Drive login flow.
Adding a future certificate requires updating the local credential list and deploying again.

## Source review

Use these paths relative to the WEBSITE repository:
- Updated resume: ../../01-DOCUMENTS/02 RESUME/Lenard-Olajay-Resume-Updated.docx and its PDF counterpart.
- Certificates: ../../01-DOCUMENTS/00 CERTIFICATES/
- Existing public profile: ../GITHUB/len-build-it/README.md
- Existing project or event images: ../GITHUB/len-build-it/

The ../../01-DOCUMENTS/01 IDS/ directory contains private identity material and is not a publishable asset collection.
Do not bulk-copy the parent document folders.
Use the latest supplied resume as the initial content source, reconcile conflicts with the profile, and omit uncertain claims while recording the gap.
A headshot is optional; default to text-only rather than blocking progress on photo selection.
Record which source supports each substantive project claim and credential in docs/evidence/FEAT-001-verification.md.
Do not treat a local self-description as independent verification.

## Requirements and acceptance criteria

| ID | Required behavior | Observable criterion |
| --- | --- | --- |
| REQ-001 | Immediate identity and value | At 390x844 and 1440x900 at normal text size, name, accurate role, short positioning, and primary resume/contact links are visible before scrolling; no oversized hero pushes them down. |
| REQ-002 | Scan and navigate | Descriptive section anchors reach builds, background, credentials, and contact; project evidence precedes the long biography; headings alone convey the page's structure. |
| REQ-003 | Explain capabilities | The introduction and supported project/leadership content explain what Lenard contributes without duplicated generic capability sections. |
| REQ-004 | Show project evidence | Every featured build states purpose, personal contribution, stack, and supported status or omits unknown status; no fabricated outcome, rank, or demo. |
| REQ-005 | Show qualifications and resume | Verified education and typed credentials are readable; the resume link opens the reviewed public PDF; duplicate scans do not become duplicate achievements. |
| REQ-006 | Direct contact | All supplied destinations match the contact inventory; email uses mailto; primary links appear near the introduction. |
| REQ-007 | Restrained presentation | White canvas, near-black text, restrained borders, and consistent readable spacing; the certificate carousel is the only automatic motion. |
| REQ-008 | Mobile and accessibility | Meet the specific viewport, text enlargement, touch target, keyboard, contrast, and navigation checks in shared constraints. |
| REQ-009 | Privacy and maintenance | Only reviewed public assets ship; no private ID files, secrets, runtime Drive API, analytics, or submitted visitor data. |
| REQ-010 | Discover credentials | Every published credential title and original link when available is reachable in a readable list without waiting for autoplay. |
| REQ-011 | Controlled carousel | Verify six-second visible autoplay, explicit pause/resume, focus/manual stop, offscreen/background pause, reduced motion, one/zero items, and stable focus. |
| REQ-012 | Original documents | Each original link matches its preview; Drive links are optional and require public-view checks; absent Drive access uses reviewed local originals or leaves the link absent. |
| REQ-013 | Social coverage | All six contact destinations above appear with descriptive labels; long email and social rows wrap without horizontal overflow. |
| REQ-014 | Useful loading and failure behavior | Intro text and links render without JavaScript; images below the fold load lazily with reserved space; broken images preserve labels and links. |
| REQ-015 | Ten-second comprehension | Propose a timed first-view check with three unfamiliar readers: at least two identify the discipline, one concrete build/contribution, and contact/resume access; record real results or Pending, never infer success from layout alone. |
| REQ-016 | Personal-name search identity | Initial production HTML contains a full-name title, accurate description, one visible full-name H1, absolute canonical URL, and valid WebSite/ProfilePage/Person JSON-LD matching visible content and supplied social profiles. |
| REQ-017 | Crawl discovery and sharing | Production serves robots.txt and a one-page XML sitemap using the supplied HTTPS homepage; Open Graph metadata uses the same URL and existing portrait; no indexing block is introduced. |
| REQ-018 | Honest search delivery | Document deployment and Search Console verification/indexing steps, distinguish local checks from live search results, and make no first-place, indexing, or rich-result guarantee. |

## Current visual acceptance

Apply VIS-001 through VIS-009 in [DESIGN.md](../product/DESIGN.md) alongside REQ-001 through REQ-015.
Preserve all 16 currently published credential records and the three featured builds.
If old source-oriented tests assert superseded title punctuation or markup, update those assertions while preserving actual content and link coverage.
The redesign is not complete from a successful build alone; visual comparison and measured mobile checks are required.

## Readiness and continued execution

No further routine approval is required to implement this scope.
Missing Drive links, optional imagery, unknown dates, unavailable social previews, and unavailable human scan-test participants do not block completing the page.
Omit unsupported optional content and report the limitation.
See ../product/ARCHITECTURE.md, ../product/CONSTRAINTS.md, and ../plans/FEAT-001-implementation.md.
