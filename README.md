# Ventura Custom Homes — Luxury Architectural Redesign & Digital Audit

An ultra-luxury digital experience and technical overhaul designed for **Ventura Custom Homes** (Dallas & Frisco, Texas), custom estate builders since 1975 specializing in Highland Park, Preston Hollow, and The Preserve at Fields.

---

## 🏛️ Project Overview

Ventura Custom Homes builds multi-million-dollar custom estates ($3M–$15M+) with deep engineering heritage (specializing in Dallas bedrock walk-out basements, structural concrete, and bespoke finishes).

This repository contains:
1. **Full Digital Audit & Strategic Proposal** (`docs/SITE_CONTENT_AUDIT.md`, `docs/CLIENT_PITCH_PROPOSAL.md`).
2. **Scraped Architectural Archive** (`scraped_data/`): 33 pages, 20 custom estates, and 358 high-resolution architectural photographs.
3. **Data Pipeline & Scraper Tools** (`scripts/`): Automated scraping, merging, and TypeScript data generator utilities.
4. **Interactive High-Fashion Web Application** (`redesign/`): Built with Vite, React 19, TypeScript, and Tailwind CSS v4, styled in an editorial monograph aesthetic inspired by *Architectural Digest*, Cormorant Garamond typography, and museum-grade minimalism.

---

## ✨ Key Enhancements in Redesign (v2)

| Problem on Current Site | Architectural Redesign Solution |
| :--- | :--- |
| **No Contact Form** (only email & phone numbers) | **Multi-Tier VIP Consultation Suite**: Interactive consultation modal & bespoke project inquiry form with budget brackets, architectural preference selectors, and location selectors. |
| **Zero Testimonials on Homepage** | **Editorial Quotes Ledger**: Curated testimonials from Highland Park and Preston Hollow homeowners highlighting craftsmanship, engineering, and trust. |
| **Portfolio Hidden 3+ Clicks Away** | **Direct Homepage Monograph Grid**: Instant filtering across *All Works*, *Modern Estates*, *Transitional*, *Traditional*, and *The Preserve*. |
| **Outdated Design Language** | **Haute-Luxe Architectural Monograph**: Cormorant Garamond serif headers, Montserrat details, hairline bronze borders, generous quiet luxury whitespace, and cinematic photography. |
| **The Preserve at Fields Hidden** | **Interactive Prototype Showcase**: Dedicated section spotlighting the 6 exclusive SHM Architects models with live floorplan/lot specs. |
| **No Structured Awards Showcase** | **Museum-Grade Honors Ledger**: Highlights 20+ accolades including WSJ, McSam, and Parade of Homes. |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Running the Redesign Application
```bash
# Navigate to the redesign frontend
cd redesign

# Install dependencies
npm install

# Start local development server
npm run dev

# Or build and preview production release
npm run build
npm run preview
```

Open `http://localhost:5173` or `http://localhost:4173` to explore the experience.

---

## 📁 Repository Structure

```text
.
├── docs/                         # Executive Pitch Deck & Deep-Dive Site Audit
│   ├── CLIENT_PITCH_PROPOSAL.md  # Client presentation framework & pitch strategy
│   └── SITE_CONTENT_AUDIT.md     # Technical, UX, and SEO audit breakdown
├── scripts/                      # Data Mining & Transformation Pipelines
│   ├── scraper.py                # Headless Chrome web scraper
│   ├── merge_and_process.py      # Raw JSON page processor & image indexer
│   └── generate_site_data_ts.py  # Strongly-typed TypeScript dataset generator
├── scraped_data/                 # Raw & processed architectural metadata (358 assets)
├── screenshots/                  # High-res before/after visual proof captures
├── redesign/                     # Vite + React 19 + TypeScript + Tailwind v4 App
│   ├── src/
│   │   ├── components/           # Monograph components (Hero, Portfolio, Preserve, etc.)
│   │   ├── data/siteData.ts      # Structured typed data of all 20 estates
│   │   ├── App.tsx               # Root application
│   │   └── main.tsx              # React DOM entry point
│   └── package.json
├── .gitignore                    # Production git ignores
└── README.md                     # Project documentation
```

---

## 📸 Visual Previews

Comparison screenshots of the original live site vs. the new architectural redesign are cataloged in `screenshots/`:
- `redesign-hero-v2.png` — Editorial Hero with monograph metadata bar.
- `redesign-portfolio-v2.png` — Curated Architectural Works grid with category tabs.
- `redesign-testimonials-v2.png` — Highland Park client testimonials & awards ledger.
- `redesign-contact-v2.png` — VIP private consultation suite.

---

## 🤝 Authors & Credits
Designed and engineered for **Ventura Custom Homes**.
Created with ❤️ by **Hundal** ([@hvndal](https://github.com/hvndal)).
