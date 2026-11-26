# Editing and publishing

Serves: (how staff change the site)
Code: `static/admin/config.yml`, `.github/workflows/gh-pages.yml`, `hugo.toml`, `CLAUDE.md`
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

All changes are reviewed on a dev version of the site before they go live; only a person promotes `dev` to `main` (Douglas Kelly, 2026-11-26).

Planned: Cloudflare builds the `dev` branch as the review version of the site, replacing the GitHub Pages staging site (Douglas Kelly, 2026-11-26, awaiting confirmation from Matt West).

## Design

> Draft, needs review by Douglas Kelly

**Editing (Sveltia CMS at `/admin/`)**
- Editors sign in with GitHub; every save is a commit straight to `main`, which goes live.
- Editable collections: projects, job listings, team members, legal pages, and site data (team, clients, awards, testimonials, values, leaderboard, contact cards, Careers page text).
- Not editable in the CMS: `hugo.toml` (contact details, links, menus, booking URLs) and the copy of Home, About, Contact, Concept and Design and Health Tech, which is in templates.

**Publishing**
- Live: Cloudflare Pages builds every push to `main` with `hugo --minify` and serves https://unusualtechnologies.com.
- Staging: pushes to the `health-science` branch deploy to GitHub Pages at https://unusualtechnologies.github.io/UT-Website/, which is hidden from search engines (see [search-and-ai-visibility](search-and-ai-visibility.md)).
- Branches: work merges into `dev`, the review version; Douglas pushes `dev` to `main` when happy, which makes it live (Douglas Kelly, 2026-11-26).
- CMS saves bypass `dev` and go straight to `main`.

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Live build command | `hugo --minify` | Cloudflare Pages settings | Hugo version not pinned |
| Staging branch | `health-science` | `.github/workflows/gh-pages.yml` | Hugo "latest" extended |
| CMS backend | GitHub, commits to `main` | `static/admin/config.yml` | |

## Tried & rejected

## Open questions

- CMS edits commit straight to `main`, so they skip review on `dev` and `dev` falls behind. Point the CMS at `dev` instead? (bootstrap, 2026-11-26)
- Pin the Hugo version used by Cloudflare and staging, so a Hugo update can't break the live build? (bootstrap, 2026-11-26)
