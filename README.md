# Obsidian Gallery (Next.js + Netlify)

This project is now a Next.js app that serves the Stitch-exported pages through clean routes.

## Routes

- `/` → `public/site/index.html`
- `/about` → `public/site/about.html`
- `/artists` → `public/site/artists.html`
- `/portfolio` → `public/site/portfolio.html`

## Local development

```bash
npm install
npm run dev
```

Open: <http://localhost:3000>

## Build

```bash
npm run build
npm run start
```

## Netlify deploy

This repo includes `netlify.toml` with Next.js plugin support.

### Option A: Netlify UI (recommended)
1. Push repo to GitHub.
2. In Netlify: **Add new site** → **Import from Git**.
3. Select this repo.
4. Build settings should auto-detect from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy.

### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --build
netlify deploy --prod --build
```
