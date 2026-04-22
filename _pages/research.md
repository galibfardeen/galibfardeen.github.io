---
layout: page
title: research
permalink: /research/
description:
nav: false
nav_order: 3
---

<!-- Cooling Tower — text LEFT, images RIGHT -->
<div class="research-flex-row" style="display: flex; gap: 1.8rem; align-items: flex-start; margin-bottom: 2.2rem;">
  <div style="flex: 1; min-width: 0;">
    <h2 class="research-paper-title">Structural Dynamics of Cooling Towers</h2>
    <p>My primary research investigates the dynamic behaviour of large-scale hyperbolic cooling towers under seismic and wind loading, with a focus on the <strong>Rooppur Nuclear Power Plant</strong>, Bangladesh's first nuclear power plant, located near the seismically active Madhupur Fault.</p>
    <p>Using <strong>ABAQUS</strong>, I developed and validated finite element models of the 175 m tower supported by 100 Λ-shaped reinforced concrete columns. Two column modelling strategies were compared: an <strong>Embedded Reinforcement</strong> approach and a <strong>Simplified Timoshenko Beam</strong> approach. Both models were subjected to the 2001 Bhuj/Kachchh earthquake via non-linear time history analysis and to wind loads calculated using Greiner's equation per BNBC-2020.</p>
    <p>The Embedded Reinforcement model exhibited greater flexibility, forming plastic hinges and cracks under seismic loading,resulting in larger displacements but lower base shear and stresses. Maximum radial displacement was 38 mm (seismic) and 15 mm (wind).</p>
    <p style="font-size: 0.85rem; color: var(--global-text-color-light);"><em>Published — Journal of Building Pathology and Rehabilitation, Springer, 2025</em></p>
  </div>
  <div class="research-img-col" style="flex-shrink: 0; width: 340px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
      <img src="/assets/img/Cooling Tower/Model with Composite Columns.png" alt="Composite Column Model" class="img-fluid rounded z-depth-1" style="width: 100%; height: 160px; object-fit: contain; background: #1e1e1e;" />
      <img src="/assets/img/Cooling Tower/Conventional Shell Free Vibration Analysis.png" alt="Free Vibration Analysis" class="img-fluid rounded z-depth-1" style="width: 100%; height: 160px; object-fit: contain; background: #1e1e1e;" />
      <img src="/assets/img/Cooling Tower/Meridional Stress of Continuum Shell.png" alt="Meridional Stress" class="img-fluid rounded z-depth-1" style="width: 100%; height: 160px; object-fit: contain; background: #1e1e1e; grid-column: 1 / -1;" />
    </div>
    <p style="font-size: 0.72rem; color: var(--global-text-color-light); text-align: center; margin-top: 0.4rem;">FEM models and stress analysis of the Rooppur NPP cooling tower (ABAQUS).</p>
  </div>
</div>

