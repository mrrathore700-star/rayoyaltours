# Luxury Redesign — Experiences Page

A complete cinematic redesign of `/experiences` to position Heritage Jaipur Travels as a premium boutique Rajasthan brand for international travelers. Visual-only refresh — data, routing, and tour content remain untouched.

## Design language

- Palette (scoped to this page via tokens): Gold `#C9A84C`, Deep Maroon `#6E0F1F`, Cream `#FFF8F0`, Warm Black `#0F0F0F`, overlay `rgba(0,0,0,0.45)`.
- Typography: keep existing serif (Playfair / Cormorant) for headings, Lato for body — already aligned with editorial luxury feel. Increase tracking, line-height, and section spacing.
- Mood: Aman Resorts / A&K — cinematic, emotional, breathable, editorial.

## Page structure (top → bottom)

1. **Cinematic Hero (90vh / 75vh mobile)**
   - Full-bleed palace/desert image with slow Ken Burns zoom + dark gradient overlay + subtle floating gold particles.
   - Left-aligned content on desktop, centered on mobile.
   - Glass badge: "49 Curated Rajasthan Experiences".
   - H1: "Experience Rajasthan Beyond The Guidebooks".
   - Sub: international-traveler focused intro.
   - Two CTAs: "Explore Experiences" (gold) + "Plan My Rajasthan Journey" (outline).
   - Trust row: ★ Private Experiences · Local Experts · Luxury Journeys · 20+ Years.

2. **Sticky luxury filter bar** — refined version of current bar; thinner, gold underline for active, glass background.

3. **Sectioned editorial groupings** (replace single grid). Each section: serif heading + italic intro paragraph + cinematic card grid.
   - Royal Rajasthan
   - Desert Experiences
   - Wildlife & Nature
   - Spiritual Rajasthan
   - Village & Cultural Life
   - Food & Culinary
   - Luxury Photography
   - Sections are derived by mapping existing `categories` from `src/data/experiences.ts` to these luxury labels (no data changes; titles are display-only overrides).

4. **Editorial experience cards**
   - Taller 4/5 cinematic ratio, dark gradient overlay, title + 1-line emotional micro-desc revealed over image, hover image zoom + gold underline on CTA.
   - Emotional title overrides for popular slugs (display-only map): e.g. leopard-safari → "Track the Wild Leopards of Jawai", camel-safari → "Ride Through Rajasthan's Golden Dunes", village-tour → "Discover Rajasthan Through Local Village Life". Original slugs/routes preserved.
   - "View Experience" gold link with arrow.

5. **Trust strip** — "Crafting Rajasthan Experiences for International Travelers for Over 20 Years" with 4 pillars (Local Experts · Private Experiences · Handcrafted Journeys · Trusted Specialists).

6. **Testimonial section** — 3 luxury quote cards (international travelers). Static content.

7. **Cinematic CTA band** — full-bleed desert/night image, dark overlay, "Begin Your Rajasthan Story" + sub + two CTAs (Plan My Journey → /contact, WhatsApp specialist).

8. Existing global Footer is unchanged in this scope (footer redesign not included to keep change focused on Experiences page; can be a follow-up).

## Motion

- Hero: Ken Burns zoom (CSS keyframes), fade-in stagger, floating gold particles (lightweight pure-CSS dots, no library).
- Sections: fade-in-up on scroll via IntersectionObserver hook (small inline utility, no new dep).
- Cards: image scale on hover, gradient deepen, gold underline reveal.

## Technical details

- Files touched:
  - `src/pages/Experiences.tsx` — full rewrite.
  - `src/index.css` — append small set of luxury utility classes (luxury-hero-zoom, gold-particles, fade-up, glass-badge) scoped via class names so they don't affect the rest of the site.
- No new packages. No data file edits. No route changes. Card links continue to `/experiences/:slug`.
- Reuses existing imagery from `src/assets`. Uses `hero-palace.jpg` for hero and a desert/night asset for the CTA band (will pick from existing assets — `desert-safari.jpg` as fallback).
- SEO/JSON-LD block kept and updated copy.
- Accessibility: keep semantic h1/h2, alt text on every image, focus-visible rings on CTAs, reduced-motion media query disables Ken Burns + particles.

## Out of scope

- No backend, contact API, or footer changes.
- No edits to tour data, categories, or routing.
