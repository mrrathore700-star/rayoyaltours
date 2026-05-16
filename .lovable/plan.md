# Website-Wide Luxury Design System Rollout

Apply the cinematic luxury design language from the Experiences page across the entire Heritage Jaipur Travels website so every page feels like one premium boutique Rajasthan travel brand.

## Goals

- One unified luxury identity across all pages, components, and CTAs.
- Editorial typography, generous whitespace, cinematic imagery, gold-on-maroon accents.
- Subtle, premium motion (Ken Burns hero, fade-up reveals, hover zoom, floating particles).
- Same buttons, cards, hero pattern, trust strips, and CTA bands everywhere.

## Design system (single source of truth)

Promote the existing `lux-*` utilities in `src/index.css` into the global token layer so every page uses them automatically:

- Colors: Gold `#C9A84C`, Deep Maroon `#6E0F1F`, Cream `#FFF8F0`, Warm Black `#0F0F0F`, overlay `rgba(0,0,0,0.45)`.
- Typography: Playfair Display (headings, editorial tracking), Cormorant Garamond (serif body lead-ins), Lato (body). Larger leading, wider letter-spacing on display headings.
- Spacing: Increase vertical section padding (`py-24 md:py-32`), wider container gutters, more breathing room between cards.
- Radius/shadow: Soft rounded (rounded-2xl), layered luxury shadow already in `lux-btn-gold` / `lux-card`.

New shared building blocks (added under `src/components/luxury/`):

- `LuxHero` — cinematic full-bleed hero with Ken Burns image, dark overlay, gold particles, glass eyebrow badge, headline, sub, dual CTAs.
- `LuxButton` — `variant: "gold" | "outline"` wrapping the existing `lux-btn-gold` / `lux-btn-outline` styles.
- `LuxCard` — 4:5 editorial card with overlay, hover zoom, gold underline CTA.
- `LuxSectionHeading` — centered eyebrow + serif title + thin gold rule + intro line.
- `LuxTrustStrip` — 4-pillar trust row (20+ Years, Private Journeys, International Travelers, Local Experts).
- `LuxTestimonials` — premium quote cards with traveler name + origin.
- `LuxCtaBand` — full-bleed image + dark overlay + emotional headline + dual CTAs.
- `LuxFooter` — deep maroon background, cream text, gold dividers, premium spacing (replaces current `Footer.tsx` content).
- `LuxHeader` — sticky glass navbar with subtle blur, gold hover underline on nav links, premium mobile slide menu (replaces current `Header.tsx` content).

`SectionHeading`, `TourCard`, and existing CTAs stay in the codebase but are restyled (or wrap the new luxury components) so all pages using them inherit the new look without touching every page.

## Page-by-page application

For each page: swap hero to `LuxHero`, restyle sections with `LuxSectionHeading`, replace generic cards with `LuxCard`-styled equivalents, add `LuxTrustStrip` where it fits, end with `LuxCtaBand`.

- `Index` (Home): full LuxHero, packages section with LuxCards, trust strip, experience banner -> LuxCtaBand, testimonials -> LuxTestimonials, FAQ kept but restyled (cream cards, gold accents), final CTA band.
- `About`: LuxHero ("Crafted in Jaipur, Trusted Worldwide"), story section with serif drop-cap, trust strip, founder/timeline editorial block, CTA band.
- `Packages`: LuxHero, TourCards restyled to LuxCard look, CTA band.
- `TourDetail`: cinematic hero using tour image, editorial itinerary layout (numbered serif days), inclusions/exclusions in glass cards, sticky inquiry CTA, CTA band.
- `Sightseeing`: LuxHero, LuxCards per attraction, CTA band.
- `Taxi`: LuxHero, fleet cards as LuxCards, pricing replaced with "Request a Quote" gold CTAs, CTA band.
- `Experiences` & `ExperienceDetail` & `ExperienceCategory`: already luxury; align minor spacing/heading components to shared primitives.
- `Gallery`: LuxHero, masonry-style premium grid with hover zoom + caption overlay.
- `Blog`: LuxHero, editorial article cards.
- `Contact`: LuxHero, form on glass panel over cinematic image, contact pillars, CTA band.
- `Privacy / Terms / Refund / Unsubscribe / NotFound`: cream background, serif headings, generous spacing, luxury footer/header inherited.

## Motion

- Hero: `lux-ken-burns` + `lux-particles` + `lux-fade-up` staggered text.
- Sections: IntersectionObserver `useReveal` hook (already in Experiences) extracted to `src/hooks/useReveal.ts` and reused.
- Cards: existing `.lux-card` hover zoom + gold underline.
- Respect `prefers-reduced-motion` (already handled in CSS).

## Out of scope

- No backend, data, routing, or content changes (tours/experiences data stays as-is).
- No new images generated; reuse existing assets in `src/assets/`.
- No package installs.
- Contact API (`api/contact.ts`) untouched.

## Technical notes

- All new components live in `src/components/luxury/` and consume only Tailwind + the `lux-*` utilities already in `src/index.css` (small additions: `lux-eyebrow`, `lux-rule-gold`, `lux-section`, `lux-footer-bg`).
- `Header.tsx` and `Footer.tsx` are rewritten in place (kept at same path/import) so `App.tsx` doesn't change.
- `SectionHeading` and `TourCard` updated to use luxury styling so every page picks up the new look without per-page rewrites.
- SEO components and routes unchanged.

## Deliverables

1. Updated `src/index.css` with shared luxury utilities + small additions.
2. New `src/components/luxury/*` primitives + `src/hooks/useReveal.ts`.
3. Rewritten `Header.tsx`, `Footer.tsx`, `SectionHeading.tsx`, `TourCard.tsx`.
4. Page-level refactors for Index, About, Packages, TourDetail, Sightseeing, Taxi, Gallery, Blog, Contact, and minor polish on Experiences family + legal pages.
