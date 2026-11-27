# Search and AI visibility

Serves: Machine-readable by default; Facts over adjectives
Code: `layouts/_default/baseof.html` (head), `layouts/404.html`, `layouts/partials/structured-data.html`, `layouts/robots.txt`, `static/llms.txt`, `layouts/_default/single.markdown`, `static/_headers`, `hugo.toml` (`[sitemap]`, `[outputFormats]`, `[outputs]`)
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

The site's first job is to be found by search engines and recommended by AI assistants; convincing visitors comes second (Douglas Kelly, 2026-11-26).

Planned, agreed and not built yet:
- Video descriptions or transcripts beside each video, in a "Read video description" toggle that stays in the page HTML (Douglas Kelly, 2026-11-26).
- `VideoObject` structured data for case-study videos, and captions on the YouTube videos themselves (Douglas Kelly, 2026-11-26).
- Service pages that answer "who builds X for Y" queries (see [service-pages](service-pages.md)).

## Design

> Draft, needs review by Douglas Kelly

**Page head**
- Title: "Page - Unusual Technologies"; the homepage uses the site title alone.
- Meta description: the page's `description`, else the project's `overview`, else the site description.
- Canonical URL, Open Graph and Twitter card tags (image: `featured_image`, else the logo).

**Structured data (JSON-LD)**
- `Organization` on the homepage (address, email, phone, LinkedIn, YouTube).
- `CreativeWork` on each case study.
- `WebPage` on every page.

**Addresses**
- One address: `www.unusualtechnologies.com` redirects (301, path and query kept) to `https://unusualtechnologies.com` via a Cloudflare redirect rule (Douglas Kelly, 2026-11-27, so search engines see one copy of each page; the CMS sign-in also only allows the main address).
- Unknown addresses get a real 404 status and a "Page not found" page with links to Projects, About, Contact and Home (`layouts/404.html`), instead of the homepage with a 200 (Douglas Kelly, 2026-11-27, avoids Google "soft 404s").

**Crawlers**
- `robots.txt` allows everything except `/admin/`, explicitly allows the main AI crawlers (GPTBot, Google-Extended, ClaudeBot, Applebot-Extended, PerplexityBot, Amazonbot, FacebookBot), and links the sitemap.
- Only the live domain may be indexed: a build with any other base URL gets `noindex, nofollow` (Douglas Kelly, 2026-11-26, staging copies would compete with the live site). Cloudflare preview addresses (`*.ut-hugo-site.pages.dev`) are built with the live base URL, so they rely on Cloudflare's own `X-Robots-Tag: noindex` header instead; `dev.unusualtechnologies.com` gets the same header from a zone response-header rule.
- `llms.txt` is a hand-written summary of the company, services, key pages and selected projects.
- Every regular page also has a Markdown copy (`index.md` beside `index.html`): title, description (else `overview`), client, key facts, technologies, video link, video description, client quote, then the body. Shortcodes in the body appear as raw text.
- `static/_headers` advertises `llms.txt`, the sitemap and RSS in `Link` headers.
- Sitemap: Hugo default.

**Accessibility that also feeds search and AI**
- All case-study body images have descriptions (see [case-studies](case-studies.md)).

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Indexable domain | https://unusualtechnologies.com | `layouts/_default/baseof.html` | Any other base URL gets noindex |
| www redirect | 301 to https://unusualtechnologies.com | Cloudflare zone redirect rule "www to main address" | |
| Allowed AI crawlers | 7 named | `layouts/robots.txt` | |
| Sitemap change frequency / priority | monthly / 0.5 | `hugo.toml` `[sitemap]` | |
| Markdown copies | regular pages only | `hugo.toml` `[outputs]` | Home and section pages have none |
| Site description | (see file) | `hugo.toml` `params.description` | Fallback meta description |
| Analytics | Umami, production only | `layouts/_default/baseof.html` | `umami.unusualtechnologies.com` |

## Tried & rejected

## Open questions

- `llms.txt` is maintained by hand and lists 7 projects. Generate it from content instead? (bootstrap, 2026-11-26)
- The Markdown copies show shortcodes such as `{{% carousel %}}` as raw text. Strip them? (2026-11-26)
- JSON-LD values are not escaped, so a quote mark in an overview could break it. (bootstrap, 2026-11-26)
- 35 of 37 projects have no `description`; they rely on `overview`. (bootstrap, 2026-11-26)
