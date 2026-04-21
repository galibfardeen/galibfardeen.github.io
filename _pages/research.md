---
layout: page
title: research
permalink: /research/
description:
nav: false
nav_order: 3
---

<h2 class="research-paper-title">Structural Dynamics of Cooling Towers</h2>

<div class="clearfix">

<div class="research-img-float" style="float: right; margin: 0 0 1rem 1.5rem; width: 280px;">
  <img src="/assets/img/Cooling Tower/Model with Composite Columns.png" alt="Composite Column Model" class="img-fluid rounded z-depth-1" style=" width: 100%; margin-bottom: 0.6rem;" />
  <img src="/assets/img/Cooling Tower/Conventional Shell Free Vibration Analysis.png" alt="Free Vibration Analysis" class="img-fluid rounded z-depth-1" style=" width: 100%; margin-bottom: 0.6rem;" />
  <img src="/assets/img/Cooling Tower/Meridional Stress of Continuum Shell.png" alt="Meridional Stress" class="img-fluid rounded z-depth-1" style=" width: 100%;" />
  <p style="font-size: 0.72rem; color: #999; text-align: center; margin-top: 0.4rem;">FEM models and stress analysis of the Rooppur NPP cooling tower (ABAQUS).</p>
</div>

My primary research investigates the dynamic behaviour of large-scale hyperbolic cooling towers under seismic and wind loading, with a focus on the **Rooppur Nuclear Power Plant** — Bangladesh's first nuclear power plant, located near the seismically active Madhupur Fault.

Using **ABAQUS**, I developed and validated finite element models of the 175 m tower supported by 100 Λ-shaped reinforced concrete columns. Two column modelling strategies were compared: an **Embedded Reinforcement** approach, where longitudinal and spiral rebars are explicitly modelled within the concrete, and a **Simplified Timoshenko Beam** approach. Both models were subjected to the 2001 Bhuj/Kachchh earthquake via non-linear time history analysis and to wind loads calculated using Greiner's equation per BNBC-2020.

The Embedded Reinforcement model exhibited greater flexibility — forming plastic hinges and cracks under seismic loading — resulting in larger displacements but lower base shear and stresses. The maximum radial displacement was 38 mm under seismic loading and 15 mm under wind loading, both within acceptable bounds. Under wind excitation, meridional stresses dominated over hoop stresses, with the throat section experiencing the greatest displacement.

</div>

---

<h2 class="research-paper-title">Impact Behaviour of Pressurised uPVC Pipes</h2>

<div class="clearfix">

<div class="research-img-float" style="float: right; margin: 0 0 1rem 1.5rem; width: 280px;">
  <div class="upvc-img-card">
    <img src="/assets/img/uPVC/Schematic Diagram.png" alt="Experimental setup" class="img-fluid" style="width: 100%;" />
  </div>
  <div class="upvc-img-card">
    <img src="/assets/img/uPVC/Figure 8.png" alt="Contact force vs time" style="width: 100%; height: 150px; object-fit: cover; object-position: 50% 38%;" />
  </div>
  <p style="font-size: 0.72rem; color: #999; text-align: center; margin-top: 0.4rem;">Test rig schematics and contact force response for impacted uPVC pipes (ABAQUS).</p>
</div>

This study investigates the low-velocity lateral impact response of water-pressurised **uPVC pipes** under two support conditions — **both-ends-clamped (CC)** and **one-clamped-one-roller (CR)** — tested at four drop heights (1.0, 1.5, 2.0, and 2.75 m) using a **locally developed ESP32-based pressure and velocity measuring unit** capable of recording ~18–20 pressure samples per millisecond.

Eight Class-D uPVC pipe specimens (1" diameter, 300 mm clear span) were pressurised to 1378.9 kPa and struck at midspan by a 4.0 kg cylindrical hammer. Internal pressure fluctuations, contact force, contact period, and plastic deformation area were measured experimentally and validated against **ABAQUS** finite element models using dynamic explicit analysis.

Key findings: peak internal pressure reached **3063 kPa** (at 2.75 m drop) and increased monotonically with impact energy. Clamped supports produced up to **6.34% higher contact force** than roller supports due to greater stiffness. The mechanical contact period consistently exceeded the positive pressure pulse duration for both support conditions. Plastic deformation zones expanded radially with drop height, and FEA results matched experimental data within approximately **14%**.

</div>

<div class="upvc-img-card" style="margin-bottom: 0.4rem;">
  <img src="/assets/img/uPVC/Plastic Regions for Roller at One end and Both end clamped condition.png" alt="Plastic deformation zones" style="width: 100%; max-height: 160px; object-fit: cover; object-position: 50% 40%;" />
</div>
<p style="font-size: 0.72rem; color: #999; text-align: center; margin-bottom: 1rem;">FEM plastic deformation zones at progressive time steps — roller (left) vs clamped (right) support conditions.</p>

*In Preparation, 2025*

---

## Publications

{% bibliography --cited %}

For a full list, see the [publications](/publications/) page.
