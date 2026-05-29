# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing + lead-gen site for "Boring Studio" (a working placeholder agency name). Static-exported
**Next.js (App Router) + TypeScript**, deployed to **GitHub Pages**. No server, no API routes, no
runtime CMS — all content is read from JSON at build time.

The brand name is intentionally swappable: it lives only in `lib/site.ts`, the footer, the email and
page `<title>`s.

## Commands

- `npm run dev` — local dev server (no base path)
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint (flat config, `next/core-web-vitals` + `next/typescript`)
- `npm run format` / `npm run format:check` — Prettier
- No test runner yet. When tests land, document how to run a single test here.

## Architecture

- `app/` — App Router pages, all statically generated. Dynamic routes `services/[slug]` and
  `works/[slug]` use `generateStaticParams` over the JSON in `content/`.
- `app/globals.css` — the full design system (tokens + component classes), ported from the original
  design reference. **Source of truth for styling**; prefer the existing utility/component classes
  over new CSS.
- `components/` — server components by default; only `Header`, `ThemeToggle`, `ContactForm`,
  `NewsletterForm`, `TestimonialMarquee`, `ScrollReveal` are `'use client'`.
- `content/*.json` + `lib/content.ts` — typed build-time content loaders.
- `lib/site.ts` — brand constants + nav.

## Conventions

- Fonts via `next/font` (Inter Tight, Newsreader, Space Mono) exposed as `--font-*` CSS vars; no
  webfont CDN.
- Theme: `dark` class on `<body>`, persisted to `localStorage["bs-site-dark"]`, applied pre-paint by
  `components/ThemeScript`. Client reads it reactively via `useSyncExternalStore` (avoid
  setState-in-effect — the React 19 ESLint rule errors on it).
- `output: 'export'` constraints: no server-only features. `basePath`/`assetPrefix` come from
  `NEXT_PUBLIC_BASE_PATH` (blank in dev, `/<repo>` in the deploy workflow). Forms use
  `NEXT_PUBLIC_FORMSPREE_ID` with a `mailto` fallback.
- Respect `prefers-reduced-motion` (already wired for the marquee and scroll reveals).
- Path alias `@/*` → repo root.

## Deploy & release

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on push to `main`.
`.github/workflows/release.yml` cuts a GitHub Release on `vX.Y.Z` tags from the matching `RELEASE.md`
section. Every PR to `main` must add a bullet under `## Upcoming` in `RELEASE.md`.
