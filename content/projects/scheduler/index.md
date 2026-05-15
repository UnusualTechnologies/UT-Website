---
title: "Scheduler"
type: "projects"
project_type: "In-house"
tags: ["web", "ai", "real-time", "multi-tenant"]
prominence: -5
featured_image: "/images/projects/scheduler.jpg"
banner_image: "/images/projects/banners/scheduler.jpg"

overview: "Our in-house project management tool, built to match the way we actually work. It handles task management, time tracking, project planning through cycles, AI-assisted design tools, and real-time collaboration across the team."

technologies: ["Laravel", "AWS", "Databases", "Web", "Vue.js/React.js", "Google APIs", "AI"]

overview_video_id: "v_J1XmMdTEg"
---

## The Objective

In the company's early days, a spreadsheet was enough for managing tasks and projects. As the team grew, we looked for project management tools that could be heavily customised to match our workflows. We were also thinking about future products that would need to hook into a project management system. Building our own gave us maximum flexibility on both fronts.

The first version was prototyped with a MERN stack (React.js and MySQL). We later rebuilt it from scratch using Laravel, Livewire, and Filament, which let us iterate on ideas much faster. The application is deployed with Laravel Forge on an AWS Lightsail instance.

![](/images/projects/scheduler-tasks.png)

## Task Management

The core of the Scheduler is a custom Vue.js task sheet. Each project's tasks are organised by priority, with drag-and-drop reordering, inline editing, and per-task notes stored as structured JSON. Staff can assign tasks, set time estimates, and track hours worked against each one through a built-in time tracking system that records work periods per user.

Projects are structured around cycles, which act as milestones with defined date ranges and deliverables. This gives the team a clear view of what is being worked on now, what is coming up, and what has been delivered. The client-facing side of cycles and approvals is handled separately through our [Client Portal](/projects/client-portal/).

## Real-Time Collaboration

The Scheduler uses WebSockets via Laravel Broadcasting to keep all connected users in sync. When someone edits a task, reorders the list, or logs time, the changes are pushed to other users without a page refresh. This reduces the risk of conflicts when multiple people are working in the same project.

## AI-Assisted Design

The Scheduler includes a designer interface with an AI chat feature, powered by NeuronAI agents that can use Gemini, OpenAI, or Anthropic as providers. Designers can upload files, discuss project direction with the AI, and manage attachments, all within the context of a specific project. External designers who are not staff members can access their projects through a guest panel using tokenised links, so they do not need a full account.

## Integrations

The Scheduler connects to Google Calendar to pull in events, meetings, and holidays. This data feeds into time estimation, so project timelines account for days when team members are unavailable. It also integrates with Discord through a bot that can notify team members when tasks are flagged or completed, keeping communication in the channels the team already uses.

The backend exposes a REST API, which we use to feed project data into spreadsheets for pricing calculations and reporting. This avoids duplicating information across tools and keeps everything sourced from one place.
