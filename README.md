# Aldor — Web (Phase 1: Homepage)

Next.js 15 + TypeScript + Tailwind + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What's built (Phase 1)

- Navbar — transparent over hero, turns cream/blurred on scroll, dropdown for Products, mobile menu
- Hero — headline, CTAs, floating phone mockup
- Trusted Businesses — infinite logo marquee
- Categories — 7 animated cards (Food, Grocery, Pharmacy, Fashion, Farms, Diesel, Bills)
- Why Aldor — Fast / Real-time Tracking / Reliable, hover-lift cards
- Experience — tracking phone mock + feature list
- Business section — dark, dashboard mock, partner CTA
- Rider section — earnings pitch + 4 feature cards
- Suppliers — farm/diesel/wholesale cards
- Bill Payments — phone mock with floating utility icons
- Testimonials — restaurant owner / customer / rider
- FAQ — accordion
- Download — QR + store buttons
- Footer

Colors and type tokens are in `tailwind.config.ts` (primary #EA0026, yellow #FFD400,
cream #FFF9EE, ink #111111, gray #666666 — General Sans headings / Inter body).

## What's built (Phase 2)

- `/about` — story, stats, values, CTA
- `/businesses` — benefits, how-it-works, dashboard preview, partner signup form
- `/riders` — earning cards, requirements, typical weekly earnings, rider signup form
- `/suppliers` — farm/diesel/wholesale categories, supplier signup form
- `/contact` — contact info + working contact form (frontend only for now)

Forms on these pages show a success state on submit but don't send data anywhere yet —
that needs the Node/API backend (or an API route + email/CRM integration) whenever you're ready.

## Not yet built (per your phased plan)

- Phase 3: SEO metadata polish, image optimization, Lighthouse pass
- Phase 4: deployment to Vercel, final animation polish
- Sitemap extras not in your phased list yet: /blog, /privacy, /terms

## Notes

- `next/font` loads Inter; General Sans is pulled from Fontshare's CDN in `app/layout.tsx`.
  If you'd rather self-host it, download the family and swap the `<link>` for a local `next/font/local` setup.
- Framer Motion `whileInView` triggers are used for scroll reveals — no external scroll library needed.
- Placeholder phone "screens" are built with plain divs so there are zero image dependencies to start;
  swap in real screenshots/Lottie files whenever you have them.
