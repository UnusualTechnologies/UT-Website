# UT Website: Design docs

<!-- The index. Target: 60 lines or fewer. Agents read this first, then only the pages they need. -->

## Reading order

1. [Vision](vision.md)
2. The system pages below, in the order listed.

## Pages

- [Vision](vision.md): who the site is for, goals (search and AI visibility first), principles, key flows.
- [Case studies](systems/case-studies.md): projects grid, case-study page layout, statuses, images and video.
- [Service pages](systems/service-pages.md): Health Tech today; the planned Services section.
- [Search and AI visibility](systems/search-and-ai-visibility.md): head tags, structured data, robots, llms.txt, Markdown copies, noindex for non-live builds.
- [Company pages](systems/company-pages.md): Home, About, team profiles, Concept and Design, legal.
- [Enquiries](systems/enquiries.md): Contact, booking, Ideas form, email and phone.
- [Careers](systems/careers.md): job listings, internships, applications.
- [Site shell and navigation](systems/site-shell-and-navigation.md): theme, menus, footer, breadcrumbs, return link.
- [Editing and publishing](systems/editing-and-publishing.md): CMS, live deploys, staging.

Related working lists (not design pages): [case-study audit](../case-study-audit.md), [artist pass](../artist-pass.md).

## Code-path map

| Code path | Page |
|-----------|------|
| `layouts/projects/`, `content/projects/`, `layouts/_default/_markup/`, `layouts/shortcodes/`, `static/js/projects-filter.js`, `static/js/carousel.js` | [Case studies](systems/case-studies.md) |
| `layouts/health-tech/`, `content/health-tech/`, `static/css/health-tech.css` | [Service pages](systems/service-pages.md) |
| `layouts/partials/structured-data.html`, `layouts/404.html`, `layouts/robots.txt`, `static/llms.txt`, `layouts/_default/single.markdown`, `static/_headers`, head of `layouts/_default/baseof.html` | [Search and AI visibility](systems/search-and-ai-visibility.md) |
| `layouts/index.html`, `layouts/about/`, `layouts/team/`, `layouts/concept-and-design/`, `layouts/privacy-policy/`, `layouts/terms-and-conditions/`, `data/team.yaml`, `data/clients.yaml`, `data/testimonials.yaml`, `data/awards.yaml`, `data/values.yaml` | [Company pages](systems/company-pages.md) |
| `layouts/contact/`, `layouts/ideas/`, `data/contact_ctas.yaml`, `static/js/ideas.js`, `apps-script/`, `layouts/partials/email-link.html`, `layouts/partials/flip-box.html` | [Enquiries](systems/enquiries.md) |
| `layouts/careers/`, `content/careers/` | [Careers](systems/careers.md) |
| `layouts/_default/baseof.html`, `layouts/partials/` (header, footer, breadcrumbs, return-link), `static/css/style.css`, `static/js/main.js`, `static/js/return-link.js`, `hugo.toml` `[menus]` | [Site shell and navigation](systems/site-shell-and-navigation.md) |
| `static/admin/`, `.github/workflows/`, `hugo.toml` | [Editing and publishing](systems/editing-and-publishing.md) |
