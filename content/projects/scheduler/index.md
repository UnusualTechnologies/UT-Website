---
title: "Scheduler"
type: "projects"
project_type: "In-house"
tags: ["web", "ai", "real-time", "multi-tenant"]
description: "An in-house project management tool with real-time collaboration, built in Laravel and deployed on AWS."
prominence: 3
featured_image: "/images/projects/scheduler.jpg"
banner_image: "/images/projects/banners/scheduler.jpg"

overview: "An in-house software for internally managing tasks and tracking project progress. It will serve as a groundwork for innovative project planning in the near future."

technologies: ["Laravel", "AWS", "Databases", "Web", "Vue.js/React.js", "Google APIs"]

overview_video_id: "v_J1XmMdTEg"
---

## The Objective

There are many project management software tools to pick from, but we found a spreadsheet to be most useful in the company's early days. As we expanded, the need for a project management tool grew and we started to look for ones that allowed heavy customisation to reflect our practices. We were simultaneously talking about future products we could release that would need to hook into a project management system. This led us to the decision that we should make our own to give us maximum future flexibility.

It was built as a website and was initially prototyped in a MERN tech stack, using React.js and a MySQL database. However, we later restarted with a v2 and decided instead to go with a TALL tech stack (Tailwind, Alpine.js, Laravel, and Livewire) with Filament to very quickly prototype, iterating ideas using its powerful suite of features.

Deployed with Laravel Forge, the whole application is hosted in an AWS Lightsail instance.

![](/images/projects/scheduler-tasks.png)

## Real-Time Networking

Similarly to applications like Google Sheets, the scheduler uses web sockets to support real-time communication between users. This allows users to be up-to-date without needing to refresh their page, and also reduces the risk of data conflicts, such as with two users editing the same task or rearranging tasks at the same time.

At the moment these web socket broadcasts happen on certain events, such as when you finish editing an input but in the future, it will also allow users to see which tasks a different user has selected and potentially support completely real-time updates. This allows users to see others in real-time.

## API Integration

We also use other tools to help manage our time. Google calendar is used to track events, meetings and holidays, as well as milestones and target dates. As such, the scheduler integrates with Google APIs in order to use this data intelligently and take events and holidays into account when calculating time estimates for projects.

This link is automated using the email that was used to create the scheduler account. The scheduler also utilises Discord APIs through a bot, allowing us to flag a task on Scheduler, notify the user on Discord, or notify users when a certain task has been completed. This helps with communication and clarity when talking about tasks in Discord, our preferred means of team communication.

## Importing & Exporting Data

The backend of the application was also designed to act as a public-facing REST API, allowing us to develop applications that can read and write data to and from the scheduler. One use case for this is spreadsheets that can read information, such as time estimates to complete projects. This allows us to utilise the power of sheets to calculate more complex and customisable pricing for clients, without duplicating information and risking using out-of-date data.

It also works for writing data, allowing us to build smaller utility applications in the future to, for example, create bug tasks through a bug-reporting discord bot.
