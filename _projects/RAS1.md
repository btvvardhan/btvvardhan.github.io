---
layout: project
title: Solving a 4×4 Maze with MyCobot Pro 600
date: 2024-12-12
description: Digital twin–backed maze solving using MATLAB’s watershed transform, pixel→world conversion, IK path planning, and TCP control of a MyCobot Pro 600.
image: /assets/projects/RAS1/cover.png  # 16:9 recommended; add this image to your repo
tags: [robotics, digital-twin, vision, matlab, mycobot, path-planning]
links:
  - title: Final Report (PDF)
    url: /assets/projects/mycobot/RAS545_Final_Project_Report.pdf   # place the PDF here in your repo
  # - title: GitHub
  #   url: https://github.com/your-repo
  - title: Demo Video
    url: https://youtube.com/shorts/cpwe_7RJfMw?feature=share
---

## Solving a 4×4 Maze with MyCobot Pro 600
A complete pipeline to detect and solve a printed **4×4 maze** with an **AI kit camera**, compute a collision-free path via **MATLAB’s watershed transform**, convert **pixel coordinates to world millimeters**, and execute the trajectory on a **MyCobot Pro 600**—while mirroring motion in a **digital twin**.  

**Stack:** MATLAB (image processing, watershed, IK) · Python (TCP/IP robot control) · AI kit camera · MyCobot Pro 600 (6-DoF).

---

## What’s in this project?
- **Vision-based solving** using **watershed transform** to segment the maze and trace the solution path.
- **Pixel→world conversion** to map image waypoints into robot workspace coordinates (mm).
- **Path planning via IK**: compute joint angles for the end-effector to follow the solved path smoothly.
- **Robot execution over TCP/IP** with a Python client streaming waypoints/angles to the arm.
- **Digital twin synchronization** to validate and visualize motion in MATLAB while the real robot runs.

---

## Gallery

<!-- Replace image paths with your captures (keep ~16:9 for neat cards) -->
![Maze & Detection](/assets/projects/mycobot/maze-detect.png)
*Maze capture, binarization, and ROI extraction before watershed.*

![Watershed Solution](/assets/projects/mycobot/watershed-path.png)
*Watershed transform identifying basins; the watershed line provides the solution path.*

![Pixel→World Mapping](/assets/projects/mycobot/pixel-world.png)
*Waypoints sampled along the path and converted from pixels to millimeters.*

![Robot & Digital Twin](/assets/projects/mycobot/digital-twin.png)
*MyCobot Pro 600 trajectory mirrored in MATLAB’s digital twin.*

---

## Demo Video
<!-- Uncomment and paste your YouTube VIDEO_ID -->
<!--
<div class="video-wrap">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Maze Solving with MyCobot Pro 600"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>
-->

---

## Details

### 1) Maze Capture & Pre-processing
- Acquire a top-down image of the printed maze using the AI kit camera.  
- **Threshold → binarize**, isolate the largest contour (maze body), and detect wall openings to locate **start/goal**.

### 2) Watershed-Based Solving
- Build a heightmap from the processed image and apply **MATLAB’s watershed transform**.  
- Extract the **watershed ridge** as the centerline path between start and goal.  
- Sample the ridge into ordered **waypoints** (pixels).

### 3) Pixel→World Conversion
- Calibrate image scale (px/mm) from known references.  
- Transform each waypoint from **image pixels** to **world millimeters** in the robot’s plane.

### 4) IK & Trajectory Generation
- Use **MATLAB IK** to convert world waypoints into **joint configurations**.  
- Smooth trajectories (velocity/accel limits) and export as **CSV** for execution.

### 5) Robot Execution & Twin Sync
- A **Python TCP/IP** script streams joint sets to the **MyCobot Pro 600**.  
- MATLAB visualizes the **digital twin** in parallel to verify the commanded motion.

### Results
- The arm tracked the solution path with smooth end-effector motion; the digital twin mirrored execution.
- Minor deviations attributed to camera calibration and mechanical tolerances; within expected bounds.

### Future Work
- Scale to **larger/denser mazes**; add **dynamic obstacle** handling.  
- Closed-loop **visual servoing** for online correction.  
- Full 3D calibration and tool-center-point (TCP) refinement.

---
