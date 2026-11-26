# Site shell and navigation

Serves: (every page)
Code: `layouts/_default/baseof.html`, `layouts/partials/header.html`, `layouts/partials/footer.html`, `layouts/partials/breadcrumbs.html`, `layouts/partials/return-link.html`, `static/css/style.css`, `static/js/main.js`, `static/js/return-link.js`, `hugo.toml` `[menus]`
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

Planned, agreed and not built yet: the main menu gets a **Services** item in place of "Concept and Design" (Douglas Kelly, 2026-11-26; see [service-pages](service-pages.md)).

## Design

> Draft, needs review by Douglas Kelly

- The whole site uses a dark theme, except Health Tech, which is light. There is no theme toggle.
- **Main menu** (header): Projects, Concept and Design, About, Contact.
- **Footer**, every page except Home: email (revealed on click), phone, LinkedIn, YouTube, copyright year, Privacy Policy, Terms.
- A footer menu (Home, Projects, About, Contact, Careers) is defined in `hugo.toml` but not shown. Left as is until the artist's visual pass (Douglas Kelly, 2026-11-26).
- Breadcrumbs on every page except Home and Health Tech.
- "Back to Health Tech Page" link: shown on other pages only to visitors who have visited Health Tech (remembered in the browser's localStorage).
- Fonts load from Google Fonts. CSS and JavaScript URLs carry a content hash so browsers fetch new versions after changes.
- three.js (r128, from cdnjs) loads on every page.

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Main menu | Projects (20), Concept and Design (30), About (40), Contact (50) | `hugo.toml` `[[menus.main]]` | Number is the order weight |
| Footer menu | Home, Projects, About, Contact, Careers | `hugo.toml` `[[menus.footer]]` | Not rendered |
| Dark theme colour | #1d1d1f | `layouts/_default/baseof.html` | `theme-color` |
| Light theme colour | #F7F3EC | `layouts/_default/baseof.html` | Health Tech only |

## Tried & rejected

## Open questions

- Which pages actually use three.js? It loads site-wide. (bootstrap, 2026-11-26)
