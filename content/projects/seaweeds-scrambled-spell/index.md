---
title: "Seaweeds' Scrambled Spell"
type: "projects"
project_type: "Client"
tags:
  - "android"
  - "ar"
  - "game"
  - "ios"
  - "unity"
  - "webgl"
description: "A Halloween-themed AR adventure trail where children scan real-world posters to play minigames and collect hidden letters."
prominence: 32
featured_image: "/images/projects/seaweeds.png"
banner_image: "/images/projects/banners/seeweeds-scrambled-spell.png"

overview: "We worked with Business Creative to create a Halloween themed adventure trail for children. It features real-world posters you scan with your phone to play minigames and collect letters: clearing cobwebs, solving riddles, and squashing bugs."

try_it:
  links:
    - label: "Play it now"
      url: "https://unusualtechnologies.com/haven-halloween/"
    - label: "Download the AR markers"
      url: "https://www.unusualtechnologies.com/wp-content/uploads/2026/01/Seawweds-AR-Markers.pdf"

technologies: ["AR", "WebGL", "Mobile", "Microphone", "Unity"]

overview_video_id: "uYKctmvKTFE"
---

{{% carousel %}}
![](/images/projects/Movie_006-frame-at-0m25s.jpg)
![](/images/projects/Movie_003-frame-at-0m2s.jpg)
![](/images/projects/Movie_005-frame-at-0m6s.jpg)
![](/images/projects/Movie_006-frame-at-0m8s.jpg)
![](/images/projects/Movie_006-frame-at-0m16s.jpg)
{{% /carousel %}}

## Write-Ups & Learnings

Boosting Visitor Engagement: How Web AR Overcomes the "App-Installation" Barrier

In the world of visitor attractions, whether it be a museum, a national park, or a holiday resort, the ultimate goal is to create memorable and engaging experiences. In recent years, Augmented Reality (AR) has emerged as a powerful tool for achieving this, offering interactive and immersive adventures that can bring any location to life. However, a significant hurdle has often stood in the way of widespread adoption: the "installation barrier."

How many times have you seen families, excited to start an activity, only to be met with the frustrating requirement of downloading an app? The process is often fraught with issues, from poor connectivity and data limitations to insufficient storage space on their devices. By the time the app is finally installed, the initial enthusiasm has waned, and the experience is tarnished before it has even begun. This is a common and costly problem, but one that we have successfully solved with the power of Web-based Augmented Reality (Web AR).

### The "No-Fuss AR" Philosophy: Accessibility and Inclusivity at its Core

Our recent Halloween project for BC is a prime example of our "no-fuss AR" philosophy in action. We created a captivating Halloween trail that was instantly accessible on any smartphone, without the need for a single download. By leveraging WebGL, we were able to deliver a high-quality AR experience directly through the user's web browser, eliminating the installation barrier and ensuring that everyone could participate, regardless of their technical know-how or device limitations.

This approach is particularly crucial when designing experiences for a family audience. Our goal was to create something that would appeal to young children, while also keeping the accompanying adults happy and engaged. This meant that every aspect of the experience, from the instructions to the games themselves, had to be simple, intuitive, and, above all, fun.

### Designing for a Seamless and Enjoyable Group Experience

We understand that a visit to a museum or a national park is a social activity. Our AR experiences are therefore designed to enhance, not detract from, this shared experience. We achieve this through a number of key design principles:

- Short, replayable games: Our mini-games are designed to be quick, engaging, and easily replayable, ensuring that every member of the family gets a turn without causing delays or frustration.
- Impossible-to-fail challenges: We focus on participation and enjoyment, rather than skill or competition. Our games are designed to be impossible to fail, ensuring that even the youngest visitors can feel a sense of accomplishment.
- Simple, intuitive instructions: We understand that visitors are often in an outdoor environment, where weather conditions can be a factor. Our instructions are therefore clear, concise, and easy to follow, minimizing the time spent looking at a screen and maximizing the time spent enjoying the experience.
- Seamless integration with the physical environment: Our AR experiences are designed to complement and enhance the physical environment, not to distract from it. The games are short, rewarding interludes that punctuate the real-world journey, encouraging exploration and discovery.

