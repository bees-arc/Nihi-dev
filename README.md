# NIHI — Next.js Site Scaffold

Full site scaffold for the nihi.no rebuild, built on the monochrome
(`#F0F0F0` / `#111111`) glassmorphic design system.

## What's included

- **Home** (`/`) — glassmorphic hero, program index, "Why NIHI" grid,
  faculty preview, advisor booking (Victoria / Calendly), testimonials,
  closing CTA.
- **Studier** (`/studier`) — overview of all four programs, and a
  dynamic **course page template** at `/studier/[slug]` used by all four:
  - Klinisk Idrettsmedisin
  - Sertifisert Coach og Mentaltrener
  - Sertifisert Kostholdsveileder
  - Sertifisert Idretts- og Muskelterapeut

  Each follows the Part 10 template: hero → overview → lecturer & learning
  outcomes → module ledger → who it's for / career outcomes → execution,
  gatherings, assessment & pricing → CTA.
- **Moduler** (`/moduler`) — full module index across all four programs.
- **Forelesere** (`/forelesere` + `/forelesere/[slug]`) — faculty grid and
  individual profile pages, pulling real names/photos from nihi.no.
- **Artikler** (`/artikler`) — article index with real titles pulled from
  the current site.
- **Kontakt** (`/kontakt`) — contact details, inquiry form, advisor booking.

## Content sourcing

Program copy (intros, learning outcomes, module descriptions, who-it's-for,
gatherings, assessment criteria) was pulled and translated from the current
nihi.no program pages and rewritten into clean English. `lib/data.ts` is the
single source of truth — edit program/faculty/testimonial content there and
it propagates across every page automatically.

The **Sertifisert Idretts- og Muskelterapeut** program page is assembled
from fragments (the direct page returned a server error during this build)
— worth a manual check against the live page before publishing.

## Design system

- Colors, type, and layout tokens live in `app/globals.css`
  (`--bg`, `--ink`, `--accent`, `--font-display`, etc.)
- Display face: **Fraunces** (italic used for emphasis), body: **Inter**,
  utility/labels: **IBM Plex Mono** — loaded via Google Fonts `@import` in
  `globals.css` (works once deployed with normal internet access).
- Signature motif: the **numbered module ledger** (used on program pages,
  the homepage program index, and `/moduler`) — ties directly to the fact
  every program is genuinely structured as six sequential modules.
- `.glass` / `.glass-dark` utility classes implement the glassmorphic
  surfaces used in the hero, nav, and advisor-booking sections.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

## Next steps / things to plug in for real

- Wire the contact form (`/kontakt`) to an actual endpoint (email, CRM, etc).
- Confirm the Calendly link (`siteInfo.calendly` in `lib/data.ts`) is
  Victoria's current booking page.
- Faculty photos are currently hot-linked from `www.nihi.no` — swap for
  self-hosted assets before going live.
- Article pages are index-only placeholders; each needs a real article
  detail route once content is finalized.
- Double check pricing/dates in `lib/data.ts` against current admissions
  info before publishing — some fields (e.g. Idretts- og Muskelterapeut
  pricing) are marked "contact admissions" pending confirmation.
