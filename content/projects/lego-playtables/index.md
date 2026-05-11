---
title: "LEGO Playtables"
type: "projects"
project_type: "Client"
tags:
  - "gamification"
  - "installation"
  - "motion-sensor"
  - "projection-mapping"
  - "unity"
description: "Interactive projection-mapped LEGO tables using depth sensors, installed across five Discovery Centers worldwide."
prominence: 100
featured_image: "/images/projects/lego-playtables.webp"
banner_image: "/images/projects/banners/lego-playtables.webp"

overview: "An interactive LEGO play table made using multiple projectors, screens, Depth sensors, Specialist alignment software, Speakers, and over 70KG of LEGO! This was an R&D project that got installed on 5 LEGO Discovery Center sites across the world. The table was brought to life with projection-mapped scenes and animals. Users could interact with the table and receive audio/visual feedback."

technologies: ["Audio FX", "Projection Mapping", "Motion Sensor", "Lego", "3D Mapping"]

client:
  name: "LEGO Discovery Center"
  logo: "/images/projects/LegoDiscoveryCenter_Logo-300x300.webp"

overview_video_id: "LUEJi22K6Co"
---

## Objectives

We were approached by seeper to create the Unity software that would drive the LEGO Playtables and handle user interactions with the use of a depth camera. This R&D project was used to assess the capabilities of the Zed depth camera as an alternative to the Microsoft Kinect which was nearing end of life. These cameras were used for hand tracking to enable touch interactions on the table. The project was also used to assess using a Linux environment for the installation for increased stability over Windows.

## The Result

A total of 5 LEGO playtables were created and installed in various locations worldwide. The playtables consisted of 3 different themes; Underwater, Dinosaur and Arctic. The table itself housed most of the tech including the PC, with a raised box above the table that housed the projectors, speakers and depth camera. Kids could come to play on the tables creating LEGO models with the help of digital instructions that Seeper embedded into the table.

The projected visuals and sound from the Unity application, including touch interactions, projected animations and a timed volcanic eruption on the dinosaur table, helped draw attention and curiosity towards the table, increasing engagement.

![LEGOLAND Discovery Center](/images/projects/LegoPlaytable_Image_3-768x768.webp)

## R&D Findings

The Zed camera proved to be useable as a depth camera for tracking, however the older Kinect one cameras proved to be the easier and more impressive tech, with a higher level of support for applications like Unity. Zed utilises a stereographic camera approach to calculate depth, whereas Kinect sensors use a projected matrix of IR dots. This proved to be more reliable and less prone to bad readings due to lighting conditions and projected content on the table.

At the time of development, Linux proved to be too troublesome to work with due to the support of Unity not being robust enough to develop the software to a high standard. Therefore, the decision was made to pivot to Windows for the development and installation. Reliability was still the focus and the software was thoroughly tested to ensure it would operate correctly all day once installed. This included making sure that the application was not too intensive on the CPU and GPU ensuring longevity.

![Top down view](/images/projects/LegoPlaytable_Image_4.webp)

## The Backend

The Unity scene contained an accurate model of the LEGO playtable which could then be textured and animated bringing it to life. Two perspective cameras were used to view the table from above. This eventually turned into the output for the two projectors above the table, after calibrating them with the software. The tricky part came from taking the 3D view of the Zed camera and turning it into an interactive input. Hand positions of users in the real world were translated into 2D points which then needed to be mapped onto the 3D scene within Unity.

![The Unity Scene](/images/projects/LegoPlaytable_Image_2-768x373.webp)
