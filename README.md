# La Pinzeria Website

Astro website for La Pinzeria (Elviria, Marbella), with bilingual content (ES/EN), menu filtering, and WhatsApp/SMS order flow.

## Tech Stack

- Astro
- TypeScript
- Plain CSS (global styles in layout)

## Local Development

Run from project root:

```bash
npm install
npm run dev
```

Local URL:

```text
http://localhost:4321
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Main Content Files

- Brand/contact/hours/reviews config: `src/config/site.config.ts`
- Menu data: `src/config/menu.data.ts`
- Translations ES/EN: `src/i18n/translations.ts`
- Global layout and CSS: `src/layouts/Layout.astro`

## GitHub Pages Deploy

Deploy is handled by GitHub Actions workflow:

- Workflow file: `.github/workflows/deploy.yml`
- Astro base/site config: `astro.config.mjs`

### Important

This project computes the Pages base path from `GITHUB_REPOSITORY` during GitHub Actions build.
That prevents stale paths after repository rename.

## Deploy Checklist (After Repo Rename)

1. Confirm `origin` points to the correct repo:

```bash
git remote -v
```

2. Confirm `astro.config.mjs` uses dynamic base from `GITHUB_REPOSITORY`.

3. Push to `main`:

```bash
git push origin main
```

4. Wait for GitHub Actions `Deploy to GitHub Pages` to finish green.

5. Open Pages URL and hard refresh (`Ctrl+F5`):

```text
https://pgrantas-debug.github.io/la-pinzeria/
```

6. If styles look broken, check browser Network tab for `404` on `/_astro/` assets and verify base path in generated HTML.
