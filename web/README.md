# Cheshire Kitchens — Web

Next.js (App Router) marketing site. Self-contained — no separate backend process to run.

## Setup

```
npm install
cp .env.local.example .env.local   # if starting fresh; a working .env.local is already present
npm run dev
```

Runs on `http://localhost:3000`. Nothing else needs to be running.

Public pages (`/`, `/about-us`, `/kitchens`, `/bedrooms`, `/inspiration`, `/inspiration/[slug]`,
`/project-gallery`, `/showroom`) are static, built from `data/ranges.js`, `data/gallery.js` and
`data/blog.js` plus photos in `public/images/`. To add or change content, edit those files
directly and rebuild — no login, no database write.

The one real dynamic piece is the contact form: `POST /api/enquiries`
(`app/api/enquiries/route.js`) is a Next.js Route Handler that saves submissions to MongoDB via
Mongoose (`lib/db.js`, `models/Enquiry.js`). Without `MONGODB_URI` set, it spins up an
in-memory MongoDB automatically — fine for local dev, but submissions vanish on restart. Set
`MONGODB_URI` (e.g. a free MongoDB Atlas cluster) to actually keep enquiries.

There's no admin login and no way to read submitted enquiries through the site — that CMS/admin
system was removed at the user's request (moved, not deleted, to `~/kitchen additional/` — see
the root README). To check enquiries for now, query the `enquiries` collection directly in
whatever MongoDB `MONGODB_URI` points at.

## Design system

Apple-derived: pill buttons, 28px card radii, alternating `#ffffff`/`#f5f5f7` section
backgrounds, tight-tracking display type, SF Pro on Apple devices (`-apple-system` stack) with
Inter as the loaded web fallback everywhere else. Brand navy reserved for CTAs and the
navbar/footer brand surfaces; inline links use a separate blue. See `app/globals.css` for the
token definitions.

## Theming

Light/dark mode via `next-themes` (`components/ThemeProvider.jsx`), toggled with
`components/ThemeToggle.jsx` (in the navbar). Attribute strategy is `class` —
Tailwind's `dark:` variant is remapped in `globals.css` (`@custom-variant dark`) to match. Most
of the palette is theme-agnostic by construction: colors are CSS custom properties under
`@theme` in `globals.css`, redefined once under `.dark`, so components using the `-surface`,
`-ink`, `-navy`, `-link`, `-hairline` token utilities flip automatically — no per-component
`dark:` classes needed except for a few hardcoded arbitrary-value gradients.

## Motion

Animation via `motion/react` (formerly Framer Motion): `components/motion/Reveal.jsx` is the
scroll-reveal primitive used across the content pages; page transitions live in
`SiteChrome.jsx`; the Kitchens/Bedrooms accordion, mobile nav, theme toggle icon, and the
WhatsApp button all have their own small motion treatments. `components/MotionProvider.jsx`
sets `reducedMotion="user"` globally so every motion/react animation (not just plain CSS
transitions) collapses to instant for users with the OS-level reduce-motion preference set.

