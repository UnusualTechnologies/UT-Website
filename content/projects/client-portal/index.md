---
title: "Client Portal"
type: "projects"
project_type: "In-house"
tags: ["web", "multi-tenant", "real-time"]
prominence: -4
featured_image: "/images/projects/client-portal.jpg"
banner_image: "/images/projects/client-portal.jpg"

overview: "A client-facing portal built on top of our Scheduler, giving clients a single place to review quotes, track project milestones, approve deliverables, submit bug reports, and complete tasks we need from them."

technologies: ["Laravel", "Vue.js/React.js", "AWS", "Databases", "Web"]
---

## Why We Built It

Our Scheduler handles internal project management, but the client side of that relationship was still handled through emails, calls, and shared documents. Quotes would go back and forth as PDFs. Approvals happened over email. Bug reports arrived in various formats across various channels. We wanted a single place where clients could see exactly where their project stands and take action on the things that need their attention.

The Client Portal is a multi-tenant extension of the Scheduler. Each client logs in and sees only their own project, with a dashboard tailored to what needs doing next.

## Quotes and Acceptance

When we scope a piece of work, we create a quote containing one or more cycles (milestones) and, optionally, standalone services. The quote includes a price, VAT status, and an expiry date. Clients see pending quotes on their dashboard and can drill into the detail to review what each cycle covers before accepting.

Once a client accepts a quote, the associated cycles become official and a snapshot of the agreed scope is recorded. This gives both sides a clear reference point for what was agreed, even if the cycle content evolves during delivery.

## Cycles and the Work Order

Cycles are the core unit of delivery. Each one has a name, date range, and a list of deliverables. The work order page shows all cycles for the project, laid out so clients can see what is upcoming, what is currently in progress, and what has been completed.

Both staff and clients can view and approve the content of each cycle. The portal tracks approvals from both sides independently, and if the scope changes after both parties have signed off, a new version is created automatically. This keeps an audit trail without adding manual overhead.

## Review Week and Disputes

Toward the end of each cycle, a review window opens. During this review week, clients can mark the cycle as completed (confirming the deliverables match what was agreed) or flag it as disputed if something is missing or incorrect. Disputed cycles stay open for review until the issue is resolved. The portal notifies the team when a dispute is raised so it can be addressed quickly.

## Client Requirements

Some work depends on materials or decisions from the client: brand assets, copy, access credentials, content sign-off. The portal includes a requirements tracker where we list what we need, each with a due date. Clients can mark items as complete when they have provided them, and our team then reviews and accepts each submission.

Overdue items are highlighted, and the dashboard shows a count of outstanding requirements so nothing gets buried.

## Change Requests and Bug Reports

Clients can submit two types of feedback through the portal: change requests (for scope adjustments or new ideas) and bug reports (for issues with delivered work). Each submission supports a description, expected behaviour, screenshots, and external links.

Submitted tickets go through a triage process on our side. We can approve, decline, request more information, or mark as duplicate. The status of each ticket is visible to the client throughout.

## Role-Based Access

Not every client contact needs full access. The portal supports three project-level roles:

- Approvers can accept quotes, approve cycle content, review deliverables, and manage requirements.
- Viewers have read-only access to the project's cycles, quotes, and requirements.
- Feedback-only users see a simplified dashboard with just the ability to submit change requests and bug reports.

This means a project lead can have full control while other stakeholders can follow along or contribute feedback without needing to navigate the full portal.

## What's Next

The Client Portal already handles the core approval and communication workflows we needed. Future work will focus on richer notifications, more granular permissions, and tighter integration with the Scheduler's time tracking and estimation features.
