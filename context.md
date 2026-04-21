# Project Context

## Site Owner

**Md Asadullahil Galib Fardin**
- BSc in Civil Engineering, RUET (graduated Aug 2024, CGPA 3.31/4.00)
- Currently: Research Assistant & M.Sc. student, Institute of Water and Flood Management (IWFM), BUET
- M.Sc. focus: Climate Modelling and Risk Management
- Current project at IWFM: Web-Ais — Irrigation Water Requirement and Scheduling model (remote sensing + data wrangling)
- Email: fardin.civilworks@gmail.com
- GitHub: galibfardeen | ORCID: 0009-0008-9985-3754 | Google Scholar: qc6CJjYAAAAJ
- LinkedIn: md-asadullahil-galib-fardin | Facebook: forever.fardin
- IELTS (Nov 2025): 8.0 overall (L:9.0 / R:8.5 / W:7.5 / S:6.5)

---

## Tech Stack

- **Framework**: Jekyll with the [al-folio](https://github.com/alshedivat/al-folio) academic theme
- **Hosted at**: https://galibfardeen.github.io
- **Key plugins**: jekyll-scholar (BibTeX citations), jekyll-paginate-v2, jekyll-imagemagick, jekyll-get-json
- **CSS**: SCSS via `_sass/` — key files: `_base.scss`, `_layout.scss`, `_themes.scss`, `_variables.scss`
- **JS**: Custom `assets/js/scrollspy.js` for sidebar behaviour
- **Build output**: `_site/` (git-ignored, not tracked)

---

## Site Structure

### Navigation (in order)
| Label | Type | Target |
|---|---|---|
| about | always shown | `/` (homepage) |
| research | anchor link | `/#research` or `#research` |
| publications | anchor link | `/#publications` or `#publications` |
| book reviews | page (`nav: true`, order 4) | `/books/` |
| cv | page (`nav: true`, order 5) | `/cv/` |
| search | icon button | opens search modal |
| dark/light toggle | icon button | theme toggle |

### Pages (`_pages/`)
- `about.md` — homepage, layout `home`, permalink `/`
- `research.md` — standalone research detail page at `/research/`, `nav: false`
- `publications.md` — full publications list at `/publications/`, `nav: false`
- `books.md` — book reviews at `/books/`, `nav: true`, order 4
- `cv.md` — CV page at `/cv/`, `nav: true`, order 5
- `404.md`, `blog.md`, `dropdown.md`, `news.md`, `profiles.md`, `projects.md`, `repositories.md`, `teaching.md`, `about_einstein.md` — mostly inactive/template pages

---

## Homepage Layout (`_layouts/home.liquid`)

Single-page scrolling design with four sections rendered in sequence:

1. **`#about`** — bio, profile photo, socials (always shown)
2. **`#research`** — pulled from `_includes/sections/research.liquid` (shown when `show_research: true`)
3. **`#publications`** — pulled from `_includes/sections/publications.liquid` (shown when `show_publications: true`)
4. **CV section** — pulled from `_includes/sections/cv_section.liquid` (shown when `show_cv: true`)

A **profile sidebar card** (`#profile-sidebar`) slides in after scrolling past the about section, controlled by `assets/js/scrollspy.js`.

The homepage front matter (`about.md`) controls section visibility:
```yaml
show_research: true
show_publications: true
show_cv: true
```

---

## Research (`_pages/research.md`)

Two research projects documented with floating image cards and detailed prose:

### 1. Structural Dynamics of Cooling Towers
- **Subject**: Hyperbolic cooling tower at Rooppur Nuclear Power Plant (175 m, 100 Λ-shaped RC columns)
- **Tool**: ABAQUS FEM
- **Methods**: Two column models (Embedded Reinforcement vs. Simplified Timoshenko Beam); non-linear time history analysis under 2001 Bhuj earthquake; wind loads via Greiner's equation (BNBC-2020)
- **Key results**: Max radial displacement 38 mm (seismic), 15 mm (wind); embedded model showed greater flexibility; meridional stresses dominated under wind
- **Images**: `assets/img/Cooling Tower/`

### 2. Impact Behaviour of Pressurised uPVC Pipes
- **Subject**: Low-velocity lateral impact on 1" Class-D uPVC pipes (CC and CR supports, 1.0–2.75 m drop heights)
- **Instrument**: Locally built ESP32-based pressure/velocity unit (~18–20 samples/ms)
- **Tool**: ABAQUS dynamic explicit FEA
- **Key results**: Peak pressure 3063 kPa (at 2.75 m); clamped supports 6.34% higher force; FEA matched experiment within ~14%
- **Status**: *In Preparation, 2025*
- **Images**: `assets/img/uPVC/`

---

## Publications (`_bibliography/papers.bib`)

Three entries, all `selected: true`:

| Key | Title | Journal | Status |
|---|---|---|---|
| `chy2025coolingtower` | Dynamic analysis of cooling tower considering two different column modeling approaches | J. Building Pathology and Rehabilitation (Springer) | Published — DOI: 10.1007/s41024-025-00632-6 |
| `islam2025cfrp` | Numerical Investigation on Behavior of CFRP Strengthened Beam-Column Steel Joint | Advances in Civil Engineering | Under Review |
| `afroz2025upvc` | Impact Behavior of Pressurized uPVC Pipe | — | Submitted |

Scholar config (`_config.yml`): `last_name: [Fardin]`, `first_name: [Md Asadullahil Galib, M.A.G.]`

---

## CV (`_data/cv.yml`)

Sections: General Information · Education · Standardized Scores · Research Experience · Publications · Technical Skills · References

**Technical skills**: ABAQUS, ETABS, SAP2000, OpenSeespy · Python, C, MATLAB · AutoCAD, SketchUp

**References**:
- Dr. Md. Robiul Awall — Professor, Dept. of Civil Engineering, RUET
- Zahidul Islam — Assistant Professor, Dept. of Civil Engineering, RUET

CV PDF linked as `example_pdf.pdf` (placeholder — not yet replaced with real PDF).
The actual CV PDF is at `_pages/CV-Md Asadullahil Galib Fardin.pdf`.

---

## Books Page (`_pages/books.md`)

Pulls live data from Goodreads RSS via the `rss2json` API proxy.
- **Goodreads user ID**: `53266848`
- Three shelves displayed: `currently-reading`, `read` (up to 8), `to-read` (up to 8)
- Book cards show: cover image, title, author, star rating, short review excerpt (≤180 chars)

---

## Assets

```
assets/img/
  galib.jpg                  # profile photo
  Cooling Tower/             # FEM screenshots for research section
  uPVC/                      # impact test figures for research section
  CFRP/                      # images for CFRP paper
  publication_preview/       # thumbnails for bib entries
  book_covers/
  1.jpg – 12.jpg             # misc images
```

---

## Key Customisations Made (git history)

| Commit | Change |
|---|---|
| `ab0f0c6` | Deactivated repositories, teaching, people, and submenus from navbar |
| `a5a8947` | Added single-page scrolling layout with research, publications, and CV sections |
| `13f2a91` | Added research content, books page (Goodreads RSS), navbar anchor fixes, layout improvements |
| Cleanup | Deleted all `(1)` duplicate files left from template initialisation (~90 files across `_pages/`, `_layouts/`, `_includes/`, `_sass/`, `_plugins/`, `_posts/`, `_projects/`, `_data/`, `_bibliography/`, `_news/`) |

---

## Layout Decisions

- Research section uses an **alternating float pattern**: Cooling Tower (images right) → CFRP (images left) → uPVC (images right)
- Image block width: **340px** (increased from original 280px for readability)
- Paragraph text: **0.88rem** (reduced from default for visual balance against larger images)
- Both the homepage section (`_includes/sections/research.liquid`) and the standalone page (`_pages/research.md`) are kept in sync with the same layout

---

## Known Issues / To-Do

- `cv.md` still references `example_pdf.pdf`; should point to the real CV PDF at `_pages/CV-Md Asadullahil Galib Fardin.pdf`
- `about.md` subtitle has a broken link structure (double `|` and misplaced closing `>`)
- `_config.yml` description still contains al-folio template text, not personalised
- `about.md` bio says "M.Sc. in Climate Modelling" but `_data/cv.yml` Education section only lists the BSc — M.Sc. entry not yet added to cv.yml
- External sources in `_config.yml` still point to al-folio demo RSS feeds (medium.com/@al-folio, Google Blog post)

---

*Last updated: 2026-04-21*
