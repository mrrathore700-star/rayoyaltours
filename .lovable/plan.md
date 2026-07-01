# Destinations Index Page (`/destinations`)

Create a new hub page that lists every destination and links into the existing `/destinations/:slug` detail pages. Reuses existing typography, cards, section headings, buttons and animations — no redesign.

## 1. Data model extension
File: `src/data/destinations.ts`

Add lightweight card-only fields to each destination in the existing array so the grid is fully data-driven:

- `shortDescription: string` — one-line teaser (from the samples in the brief)
- `highlights: string[]` — 3 short bullets pulled from existing `topAttractions`
- `suggestedDuration: string` — reuse existing `recommendedDuration`
- `bestFor: string[]` — e.g. ["Heritage", "Luxury"] used both for display and filtering
- `categories: ("City" | "Wildlife" | "Heritage" | "Desert" | "Spiritual" | "Luxury" | "Nature")[]`

Populate for the 6 existing destinations (Jaipur, Udaipur, Jodhpur, Jaisalmer, Ranthambore, Pushkar). No changes to detail-page fields.

Additional destinations mentioned in the brief (Mount Abu, Bikaner, Ajmer, Abhaneri, Bharatpur, Jawai, Shekhawati) do NOT currently have detail pages or images. They will NOT be added in this task — the page is driven off `destinations` so any future entry appears automatically ("future ready"). I'll flag this in the completion note so you can commission those detail pages separately.

## 2. New page: `src/pages/Destinations.tsx`

Sections top → bottom, all using existing components (`LuxHero` variant styling, `LuxSectionHeading`, `LuxLinkBtn`/`LuxAnchorBtn`, `TourCard`, `SmartImage`, existing `.lux-*` classes):

1. **Hero band** — eyebrow "Destinations", H1 "Explore Rajasthan Destinations", subtitle from brief, two CTAs: `Plan My Rajasthan Tour` → `/enquire?type=Destinations`, `WhatsApp Us` → existing wa.me link with pre-filled message.
2. **Filters + Search** — search input (name/description) + category chips (All, City, Wildlife, Heritage, Desert, Spiritual, Luxury, Nature). Filter state in `useState`; chips reuse the styling used on `Experiences.tsx`/`Gallery.tsx`.
3. **Destination grid** — responsive 1/2/3 cols, cards restyled from `LuxDestinations.tsx` but with the requested fields: image, name, one-liner, highlights (3 bullets), duration, "Best For" tag row, and a `View Destination` button linking to `/destinations/{slug}`. Empty state when filters return nothing.
4. **Popular Rajasthan Tours** — 3 featured `TourCard`s (reuse existing tour data + section pattern from `Packages.tsx`).
5. **Popular Experiences** — 3 experience cards using the existing pattern from `Experiences.tsx`.
6. **Final CTA band** — `LuxCtaBand`-style section with the two CTAs.
7. **SEO** via `<SEO>`: title `Rajasthan Destinations | Jaipur, Udaipur, Jodhpur, Jaisalmer & More`, tailored description, and `ItemList` + `BreadcrumbList` JSON-LD generated from the destinations array.

## 3. Routing
File: `src/App.tsx`
- Add `<Route path="/destinations" element={<Destinations />} />` above the existing `/destinations/:slug` route.

## 4. Link audit — point every "View All Destinations" to `/destinations`
Update the following (verified via ripgrep):
- `src/components/Footer.tsx` — "Explore Rajasthan" column header links to `/destinations`
- `src/components/Header.tsx` — add "View All Destinations" entry at the top of the Destinations dropdown
- `src/components/luxury/LuxDestinations.tsx` — add a "View All Destinations" button under the grid (component itself is no longer used on the homepage but kept for potential reuse); leave existing per-card links intact
- Any homepage "View All" CTA related to destinations, if present

Individual `/destinations/:slug` links are untouched.

## 5. Non-goals
- No visual redesign; strictly reuses tokens, spacing, radii, and existing components.
- No new detail pages, no image sourcing for new destinations, no CMS changes.
- No changes to the Media Library / SmartImage plumbing beyond consuming existing imported images.

## Technical notes
- Filtering: `useMemo` over `destinations` with case-insensitive name/description match + category intersection.
- Categories stored on each destination let filters remain data-driven.
- JSON-LD `ItemList` items reference absolute `https://www.heritagejaipurtravels.com/destinations/{slug}` URLs.
