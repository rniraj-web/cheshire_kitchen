# Cheshire Kitchens — API

Express + MongoDB (Mongoose) API: kitchen/bedroom ranges, project gallery, blog posts, contact
enquiries, and a JWT-authed admin CRUD surface.

## Setup

```
npm install
cp .env.example .env
npm run dev
```

Runs on `http://localhost:4000` by default (`PORT` in `.env`).

Without `MONGODB_URI` set, the server automatically spins up an in-memory MongoDB — no local
MongoDB install or Docker needed for development, but data resets every restart. Set
`MONGODB_URI` to a real connection string (e.g. a free MongoDB Atlas cluster) for persistence.

## Admin user

Either:
- Set `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` in `.env` — created automatically on boot if no
  admin exists yet (works with the in-memory database too), or
- Run `npm run seed:admin -- <email> <password>` against a persistent `MONGODB_URI`.

## Endpoints

Public: `GET /api/ranges?type=kitchen|bedroom`, `GET /api/gallery`, `GET /api/blog`,
`GET /api/blog/:slug`, `POST /api/enquiries`.

Admin (`Authorization: Bearer <token>` from `POST /api/admin/login`): CRUD on
`/api/admin/ranges`, `/api/admin/gallery`, `/api/admin/blog`; `POST /api/admin/upload`
(multipart `image` field, returns `{ url }`); `GET /api/admin/enquiries`.

## Known limitation

Uploaded images are stored on local disk under `uploads/`, served via `/uploads/*`. This is
fine for a persistent server (VPS, Docker with a volume) but won't survive a redeploy on an
ephemeral host (e.g. Vercel serverless). Swap `src/middleware/upload.js`'s disk storage for a
cloud bucket (S3/Cloudinary) if deploying somewhere ephemeral — no model changes needed since
images are already stored as `{ url, alt }`.
