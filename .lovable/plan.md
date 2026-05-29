## Goal

Two surgical changes — no layout/structure changes to the navbar:

1. Upgrade navbar background to a cinematic luxury glass treatment that matches the site palette (maroon → black gradient + gold border + blur), with a smoother on-scroll transition.
2. Ensure every page's hero/top content sits cleanly below the fixed navbar instead of being cropped.

## Changes

### 1. Navbar background (`src/index.css` — `.lux-nav` + new initial-state class)

Keep `Header.tsx` markup unchanged. Restyle via CSS only:

- **Initial (top of page)** — currently uses a flat black→transparent gradient. Replace with a cinematic translucent gradient using brand maroon + dark overlay, light blur, soft gold hairline:
  ```css
  background: linear-gradient(180deg,
    rgba(20,20,20,0.55) 0%,
    rgba(40,10,10,0.40) 60%,
    rgba(0,0,0,0.10) 100%);
  backdrop-filter: blur(8px) saturate(140%);
  border-bottom: 1px solid rgba(201,168,76,0.18);
  ```
- **Scrolled (`.lux-nav`)** — denser cinematic glass:
  ```css
  background: linear-gradient(180deg,
    rgba(20,20,20,0.82) 0%,
    rgba(40,10,10,0.72) 50%,
    rgba(0,0,0,0.55) 100%);
  backdrop-filter: blur(14px) saturate(150%);
  border-bottom: 1px solid rgba(201,168,76,0.28);
  box-shadow: 0 10px 30px -18px rgba(0,0,0,0.55);
  ```
- Add `transition: background .5s ease, backdrop-filter .5s ease, box-shadow .5s ease, border-color .5s ease;` on the header so the toggle between the two states is smooth.
- Slightly refine `.lux-nav-link` hover (a touch more glow on the gold underline + softer opacity). No structural change.

### 2. Header.tsx (minimal)

Swap the current top-state class `bg-gradient-to-b from-black/55 to-transparent` for a new semantic class (e.g. `lux-nav-top`) so the cinematic gradient + blur defined in CSS applies at the top of the page too. No change to logo, menu, height (`h-20 md:h-28`), buttons, or mobile menu.

### 3. Hero / page top spacing fix

The fixed navbar is `h-20 md:h-28` (80px / 112px). Pages that use `LuxHero` already include internal `pt-28 md:pt-32`, so they're fine — but a few pages render their own hero/top section without that compensation, causing the "hidden behind navbar" effect.

Audit + fix each page's first section to start below the navbar by adding `pt-20 md:pt-28` (or wrapping `<main>` with that padding) on:

- `Contact.tsx`
- `Gallery.tsx`
- `Blog.tsx` / `BlogPost.tsx`
- `TourDetail.tsx`
- `ExperienceDetail.tsx` / `ExperienceCategory.tsx`
- `PrivacyPolicy.tsx`, `TermsAndConditions.tsx`, `RefundPolicy.tsx`, `Unsubscribe.tsx`, `NotFound.tsx`

For pages already using `LuxHero` (Index, Packages, Experiences, Sightseeing, Taxi, About) — verify hero looks correct; the existing `pt-28 md:pt-32` inside `LuxHero` already covers the navbar, so no change needed there.

### 4. Mobile menu

The mobile slide-out panel (`top-20`) stays put. We only restyle its backdrop tint to match the new cinematic palette (very small tweak in the existing inline style) so it feels consistent — no structural change.

## Out of scope

- No changes to logo size, menu items, button placement, typography, navbar height, or responsive behavior.
- No content or copy changes.
- No new dependencies.

## Files touched

- `src/index.css` — `.lux-nav` restyle + new `.lux-nav-top` initial state + transition
- `src/components/Header.tsx` — swap one className for the new initial-state class; tiny mobile-menu backdrop tint tweak
- Page files listed above — add top padding to the first section/wrapper where the hero is being clipped
