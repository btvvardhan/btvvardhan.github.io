---
layout: project
title: Autonomous Take-off, Line-Following, and Landing with Parrot Mambo
date: 2025-05-29
description: Simulink + Stateflow vision control to take off, track a TI RSLK Max line-follower, and land on a blue moving platform using color segmentation and blob analysis.
image: /assets/projects/RAS2/cover.png   # 16:9 recommended; add this image
tags: [robotics, minidrone, parrot-mambo, simulink, stateflow, vision, blob-analysis, autonomous-landing]
links:
  - title: Final Report (PDF)
    url: /assets/projects/minidrone/RAS546-Project_Report.pdf   # copy your PDF here
  # - title: GitHub
  #   url: https://github.com/your-repo
  # - title: Demo Video
  #   url: https://www.youtube.com/watch?v=XXXXXXXXXXX
---

## Autonomous Take-off, Line-Following, and Landing with Parrot Mambo
A Simulink-based control system that enables a **Parrot Mambo** minidrone to autonomously **take off**, **track a moving TI RSLK Max** line-follower robot, and **land** on a **blue platform** mounted on the robot. The drone climbs to ~**1 m**, uses **color segmentation + blob analysis** to detect the blue landing pad, and employs a **Stateflow** controller to center above it and descend smoothly.

**Stack:** MATLAB/Simulink (Parrot support package) · Stateflow · Arduino (TI RSLK Max) · On-board downward camera.

---

## What’s implemented
- **Autonomous flight sequence:** take-off → forward flight → visual tracking → hover → **controlled descent & landing**.
- **Blue-pad detection:** YUV→RGB conversion, **color thresholding**, **blob analysis** to get centroid (x, y).
- **Stateflow control:** screen divided into **9 zones**; generates left/right/forward/back commands until centered; brief hover before descent.
- **TI RSLK Max** line follower: **QTR reflectance sensors** + Arduino, carrying the blue landing platform.

---

## Gallery

<!-- Replace these with your images; keep ~16:9 aspect for neat cards -->
![Line Follower Robot](/assets/projects/minidrone/rslk-max.png)
*TI RSLK Max line-follower carrying the blue landing platform.*

![Simulink Model](/assets/projects/minidrone/simulink-model.png)
*Parrot Mambo Simulink model: camera → color threshold → blob analysis → Stateflow control.*

![Blob & Zones](/assets/projects/minidrone/blob-zones.png)
*Blue blob centroid overlaid on a 3×3 grid for movement decisions.*

![Landing Sequence](/assets/projects/minidrone/landing.png)
*Centering, hover, and smooth descent onto the moving platform.*

---

## Demo Video
<!-- Uncomment and paste your YouTube VIDEO_ID if available -->
<!--
<div class="video-wrap">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Parrot Mambo: Line-Following & Precision Landing"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>
-->

---

## Details

### 1) Line-Follower Robot
- **TI RSLK Max** programmed in Arduino IDE with **QTR reflectance sensors** for robust path following.
- Blue landing pad fixed on the robot to provide a high-contrast target.

### 2) Simulink Model (Parrot Support Package)
- After takeoff to ~**1 m**, the drone switches to **forward flight** and activates the perception loop.
- **Parrot Image Conversion** block (Y1UY2V → RGB) → color threshold → **binary mask**.

### 3) Color Segmentation & Blob Analysis
- Thresholding isolates the **blue** region; **Blob Analysis** returns centroid (x, y).
- Centroid fed into **Stateflow** to compute movement commands.

### 4) Stateflow Landing Logic
- Camera view divided into **9 sub-windows** (3×3 grid).
- If centroid lies left/right/front/back, command appropriate motion; when **centered**, **hover ~2 s**, then **descend** with a gentle profile.

---

## Results
- Reliable **tracking** and **landing** onto a **moving** target under normal indoor lighting.
- Stable approach with minimal oscillation; smooth touchdown sequence.
- End-to-end pipeline entirely in **Simulink + Stateflow** (no external localization).

---

## Future Work
- Adaptive gains for varying robot speeds and lighting.
- Add **visual-servoing** feedback during descent.
- Extend detector beyond color thresholds (e.g., learned detector) for robustness.

---
