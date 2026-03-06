# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal actor portfolio website for Sam Masto, deployed to GitHub Pages at `sammasto.com`. Built with React + TypeScript + Vite + Tailwind CSS v4.

## Commands

```bash
npm run dev        # Start local dev server with HMR
npm run build      # Type-check, bundle, and copy index.html → 404.html for SPA routing
npm run lint       # Run ESLint
npm run preview    # Preview the production build locally
npm run deploy     # Build and push dist/ to gh-pages branch (live deployment)
```

## Architecture

**Routing** (`src/App.tsx`): React Router DOM wraps all routes. The layout is `Header` → `<Routes>` → `Footer`. Routes: `/`, `/about`, `/film`, `/theater`, `/sketches`.

**Pages** (`src/pages/`): Each page is a self-contained component. Film, Theater, and Sketches pages read from their corresponding JSON data files and render content components.

**Content data** (`src/data/*.json`): All portfolio content (films, theater credits, sketches) lives in JSON files. To add or update credits, edit these files — no component changes needed. Each entry has fields like `title`, `description`, `image`, `url`, `role`.

**Components** (`src/components/`):
- `Header.tsx` — Sticky frosted-glass nav with mobile hamburger dropdown
- `ProjectCard.tsx` — Image card with hover overlay (desktop) / stacked layout (mobile); handles both linked and non-linked items via the `url` field
- `Footer.tsx` — Site footer

**Images** (`public/images/`): Static images referenced by path strings in the JSON data files. New images go here.

## Styling

Tailwind CSS v4 is configured via `@tailwindcss/vite` plugin (not the traditional `tailwind.config.js` PostCSS approach). Theme tokens are defined in `src/index.css` under `@theme`:

- `font-heading` → Unbounded (Google Fonts)
- `font-display` → Ribes Black (local, `src/assets/fonts/`)
- `font-sans` → Roboto (Google Fonts)
- `--color-primary-color` → `#301934`

Two custom CSS utility classes defined in `src/index.css`:
- `.gradient-background` — animated shifting purple/blue gradient on the app wrapper
- `.header-footer-background` — frosted glass effect (translucent white + backdrop-blur) used on Header and Footer

## GitHub Pages Deployment

The site uses client-side routing with a SPA fallback: `index.html` is copied to `404.html` both in the `build` npm script and in a Vite plugin (`vite.config.ts`). This lets GitHub Pages serve the React app for any path. The `public/CNAME` file sets the custom domain.
