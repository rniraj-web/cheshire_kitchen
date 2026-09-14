# Cheshire Kitchens & Bedrooms

Marketing site + CMS for Cheshire Kitchens & Bedrooms.

## Structure

- `backend/` — Express + MongoDB API. Admin auth, CRUD for kitchen/bedroom ranges, project
  gallery, blog posts, and contact enquiries. See `backend/README.md`.
- `web/` — Next.js (App Router) public site + admin panel UI. See `web/README.md`.
- `frontend/` — the original Vite + React prototype. Kept as a reference only; not part of the
  live site. Real copy and the logo were ported from here into `web/`.

## Running locally

```
cd backend && npm install && npm run dev   # http://localhost:4000
cd web && npm install && npm run dev       # http://localhost:3000
```

The backend uses an in-memory MongoDB automatically when `MONGODB_URI` isn't set (see
`backend/.env.example`) — handy for local dev, but data resets on every restart. Point
`MONGODB_URI` at a real MongoDB (e.g. a free MongoDB Atlas cluster) for anything persistent.

To get an admin login without a persistent database, set `SEED_ADMIN_EMAIL` /
`SEED_ADMIN_PASSWORD` in `backend/.env` — an admin user is created automatically on startup if
none exists yet. Against a persistent database, use `npm run seed:admin -- <email> <password>`
once instead.

## Known placeholders to swap in before launch

- **Phone / WhatsApp numbers** — centralized in `web/lib/config.js`, currently placeholders.
- **Brand navy colour** — `--color-navy` in `web/app/globals.css`, sampled as a placeholder;
  swap for the exact colour from the shop signage.
- **Product photography** — every kitchen/bedroom range, gallery project and blog post is
  managed through `/admin` and currently has no real photos. Log in and add them there.
- **Siemens partnership assets** — the homepage currently shows a text badge; swap in their
  logo/lockup once you have the assets you're contractually permitted to use.
