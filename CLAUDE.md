# Sohyeon on Earth — project guide

This is a GitHub Pages-deployed static Next.js App Router project (Next.js 16, React 19, TypeScript). Node.js 22+.

Design direction: magical girl × sci-fi × Y2K web game. Pink/lilac glow, decorative sparkles, pixel laboratory central hero, retro desktop app sidebars. Do not revert to the older black/pink blue-bus collage.

## Files
- `app/page.tsx` — interactive home, pixel SVG scene, dress-up game, profile, blog sidebar.
- `app/globals.css` — styling and breakpoints.
- `data/posts.ts` — plain typed array of posts, newest by date. Add entries here.
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` — static blog pages.
- `app/layout.tsx` — metadata.
- `public/CNAME` — custom domain.

The source ChatGPT Sites layout and proprietary artwork were not accessible for automatic export. This is an independent approximation based on established design requirements. Prefer replacing the logo with the user's actual asset when available, and do not claim exact pixel matching.

Keep GitHub Pages static export functional. Test with `npm ci && npm run typecheck && npm run build`.
