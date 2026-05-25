# Travel Journal — Luxury Redesign Plan

Rebuild `src/pages/Blog.tsx` so it reads as a natural extension of the existing luxury design system (Experiences, Home, Contact). Reuse existing luxury primitives — no new fonts, colors, or animation idioms.

## Scope

Single file edit: `src/pages/Blog.tsx`. No new components, no routing changes, no data model changes (slugs preserved). Categories added inline to the existing `posts` array as a derived field.

## Page structure

1. **SEO** — update `title` to "Travel Journal | Stories & Guides from Rajasthan", refreshed description; `path="/blog"` unchanged.

2. **LuxHero** (reused)
   - Image: `hawaMahal` (kept) with cinematic Ken Burns + particles already built into `LuxHero`
   - Eyebrow: "Luxury Rajasthan Travel Journal"
   - Title: `Stories, Guides & Experiences From <span gold>Rajasthan</span>`
   - Subtitle: "Explore curated travel stories, hidden experiences, palace stays, wildlife journeys, and cultural discoveries across Rajasthan."
   - Height: `regular` (matches Experiences hero — ~78vh desktop, scales down on mobile via existing Tailwind classes)

3. **Featured Article band** (new section, built from existing tokens)
   - Full-width cinematic split: large image left (aspect 4/5 on desktop), editorial copy right on `lux-cream-bg`
   - Uses first post (`best-places-jaipur`) as the featured pick
   - Gold eyebrow rule + "Featured Story", display title, serif excerpt, "Read the Story →" gold link
   - Mirrors the rhythm of CTA bands and Experiences featured rows

4. **Filter strip** (new, built from existing button tokens)
   - Pills: All · Luxury Travel · Heritage · Wildlife · Desert · Food & Culture · Spiritual · Photography
   - Style: small rounded-full pills using `font-display tracking-[0.18em] uppercase text-xs`; active = `lux-btn-gold`, idle = `lux-btn-outline` (exact classes from `LuxButton`)
   - Client-side filter via `useState`; category derived per post (mapped by slug keyword)

5. **Journal grid** (existing 2-col layout, enriched)
   - Keep the current 2-column editorial grid and aspect-[4/5] imagery
   - Add to each card: small gold category badge (top-left over image), reading time + "By Heritage Jaipur Travels" meta line beneath title, existing gold "Read the Story →" affordance
   - Keep hover: 1200ms image scale, title color shift to `#6E0F1F` (already in place)
   - All 8 existing posts preserved with current slugs/images/dates

6. **LuxCtaBand** (reused, retitled)
   - Image: `royalTour`
   - Eyebrow: "Begin Your Story"
   - Title: `Begin Your Rajasthan <span gold>Story</span>`
   - Primary: "Plan My Rajasthan Journey" → `/contact`
   - Secondary: "Speak With A Specialist" → WhatsApp `https://wa.me/919461069858`

## Design tokens (all already in the system)

- Fonts: `font-display` (Playfair), `font-serif` (Cormorant), `font-body` (Lato) — unchanged
- Colors: `#C9A84C` gold, `#6E0F1F` maroon, `#FFF8F0` cream, `#0F0F0F` ink — unchanged
- Utility classes reused: `lux-cream-bg`, `lux-black-bg`, `lux-eyebrow`, `lux-rule-gold`, `lux-glass`, `lux-fade-up`, `lux-ken-burns`, `lux-particles`, `lux-btn-gold`, `lux-btn-outline`
- Components reused: `LuxHero`, `LuxCtaBand`, `LuxLinkBtn`, `LuxAnchorBtn`, `SEO`

## Data shape (in-file, derived)

Add `category` + `readTime` fields to each post object. Mapping:
- best-places-jaipur → Heritage, 8 min
- rajasthan-travel-guide → Luxury Travel, 12 min
- golden-triangle-itinerary → Heritage, 10 min
- heritage-hotels-rajasthan → Luxury Travel, 7 min
- best-time-visit-rajasthan → Luxury Travel, 9 min
- camel-safari-jaisalmer-guide → Desert, 8 min
- ranthambore-tiger-safari-guide → Wildlife, 9 min
- udaipur-lake-city-guide → Heritage, 11 min

## Non-goals

- No new routes / detail pages
- No changes to other pages, header, footer
- No new dependencies, fonts, or CSS tokens
- Card links remain non-functional anchors (current behavior preserved)