By adopting a "no-fuss" approach to AR, we are able to create experiences that are not only more accessible and inclusive, but also more enjoyable and engaging for all. The result is a higher rate of participation, a more positive visitor experience, and a greater return on investment for our clients.

If you are looking to enhance your visitor experience with the power of AR, we invite you to get in touch. We would be delighted to discuss how our "no-fuss" approach can help you to overcome the installation barrier and create a truly memorable and engaging experience for your visitors.

### From Bugs to Magic: A Technical Post-Mortem on Our Web AR Halloween Trail

The promise of Web Augmented Reality is immense: immersive, interactive experiences delivered directly through a mobile browser, with zero installation friction for the end-user. It's a powerful vision, and one we embraced for a recent Halloween treasure trail project. However, turning that vision into a smooth, reliable reality required navigating a minefield of technical challenges unique to the WebGL and mobile browser environment.

This article is a technical deep dive into the hurdles we faced and the creative workarounds we engineered. For any developer or technical director considering a Web AR project, here are the lessons we learned from the front lines.

### Chapter 1: Taming the Hardware – Accessing Cameras & Microphones

For an AR experience to function, it needs reliable access to the device's camera and, in our case, its microphone. We quickly discovered that what works seamlessly in a native app is not guaranteed in a Unity WebGL build.

The Silent Scream: One of our mini-games, "Phantomime," required players to scream when they saw a ghost. This presented our first major roadblock: Unity's built-in microphone class is not supported in WebGL. There was simply no way to directly access the mic input from within our Unity project. Our solution was a carefully orchestrated "hack." We had to handle the audio and video streams separately, playing the audio from the browser and creating a bridge to communicate with the Unity instance. This workaround not only solved the microphone problem but, as a welcome side effect, it also fixed a video playback synchronization issue we had been struggling with.

The Reverse Selfie: An even more baffling issue was that on mobile devices, our WebGL build consistently defaulted to the front-facing "selfie" camera. Worse, it wouldn't refresh its list of available camera devices, leaving the user stuck. The only way to force it to recognize the rear camera was to completely refresh the page. To provide a seamless user experience, we disguised this page refresh inside a loading screen. To the user, it looked like a brief loading moment; behind the scenes, we were forcing the browser to re-evaluate its device inputs.

### Chapter 2: Seeing the World – Robust Image Tracking in the Browser

With no native AR library available for marker detection in our specific WebGL context, we turned to OpenCV, the powerful computer vision library. While this gave us the core functionality for image identification, tracking real-world images on a moving mobile phone, often in variable outdoor lighting, required further refinement.

To improve tracking stability and reliability, we designed special backgrounds for our QR codes. These patterns provided more unique feature points for OpenCV to lock onto, making the tracking far less prone to jitter or loss. Furthermore, we implemented a simple crosshair in the UI. This small addition was crucial for user guidance, as it showed them precisely where to point their camera, ensuring the tracking marker was in focus and helping them understand what the application was "looking" for.

### Chapter 3: Performance is Paramount – Optimising for the Mobile Web

A Web AR experience lives or dies on its loading time. Users on mobile data connections will not wait minutes for a large download. We tackled performance with a three-pronged approach.

- Smarter Delivery: We used Cloudflare to cache the WebGL build. This meant that after the initial download, subsequent loads were significantly faster, making the experience feel much more responsive for repeat players or across different trail locations.
- A File Size Diet: Within the Unity editor, we meticulously adjusted compression settings to find the sweet spot between file size and visual quality. We also made critical asset choices, such as using efficient MP4 video files instead of larger sprite sheets, to shave precious megabytes off the final build.
- The Transparency Problem: A common graphical need is transparent video overlays. We discovered that this is not natively supported in WebGL. To achieve this effect, our video assets had to be encoded with very specific codecs—either WebM with a VP8 codec or Apple's ProRes 4444. This required adding an extra, specialized step to our asset creation pipeline.

## Conclusion: A Solvable Challenge

Developing for Web AR is an exercise in creative problem-solving. While the platform presents unique and sometimes frustrating challenges that have long been solved in the native app world, each one is surmountable. Through a combination of clever workarounds, careful optimization, and a deep understanding of the browser environment, it is entirely possible to deliver the frictionless, magical experiences that Web AR promises. We believe that sharing these technical learnings is crucial for helping the platform mature and empowering more creators to build for the open web.
