# Ventura Custom Homes — Low-Token Context (`redesign/CLAUDE.md`)
See `../CLAUDE.md` for full summary.
- **NEVER read `src/data/siteData.ts` past line 51** (lines 52–708 are static JSON data).
- **Design System**: Greek White `#FFFFFF`, Stone `#F5F3EF`, Ink `#0A0A0A`, Muted `#6B6B6B`. Fonts: `var(--font-display)` (`Big Shoulders Display`), `var(--font-sans)` (`Source Sans 3`), `var(--font-data)` (`Cormorant Garamond`).
- **Active Components** (`src/components/`):
  - `Navbar.tsx` (top-left transparent-ish logos `/ventura-logo-light.png` & `/ventura-logo-dark.png`)
  - `Hero.tsx` (100vh `/ventura_stock_hero_1080p.mp4` — 15s 1080p master with 1.8s native 1080p side-look cameo)
  - `FoundersSection.tsx` (`#about` — Loy & Shideh together `/founders/lowary-together.jpg` + 3D tilt + count-up stats + side-by-side bios)
  - `FeaturedPortfolio.tsx` (`#portfolio` — magazine-spread grid) & `ProjectModal.tsx` (fullscreen white lightbox)
  - `TestimonialsSection.tsx`, `ContactSection.tsx`, `ConsultationModal.tsx`, `Footer.tsx`
