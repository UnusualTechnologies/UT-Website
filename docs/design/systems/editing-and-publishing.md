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

Planned: test changes on Cloudflare preview links before they go live, replacing the GitHub Pages staging site (Douglas Kelly, 2026-11-26, awaiting confirmation from Matt West).

## Design

> Draft, needs review by Douglas Kelly

**Editing (Sveltia CMS at `/admin/`)**
- Editors sign in with GitHub; every save is a commit straight to `main`, which goes live.
- Editable collections: projects, job listings, team members, legal pages, and site data (team, clients, awards, testimonials, values, leaderboard, contact cards, Careers page text).
- Not editable in the CMS: `hugo.toml` (contact details, links, menus, booking URLs) and the copy of Home, About, Contact, Concept and Design and Health Tech, which is in templates.

**Publishing**
- Live: Cloudflare Pages builds every push to `main` with `hugo --minify` and serves https://unusualtechnologies.com.
- Staging: pushes to the `health-science` branch deploy to GitHub Pages at https://unusualtechnologies.github.io/UT-Website/, which is hidden from search engines (see [search-and-ai-visibility](search-and-ai-visibility.md)).
- Work in progress goes on branches; nothing reaches `main` until approved (Douglas Kelly, 2026-11-26).

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Live build command | `hugo --minify` | Cloudflare Pages settings | Hugo version not pinned |
| Staging branch | `health-science` | `.github/workflows/gh-pages.yml` | Hugo "latest" extended |
| CMS backend | GitHub, commits to `main` | `static/admin/config.yml` | |

## Tried & rejected

## Open questions

- Pin the Hugo version used by Cloudflare and staging, so a Hugo update can't break the live build? (bootstrap, 2026-11-26)
