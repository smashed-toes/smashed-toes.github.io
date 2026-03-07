# sammasto.com

Personal actor portfolio for Sam Masto. Deployed to GitHub Pages at [sammasto.com](https://sammasto.com).

## Stack

- [Astro](https://astro.build) — static site generation, one HTML file per route
- [Tailwind CSS v4](https://tailwindcss.com) — via `@tailwindcss/vite`
- [React](https://react.dev) — used selectively for interactive components (`client:load`)

## Commands

```bash
npm run dev      # Start dev server (add -- --host to expose on local network)
npm run build    # Build to dist/
npm run preview  # Preview the build locally
```

## Deployment

Pushes to `master` automatically build and deploy via GitHub Actions. GitHub Pages source must be set to **GitHub Actions** (not branch deployment).
