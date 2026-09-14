# Cheshire Kitchens — Web

Next.js (App Router) public marketing site + admin CMS UI.

## Setup

```
npm install
cp .env.local.example .env.local   # if starting fresh; a working .env.local is already present
npm run dev
```

Runs on `http://localhost:3000`. Requires the API (`../backend`) running — see its README.

Public pages (`/`, `/about-us`, `/kitchens`, `/bedrooms`, `/inspiration`, `/inspiration/[slug]`,
`/project-gallery`, `/showroom`) are server-rendered and pull content from the API with
ISR (`revalidate: 3600`). `/admin/*` is client-rendered, JWT-gated, `noindex`ed, and excluded
from the sitemap.

## Design system

Apple-derived: pill buttons, 28px card radii, alternating `#ffffff`/`#f5f5f7` section
backgrounds, tight-tracking display type, SF Pro on Apple devices (`-apple-system` stack) with
Inter as the loaded web fallback everywhere else. Brand navy reserved for CTAs and the
navbar/footer brand surfaces; inline links use a separate blue. See `app/globals.css` for the
token definitions.

## Theming

Light/dark mode via `next-themes` (`components/ThemeProvider.jsx`), toggled with
`components/ThemeToggle.jsx` (in the navbar and admin nav). Attribute strategy is `class` —
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

## Notable Next.js 16 gotcha

`next/image` optimization against a loopback host (e.g. the local API at `localhost:4000`) is
blocked by default as SSRF protection — `next.config.mjs` opts back in via
`images.dangerouslyAllowLocalIP` only when the configured API host is loopback, so this has no
effect once a real production API domain is set.
