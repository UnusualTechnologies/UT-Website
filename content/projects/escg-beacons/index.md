---
title: "ESCG Beacons"
type: "projects"
project_type: "Client"
tags:
  - "android"
  - "bluetooth"
  - "ios"
description: "A Bluetooth beacon app for East Sussex College that alerts users when they enter a new area and displays the department's website."
status: unlisted
prominence: 0
featured_image: "/images/projects/escg-beacons-1.webp"
banner_image: "/images/projects/escg-beacons-banner.webp"

overview: "East Sussex College Group were looking to create a Bluetooth beacon app that alerts the user when they enter a new area of the college and uses an in-built browser to show off the department's website."

technologies: ["Flutter", "Android", "iOS", "Dart"]

try_it:
  links:
    - label: "Get it on Android"
      url: "https://play.google.com/store/apps/details?id=com.ellioteserin.beacon_app"
    - label: "Get it on Apple"
      url: "https://apps.apple.com/us/app/escg-beacons/id1568267847"

client:
  name: "East Sussex College"
  website: "https://www.escg.ac.uk/"

overview_video_id: "k6PA73ssIgw"
---

## Objective

Unusual Technologies created the app for iOS and Android using Flutter and Dart. The major challenge was getting the iOS version to run in the background of the user's phone so it's 'awake' to alert them when it detects a beacon, including when the phone is off. The most common solutions that many third-party apps, such as alarm clocks, seem to implement are also major battery drains.

{{% carousel %}}
![](/images/projects/escg-beacons-1.webp)
![](/images/projects/escg-beacons-2.webp)
![](/images/projects/escg-beacons-3.webp)
![](/images/projects/escg-beacons-4.webp)
{{% /carousel %}}

## The Technologies

This project revolved around Bluetooth low-energy beacons. Using the Eddystone protocol, they work by transmitting packets of data containing a URL that is picked up by the app via radio waves. We then read the URL and display the corresponding website.

![A physical BLE beacon](/images/projects/escg-beacons-beacon.jpg)

## Our Take

This was a fairly short project but still entailed difficult challenges. By the end of the project, we had developed a wide range of skills related to Bluetooth, whilst having the chance to delve into some more complex functionality that arises when developing mobile applications.
