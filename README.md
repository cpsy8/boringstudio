# Boring Studio — marketing site

> _"Boring Studio" is a working placeholder name._ It lives only in `lib/site.ts`, the footer, the
> email and page `<title>`s — swap it there when the real name is chosen.

Agency marketing + lead-gen site. Static-exported **Next.js (App Router) + TypeScript**, deployed to
**GitHub Pages**. No server, no API routes, no runtime CMS — content is read from JSON at build time.

## Stack

- Next.js (App Router), `output: 'export'` → fully static `out/`
- TypeScript, ESLint (`next/core-web-vitals` + `next/typescript`), Prettier
- `next/font` (Inter Tight, Newsreader, Space Mono) — self-hosted, no CDN, no layout shift
- Global CSS design system in `app/globals.css` (ported from the design reference; source of truth
  for tokens + components)

## Commands

```bash
npm install        # install deps
npm run dev        # local dev at http://localhost:3000 (no base path)
npm run build      # static export to ./out
npm run lint       # eslint
npm run format     # prettier --write
```

Local preview of the export: `npx serve out`.

## Project layout

```
app/                 # App Router pages (all statically generated)
  page.tsx           # /
  services/          # /services + /services/[slug]
  works/             # /works + /works/[slug]
  about/             # /about
  contact/           # /contact
  globals.css        # design system + tokens
components/          # Header (mobile menu + theme toggle), Footer, ContactForm, etc.
content/             # JSON content (services, projects, verticals, testimonials)
lib/                 # site constants + content loaders/types
public/              # static assets + .nojekyll
```

## Content workflow (interim)

There is **no live CMS this phase**. Content is plain JSON in `content/`:

- `services.json` — services + detail-page copy (drives `/services` and `/services/[slug]`)
- `projects.json` — case studies (drives `/works` and `/works/[slug]`)
- `verticals.json` — "solutions by vertical" tiles
- `testimonials.json` — marquee quotes

**To edit content:** change the JSON file and rebuild. Dynamic routes use `generateStaticParams`
over these files, so adding an entry adds a page on the next build. A custom, server-hosted CMS is
**deferred to a future phase**.

## Configuration

Base path is overridable so local dev and root-domain hosting work without a prefix:

| Env | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Sub-path for project-site hosting (e.g. `/boringstudio`) | empty (root) |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form id for the contact + newsletter forms | unset → `mailto` fallback |

Local dev needs neither. The deploy workflow sets `NEXT_PUBLIC_BASE_PATH` automatically from the repo
name.

### Contact form

The contact and newsletter forms POST to **Formspree** when `NEXT_PUBLIC_FORMSPREE_ID` is set;
otherwise they fall back to a prefilled `mailto:`. On success the contact form swaps to a confirmation
card. Set `NEXT_PUBLIC_FORMSPREE_ID` in the repo to enable live submissions.

### Speed-checker tile

The Home "site speed checker" is a **static, presentational** callout (no live input) — it shows what
the studio measures without shipping a dead form.

## Deployment — GitHub Pages

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). `.github/workflows/deploy.yml`
   builds the static export and publishes `out/` via `upload-pages-artifact` + `deploy-pages`.
3. The site serves at `https://<user>.github.io/<repo>/` — the workflow sets `NEXT_PUBLIC_BASE_PATH`
   to `/<repo>` so asset URLs resolve under the sub-path.

`public/.nojekyll` is included so GitHub Pages serves Next's `_next/` directory.

## Versioning & releases

Semantic versioning, synced with `package.json`. See [`RELEASE.md`](./RELEASE.md) for the process.
Pushing a `vX.Y.Z` tag triggers `.github/workflows/release.yml`, which cuts a GitHub Release from the
matching `RELEASE.md` section.

## Accessibility & performance

Semantic HTML, visible `:focus-visible` outlines, AA contrast, `prefers-reduced-motion` honored
(marquee/float/reveals disabled). Minimal client JS — only the header, theme toggle, forms, marquee
and scroll-reveal are client components; everything else is server-rendered static.
