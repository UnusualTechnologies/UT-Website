---
title: "Aquamarina"
type: "projects"
project_type: "Prototype"
tags:
  - "game"
  - "unity"
  - "vfx"
description: "A shader-driven underwater demo exploring realistic water distortion, fog, fish animation, and collectible mechanics in Unity."
prominence: 25
featured_image: "/images/projects/aquamarina.png"
banner_image: "/images/projects/banners/aquamarina.png"

overview: "Aquamarina was a demo project designed to explore the various applications of shaders in the development of realistic video games, by attempting to create realistic visual effects."

technologies: ["Procedural generation", "WebGL", "2D"]

overview_video_id: "XiHDn12H3GY"
---

## The Goal

The goal was to create a demo environment, mostly focusing on shaders, trying to make it as realistic as possible, from the distortion and fog of the water, to the particles and even the animation of the fish. There was a handful of mechanics to keep the player engaged, including hidden collectables, as well as a camera to take photos, and fish bait that allowed players to attract fish. The concept was kept simple, and the mechanics guided players into interacting with the game environment. The project was developed in Unity, C#, and Unity's ShaderLab language.

![Code Snippet From The Water Shader](/images/projects/shader-768x462.png)

## Looking Like Water

The first task was to create a scene that – without too much additional content – felt like you were underwater. The very first shader was a post-processing effect that distorted the screen based on depth: the further away something was, the more warped it appeared. This was achieved using the camera's depth texture and different kinds of 2D noise that determined the level of distortion. This scrolled over the screen to give the effect movement.

A simple fog shader was also made that gradually faded the environment to a constant blue colour, representing the murkiness and fogginess of the water.

![](/images/projects/week1-768x361.png)

The next thing that was worked on were the caustics.

Caustics are the light patterns that appear on surfaces near or under water and are created by light passing through the rippling water's surface. There are lots of different ways of approaching this: one could calculate caustics using ray-tracing and calculating the reflection and refraction of the paths of light as it moved through the water for true physical accuracy using modern computing systems. However, a simpler effect was chosen using repeating animated textures and light cookies, which allowed it to be adjusted by changing the sun lights intensity and direction, and also meant that areas that were obscured by the sun would not have any caustic lighting.

![](/images/projects/week3-2.png)

## The Surface

The next thing the scene needed was the water's surface: especially as it was supposed to feel as though one was in the shallows, looking up and seeing the endless blue expanse did not look right.

This part was not too difficult, but it was also kept simple, so no big waves or foam. The surface was also impassable for the player so only the appearance from underneath mattered. Using similar techniques to the first part, using scrolling noise and distorting the light coming from the other side, a nice simple effect that did the job well was created.

A sailboat model was also added just to set the scene!

![](/images/projects/week3-1.png)

With this done, god-rays were also added – the beams of light that one sees when the light from the sun is scattered by the water. These were also kept simple – again one could approach it using ray-tracing and volumetrics but using particles was enough to provide a satisfying effect in this case.

## Adding Life

The next things that were added were fish, and they were made to move in a realistic way. In 1986 Craig Reynolds developed a program he called Boids, which was a simulation designed to mimic the flocking behaviour of animals, and it follows these three rules:

1. Separation: Boids move away from other Boids that are too close.
2. Alignment: Boids attempt to match the velocities of their neighbours.
3. Cohesion: Boids move toward the centre of mass of their neighbours.

Doing this resulted in some nice-looking shoals of fish. Another shader was made to animate the fish by offsetting the mesh vertex positions using a sine wave to mimic their swimming motion.

![](/images/projects/week4-768x410.png)

A shark was also added using the same logic, and some simple first person movement was enabled so the underwater world could be explored.

Finally, the terrain was populated with all sorts of objects: seaweed, rocks, boats, and finally some collectables to attempt to bring the scene to life.

## Finishing Touches

To finish off the demo, some more features for the player were added. Primarily, this was a camera that could take photos which would then be saved to the user's computer. The camera customisations included adjusting the exposure and focal point of the photo. Additionally, this allows the user to adjust the tint and temperature of the photo. Another feature added to the game was fish bait. This would attract the fish to a single point, allowing one to view them up close easily and gave the player the opportunity to take photos of the fish.

![](/images/projects/finished1-768x432.png)
