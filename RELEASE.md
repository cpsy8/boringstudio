# Releases

This project uses [semantic versioning](https://semver.org/), kept in sync with the `version`
field in `package.json`.

## Release process

1. **Bump the version** in `package.json` (`major.minor.patch`).
2. **Move `## Upcoming`** below to a dated section: rename it to `## vX.Y.Z — YYYY-MM-DD`, then add a
   fresh empty `## Upcoming` above it.
3. **Commit** the version bump + changelog on a release branch and merge via PR.
4. **Tag and push**: `git tag vX.Y.Z && git push origin vX.Y.Z`.
   - Pre-releases: `vX.Y.Z-rc.N` / `-beta.N` / `-alpha.N`.
   - The tag push triggers `.github/workflows/release.yml`, which creates a GitHub Release using the
     matching section below.

Every PR to `main` must add a bullet under `## Upcoming` (CI: `release-notes-check`). Pure
docs/CI/tooling changes may use the `no-release-note` label to bypass.

---

## Upcoming

- Themed rhino mark in the header, footer brand block and footer bottom strip — `rhino-black.svg`
  in light mode, `rhino-white.svg` in dark mode, swapped via CSS so there is no flash on toggle.
- Initial `boring studio` marketing site: static-exported Next.js (App Router + TypeScript) with
  Home, Services (+ detail), Work (+ case-study detail), About and Contact pages.
- Dark-mode toggle with cross-page `localStorage` persistence and no flash of incorrect theme.
- Real mobile menu, light scroll-in reveals, and a `prefers-reduced-motion`-aware testimonial marquee.
- Contact + newsletter forms wired to Formspree (`NEXT_PUBLIC_FORMSPREE_ID`) with a `mailto` fallback
  and a success confirmation card.
- GitHub Actions deploy to GitHub Pages and tag-driven GitHub Releases.
- Self-host the three brand fonts (Inter Tight, Newsreader, Space Mono) via `next/font/local` —
  no Google CDN or build-time fetch.
- Fix font cascade bug: move the `next/font` CSS variables to `<html>` so `--sans`/`--serif`/`--mono`
  resolve (previously empty → everything fell back to the browser default serif).
- Full-bleed page surface: backgrounds span the viewport while content stays in a centered
  ~1180px column.
