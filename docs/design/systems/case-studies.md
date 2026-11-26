# Case studies

Serves: Show, then tell; Machine-readable by default; Facts over adjectives
Code: `layouts/projects/`, `layouts/_default/_markup/render-image.html`, `layouts/shortcodes/`, `static/js/projects-filter.js`, `static/js/carousel.js`, `static/js/main.js` (lazy video), `content/projects/`
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

Each case study proves one piece of UT's work to a specific kind of client, and is often sent directly to a prospect.

Planned, agreed and not built yet:
- Visuals first: video and images lead; long write-ups become short, headed sections lower on the page (Douglas Kelly, 2026-11-26).
- Top of page: a one-sentence summary (who, what, result) and a key-facts strip (client, sector, role, platform, year, headline result) (Douglas Kelly, 2026-11-26, opening text carries most weight for search and AI).
- Every case study has a video, a video description or transcript next to it, and a client quote (Douglas Kelly, 2026-11-26).
- One page per project, with sections, not separate pages per aspect (Douglas Kelly, 2026-11-26, separate thin pages compete with each other).
- Facts that only appear inside images are written into the page text; they are listed in `docs/case-study-audit.md` (Douglas Kelly, 2026-11-26).
- The exact page format, copy and look are provisional and will be finalised with an artist; drafts go straight into the project pages on `dev` for review there (Douglas Kelly, 2026-11-26).

## Design

> Draft, needs review by Douglas Kelly

**Projects grid** (`/projects/`, `layouts/projects/list.html`)
- Hero text, then a tag filter (left) and a card grid (right).
- Cards are sorted by `prominence`, highest first. `draft` and `unlisted` projects are left out.
- Each card shows `featured_image`, the title and the project's tags (hyphens shown as spaces, title-cased).
- Ticking tags hides cards that match none of them; matching cards are re-ordered by matches × prominence, and the heading changes to "Projects selected for your interests". With no tags ticked, all cards show in prominence order.
- On mobile, the tag list opens from a toggle.

**Case study page** (`layouts/projects/single.html`), top to bottom:
1. Hero: `banner_image` (else `featured_image`) behind a dark overlay, with the title. Long titles get a smaller style.
2. Overview, two columns side by side: left, the `overview` text and optional "try it" links or text; right, a YouTube video (`overview_video_id`) with an optional "Read video description" toggle (`video_description`), else `overview_image` with caption.
3. Overview details, a full-width row under both columns: a facts strip (Client, linked if `client.website` is set, then any `key_facts`), then technology badges. It sits below the columns so the text and video stay level (Douglas Kelly, 2026-11-26).
4. Visuals: the Markdown body above a `<!-- writeup -->` line (carousels, galleries, images, videos). Bodies without the line render whole here, as before.
5. Testimonial (optional): quote, video or thumbnail, then the full text folded in a closed toggle ("Read the video transcript" when there's a video, otherwise "Read the full testimonial"), then name, title, organisation. The full text stays in the page for screen readers, search engines and AI (Douglas Kelly, 2026-11-26, visitors read the quote; few will open the full text).
6. Write-up: the Markdown body below `<!-- writeup -->`, in a narrower reading column.
7. "Back to Projects" link.

**Provisional rewritten format** (Douglas Kelly, 2026-11-26, pilots: co-cog, oceanx, mere-mortals; to be finalised with an artist)
- `overview`: one sentence, answer first: who it was for, what we built, the result.
- `key_facts`: 4–5 label/value pairs, e.g. Partners, Who it's for, Our role, Platform, Timeline, Data shown. Not Client, which the page already shows.
- Visuals: images grouped into titled carousels or two-column galleries; captions only where they add meaning.
- Write-up sections, each about 80–180 words: The challenge (or The brief), What we built, one or two sections on what made it distinctive, How we worked, Technology (a table), Questions (2–3 short Q&As).
- Every claim comes from the page, Cortex or the images; anything unconfirmed is left out.

**Status**

| `status` | Grid | Page |
|---|---|---|
| `live` | Shown | Shown |
| `unlisted` | Hidden | Shown to anyone with the link |
| `draft` | Hidden | Shows "This project isn't available" and redirects to `/projects/` |

**Images and video**
- Markdown image text is the image description (`alt`); the Markdown title is the visible caption. Images without a title have no caption (Douglas Kelly, 2026-11-26, so descriptions can be added without putting text under every image).
- All 215 body images have descriptions (2026-11-26).
- Body images are never shown larger than their real pixel size, in carousels or elsewhere; small ones sit centred at full sharpness (Douglas Kelly, 2026-11-26, stretched WordPress thumbnails looked blurry). The render hook reads each image's size and adds width and height. Larger replacements are on the artist list.
- Body images load lazily. Self-hosted videos are silent, autoplaying loops that load only when scrolled near (`static/js/main.js`).
- Animations are served as MP4 loops, not large GIFs; small pixel-art GIFs stay as GIFs (Douglas Kelly, 2026-11-26, the OceanX Digital Twin GIFs went from 86 MB to 3.7 MB).
- Carousels show 3 items at a time, wrap around, and open a lightbox on click.

**Structured data**: each case study outputs `CreativeWork` JSON-LD from `overview`, `featured_image` and `client` (see [search-and-ai-visibility](search-and-ai-visibility.md)).

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Filterable tags | 45, hard-coded | `layouts/projects/list.html` | Tags used in content but not in this list can't be filtered on (e.g. `attraction`) |
| Grid sort | `prominence`, descending | `layouts/projects/list.html`; per project `prominence` | Negative values push a project to the end |
| Long-title threshold | 25 characters | `layouts/projects/single.html` | Adds the `long-title` class |
| Hero overlay | rgba(0,0,0,0.75) | `layouts/projects/single.html` | |
| Carousel items visible | 3 | `static/js/carousel.js` | Buttons hide with 3 or fewer items |
| Lazy video margin | 200px | `static/js/main.js` | Videos start loading this far before they scroll into view |
| Projects | 37 (35 live, 1 unlisted, 1 draft) | `content/projects/` | As of 2026-11-26 |

## Tried & rejected

## Open questions

- Video descriptions for the pilots are not written yet: they need someone to watch each video, or the files. (Douglas Kelly, 2026-11-26)

- `project_type` (Client / In-house / Prototype) is set on every project but not shown anywhere. Should it be? (bootstrap, 2026-11-26)
- Should the tag filter list come from the tags actually used, rather than a hard-coded list? (bootstrap, 2026-11-26)
- There is no projects archetype, so new projects don't start with `status` or `prominence`. Add one? (bootstrap, 2026-11-26)
