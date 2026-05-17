# Luxury Navbar Redesign

Redesign only `src/components/Header.tsx` (and small CSS additions in `src/index.css`). No page, hero, trust strip, route, or data changes.

## Behavior

- **Transparent over hero, cream on scroll**
  - At top of page: transparent background, no shadow, light cream + gold text/links so it reads over dark cinematic hero images (current dark-glass effect removed).
  - After ~24px scroll: solid cream (`#F8F5EF`) background, soft premium shadow, dark navy (`#0B1C33`) text, gold (`#D4AF37`) hover/active underline.
  - Smooth 400ms color + background transition between the two states.
- Sticky, height 80px desktop / 64px mobile.
- Logo links to `/`. Keep using existing `src/assets/logo.png` for now; swap to new elephant + palace emblem when you upload it (I will not change the asset until then).
  - Desktop height 60px, mobile 45px, `object-contain` so it never stretches.

## Menu (all 9 items kept)

Home, About, Packages, Sightseeing, Transport, Experiences, Gallery, Journal, Contact.

- Desktop: inline row, elegant uppercase tracking, dark-navy text on scrolled state / cream text on transparent state, gold hover with animated underline, active route stays gold with underline.
- At `lg` breakpoint links stay inline; below `lg` collapse into hamburger.

## Right-side CTA cluster

- Phone icon + WhatsApp number `+91 94610 69858` (tel + wa.me links), hidden on small screens.
- Gold pill button **"Enquire Now"** linking to `/contact`.
  - Gold (`#D4AF37`) background, white text, rounded-full, subtle lift + deeper gold shadow on hover.

## Mobile

- Right-aligned hamburger, color adapts to scroll state.
- Slide-in panel from right, **white** background, dark-navy links, large 56px touch targets, gold active state.
- Sticky phone + WhatsApp + gold "Enquire Now" pinned at bottom of panel.
- Closes on route change and on backdrop tap.

## Tokens (added to `src/index.css`)

```text
--lux-navy:  #0B1C33
--lux-gold2: #D4AF37
--lux-cream2:#F8F5EF
```

New utility classes: `.lux-nav-light` (cream + shadow), `.lux-nav-clear` (transparent over hero), `.lux-cta-gold` (gold pill button), `.lux-nav-link-dark` (navy → gold hover variant for scrolled state).

## Accessibility & perf

- Semantic `<header><nav>` with `aria-label`, `aria-current="page"` on active link, focus-visible gold ring.
- Logo `loading="eager"` + `fetchpriority="high"` + width/height attrs to avoid CLS.
- Scroll listener is passive; transition uses CSS only.

## Out of scope (per your answers)

- Home hero copy and trust strip stay exactly as they are.
- No new logo asset until you upload it.
- No changes to other pages, footer, routes, or backend.
