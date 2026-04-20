---
layout: page
title: Wind Engineering
description: Wind-induced response of shell structures using the Greiner equation approach
img: assets/img/2.jpg
importance: 2
category: research
---

Wind loading is one of the controlling design factors for large thin-shell structures such as hyperbolic cooling towers. My research investigates wind pressure distributions and their structural effects using analytical and numerical approaches.

### Methodology

- Applied wind loads using **Greiner's equation** for cylindrical shells — a Fourier cosine series representation of circumferential pressure distribution.
- Implemented loading through the **Analytical Field** option in ABAQUS, distributing pressure across 17 elevation levels per **BNBC-2020** guidelines.
- Compared wind-induced displacement and membrane stresses between Embedded Reinforcement and Simplified column models.

### Key Findings

- The Embedded Reinforcement Column model produced higher displacements and stresses under wind loading due to its reduced stiffness.
- The throat section of the tower (minimum circumferential area) experienced the greatest wind-induced displacement.
- Maximum meridional stress under wind loading was 0.9 MPa — lower than values from previous studies on similar towers.

### Tools Used

ABAQUS, Python scripting, BNBC-2020, Greiner's wind pressure coefficients, Seismosignal
