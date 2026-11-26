# UT Website: Vision

<!--
Owned by the product owner / designer. Anyone may change this page, but agents
first flag who made the existing decision and when (see the design-docs skill).
Target: 150 lines or fewer.

Writing rules:
- Every sentence carries design information. "The user can…", not "The user will be able to…".
- No marketing language. Concrete behaviour, numbers and tables over prose.
- Current state only; history goes in system pages' "Tried & rejected".
- Traceability: Vision → Principles → Key user flows → Systems → Values.
-->

## Pitch

> Draft, needs review by Douglas Kelly

The public website of Unusual Technologies, a Brighton creative technology studio: it shows the work (case studies) so that search engines, AI assistants and prospective clients understand what UT builds and get in touch.

## Problem & who it's for

> Draft, needs review by Douglas Kelly

| Audience | What they need from the site |
|---|---|
| AI assistants and search engines | Plain, factual text about what UT does, for whom, with what results, so they can recommend UT when asked (Douglas Kelly, 2026-11-26) |
| Academics and health researchers applying for grants | Health and research case studies showing co-design, accessibility and delivery with universities and the NHS (Douglas Kelly, 2026-11-26) |
| Clients wanting high-end real-time visuals | Visual proof of realism and quality, e.g. OceanX (Douglas Kelly, 2026-11-26) |
| Entertainment and mini-game clients | Playable, fun examples, e.g. Mere Mortals, Seaweeds' Scrambled Spell (Douglas Kelly, 2026-11-26) |
| Museums and visitor attractions | Installations and exhibits, e.g. RAF Museum, LEGO Playtables |
| Job seekers and interns | Open roles and how to apply |

Staff often send a specific page to a specific prospect, so pages must stand on their own (Douglas Kelly, 2026-11-26).

## Goals & success measures

> Draft, needs review by Douglas Kelly

- First: being found and recommended by search engines and AI assistants. Second: convincing visitors who land on a page (Douglas Kelly, 2026-11-26).
- Every case study has a video, a video description or transcript, and a client quote (Douglas Kelly, 2026-11-26).
- Success measures: none recorded yet (see Open questions).

## Principles

> Draft, needs review by Douglas Kelly

### Specialists who learn the client's field
This means: across all work, the site shows that UT learns new, complex industries quickly and well and builds for them, e.g. healthcare in Co-Cog. Case studies say what we learned about the field and who we learned it from (Douglas Kelly, 2026-11-26).
This does NOT mean: claiming to be experts in the client's field from day one.

### Show, then tell
This means: case studies lead with video and images; the detailed write-up sits lower on the page in short, headed sections (Douglas Kelly, 2026-11-26).
This does NOT mean: removing text. A short factual summary and key facts stay at the top, because search engines and AI assistants weigh the opening text most.

### Machine-readable by default
This means: anything shown only in a video or image (results, numbers, client names) is also written as text on the page: descriptions for images, video descriptions or transcripts, structured data.
This does NOT mean: hidden text written only for bots. The text must be useful to a person reading it, including screen-reader users.

### Facts over adjectives
This means: named clients, numbers, places, outcomes and quotes.
This does NOT mean: inventing or rounding up claims. Every fact must be checkable against the project.

## Key user flows

> Draft, needs review by Douglas Kelly

1. A prospect follows a link a staff member sent → lands on a case study or (planned) service page → watches the video → reads key facts → contacts UT.
2. A visitor browses Projects → filters by tags → opens a case study.
3. An AI assistant or search engine crawls the site (HTML, `llms.txt`, Markdown copies of pages) → cites UT in an answer.
4. A job seeker opens Careers → reads a role → emails an application.

## Constraints

> Draft, needs review by Douglas Kelly

- Static Hugo site; no server-side code or database. Hosted on Cloudflare Pages; every push to `main` goes live.
- Editors change content through Sveltia CMS, which commits directly to `main`.
- UK company: UK GDPR applies; UK English.

## Out of scope

## Open questions

- How will success be measured (enquiries, AI citations, rankings), and where is it tracked? Umami analytics is installed. (bootstrap, 2026-11-26)