<!-- CFRP — images LEFT, text RIGHT -->
<div class="research-flex-row" style="display: flex; gap: 1.8rem; align-items: flex-start; margin-bottom: 2.2rem;">
  <div class="research-img-col" style="flex-shrink: 0; width: 340px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
      <div class="cfrp-img-wrap" style="margin-bottom: 0;">
        <img src="/assets/img/CFRP/Assembly of the Sections.png" alt="FEM Assembly" class="img-fluid rounded" style="width: 100%; height: 130px; object-fit: contain;" />
      </div>
      <div class="cfrp-img-wrap" style="margin-bottom: 0;">
        <img src="/assets/img/CFRP/All the sections Monotonic CFRP vs Not CFRP.png" alt="Monotonic load comparison" class="img-fluid rounded" style="width: 100%; height: 130px; object-fit: contain;" />
      </div>
      <div class="cfrp-img-wrap" style="margin-bottom: 0; grid-column: 1 / -1;">
        <img src="/assets/img/CFRP/Load vs Dis hysteris and hysteresis backbone curves of the bare and CFRP connections (Square Section).png" alt="Hysteresis loops" class="img-fluid rounded" style="width: 100%; height: 130px; object-fit: contain;" />
      </div>
    </div>
    <p style="font-size: 0.72rem; color: var(--global-text-color-light); text-align: center; margin-top: 0.4rem;">FEM models, monotonic load capacity, and hysteresis loops for CFRP-strengthened T-joints (ABAQUS).</p>
  </div>
  <div style="flex: 1; min-width: 0;">
    <h2 class="research-paper-title">CFRP-Strengthened Beam-Column Steel Joints</h2>
    <p>This study investigates the behaviour of mild steel beam-column T-joints retrofitted with <strong>Carbon Fibre Reinforced Polymer (CFRP)</strong> under both monotonic and cyclic loading, using ABAQUS finite element analysis validated against experimental data.</p>
    <p>Three section profiles,<strong>Square Hollow, I-Section</strong>, and <strong>Circular Hollow</strong>,were modelled with and without CFRP wrapping. Under monotonic loading, CFRP retrofitting improved load-carrying capacity by up to <strong>26.71%</strong>. Under cyclic loading, hysteresis analysis showed energy dissipation gains of up to <strong>33.20%</strong>.</p>
    <p style="font-size: 0.85rem; color: var(--global-text-color-light);"><em>Under Review — Advances in Civil Engineering, 2025</em></p>
  </div>
</div>

<!-- uPVC — text LEFT, images RIGHT -->
<div class="research-flex-row" style="display: flex; gap: 1.8rem; align-items: flex-start; margin-bottom: 1.2rem;">
  <div style="flex: 1; min-width: 0;">
    <h2 class="research-paper-title">Impact Behaviour of Pressurised uPVC Pipes</h2>
    <p>This study investigates the low-velocity lateral impact response of water-pressurised <strong>uPVC pipes</strong> under two support conditions such as, <strong>both-ends-clamped (CC)</strong> and <strong>one-clamped-one-roller (CR)</strong>,tested at four drop heights (1.0, 1.5, 2.0, and 2.75 m) using a <strong>locally developed ESP32-based pressure and velocity measuring unit</strong> capable of recording ~18–20 pressure samples per millisecond.</p>
    <p>Eight Class-D uPVC pipe specimens (1" diameter, 300 mm clear span) were pressurised to 1378.9 kPa and struck at midspan by a 4.0 kg cylindrical hammer. Peak internal pressure reached <strong>3063 kPa</strong>. Clamped supports produced up to <strong>6.34% higher contact force</strong>. FEA matched experiment within <strong>14%</strong>.</p>
    <p style="font-size: 0.85rem; color: var(--global-text-color-light);"><em>In Preparation, 2025</em></p>
  </div>
  <div class="research-img-col" style="flex-shrink: 0; width: 340px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
      <div class="upvc-img-card" style="margin-bottom: 0;">
        <img src="/assets/img/uPVC/Schematic Diagram.png" alt="Experimental setup" style="width: 100%; height: 130px; object-fit: contain;" />
      </div>
      <div class="upvc-img-card" style="margin-bottom: 0;">
        <img src="/assets/img/uPVC/Figure 8.png" alt="Contact force vs time" style="width: 100%; height: 130px; object-fit: cover; object-position: 50% 38%;" />
      </div>
      <div class="upvc-img-card" style="margin-bottom: 0; grid-column: 1 / -1;">
        <img src="/assets/img/uPVC/Plastic Regions for Roller at One end and Both end clamped condition.png" alt="Plastic deformation zones" style="width: 100%; height: 110px; object-fit: cover; object-position: 50% 40%;" />
      </div>
    </div>
    <p style="font-size: 0.72rem; color: var(--global-text-color-light); text-align: center; margin-top: 0.4rem;">Test rig, contact force response, and plastic deformation zones (ABAQUS).</p>
  </div>
</div>

## Publications

{% bibliography --cited %}

For a full list, see the [publications](/publications/) page.
