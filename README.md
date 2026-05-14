# vsuryakumar.com

Personal tech blog by **V Surya Kumar** — writing about AI, Software Engineering, and Systems.

Built with [Astro](https://astro.build), styled with a dark-mode-first design system.

🔗 **Live:** [vsuryakumar.com](https://vsuryakumar.com)

## ✨ Features

- 🌙 Dark-mode design with cyan/purple accent gradients
- 🏷️ Tag system with color-coded badges and dedicated tag pages
- 📡 RSS feed and sitemap
- 🔍 SEO — Open Graph, Twitter cards, canonical URLs, `robots.txt`
- 📱 Fully responsive with mobile hamburger nav
- ⚡ Built on Astro 6 — fast static-site generation
- ✍️ Write posts in Markdown/MDX

## 📁 Project Structure

```
src/
├── assets/           # Images, fonts
├── components/       # BaseHead, Header, Footer, TagBadge, etc.
├── content/
│   └── blog/         # Blog posts (Markdown/MDX)
├── layouts/          # BlogPost layout
├── pages/
│   ├── index.astro   # Homepage (hero + latest posts)
│   ├── about.astro   # About page
│   ├── blog/         # Blog listing + [slug] routing
│   ├── tags/         # Tags index + [tag] filtering
│   └── rss.xml.js    # RSS feed
├── styles/
│   └── global.css    # Design system
├── consts.ts         # Site config, social links, tag colors
└── content.config.ts # Content collection schema
```

## ✍️ Writing a New Post

Create a `.md` file in `src/content/blog/`:

```yaml
---
title: 'Your Post Title'
description: 'Short summary for cards and SEO.'
pubDate: 'May 15 2026'
tags: ['ai', 'systems', 'tutorial']
---

Your Markdown content here...
```

### Available Tags

`ai` · `llm` · `systems` · `software-engineering` · `agents` · `deep-learning` · `tutorial` · `infrastructure`

Custom tags work too — they'll render with a neutral gray. Add new colored tags in `src/consts.ts`.

## 🧞 Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start dev server at `localhost:4321`         |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview production build locally             |

## 🛠️ Customization

| What                  | Where                         |
| :-------------------- | :---------------------------- |
| Site title & bio      | `src/consts.ts`               |
| Social links          | `src/consts.ts`               |
| Tag colors            | `src/consts.ts`               |
| Design tokens         | `src/styles/global.css`       |
| Homepage hero         | `src/pages/index.astro`       |
| About page content    | `src/pages/about.astro`       |
| Site URL & fonts      | `astro.config.mjs`            |
