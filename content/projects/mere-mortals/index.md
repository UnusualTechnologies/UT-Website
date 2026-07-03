---
title: Mere Mortals
type: projects
status: live
project_type: Client
tags:
  - art
  - game
  - unity
  - web
  - webgl
prominence: 45
featured_image: /images/projects/mere-mortals.webp
banner_image: "/images/projects/banners/mere-mortals.png"
overview: We were hired by Oobikoo Games to create a game and engine for making games inspired by Vampire Survivors. This was a more traditional videogame for us to make, but really allowed us to highlight our capabilities in game development!
overview_video_id: jFkRcovatls
technologies:
  - Video Game
  - WebGL
  - Unity
  - 2D
try_it:
  links:
    - label: Play it now
      url: https://web-apps.unusualtechnologies.com/mere-mortals/index.html
overview_image:
  src: /images/projects/Character_1_Walk.gif
testimonial:
  quote: UT was instrumental to the entire process. They helped us define the features of the game, they built the game and delivered all of the art and sound assets.
  full_text: Hi, I'm John from Oobikoo Games. We engaged UT to help us with the build of a bullet heaven game called Mere Mortals. UT was instrumental to the entire process. They helped us define the features of the game, they built the game and delivered all of the art and sound assets. Everything was delivered on time, to a very high level of quality, and the communication throughout the process was brilliant. We'd love to work with them again, and I highly recommend them to anyone considering getting a game built.
  person_name: John
  person_org: Oobikoo Games
  video_id: XRgHhMEdIDw
---

## The Objective

We were tasked with developing an Ancient Greek themed 'Survivor-Like' or 'Bullet-Heaven' game, and an engine that would easily allow the client to add, remove, or change existing weapons, enemies, characters, and levels with a high degree of customisability throughout.

In the end, we wouldn't be responsible for publishing, but would instead provide the client with and engine for them to continue to develop their own games with.

For the prototype, we had a focus on a pixel art style, developing; sprites, animations, UI and tilemaps needed to demonstrate the functionality. This involved a much more iterative approach of mocking up sprites, getting client feedback and iterating until they were happy.

{{% carousel %}}
![](/images/projects/Crazies.gif)
![](/images/projects/Demon-Dog.gif)
![](/images/projects/Demon.gif)
![](/images/projects/Mortal-1-1.gif)
![](/images/projects/Evil-Priest-1.gif)
![](/images/projects/Bulffalo_2.gif)
![](/images/projects/Woshipper.gif)
{{% /carousel %}}

## Development

This was done over the span of two cycles (about two months) and some bonus work after to add extra functionality.

The first cycle focused on the engine – this involved the core functionality for a working prototype with a game loop; and the second cycle focused on adding content such as new enemies, weapons, a level and items such as chests which provide you with upgrades to collected items.

{{% carousel %}}
![](/images/projects/Screenshot-2025-02-10-143422-1-768x432.png)
![](/images/projects/Screenshot-2025-02-10-143125-768x432.png)
![](/images/projects/Screenshot-2025-02-10-143209-768x432.png)
{{% /carousel %}}

With the possibility for large numbers of entities on screen (from enemies, to EXP pickups, to damage counters) there was a big focus on optimised code and logic, ensuring the game's performance always remained high, even with the limitation of WebGL.

It was developed in Unity and used certain additional plugins to add extra functionality and help speed up and improve the development process.

## Engine Tools

Whilst we spent some time balancing weapons and enemies in order to make an enjoyable prototype, our real goal was to provide the client with a helpful array of tools that could be used to easily alter the game's behaviour. These included having easily customisable weapon stats for each of the weapon's levels, being able to adjust probabilities of certain item drops, or global constant settings such as the base move speed or knockback duration.

We also made custom functionality as easy to add as possible: so even though weapons may require custom locomotive or damaging logic, the component-based design makes them easy to add and swap out.

![](/images/projects/Screenshot-2025-02-10-161225-1024x520.png)
