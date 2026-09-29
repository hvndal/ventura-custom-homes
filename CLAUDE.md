# Ventura Custom Homes — Low-Token Context & Handoff (`CLAUDE.md`)

> **TOKEN-SAVING RULES FOR CLAUDE (READ FIRST)**:
> 1. **NEVER read `redesign/src/data/siteData.ts` in full** (708 lines / 41 KB static JSON). Its TypeScript interfaces are on lines `1–51`: `Project`, `Testimonial`, `PreserveVilla`, `Award`, `Office`, and exports `PROJECTS`, `TESTIMONIALS`, `PRESERVE_VILLAS`, `AWARDS`, `OFFICES`, `BRAND_STATS`.
> 2. **NEVER inspect `ai_upscale_work/`, `realesrgan/`, `edited_videos/`, or `*.mp4`**.
> 3. Active frontend app is in **`redesign/`** (React 19 + TypeScript + Vite 8 + Tailwind CSS v4 + `framer-motion` + `lucide-react`).

## 1. Git & Dev Server
- **Remote Repo**: `https://github.com/hvndal/ventura-custom-homes.git` (branch: `main`)
- **App Root**: `c:\Users\herma\Downloads\homes\redesign`
- **Dev Server**: `npm run dev -- --port 5173 --host` (`http://localhost:5173/`)
- **Build Check**: `npm run build` (runs `tsc -b && vite build`)

## 2. Design System ($10K Greek White Architectural Editorial)
- **Colors**: Background `#FFFFFF` (Pure Greek White) & `#F5F3EF` (Warm Stone), Primary Ink `#0A0A0A`, Muted `#6B6B6B`, Light `#9A9A9A`, Hairline Borders `border-black/[0.08]`. **NO gold frames or dark obsidian sections** (except `Footer.tsx` which is `#0A0A0A`).
- **Fonts** (defined in `redesign/index.html` & `redesign/src/index.css`):
  - `var(--font-display)`: `'Big Shoulders Display', Impact, sans-serif` (massive uppercase condensed headlines)
  - `var(--font-sans)`: `'Outfit', -apple-system, sans-serif` (clean geometric body/UI)
  - `var(--font-data)`: `'Big Shoulders Text', monospace` (numbers, indices, coordinates)

## 3. Exact File Map (`redesign/src/`)
- `App.tsx` (74 lines) — Root layout: `<Navbar />` → `<Hero />` → `<FoundersSection />` → `<FeaturedPortfolio />` → `<TestimonialsSection />` → `<ContactSection />` → `<Footer />` + modals.
- `index.css` (135 lines) — Tailwind v4 `@import "tailwindcss";`, CSS font variables, `.img-editorial` grayscale-to-color hover filter, keyframe animations.
- `components/Navbar.tsx` (~155 lines) — Fixed header with official transparent-ish top-left Ventura logo (`/ventura-logo-light.png` over dark hero video → crossfades to `/ventura-logo-dark.png` on white scroll). Links: `About Us` (`#about`), `Works` (`#portfolio`), `Voices` (`#testimonials`), `Contact` (`#contact`).
- `components/Hero.tsx` (~75 lines) — 100vh full-bleed silent background video (`/ventura_stock_hero_1080p.mp4`), no center text overlay, bottom-left coordinates (`Dallas · Highland Park · Frisco`), bottom-right animated laser scroll indicator.
- `components/FoundersSection.tsx` (~315 lines) — **`#about` / `#founders` ("ABOUT US")**. Features Loy & Shideh Lowary **together** (`/founders/lowary-together.jpg`) with 3D mouse-tilt parallax, curtain-wipe `clipPath` reveal, dual overlaid glass nameplates, animated count-up stats (`70+ YRS`, `400+`, `26,000 SF`, `20+`), and connected side-by-side biographies.
- `components/FeaturedPortfolio.tsx` (142 lines) — **`#portfolio` ("WORKS")**. Clean magazine-spread grid (`col-span-2 aspect-[3/2]` + `col-span-1 aspect-[2/3]` + 3-col `aspect-[4/3]`) with category filter bar. Clicking a card opens `ProjectModal.tsx`.
- `components/ProjectModal.tsx` (132 lines) — Full-screen white architectural lightbox (`fixed inset-0 z-50 bg-white`) with keyboard arrow navigation and bottom thumbnail strip.
- `components/TestimonialsSection.tsx` (94 lines) — **`#testimonials`**. Warm stone (`#F5F3EF`) poster-style quote carousel with `[DEMO]` prefix and `AnimatePresence` fade.
- `components/ContactSection.tsx` (142 lines) — **`#contact` ("LET'S TALK")**. Minimal underline inputs + demo warning pill (`⚠ Demo Form — Not Connected`).
- `components/ConsultationModal.tsx` (175 lines) — Modal inquiry drawer triggered by navbar `Inquire` button.
- `components/Footer.tsx` (42 lines) — Minimal `#0A0A0A` footer with `mander.tech` credit.

## 4. Public Assets (`redesign/public/`)
- `/ventura_stock_hero_1080p.mp4` (`55.8 MB`, `1920x1080`, `23.976fps`) — 15.0s master hero loop:
  - `0:00–0:03.3`: Logo & Dusk Estate slow pan (Real-ESRGAN 1440p → 1080p supersampled)
  - `0:03.3–0:05.1` (`1.8s`): **ONLY** the native 1080p side-look cameo of Loy looking at Shideh from the side (extracted from native 1080p stream `WgpEfVju-5I` at `56.7s–58.5s`; wide couch shot completely removed)
  - `0:05.1–0:15.0`: Architectural estates B-roll & streetscape finale (`upscale_video.py` in repo root).
- `/ventura-logo-light.png` & `/ventura-logo-dark.png` — Transparent-ish top-left navbar logos (light glass version for hero video, dark charcoal version for white header).
- `/founders/lowary-together.jpg` (`2741x1829`), `/founders/shideh-lowary.jpg` (`1338x1319`), `/founders/loy-lowary.jpg` (`1347x1328`) — Official high-res studio portraits from `venturacustomhomes.com/about/`.
