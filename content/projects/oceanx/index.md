---
title: "OceanX"
type: "projects"
status: live
project_type: "Client"
tags:
  - "data-visualisation"
  - "science-and-research"
  - "unity"
prominence: 95
featured_image: "/images/projects/oceanx.webp"
banner_image: "/images/projects/banners/oceanx.webp"

overview: "For OceanX, we built a real-time 3D replay of a deep-sea ROV dive in Unity, turning sonar maps, dive tracks, water readings and species detections from OceanX missions into an environment scientists can explore."

technologies: ["Digital Twin", "GIS data", "VFX"]

client:
  name: "OceanX"
  website: "https://oceanx.org/"

overview_video_id: "ipCscTs8UiA"
key_facts:
  - label: "Sector"
    value: "Ocean science and research"
  - label: "Our role"
    value: "Data processing, 3D modelling, real-time visualisation"
  - label: "Platform"
    value: "Unity (real-time 3D)"
  - label: "Data shown"
    value: "Sonar seabed maps, ROV dive track, depth, temperature, salinity and oxygen, species detections"
---

<div class="gallery gallery-2col">

![3D model of the OceanX ROV at 248 m depth, with live temperature, pressure, salinity and oxygen readouts and a sidebar identifying jellyfish species.](/images/projects/oceanxweb-1024x522.webp "Mid-water at 248 m")

![The OceanX ROV near the seabed at 1,000 m; boxes mark species detections and a panel reports 86% species-identification accuracy across 100,000 possible species.](/images/projects/oceanxweb2-1024x509.webp "Species detections at 1,000 m")

</div>

<div class="gallery gallery-2col">

![Labelled 3D model of the OceanX ROV showing its sensors, propulsion thrusters and Schilling grabber arms.](/images/projects/oceanxweb3-1024x864.webp "The ROV, modelled from its blueprints")

![Seamount sonar data as a colour depth map (top) and the same terrain rebuilt as a 3D environment in Unity (bottom).](/images/projects/oceanxweb4.webp "From sonar data to 3D terrain")

</div>

![The OceanX ROV's recorded dive path traced as a white line across 3D seafloor terrain.](/images/projects/oceanxweb5-1024x787.webp "The recorded dive path")

<!-- writeup -->

## The challenge

OceanX collects huge amounts of data on its deep-sea missions: sonar maps of the seabed, the path of each ROV (remotely operated vehicle) dive, water measurements taken along the way, and the marine life its AI identifies in the footage. Spread across spreadsheets and charts, that data is hard to take in. OceanX wanted scientists and researchers to see it together, in place and in time, as if they were on the dive.

## What we built

A real-time 3D replay of an ROV dive, built in Unity:

- **The seabed** is rebuilt from sonar topography data, so the terrain matches the real seamount.
- **The ROV** follows its recorded path through the water. Its 3D model is built from OceanX's blueprints and labelled: sensors (altimeter, depth sensors, multibeam sonar, RBR sensor, fluxgate compass, rate gyro and hydrophones), eight electric thrusters, and its Schilling grabber and manipulator arms.
- **Live readouts** show depth, time, temperature, pressure, salinity and oxygen saturation as the dive progresses, down to about 1,000 m.
- **Species detections** appear as boxes along the dive, with a sidebar showing the species identified, such as jellies, *Atolla* jellyfish and ctenophores.

## Species detections

The species identifications come from an AI that analyses the ROV's footage after each dive. The AI belongs to OceanX, and we are building it for them. The replay also shows the model's own statistics, for example 86% species-identification accuracy, chosen from about 100,000 possible species, so viewers can judge how far to trust each detection.

## How we built it

We exchanged data with OceanX throughout the project to keep the replay accurate. First we processed the dive path and the sonar data to map the terrain. Then we modelled the ROV from its blueprints, and finally we linked the dive's measurements and species detections to the ROV's position over time, so the data plays back in sequence as the ROV moves.

The work continued as the [OceanX Digital Twin](/projects/oceanx-digital-twin/), which extends the replay to a full interactive globe of OceanX's missions.

## Technology

| Part | Technology |
|---|---|
| Engine | Unity, real-time 3D |
| Terrain | Sonar bathymetry processed into 3D terrain |
| Data | Dive track, water readings, AI species detections from OceanX |
| Visuals | Custom underwater lighting and visual effects |

## Questions

**What is a digital twin of a dive?**
A 3D replay of a real dive, built from the data recorded on it, so you can watch the ROV's path, readings and discoveries in place rather than in separate charts.

**Who owns the species-detection AI?**
OceanX. We are building the AI for OceanX, and it belongs to them. We also built the real-time 3D environment that shows its detections alongside the dive data.

**Can Unusual Technologies visualise other scientific data?**
Yes. We turn GIS, sensor and research data into real-time 3D tools for scientists, educators and the public.
