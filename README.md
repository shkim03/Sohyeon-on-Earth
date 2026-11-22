# Sohyeon on Earth ✦

Personal magical-girl × sci-fi × Y2K pixel-game website.

## Edit the site on GitHub

- `app/page.tsx`: homepage layout, game widgets, player profile and navigation.
- `app/globals.css`: palette, pixel-art styling, positions, responsive rules.
- `data/posts.ts`: blog posts. Add a new entry with a unique `slug` and YYYY-MM-DD `date`; the newest three appear automatically in the sidebar.
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`: blog index and article templates.
- `app/layout.tsx`: document metadata.
- `public/CNAME`: GitHub Pages custom domain.

This is an **independent reconstruction inspired by the ChatGPT Sites design direction**, not a byte-for-byte export. The original ChatGPT Sites artwork/source was not accessible through the repository. The central pixel-lab scene is SVG inside `app/page.tsx`, making it editable, and the wordmark is styled text so the exact logo can be substituted later. The dress-up widget changes costume locally in the browser; it does not save progress to a server. The three starter diary posts are editable placeholders.

## Development

Use Node.js 22 or newer.

```bash
npm ci
npm run dev
npm run typecheck
npm run build
```

Static files are exported to `out/`.

## Deploy

The workflow in `.github/workflows/pages.yml` deploys the `main` branch to GitHub Pages. Merge the redesign PR only when ready for the new homepage to go live. Keep **Settings → Pages → Build and deployment → GitHub Actions** selected. Configure `aerohypegirl.com` under **Settings → Pages → Custom domain**, and configure the DNS at the domain registrar to point to GitHub Pages.

This site has no database; blog entries are authored in `data/posts.ts` and automatically incorporated into the static build.
