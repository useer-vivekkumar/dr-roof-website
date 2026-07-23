# Dr. Roof — Website

A premium marketing site for Dr. Roof, a residential & commercial roofing
contractor serving Roswell, Atlanta, and Marietta, GA.

## Design concept

- **Palette:** Storm slate (`#1E2A38` family) paired with a copper accent
  (`#B5652D` family) — drawn from real roofing materials (slate shingles,
  copper flashing) rather than a generic template palette.
- **Type:** Zilla Slab (display) + Inter (body) + JetBrains Mono (stats,
  phone numbers, labels).
- **Signature element:** a repeating pitched-roofline silhouette
  (`.roofline-down` / `.roofline-up` in `app/globals.css`, wrapped by
  `components/RoofDivider.tsx`) used as the transition shape between major
  sections instead of a plain hairline.

## Tech stack

- Next.js 16.2 (App Router, Active LTS, Turbopack by default)
- React 19.2
- TypeScript
- Tailwind CSS
- lucide-react (icons)

### Dependency notes (Next.js 15 → 16 upgrade)

- Requires **Node.js ≥ 20.9.0** (enforced via `engines` in `package.json`) —
  set this as the Node version in your Vercel project settings if it isn't
  already on 20.x or later.
- `react` / `react-dom` bumped to `^19.2.8` and `@types/react` /
  `@types/react-dom` to `^19.2.0`, since Next.js 16 requires React 19.2.
- `next lint` was removed in Next.js 16. The `lint` script now runs
  `eslint` directly (`lint:fix` runs `eslint --fix`). `next build` no
  longer lints automatically, so run `npm run lint` separately (e.g. in CI)
  if you want lint failures to block a deploy.
- `eslint.config.mjs` is unchanged — the `next/core-web-vitals` /
  `next/typescript` flat-config setup via `FlatCompat` is still the
  documented pattern for Next.js 16.
- No design, component, layout, or copy changes were made as part of this
  upgrade.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx      → fonts, SEO metadata, root shell
  page.tsx         → assembles all sections
  globals.css       → design tokens, roofline divider utility
components/
  Nav.tsx           → sticky navigation
  Hero.tsx          → hero with stat card
  TrustBadges.tsx
  About.tsx
  Services.tsx
  WhyChooseUs.tsx
  Process.tsx       → 4-step project timeline
  Gallery.tsx        → CSS/SVG project placeholder tiles
  Testimonials.tsx    → clearly-marked sample reviews
  FAQ.tsx            → accordion
  CTABanner.tsx
  ContactForm.tsx    → client-side validated lead form
  Footer.tsx
  RoofDivider.tsx     → signature section-transition component
lib/
  business.ts        → single source of truth for business data
```

## Notes

- Gallery tiles use CSS gradients + inline SVG rather than stock/copyrighted
  photography. Swap in real project photos by replacing the tile markup in
  `components/Gallery.tsx`.
- Testimonials are explicitly labeled as illustrative samples pending real
  customer quotes.
- Contact-form submissions are sent to the configured n8n webhook through
  `app/api/leads/route.ts`. The workflow receives `name`, `phone`, `email`,
  `service`, `message`, `source`, and `submittedAt` as JSON.
- `email` and `logo_url` were not supplied in the source brief; a reasonable
  default email (`info@drroof.com`) was used and the logo is a typographic
  wordmark rather than an image.
