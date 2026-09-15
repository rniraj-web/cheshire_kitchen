# Cheshire Kitchens & Bedrooms

Marketing site for Cheshire Kitchens & Bedrooms — a single Next.js app, no separate
backend/database needed for content.

## Structure

- `web/` — Next.js (App Router) site. This is the whole project now. See `web/README.md`.
- `frontend/` — the original Vite + React prototype. Kept as a reference only; not part of the
  live site. Real copy and the logo were ported from here into `web/`.

There used to be a full MERN CMS here (Express + MongoDB + an admin login panel for managing
ranges/gallery/blog content). It was removed at the user's request — no admin login was
wanted, and future photo updates are expected to go through direct edits (see
`web/data/*.js`) rather than a web-based CMS. That old backend and the admin UI weren't
deleted — they were moved to `~/kitchen additional/` in case they're wanted again:

- `~/kitchen additional/backend/` — the full Express + MongoDB CMS API (ranges/gallery/blog
  CRUD, JWT admin auth, image upload).
- `~/kitchen additional/web-admin-ui/` — the `/admin/*` pages and admin components that used
  to live in `web/`.

## Running locally

```
cd web && npm install && npm run dev   # http://localhost:3000
```

That's it — one app, one process. Kitchen/bedroom range content, the project gallery, and blog
posts are static data in `web/data/*.js` with photos in `web/public/images/`. The only real
backend logic left is the contact form, handled by `web/app/api/enquiries/route.js` (a Next.js
API route backed by MongoDB — see `web/README.md` for the details).

## Adding new photos or content

Edit the relevant file in `web/data/` (`ranges.js`, `gallery.js`, or `blog.js`) and drop the
image into `web/public/images/`. No login, no database write, no redeploy step beyond a normal
build — this is exactly the kind of change to hand to Claude Code in a future session with the
new photos in a folder, the same way the current photos were added.

## Known placeholders to swap in before launch

- **Phone / WhatsApp numbers** — centralized in `web/lib/config.js`, currently placeholders.
- **Brand navy colour** — `--color-navy` in `web/app/globals.css`, sampled as a placeholder;
  swap for the exact colour from the shop signage.
- **Siemens partnership assets** — the homepage currently shows a text badge; swap in their
  logo/lockup once you have the assets you're contractually permitted to use.
