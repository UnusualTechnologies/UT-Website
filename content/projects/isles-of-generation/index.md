---
title: "Isles of Generation"
type: "projects"
status: live
project_type: "Prototype"
tags:
  - "ai"
  - "game"
  - "procedural-generation"
  - "unity"
  - "webgl"
prominence: 18
featured_image: "/images/projects/isles-of-generation.webp"
banner_image: "/images/projects/banners/isles-of-generation.webp"

overview: "Isles of Generation was a prototype project designed to explore techniques for procedural generation in open-world video games such as Minecraft, Terraria, or Dwarf Fortress."

try_it:
  links:
    - label: "Play it now"
      url: "https://web-apps.unusualtechnologies.com/procedural-world-generator/index.html"

technologies: ["Procedural generation", "WebGL", "2D"]

overview_video_id: "Fe8Ajccx77c"
---

## The Goal

We aimed to delve into the methodologies employed in the procedural generation of realistic gaming worlds. This involved creating everything from expansive landmasses and diverse biomes to meandering rivers and quaint villages. This leveraged robust algorithms like Perlin noise, Poisson disc sampling, and A* pathfinding.

Whilst the game was wholly constructed in two dimensions, the principles harnessed could be seamlessly transposed to fabricate a 3D landscape.

![C# code from the Isles of Generation Unity project assigning tiles and biome colours from height, temperature and moisture maps.](/images/projects/code-768x350.png "Code snippet from the world generation")

## The Terrain & Biomes

This prototype was coded using Unity and C#, with the primary terrain generation employing Perlin noise. By layering noise in a series of octaves, we were able to create a 'cloud' texture, yielding a richly varied and intriguing terrain. Additionally, we computed distinct noise values for elements such as moisture and temperature, enabling us to categorise specific biomes for each area. Consequently, areas exhibiting high rainfall and temperature patterns could be designated as rainforests, whilst those presenting cold and dry conditions were characterised as tundra.

## The Features

Different facets of the world necessitated distinct algorithms. For instance, villages required an intricate set of instructions to convincingly generate a grid encompassing roads and buildings. Rivers were designed to adhere to the laws of gravity, originating in mountainous regions and gradually descending towards the ocean. Roads, on the other hand, would wind their way between towns, consciously avoiding challenging biomes like mountains.

Moreover, even the distribution of trees employed an approach known as Poisson disc sampling. This ensured an even dispersal of wildlife, mitigating the possibility of peculiar clusters which might have occurred due to purely random placement.

## The Results

Here are some examples of worlds generated using this program:

{{% carousel %}}
![Procedurally generated island map with beaches, forests, a mountain range with a snowy peak and village markers.](/images/projects/Screenshot-2023-06-30-154448.png "Generation Example")
![Top-down view of a generated village of stone buildings on a road grid, surrounded by green and pink blossom trees.](/images/projects/Screenshot-2023-06-30-152201.png "A village in the forest")
![Top-down tiles of a narrow river flowing from a pine forest across a sandy beach into the sea.](/images/projects/Screenshot-2023-06-30-152126.png "A river joining the ocean")
![Generated terrain showing several biomes side by side: pine forest, snowy tundra, dry plains, a beach and the ocean.](/images/projects/Screenshot-2023-06-30-152540.png "Biome variety")
![Map of a large generated island with three snow-capped mountain ranges, varied biomes, beaches and scattered villages.](/images/projects/Screenshot-2023-06-30-160452.png "A Large world")
![Top-down view of a generated village of stone buildings and roads beside a beach and the open sea.](/images/projects/Screenshot-2023-06-30-152331.png "A seaside village")
![A generated stone path winding through a forest of green and pink blossom trees, placed with Poisson disc sampling.](/images/projects/Screenshot-2023-06-30-152427.png "A path through a forest")
{{% /carousel %}}
