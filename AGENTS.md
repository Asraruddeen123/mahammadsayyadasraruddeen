# Project Guide

## Architecture

This is a TanStack Start portfolio deployed on Netlify. The primary experience is a single editorial landing page. TanStack Router provides file-based routing, Vite handles development and production bundling, and the Netlify adapter supplies the deployment integration.

## Key directories

- `src/routes/` contains file-based routes. `index.tsx` is the main portfolio and `__root.tsx` owns global metadata and the document shell.
- `src/styles.css` is the custom visual system, including layout, color tokens, animation, responsive behavior, and accessibility preferences.
- `src/components/ui/` contains inherited reusable UI primitives.
- `public/assets/` contains Mahammad's portrait and downloadable CV.
- `content/` and `content-collections.ts` are inherited content-collection resources for optional future expansion.

## Conventions

- Use TypeScript and functional React components.
- Keep portfolio copy data near the page in small typed arrays when it is only used once.
- Use Lucide icons instead of emoji or hand-authored interface icons.
- Reuse the CSS color tokens and typography system in `styles.css`.
- Preserve visible focus behavior, semantic section structure, responsive layouts, and reduced-motion support.
- Optimize public raster images through the Netlify Image CDN in rendered markup.

## Design decisions

The site uses an editorial campaign aesthetic rather than a conventional resume layout. Forest ink, warm paper, coral, muted lime, and dusty blue create a distinct but professional identity. DM Serif Display carries headlines while DM Sans handles compact, legible body copy. The page is intentionally static and fast: contact actions use direct email, phone, and LinkedIn links, while the original CV remains available as a download.

## Development

Run `pnpm dev` for local development and `pnpm build` for a production build. Netlify configuration lives in `netlify.toml`.
