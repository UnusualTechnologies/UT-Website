---
title: "RAF Debate Table"
type: "projects"
project_type: "Client"
tags:
  - "cms"
  - "installation"
  - "projection-mapping"
  - "unity"
description: "A multi-projector interactive debate table for school groups at the RAF Museum, driven by touch foils and a custom CMS."
prominence: 90
featured_image: "/images/projects/raf-museum.webp"
banner_image: "/images/projects/banners/raf-museum.webp"

overview: "An interactive debate table made using multiple projectors, 8 touch table foils, Multiple PCs and a Data Server. The table allows for engaging interactive debates for school classes to learn about the pros and cons of different topics in an engaging way."

technologies: ["Unity", "Projection Mapping", "Touch Table", "Multi-Screen", "CMS"]

client:
  name: "RAF Museum"
  logo: "/images/projects/Royal_Air_Force_Museum_logo-300x300.webp"

overview_video_id: "BPdT9jE_Ssg"

testimonial:
  quote: "They just know their stuff and I was really impressed. We will definitely work with Unusual Technologies again."
  full_text: |
    Hi, my name's Karen and I'm the Digital Interpretation Manager at the RAF Museum. One of my main jobs is to manage the audiovisual and digital experiences that we have in the galleries so that they continue to work for our visitors on a daily basis.

    One of the digital experiences that I manage at the museum is the Debate Table. Now, the Debate Table is a large octagonal touchscreen. The system consists of nine projectors, eight USB touch foils, and two PCs which run a Unity programmed, interactive game for our visitors to learn about certain topics. Anyway, since it was installed back in 2018, it's never really quite worked as well as it should have. It would slow down, it would get jittery, it would crash, and all things which, despite working with the original developers, we never quite got fixed and left the table still, difficult to use and unworkable.

    So, the original developers, although they did try, nothing was really resolved and they really struggled until eventually, they got tied up with other projects and moved on, which left us with the table, which I still wanted to fix. So I had to get a budget and that's when I found and recruited Unusual Technology to help us with this difficult project.

    Working with Unusual Technology was great. They were a good team. They communicated very well. They would respond to emails in a timely manner. They, if anything, they were quite patient with us, as there was a number of, access issues at the start of the project. So they're quite patient while we tried to resolve all them in-house. And they were honest in respect of what the budget was and were able to manage our expectations, in accordance to what they would be able to achieve because not only, the main priority was to get the table fixed, but we did have a list of other enhancements which we would like to implement to make the experience better for our visitors. But, you know, give… what the budget would allow, sorts of things. So, they were very honest and managed our expectations quite well. And they were good at, advising on, other aspects of the system. So looking at the bigger picture, looking at the hardware, and, and how we could maybe improve on that.

    We will definitely work with Unusual Technology again. As I mentioned earlier, we are still after having some enhancements done to the table and of course, Unusual Technologies will be the team to do that for us. They… I was really impressed with their knowledge, their technical know-how, and how they picked up someone else's code and just managed to solve the problems for us which we've been struggling with for… for quite a while. So, they just know their stuff and I was really impressed. Definitely work with them again.
  person_name: "Karen"
  person_title: "Digital Interpretation Manager"
  person_org: "RAF Museum"
  video_id: "LR_pFowzsKE"
---

{{% carousel %}}
![Interactive view](/images/projects/RAF_Table-1-768x361.webp)
![Projector setup](/images/projects/RAF_Projectors-768x576.webp)
![Voting results](/images/projects/RAF_Table-2-768x446.webp)
{{% /carousel %}}

## Project Demo

{{< youtube zNL6NsXiEAQ >}}

## Write-Up & Learnings

### The Unseen Challenge of Taming the Touchscreen

When visitors interact with the Royal Air Force Museum's large-scale interactive table, they experience a seamless and responsive display. What they don't see is the significant technical battle fought and won to make that experience possible. The project, which aimed to support over 120 simultaneous touch inputs across eight separate displays, pushed standard technology to its breaking point, forcing a deep and complex re-engineering of its core software.

### The Breaking Point

The initial plan was straightforward: use the popular Unity engine combined with the open-source TouchScript library, a standard choice for multi-touch applications. However, under the immense load of this project, the system buckled. The baseline technology, while capable of handling multi-touch inputs, was not designed for the unprecedented scale and intensity of the RAF installation. The system suffered from progressive performance degradation, lag, and eventual crashing, rendering it completely non-viable for a public exhibit. The team was faced with a critical failure and a significant technological unknown.

### Diagnosing the Ghost in the Machine

The primary challenge was identifying the root cause of the instability. A competent professional could not easily deduce the problem. The team faced several technological uncertainties:

- Was it a memory leak in their custom code?
- Were the hardware limitations the issue?
- Could input ID collisions between the identical touch devices be causing the chaos?
- Or was there a more fundamental, undocumented flaw within the third-party TouchScript library itself?

To solve this, a systematic investigation began. The team created a virtual test environment to replicate the 8-display setup and developed custom scripts for automated, multi-day stress tests, simulating high-frequency touch inputs. Through meticulous logging and debugging, they systematically tested and eliminated each hypothesis. The fixes for memory leaks and ID collisions helped, but the core instability remained. This painstaking process of elimination proved the problem lay deep within the library's core architecture.

### Rewriting the Rules

The investigation revealed that the third-party library was not thread-safe. Under the high load from multiple devices, race conditions were causing data corruption and leading to system failure. The solution was as daring as it was difficult: re-engineer the foundational code of the library itself.

This was a venture into the unknown. The specific race conditions were undocumented, and there was a significant risk that modifying the core code could break its essential functionality entirely. The team performed a deep-dive analysis of the TouchScript source code, identified the non-thread-safe sections, and meticulously re-engineered them. They implemented locking mechanisms and other concurrency controls to manage the chaotic flow of data.

This new, thread-safe version of the library was then deployed back into the rigorous stress-testing environment. After days of relentless simulated use, the results were clear: the instability was gone. The team had successfully created a new, robust software architecture capable of reliably processing a massive volume of concurrent touch inputs in real-time—a significant advancement over the baseline technology. They had solved a complex, high-load software challenge where others had hit the limit, delivering the seamless experience museum visitors enjoy today.
