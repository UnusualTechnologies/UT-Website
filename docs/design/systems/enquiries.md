# Enquiries

Serves: (the site's main goal: prospects get in touch)
Code: `layouts/contact/`, `layouts/ideas/`, `layouts/partials/email-link.html`, `layouts/partials/flip-box.html`, `data/contact_ctas.yaml`, `static/js/ideas.js`, `apps-script/`, `hugo.toml` `[params]`
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

## Design

> Draft, needs review by Douglas Kelly

**Contact** (`/contact/`)
- Phone number as a `tel:` link.
- Email address hidden until clicked (to deter scrapers), with a plain `mailto:` fallback when JavaScript is off.
- Three cards from `data/contact_ctas.yaml`: Submit an idea (`/ideas/`), Book a meeting, Careers (`/careers/`).
- "Book a meeting" opens a Google Calendar appointments page (Douglas Kelly, 2026-11-26, confirmed as intended).

**Ideas** (`/ideas/`)
- A form: own idea or matchmaking, your details, their details, the idea, optional details. A hidden honeypot field catches bots.
- Submissions post to a Google Apps Script (`params.ideasFormURL`; source in `apps-script/`).
- An "AI feedback: Coming soon" placeholder. The leaderboard is commented out, so `data/leaderboard.yaml` is unused.

**Other entry points**
- Health Tech's contact form opens the visitor's email app (see [service-pages](service-pages.md)).
- The footer shows the email (revealed on click), phone, LinkedIn and YouTube on every page except Home.
- About links to Contact and Ideas.

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Email | hello@unusualtechnologies.com | `hugo.toml` `params.email` | |
| Phone | (see file) | `hugo.toml` `params.phone` | |
| Booking link | Google Calendar appointments URL | `data/contact_ctas.yaml` `url` | Overrides `params.koalendarURL` |
| Koalendar URL | set, unused in practice | `hugo.toml` `params.koalendarURL` | Only used if the card's `url` is empty |
| Questionnaire URL | set, unused | `hugo.toml` `params.questionnaireURL` | No template uses it |
| Ideas form endpoint | Google Apps Script | `hugo.toml` `params.ideasFormURL` | |

## Tried & rejected

## Open questions

- Should `params.koalendarURL` and `params.questionnaireURL` be removed, since nothing uses them? (bootstrap, 2026-11-26)
