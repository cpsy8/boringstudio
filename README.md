# Boring Studio — marketing site

> _"Boring Studio" is placeholder name._ Lives only in `lib/site.ts`, footer, email + page `<title>`s — swap there when real name chosen.

Agency marketing + lead-gen site. Static-exported **Next.js (App Router) + TypeScript**, deployed to **GitHub Pages**. No server, no API routes, no runtime CMS — content read from JSON at build time.

## Stack

- Next.js (App Router), `output: 'export'` → fully static `out/`
- TypeScript, ESLint (`next/core-web-vitals` + `next/typescript`), Prettier
- `next/font` (Inter Tight, Newsreader, Space Mono) — self-hosted, no CDN, no layout shift
- Global CSS design system in `app/globals.css` (source of truth for tokens + components)

## Content workflow (interim)

No live CMS this phase. Content is plain JSON in `content/`:

- `services.json` — services + detail-page copy (drives `/services` and `/services/[slug]`)
- `projects.json` — case studies (drives `/works` and `/works/[slug]`)
- `verticals.json` — "solutions by vertical" tiles
- `testimonials.json` — marquee quotes

**To edit content:** change JSON file and rebuild. Dynamic routes use `generateStaticParams` over these files, so adding entry adds page on next build. Custom server-hosted CMS deferred to future phase.
