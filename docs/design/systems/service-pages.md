# Service pages

Serves: Show, then tell; Facts over adjectives
Code: `layouts/health-tech/`, `static/css/health-tech.css`, `content/health-tech/`
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

A service page is a mini homepage for one kind of client, which staff send to a prospect of that kind (Douglas Kelly, 2026-11-26).

Planned, agreed and not built yet:
- A **Services** item replaces "Concept and Design" in the main menu; Concept and Design becomes a sub-page of Services (Douglas Kelly, 2026-11-26).
- `/services/` lists every service; each service has its own page with a curated list of case studies (Douglas Kelly, 2026-11-26).
- Services: Health and research apps; Museums and visitor attractions; Real-time 3D, digital twins and visuals; Games and playable experiences; VR and AR; AI tools and web platforms (Douglas Kelly, 2026-11-26).
- Each service page pulls its case studies from the projects automatically (title, image and summary come from the project), and which projects appear is chosen in the CMS, not in code (Douglas Kelly, 2026-11-26, so cards stay up to date when a project changes).
- The health-tech page is the model for the other service pages.

## Design

> Draft, needs review by Douglas Kelly

The only service page today is **Health Tech** (`/health-tech/`, also reached at `/health/` and `/co-design/`). It is not in any menu.

- It is the only light-themed page on the site (`data-force-theme="light"` and `static/css/health-tech.css`).
- It has no breadcrumbs.
- All copy is hard-coded in `layouts/health-tech/list.html`; editors can't change it in the CMS.
- Sections, top to bottom:
  1. Hero with "Get In Touch" (jumps to the contact form) and "Case Studies" (jumps to the projects).
  2. Client logo band (hard-coded, not from `data/clients.yaml`).
  3. Five capability cards.
  4. Four written quotes.
  5. Four case-study cards (Co-Cog, Co-Play, Breez Dental, Tale Together) with a "see all" link to `/projects/`. Their images, titles and summaries are hard-coded, so they don't update when the project changes.
  6. A four-step process and a pull quote.
  7. A contact form that opens the visitor's email app (`mailto:`), plus a plain email link.
- Visitors who have seen Health Tech get a "Back to Health Tech Page" link on every other page (see [site-shell-and-navigation](site-shell-and-navigation.md)).

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| URL and aliases | `/health-tech/`, `/health/`, `/co-design/` | `content/health-tech/_index.md` | |
| Meta description | "Accessible, gamified technology co-designed with researchers…" | `content/health-tech/_index.md` | |
| Featured case studies | co-cog, co-play, breez-dental, tale-together | `layouts/health-tech/list.html` | Hard-coded |
| Theme | Light | `layouts/_default/baseof.html`, `static/css/health-tech.css` | |

## Tried & rejected

## Open questions

- Do other service pages keep Health Tech's light theme, or follow the dark site theme? (bootstrap, 2026-11-26)
- Should the service pages' copy be editable in the CMS? (bootstrap, 2026-11-26)
