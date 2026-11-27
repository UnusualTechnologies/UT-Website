# Editing and publishing

Serves: (how staff change the site)
Code: `static/admin/config.yml`, `.github/workflows/`, `hugo.toml`, `CLAUDE.md`
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

All changes are reviewed on a dev version of the site before they go live; only a person promotes `dev` to `main` (Douglas Kelly, 2026-11-26).

Cloudflare builds the `dev` branch as the review version of the site at https://dev.ut-hugo-site.pages.dev, replacing the GitHub Pages staging site (Douglas Kelly, 2026-11-27).

## Design

> Draft, needs review by Douglas Kelly

**Editing (Sveltia CMS at `/admin/`)**
- Editors sign in with GitHub; every save is a commit straight to `main`, which goes live.
- Editable collections: projects, job listings, team members, legal pages, and site data (team, clients, awards, testimonials, values, leaderboard, contact cards, Careers page text).
- Not editable in the CMS: `hugo.toml` (contact details, links, menus, booking URLs) and the copy of Home, About, Contact, Concept and Design and Health Tech, which is in templates.

**Publishing**
- Live: Cloudflare Pages builds every push to `main` with `hugo --minify` and serves https://unusualtechnologies.com.
- Review site: Cloudflare Pages (project `ut-hugo-site`) builds every non-`main` branch as a preview. `dev` is always at https://dev.ut-hugo-site.pages.dev; other branches at `https://<branch>.ut-hugo-site.pages.dev`. Cloudflare sends `X-Robots-Tag: noindex` on all preview addresses.
- Preview builds use the live base URL, so canonical and social-preview links on the review site point at unusualtechnologies.com; in-site links stay on the preview.
- Branches: work merges into `dev`, the review version; Douglas pushes `dev` to `main` when happy, which makes it live (Douglas Kelly, 2026-11-26).
- CMS saves bypass `dev` and go straight to `main`.

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Live build command | `hugo --minify` | Cloudflare Pages settings | Output folder `public` |
| Hugo version (Cloudflare) | 0.157.0 | Cloudflare Pages env var `HUGO_VERSION` (production and preview) | Local machines may run newer, e.g. 0.163 |
| Preview branches | all except `main` | Cloudflare Pages project settings | |
| CMS backend | GitHub, commits to `main` | `static/admin/config.yml` | |

## Tried & rejected

- GitHub Pages staging site (`health-science` branch, unusualtechnologies.github.io/UT-Website): replaced by Cloudflare previews of `dev`, which use the same host and build as the live site; switched off and its workflow removed (Douglas Kelly, 2026-11-27)

## Open questions

- CMS edits commit straight to `main`, so they skip review on `dev` and `dev` falls behind. Point the CMS at `dev` instead? (bootstrap, 2026-11-26)
- Cloudflare builds with Hugo 0.157.0, older than local machines (0.163). Raise it so local and live builds match? (2026-11-27)
