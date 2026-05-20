# yenniejun.com

My personal website. Lives at [yenniejun.com](https://yenniejun.com).

## Stack

- **[Astro](https://astro.build)** (v5) — static site framework
- Fonts: Fraunces (display), Inter (UI), Manrope (taglines)
- Markdown content with Astro content collections
- Deployed to GitHub Pages via `gh-pages` (custom domain set via `CNAME`)

## Repo layout

```
v2/                        ← the active Astro site (everything new lives here)
  src/
    pages/                 ← routes (index, projects, writing, books, blog/[slug], books/[slug])
    components/            ← Header, Footer, ProjectCard, BookListItem, etc.
    layouts/Layout.astro   ← base HTML shell + scroll fade-in script
    content/
      blog/                ← Markdown blog posts (.md)
      books/               ← Markdown book notes (.md)
    data/portfolio.json    ← Projects shown on /projects
    styles/global.css      ← design tokens, fonts, base styles
  public/                  ← static assets (sunflower SVG, icons, CNAME, .nojekyll)
  astro.config.mjs

mockups/                   ← initial HTML design exploration (kept for reference)
src/, gatsby-*.js          ← old Gatsby site (no longer built — kept in history only)
```

## Local development

```bash
cd v2
npm install        # first time only
npm run dev        # http://localhost:4321
```

## Adding content

### New blog post

Create `v2/src/content/blog/<slug>.md`:

```yaml
---
posttype: "blog"
path: "/blog/my-post-slug"
date: "2026-05-20"
title: "Post title"
tags: ["Data Science"]   # or "Opinion", "Creative Nonfiction", "Fiction"
description: "One-line preview shown on the writing list."
---

Body in markdown…
```

### New book note

Create `v2/src/content/books/YYYYMMDD slug.md`:

```yaml
---
posttype: "books"
path: "/books/my-book-slug"
date: "2026-05-20"
title: "Book title"
author: "Author name"
tags: ["Fiction", "Sci-Fi"]   # see existing books for vocabulary
link: "https://www.goodreads.com/book/show/..."
rating: 4.2
description: "One-line preview."
---

Notes in markdown…
```

New tags automatically appear in the filter bar on `/books`.

## Deploy

From `v2/`:

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `master` branch via `gh-pages`. GitHub Pages serves `master` at yenniejun.com.

Then commit your source changes to `develop`:

```bash
cd ..
git add v2/ && git commit -m "..." && git push origin develop
```

## Branches

- **`develop`** — source code (you edit here)
- **`master`** — built static site (GitHub Pages serves this; do not edit manually)

## Gotchas

- `.nojekyll` and the `astro-assets/` build folder (instead of default `_astro/`) are both required so GitHub Pages' Jekyll doesn't strip the assets folder.
- `v2/public/` is excluded by the root `.gitignore` (legacy from Gatsby). Files in there are force-added when needed.
