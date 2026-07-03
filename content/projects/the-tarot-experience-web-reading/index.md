---
title: "The Tarot Experience Web Reading"
type: "projects"
status: live
project_type: "Client"
tags:
  - "ai"
  - "web"
prominence: 40
featured_image: "/images/projects/tarot-web.png"
banner_image: "/images/projects/banners/the-tarot-experience-web-reading.jpg"

overview: "The Tarot Experience Free Reading is an artificial intelligence (AI) powered story-telling website."

try_it:
  links:
    - label: "Try it now"
      url: "https://www.the-tarot-experience-vr.com/free-reading"

technologies: ["WiX", "AI (GPT-4)", "Procedural Generation"]

client:
  name: "Astrolabe Immersive"
  website: "https://www.the-tarot-experience-vr.com/"

overview_image:
  src: "/images/projects/tarot-experience-logo-BIG_tall-v2-irridescent-light-text-r4ry4t3f4110gapnro0cil9nvdixjpgv2mbdjwn8x4.png"
---

## The Task

The primary goal of this project was to promote and boost the online presence of the [Tarot Experience VR](https://unusualtechnologies.com/projects/the-tarot-experience/). We were tasked with developing a simple web-based tarot reading site to allow users a free sample of the VR experience.

Using the latest AI technology, the app procedurally generates a reading tailored to the users question, creating immersion and adding improved utility to the original VR experience.

## The Results

Since release, our client's site experienced an exceptional surge in activity, with a remarkable 2,500 questions asked. This uptick aligns with an impressive increase in engagement metrics, including over 3,000 site sessions on our Free Reading page alone. Moreover, our client's platform boasts a robust retention rate, with 800 to 900 returning users actively revisiting our site. These figures underscore our success in driving user engagement, highlighting the effectiveness of our strategies in achieving key performance indicators.

<div class="gallery gallery-2col">

![](/images/projects/Screenshot-2024-03-20-122648.png)

![](/images/projects/Screenshot-2024-03-20-122826.png)

</div>

## Using GPT-4

The main appeal and utility of the site is the personalised readings. This is where OpenAI's GPT-4 comes in, by providing a prompt, ChatGPT can generate a unique and interesting response, which is tailored to the user. By specifying how it acts, we can engineer prompts which produce outputs which most accurately reflect the style of reading wanted.

There are also other LLMs which would be suitable for this task such as Claude and Gemini, but currently ChatGPT outranks them in the generation of creative language. In the future, with the release of Gemini 1.5 and Claude 3 we might look at alternative AI platforms for this task which may be both cheaper and more effective than ChatGPT.

![Code snippet of AI logic](/images/projects/Screenshot-2024-03-20-143244.png)

## WiX

This was developed as a new page on an existing website made in WiX. As such, there were a number of limitations to work around as a result of this choice of platform.

It was programmed in JavaScript using a mixture of built-in WiX APIs and NPM modules.

## Email Marketing

The other main aspect of the site consisted of generating and sending emails with the user's reading. Not only does this allow the user to easily save and reference it later, but also comes with pre-generated images of their card and reading for sharing.

This also allows the site to collect emails which can be used for marketing in the future. It is important to note that there are some limitations with sharing on social media. Whilst some sites such as X and Facebook make sharing from web browsers easy, some apps such as Instagram and TikTok do not. We kept the design simple so it satisfies and translates to all platforms.

The images are created procedurally using an HTML canvas and JavaScript logic.

![Email snippet](/images/projects/Screenshot-2024-03-20-154715.png)
