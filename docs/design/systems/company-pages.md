# Company pages

Serves: Show, then tell
Code: `layouts/index.html`, `layouts/about/`, `layouts/team/`, `layouts/concept-and-design/`, `layouts/privacy-policy/`, `layouts/terms-and-conditions/`, `data/team.yaml`, `data/clients.yaml`, `data/testimonials.yaml`, `data/awards.yaml`, `data/values.yaml`
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

## Design

> Draft, needs review by Douglas Kelly

**Home** (`/`, `layouts/index.html`)
- A full-screen autoplaying, muted, looping showreel video, plus intro text for screen readers only.
- No visible calls to action and no footer.

**About** (`/about/`), top to bottom:
1. Hero text with a "get in touch" link to `/contact/`.
2. Leadership team cards (`data/team.yaml`), each linking to a profile.
3. Client logos (`data/clients.yaml`).
4. Testimonial video cards (`data/testimonials.yaml`), click to play.
5. Awards (`data/awards.yaml`).
6. Values (`data/values.yaml`).
7. A Brighton map, then a "Submit an idea" card linking to `/ideas/`.

**Team profile** (`/team/<name>/`): back to About, photo, role, LinkedIn and website buttons, bio, expertise, games worked on.

**Concept and Design** (`/concept-and-design/`): hero, then four illustrated steps: Design Docs, Planning, Schematics, Development. No calls to action. Planned: moves under Services (see [service-pages](service-pages.md)).

**Privacy Policy and Terms**: title and Markdown body.

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Showreel video | Remote WebM on `website-media.unusualtechnologies.com` | `hugo.toml` `params.showreelVideo` | No poster image |
| Concept and Design steps | 4 | `layouts/concept-and-design/list.html` | Hard-coded |

## Tried & rejected

## Open questions

- The homepage has no visible text or calls to action. Is that deliberate? It gives search engines and AI little to read on the most-linked page. (bootstrap, 2026-11-26)
- The homepage copy, About, Contact and Concept and Design text are hard-coded in templates. Should editors be able to change them? (bootstrap, 2026-11-26)
