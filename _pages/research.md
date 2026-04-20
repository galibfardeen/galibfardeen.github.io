---
layout: page
title: research
permalink: /research/
description:
nav: false
nav_order: 3
---

## Structural Dynamics of Cooling Towers

My primary research investigates the dynamic behaviour of large-scale hyperbolic cooling towers under seismic and wind loading, with a focus on the Rooppur Nuclear Power Plant in Bangladesh — the country's first nuclear power plant, located near the seismically active Madhupur Fault.

Using the commercial finite element software **ABAQUS**, I developed detailed numerical models of the 175 m cooling tower, supported by 100 Λ-shaped reinforced concrete columns. Two distinct column modelling strategies were compared: an **Embedded Reinforcement** approach, where longitudinal and spiral rebars are explicitly modelled within the concrete, and a **Simplified Timoshenko Beam** approach, which reduces computational cost at the expense of realism.

<div class="row mt-4 mb-4 justify-content-center">
  <div class="col-sm-8">
    {% include figure.liquid path="assets/img/cooling tower.png" title="Stress analysis of hyperbolic cooling tower" class="img-fluid rounded z-depth-1" %}
    <div class="caption">Stress analysis of the hyperbolic cooling tower at Rooppur Nuclear Power Plant under dynamic loading. Results compare the Embedded Reinforcement Column and Simplified Column modelling approaches.</div>
  </div>
</div>

Both models were subjected to the **2001 Bhuj/Kachchh earthquake** ground motion record using non-linear time history analysis. The Embedded Reinforcement model exhibited greater flexibility — forming plastic hinges and cracks under seismic loading — resulting in larger displacements but lower base shear and stresses compared to the Simplified model. The maximum observed radial displacement was 38 mm, remaining within acceptable bounds for a tower of this scale.

Wind loads were calculated using **Greiner's Fourier cosine series** approach for circumferential pressure distribution on cylindrical shells, implemented across 17 elevation levels in accordance with **BNBC-2020**. Under wind excitation, the Embedded Reinforcement Column model produced higher displacements and stresses due to its reduced stiffness — a contrasting finding to its behaviour under seismic loading. The maximum wind-induced displacement was 15 mm, concentrated at the throat section of the tower where the circumferential area is smallest.

---

## Ongoing Research

**CFRP Strengthened Beam-Column Connections**
Investigation of the monotonic and cyclic response of CFRP-strengthened RC beam-column connections using finite element simulation and experimental validation. *(In Submission — Journal of Steel Construction Research, 2025)*

**Impact Behaviour of Pressurised uPVC Pipes**
Experimental and numerical study of impact loading on pressurised uPVC pipes. *(In Preparation, 2025)*

---

## Publications

{% bibliography --cited %}

For a full list, see the [publications](/publications/) page.
