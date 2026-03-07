# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal actor portfolio website for Sam Masto, deployed to GitHub Pages at `sammasto.com`. Built with Astro + TypeScript + Tailwind CSS v4, with React used selectively for interactive components.

## Commands

```bash
npm run dev        # Start local dev server (add -- --host to expose on network)
npm run build      # Static build to dist/
npm run preview    # Preview the production build locally
```

Deployment is handled automatically by GitHub Actions on push to `master`. GitHub Pages must be set to "GitHub Actions" source (not branch deployment).

## Architecture

**Pages** (`src/pages/`): Each `.astro` file maps directly to a route and generates a real HTML file at build time. No SPA routing — every page is a true static HTML document.

- `index.astro` → `/`
- `about.astro` → `/about`
- `film.astro` → `/film`
- `theater.astro` → `/theater`
- `sketches.astro` → `/sketches`
- `improv.astro` → `/improv`

**Layout** (`src/layouts/Layout.astro`): Base layout shared by all pages. Renders the gradient background, `Header` (React, `client:load`), a `<slot />` for page content, and `Footer`.

**Content data** (`src/data/*.json`): All portfolio content (films, theater credits, sketches, improv clips) lives in JSON files. To add or update credits, edit these files — no component changes needed.

**Components** (`src/components/`):
- `Header.tsx` — React, `client:load` (requires JS for hamburger menu state)
- `Footer.tsx` — React, rendered statically (no client directive needed)
- `HomeReel.tsx` — React, `client:load` (Vimeo embed + mobile detection via `react-responsive`)
- `AboutCarousel.tsx` — React, `client:load` (headshot switcher using `useState`)
- `ProjectCard.astro` — Pure Astro; CSS `group-hover` for desktop overlay, `md:hidden` for mobile info block
- `VideoCard.astro` — Pure Astro; static YouTube iframe embed

**Images** (`public/images/`): Static images referenced by path strings in the JSON data files. New images go here.

## Styling

Tailwind CSS v4 is configured via `@tailwindcss/vite` plugin in `astro.config.mjs`. Theme tokens are defined in `src/styles/global.css` under `@theme`:

- `--font-heading` → Unbounded (Google Fonts)
- `--font-display` → Ribes Black (local, `src/assets/fonts/`)
- `--font-sans` → Roboto (Google Fonts)
- `--color-primary-color` → `#301934`

Two custom CSS utility classes defined in `src/styles/global.css`:
- `.gradient-background` — animated shifting purple/blue gradient on the app wrapper
- `.header-footer-background` — frosted glass effect (translucent white + backdrop-blur) used on Header and Footer

## GitHub Pages Deployment

Astro generates a real HTML file for every route — no SPA fallback needed. The `public/CNAME` file sets the custom domain and is automatically copied to `dist/` by Astro at build time. The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `master`.
