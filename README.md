# React Portfolio (JSON-driven)

This is a fast, modern React + TypeScript portfolio site where **all content is driven by** `public/config.json`.

## Tech

- React + TypeScript (Vite)
- Tailwind CSS v4 (via Vite plugin)
- Framer Motion (animations)
- Zod (runtime validation of `config.json`)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173/`).

## Customize your website (edit one file)

Update:

- `public/config.json`

That file controls:

- Intro (name, role, tagline, avatar, resume)
- About text + quick facts
- Education
- Work experience
- Projects
- Interests
- Contact info
- Coding platform + social links

### Icons for links

In `public/config.json`, each link can optionally include an `icon` string.

Supported values (case-insensitive):

- `github`, `linkedin`, `email`, `website`, `leetcode`, `codeforces`, `hackerrank`, `geeksforgeeks` / `gfg`, `twitter`, `instagram`, `youtube`

If the icon is unknown, a generic link icon is used.

## Directory structure

```
public/
  config.json          # Your site content (edit this)
  favicon.svg
src/
  components/          # Reusable UI building blocks
  config/              # Zod schema + config loader hook
  lib/                 # Small utilities (icons, active section hook)
  pages/               # Page composition
  sections/            # Page sections (About, Projects, Contact, ...)
  styles/              # Global styles (Tailwind import)
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

This is a static site. You can deploy `dist/` to:

- Vercel
- Netlify
- GitHub Pages (static hosting)

