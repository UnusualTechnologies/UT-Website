# Careers

Serves: (recruiting staff and interns)
Code: `layouts/careers/`, `content/careers/`
Owner: Douglas Kelly

<!--
Target: 250 lines or fewer; split into more pages when larger.
Deliberate choices carry a decision stamp: (<who>, <YYYY-MM-DD>[, <why>]).
-->

## Intent

> Draft, needs review by Douglas Kelly

## Design

> Draft, needs review by Douglas Kelly

**Careers** (`/careers/`)
- Links to open roles; roles with `status: draft` or `unlisted` are left out.
- Internship text and fields of study, from `content/careers/_index.md` front matter (editable in the CMS).
- The careers email, revealed on click.
- Intern YouTube testimonials.

**Job page** (`/careers/<role>/`)
- Role description and an "Email application" button that copies the careers email.
- `status: draft` redirects to `/careers/`; `unlisted` is reachable by link only.

## Values

> Draft, needs review by Douglas Kelly

| Value | Current | Lives in | Notes |
|-------|---------|----------|-------|
| Careers email | careers@unusualtechnologies.com | `layouts/careers/list.html`, `layouts/careers/single.html` | Hard-coded in two templates, not in `hugo.toml` |
| Job statuses | live, unlisted, draft | each job's front matter | 4 roles as of 2026-11-26 |

## Tried & rejected

## Open questions
