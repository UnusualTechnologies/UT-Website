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
overview: "For Oobikoo Games, we designed and built Mere Mortals, an Ancient Greek pixel-art bullet-heaven game playable in the browser, together with all its art and sound and a customisable engine so the client can keep making new content themselves."
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
key_facts:
  - label: "Genre"
    value: "Bullet heaven / survivor-like, pixel art"
  - label: "Our role"
    value: "Game design input, development, all art and sound, engine tools"
  - label: "Timeline"
    value: "Two cycles, about two months"
  - label: "Platform"
    value: "Unity, WebGL (plays in the browser)"
---

{{% carousel title="Gameplay" %}}
![Mere Mortals gameplay at level 12: the player surrounded by hundreds of demons, priests and buffalo, with damage numbers on screen.](/images/projects/Screenshot-2025-02-10-143422-1-768x432.png)
![Mere Mortals Level Up screen offering three upgrades: new Holy Aura, Swipe level 4 and Mighty Hammer level 3.](/images/projects/Screenshot-2025-02-10-143125-768x432.png)
![Mere Mortals chest reward screen granting five items, including weapon upgrades and two heart pickups.](/images/projects/Screenshot-2025-02-10-143209-768x432.png)
{{% /carousel %}}

{{% carousel title="Enemy sprites" %}}
![Pixel art sprite animation of a Mere Mortals cultist enemy in a red loincloth, holding a rock above his head.](/images/projects/Crazies.gif)
![Pixel art running animation of a dark grey demon dog enemy with red eyes and a gold collar, made for Mere Mortals.](/images/projects/Demon-Dog.gif)
![Pixel art sprite of a winged red demon with horns and a scythe, one of the Mere Mortals enemy animations.](/images/projects/Demon.gif)
![Pixel art walking animation of a mortal enemy in a brown tunic for the Ancient Greek themed Mere Mortals.](/images/projects/Mortal-1-1.gif)
![Pixel art sprite of a purple-robed evil priest with red eyes and a crooked staff, a Mere Mortals enemy.](/images/projects/Evil-Priest-1.gif)
![Pixel art charging animation of a brown buffalo enemy with curved horns, made for Mere Mortals.](/images/projects/Bulffalo_2.gif)
![Pixel art sprite of a kneeling worshipper in pale robes with hands clasped in prayer, a Mere Mortals enemy.](/images/projects/Woshipper.gif)
{{% /carousel %}}

![Custom Unity Weapon Item Editor for Mere Mortals, showing per-level damage, area, cooldown and pierce stats for the Swipe weapon.](/images/projects/Screenshot-2025-02-10-161225-1024x520.png "The weapon editor we built for the client")

<!-- writeup -->

## The brief

Oobikoo Games asked us for an Ancient Greek-themed bullet-heaven game, the genre also called "survivor-like", where one hero fights off ever-growing waves of enemies with weapons that fire automatically. They wanted two things: a playable prototype, and an engine they could use to add, remove and change weapons, enemies, characters and levels themselves afterwards. Publishing stayed with the client.

## What we made

- **A playable game**, built in Unity for WebGL so it runs in a web browser.
- **Seven weapons:** Swipe, Freezing Breath, Mighty Hammer, Fist of God, Lightning Strike, Cupid's Arrow and Holy Aura. Each upgrades through levels; on levelling up, players choose between new weapons and upgrades.
- **Enemies** including mortals, cultists, worshippers, evil priests, demons, demon dogs and charging buffalo, plus chests that award several upgrades at once.
- **All the art and sound:** pixel-art characters, animations, tilemaps and UI. We mocked up sprites, took the client's feedback and iterated until they were happy.

## Built for hundreds of enemies

A game like this can have hundreds of enemies on screen at once, plus experience pickups and damage numbers. Browsers give games less processing power than a desktop build, so we put a lot of work into efficient code to keep the game running smoothly in WebGL.

## Tools the client can use

The engine was the main deliverable. We built custom Unity editors so the client can change the game without writing code:

- per-level stats for every weapon, such as damage, area, cooldown and pierce (for example, Swipe has 8 levels, with damage rising from 10 to 40);
- drop probabilities for items;
- global settings such as base move speed and knockback duration.

Weapons use a component-based design, so new weapons with their own movement or damage logic can be added and swapped without rewriting the rest of the game.

## How the project ran

The work ran over two cycles of about a month each. The first built the engine and a working game loop; the second added content: new enemies, weapons, a level and chests. We then did some extra work to add further features.

## Technology

| Part | Technology |
|---|---|
| Engine | Unity, with custom editor tools |
| Platform | WebGL, playable in the browser |
| Art | 2D pixel art: sprites, animations, tilemaps, UI |
| Architecture | Component-based weapons and enemies |

## Questions

**Can I play Mere Mortals?**
Yes. Use the "Play it now" link at the top of this page.

**Does Unusual Technologies make games for other studios?**
Yes. For Mere Mortals we handled game design input, programming, art, sound and tools, and handed over an engine the client can keep building on.
