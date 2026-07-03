# Unusual Technologies Website

The company website for [Unusual Technologies](https://www.unusualtechnologies.com/), built with Hugo (a static site generator) and Sveltia CMS (a visual content editor).

The site is a collection of files — text, images, and configuration — that Hugo compiles into a finished website. There is no database, no server-side code, and no login system for the site itself. Content is managed either through the Sveltia CMS visual editor or by editing files directly (with AI assistance or by hand).

## How the site is structured

```
UT-Website/
├── content/            Pages and project case studies (Markdown files)
│   ├── _index.md       Homepage
│   ├── about/          About page
│   ├── contact/        Contact page
│   ├── concept-and-design/  Process page
│   └── projects/       One folder per project (31 currently)
│       ├── oceanx/
│       │   └── index.md
│       ├── co-cog/
│       │   └── index.md
│       └── ...
├── data/               Shared data used across pages (YAML files)
│   ├── team.yaml       Team members
│   ├── clients.yaml    Client logos
│   ├── awards.yaml     Awards
│   ├── testimonials.yaml  Video testimonials
│   ├── values.yaml     Company values
│   └── contact_ctas.yaml  Contact page buttons
├── static/             Files served as-is (images, CSS, JS)
│   ├── images/         All images
│   ├── css/style.css   Stylesheet
│   ├── js/             JavaScript
│   └── admin/          CMS editor (see below)
├── layouts/            HTML templates that control how pages look
├── hugo.toml           Site-wide settings (title, URLs, contact info)
└── README.md           This file
```

### What each content type is for

| Content | Where it lives | What it controls |
|---------|---------------|-----------------|
| Projects | `content/projects/*/index.md` | Individual project case study pages and the projects grid |
| Team | `data/team.yaml` | Team member cards on the About page |
| Clients | `data/clients.yaml` | Client logo row on the About page |
| Awards | `data/awards.yaml` | Awards section on the About page |
| Testimonials | `data/testimonials.yaml` | Video testimonial cards on the About page |
| Values | `data/values.yaml` | "Our Values" section on the About page |
| Contact CTAs | `data/contact_ctas.yaml` | The three flip-box buttons on the Contact page |
| Site settings | `hugo.toml` | Site title, email, phone, social links, booking URLs |


## Managing content with the CMS

The site includes [Sveltia CMS](https://github.com/sveltia/sveltia-cms), a visual content editor that runs in your browser. It gives you a form-based interface for editing projects, team members, testimonials, and other content — no coding required.

### How to open the CMS locally

1. Install Hugo if you haven't already (see [Development setup](#development-setup) below)
2. Start the local server:
   ```
   hugo server
   ```
3. Open **http://localhost:1313/admin/** in **Chrome** or **Edge** (other browsers won't work for local editing)
4. The CMS will ask for permission to access your project folder — grant it and point it to the `UT-Website` directory
5. You'll see a dashboard with all editable content

### How to open the CMS on the live site

Once the site is deployed (see [Deployment](#deployment)), go to:

```
https://www.unusualtechnologies.com/admin/
```

You'll be asked to sign in with GitHub. Your GitHub account needs write access to the `UnusualTechnologies/UT-Website` repository. When you save changes in the CMS, it creates a commit on the `main` branch, which triggers a rebuild and deploy automatically.

### What you can edit in the CMS

**Projects** — Full case study pages. Each project has:
- Title, project type (Client / In-house / Prototype), and tags
- Prominence score (controls sort order on the projects page — higher number = appears first)
- Featured image (the card thumbnail on the projects grid)
- Overview text, YouTube video ID, and technologies used
- Client details, testimonial quote, and a full rich-text body with images

**Site Data** — Shared content used across pages:
- Team members (name, role, photo)
- Clients (name, logo)
- Awards (name, image)
- Testimonials (name, title, video link)
- Values (title, description)
- Contact CTAs (title, description, link)

### Adding a new project

1. Open the CMS and go to **Projects**
2. Click **New Project**
3. Fill in at least: Title, Project Type, Tags, Prominence, and Featured Image
4. Write the case study in the **Body** field using the rich text editor
5. To add images within the body, use the image button in the editor toolbar
6. To add a caption to an image, put the caption text in the image's alt text field — it will appear as a caption on the page
7. Save

The project will appear on the `/projects/` page, sorted by its prominence score.

### Editing site settings

Some settings live in `hugo.toml` and are **not** editable through the CMS. These include:

- Site title and description
- Email address and phone number
- Social media URLs (LinkedIn, YouTube)
- Questionnaire and booking URLs
- Navigation menu items

To change these, edit `hugo.toml` directly (see [Editing files with AI](#editing-files-with-ai) or [Editing files by hand](#editing-files-by-hand)).


## Managing content with AI

If you use [Claude Code](https://claude.com/claude-code) (the tool that built this site), you can ask it to make changes in plain English. Open a terminal in the project folder and run `claude`, then ask for what you want.

Examples of things you can ask:

- *"Add a new project called Solar Explorer with tags game and unity, prominence 25, and use solar-explorer.webp as the featured image"*
- *"Change Douglas's role to Managing Director"*
- *"Add a new client called Acme Corp with the logo at /images/clients/acme.png"*
- *"Update the phone number to +44 12345 67890"*
- *"Add a new testimonial for Sarah, CEO of TechCo, with video link https://youtu.be/abc123"*
- *"Change the prominence of the OceanX project to 100 so it appears first"*

The AI will edit the relevant files and you can preview the changes with `hugo server`.


## Requesting code changes via GitHub issues

The site repository has Claude wired into GitHub Actions. The way to request a code change — a new feature, a layout tweak, a new field on project pages — is to write a GitHub issue and tag `@claude` in a comment. Claude reads the codebase, makes the change, and opens a pull request for a human to review.

New issue URL: https://github.com/UnusualTechnologies/UT-Website/issues/new

### Step 1: Open a new issue

Go to the repo, click **Issues**, then **New issue**. Give it a clear title and describe what you want in plain English. Be specific about behaviour — what's optional, what it looks like, where it appears.

**Example:**

Title: `Add optional video field to project pages`

Description:
> Project pages should optionally display a video. If a project's front matter includes a `video` URL, show a responsive embedded player beneath the description. If no URL is provided, nothing should render — no empty space or placeholder.

### Step 2: Tag @claude in a comment

Post a comment on the issue with `@claude` and your instruction. This is where you can be more directive about implementation if you want.

> @claude please implement this. Add a `video` field to the project archetype and update the single layout template to conditionally render it. Use a responsive 16:9 wrapper. Support YouTube and Vimeo URLs.

You don't need to know which files to edit — Claude will find them. Hints help it stay aligned with your intent.

### Step 3: Wait for the pull request

Claude will read the repo, make the changes, and open a PR linked back to the issue. This usually takes a minute or two. You'll get a GitHub notification when it's ready. Check the PR, look at the diff, and if there's a preview deployment, check it there too.

### Step 4: Iterate or approve

If something needs changing, leave a comment on the PR tagging `@claude` with the correction. It will amend the branch and update the PR.

> @claude the wrapper div needs `max-width: 800px` and should be centred. Also add a caption field below the player if `video_caption` is set in front matter.

When you're happy, a senior dev will merge it. Don't merge your own PRs.

### Tips for writing good issues

- Describe the behaviour you want, not the implementation — Claude knows the code better than you do at this stage.
- Mention the edge case: "if no video is set, nothing should render" is the kind of detail that prevents a half-done PR.
- One issue per change. Don't bundle unrelated tasks — it makes review harder and gives Claude less clarity.
- Don't paste full code into issues unless you're fixing a specific snippet — it can confuse Claude about what's already been decided.
- Don't approve or merge your own PRs, even if the diff looks right to you.


## Editing files by hand

If you prefer to edit files directly, here's what you need to know.

### Project pages

Each project is a folder inside `content/projects/` containing an `index.md` file. The file has two parts: **front matter** (structured data between `---` lines) and **body** (free-form Markdown text).

Here's an abbreviated example:

```markdown
---
title: "OceanX"
type: "projects"
project_type: "Client"
tags:
  - "data-visualisation"
  - "science-and-research"
  - "unity"
prominence: 50
featured_image: "/images/projects/oceanx.webp"
overview: "A digital twin of the marine world..."
technologies: ["Digital Twin", "GIS data", "VFX"]
overview_video_id: "ipCscTs8UiA"
client:
  name: "OceanX"
  website: "https://oceanx.org/"
---

The body text goes here. Write in Markdown.

## Subheadings use ##

Regular paragraphs are just text separated by blank lines.

![Caption text](/images/projects/some-image.webp)
```

**Important fields:**
- `type` must always be `"projects"` (don't change this)
- `tags` must use the slug format (lowercase, hyphens) — e.g. `science-and-research`, not `Science and Research`
- `prominence` controls sort order on the projects list page. Higher = appears first. Use negative numbers to push things to the end.
- `featured_image` is the thumbnail shown on the projects grid
- `overview_video_id` is just the YouTube video ID (the part after `v=`), not the full URL

### Images in project pages

To add an image to a project's body text, use standard Markdown:

```markdown
![](/images/projects/my-image.webp)
```

To add an image **with a caption**:

```markdown
![This text becomes the caption](/images/projects/my-image.webp)
```

Place image files in `static/images/projects/`. They'll be available at `/images/projects/filename.ext`.

### Data files

The files in `data/` are YAML lists. Each file has an `items` key containing the list. For example, `data/team.yaml`:

```yaml
items:
  - name: James Alvarez
    role: Senior Developer
    photo: /images/team/james-alvarez.webp
    url: /team/james-alvarez/

  - name: Douglas Kelly
    role: Director
    photo: /images/team/douglas-kelly.webp
    url: /team/douglas-kelly/
```

Be careful with YAML formatting — indentation matters. Each list item starts with `- ` and fields are indented under it.


## Development setup

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version, v0.120+)
- [Git](https://git-scm.com/)

On macOS with Homebrew:
```
brew install hugo git
```

### Running locally

```
git clone git@github.com:UnusualTechnologies/UT-Website.git
cd UT-Website
hugo server
```

The site will be available at **http://localhost:1313/**. Hugo watches for file changes and reloads the browser automatically.

### Building for production

```
hugo
```

This generates the complete website in the `public/` directory. Upload the contents of `public/` to any static hosting provider.


## Deployment

This is a static site — Hugo generates plain HTML/CSS/JS files that can be hosted anywhere. There is no permanently hosted CMS server. The CMS editor is just an HTML page (`/admin/`) that's part of the site itself.

### GitHub Pages (recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site whenever you push to `main`. This is free for public repositories.

**First-time setup:**

1. Push the repository to GitHub at `UnusualTechnologies/UT-Website`
2. Go to the repository on GitHub > **Settings** > **Pages**
3. Under "Build and deployment", set Source to **GitHub Actions**
4. That's it — the next push to `main` will trigger a build and deploy

The site will be live at `https://unusualtechnologies.github.io/UT-Website/` (or your custom domain — see below).

Every push to `main` triggers an automatic rebuild. This means CMS edits (which create Git commits via the GitHub API) automatically publish within a minute or two.

### Alternative: Netlify or Cloudflare Pages

If you prefer a different host:

**Netlify:**
1. Go to [netlify.com](https://www.netlify.com/) and sign in with GitHub
2. Click "Add new site" > "Import an existing project"
3. Select the `UnusualTechnologies/UT-Website` repository
4. Set the build command to `hugo` and the publish directory to `public`
5. Deploy

**Cloudflare Pages:**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com/) and sign in
2. Create a new project and connect the GitHub repository
3. Set framework preset to "Hugo", build command to `hugo`, output directory to `public`
4. Deploy

### How the CMS works with deployment

The CMS is **not** a separate running service. It's a single HTML page (`static/admin/index.html`) that loads the Sveltia CMS JavaScript from a CDN. When someone opens `/admin/` on the live site:

1. The browser loads the CMS JavaScript
2. The user signs in with GitHub
3. The CMS reads and writes files via the GitHub API
4. When the user saves, the CMS creates a commit on the `main` branch
5. GitHub Pages (or whichever host) detects the new commit and rebuilds the site

No server is running for the CMS. It's entirely browser-based. You don't need to "spin up" anything — the CMS is always available at `/admin/` on the live site.

### Custom domain

To use `www.unusualtechnologies.com` instead of the GitHub Pages URL:

1. Go to the repository on GitHub > **Settings** > **Pages** > **Custom domain**
2. Enter `www.unusualtechnologies.com` and click Save
3. In your DNS provider, add a CNAME record: `www` pointing to `unusualtechnologies.github.io`
4. Check "Enforce HTTPS" once the DNS has propagated (can take up to 24 hours)

The `baseURL` in `hugo.toml` is already set to `https://www.unusualtechnologies.com/`.


## Quick reference

| Task | How |
|------|-----|
| Preview the site locally | `hugo server`, then open http://localhost:1313/ |
| Open the CMS locally | `hugo server`, then open http://localhost:1313/admin/ in Chrome |
| Open the CMS on live site | Go to https://www.unusualtechnologies.com/admin/ |
| Add a project | CMS > Projects > New Project |
| Edit team / clients / testimonials | CMS > Site Data > choose the section |
| Change site settings (email, phone, URLs) | Edit `hugo.toml` |
| Add images | Put files in `static/images/` (they appear at `/images/`) |
| Build the site | `hugo` (output goes to `public/`) |
| Deploy | Push to `main` — the host rebuilds automatically |
| Request a code change | Open a GitHub issue and tag `@claude` in a comment |
