# FEAT-001 personal-name SEO verification

Created: 2026-09-12T22:28:50+08:00
Updated: 2026-09-12T22:28:50+08:00
Requirements: REQ-016, REQ-017, REQ-018.
Source baseline: master, 5362f30, initially clean.
Public URL: https://lenardangeloolajay.onrender.com/, supplied by Len in this session.

## Setup and observed live baseline

The initial npx len-toolkit start failed because sandbox access to the npm registry was denied.
The same command succeeded with approved elevated access, installed zero files, and preserved AGENTS.md and GEMINI.md.
Compared the reported templates: the local rules contain the portfolio continuous-execution override and project-specific entry instructions; both were preserved.
Web-reader requests could not open the public URL; subsequent read-only Invoke-WebRequest checks succeeded with approved network access.
The live homepage returned HTTP 200, title "Lenard Angelo Olajay - Developer & Builder" (punctuation normalized here), no canonical tag, and no X-Robots-Tag header.
The live /robots.txt and /sitemap.xml both returned HTTP 404 before deployment of this change.
These are observed responses, not a claim about Google's current index.

## Implementation and local checks

The initial HTML now contains the full-name title/description, one canonical address, WebSite/ProfilePage/Person JSON-LD, and Open Graph metadata using the existing portrait and profile links.
Only the document head changes; visible body markup, CSS, JavaScript, dependencies, and public documents are preserved.
Static robots.txt permits crawling and links to the single-URL sitemap.
No guessed verification token, keyword stuffing, new page, or ranking claim was added.

| Check | Actual result |
| --- | --- |
| npm run build | Passed using installed Vite 6.4.3; dist HTML 38.08 kB, gzip 6.47 kB; CSS gzip 3.20 kB; JS gzip 2.48 kB. |
| npm run preview -- --host 127.0.0.1 --port 4173 --strictPort | Failed because port was already occupied. |
| Initial npm test at default address | 7 passed, 6 failed; responses came from another site, missing this site's role, bundles, portrait, and canonical metadata. |
| npm run preview -- --host 127.0.0.1 --port 4174 --strictPort | Failed because port was also occupied. |
| npm run preview -- --host 127.0.0.1 --port 4189 | Started successfully at http://127.0.0.1:4189/. |
| PowerShell: $env:PREVIEW_URL = 'http://127.0.0.1:4189'; npm test | Passed all 13 checks, zero failures. |
| PowerShell: [xml](Get-Content dist/sitemap.xml -Raw) | Parsed successfully; sole URL matches the supplied HTTPS homepage. |
| git diff --check | Passed before evidence/checkpoint preparation. |

The test-server failure was resolved by honoring the existing PREVIEW_URL convention in the remaining server test file and targeting the isolated preview.
No unrelated server was stopped or modified.
The production SEO check validates JSON parsing, entity relationships, identity links matching visible anchors, canonical/sharing URL consistency, portrait HTTP/image type, no indexing blocks, and robots/sitemap HTTP/content types and contents.
Existing tests also pass for credentials, public assets, expected content, and carousel behavior.

## Review and delivery limitations

Reviewed the source diff for factual identity, consistent absolute URLs, crawlable output, preserved visible content, and no added dependencies.
No visual screenshot was captured for this metadata-only change; previous visual evidence remains historical and was not rerun.
Local checks do not validate Render's post-deployment behavior or Google's structured-data eligibility, indexing, or rankings.
Google Rich Results Test and authenticated Search Console verification, sitemap submission, live inspection, and indexing request remain pending after deployment.
README includes these concrete follow-up steps and official Google sources.
No push, deployment, or external profile/account mutation was performed.
Checkpoint prepared with unique message: `feat(portfolio): add personal-name search metadata and crawl discovery`.
Confirm its existence and hash through Git after committing; this document does not preclaim commit success.
