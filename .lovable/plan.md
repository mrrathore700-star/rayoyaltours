## Goal

Replace the "Featured Experiences" section on `/experiences` with a premium **Experience Discovery Hub** — instant search, category chips and every published experience visible — while keeping the hero, category showcase, trust section, tour cross-sell and final CTA untouched.

## Scope

Single file edit: `src/pages/Experiences.tsx`.

No new dependencies. No design system changes. No changes to `experiences.ts` data. All existing components (LuxInlineCta, LuxGoogleReviews, existing card/typography classes) are reused.

## Page structure (after change)

```text
1. Hero                                  [unchanged]
2. Category Showcase (9 category tiles)  [unchanged]
3. LuxInlineCta — "Found something…"     [unchanged]
4. NEW: Discovery Hub
     - Heading: "Every Rajasthan Experience We Offer"
     - Subtitle as specified
     - Search input (instant, client-side)
     - Category filter chips (All + one per category)
     - Grid of ALL experiences from allExperiences
     - "Load More Experiences" button (initial 12, +12 each click)
     - Empty state when no matches
5. Popular Rajasthan Tours               [NEW: reuses TourCard + existing tour data]
6. LuxInlineCta — "Customize experience" [unchanged]
7. Trust pillars ("What You Can Expect") [unchanged]
8. Travel styles (dark section)          [unchanged]
9. Cities strip                          [unchanged, if present]
10. Google Reviews                       [unchanged]
11. Final CTA band                       [unchanged]
```

## Discovery Hub details

**Data source:** `allExperiences` from `src/data/experiences.ts` (already CMS-like — every published experience appears automatically; no hardcoded list).

**Search matches (case-insensitive, instant):** `title`, `category`, `location` (destination), `shortDesc`, `highlights[]`.

**Filter chips:** `All` + every unique `category` value derived from data (so new categories auto-appear). Single-select for clarity; active chip uses existing gold treatment (`lux-btn-gold`), inactive uses `lux-btn-outline` style at chip size. Smooth color transitions already provided by existing button classes.

**Card:** reuses the exact markup/classes already used by the current Featured Experiences grid (image, gold category eyebrow, title, short desc, Clock + MapPin meta, "View Experience" gold underline CTA) — image visible before hover, hover zoom via `lux-card-img`. The "View Experience" button/link is visible at rest (satisfies the CTA visibility rule).

**Load more:** `useState` counter starting at 12, `+12` per click. Button hidden when all filtered results shown. Reset counter to 12 whenever search or filter changes.

**Performance:** `loading="lazy"` on all images (already the pattern); `useMemo` for filtered list; no layout shift (fixed aspect ratio cards).

**Accessibility:** search input has `aria-label`, chips are `<button>` with `aria-pressed`, empty state announces politely.

## SEO

Update the existing `<SEO>` props to:
- title: `Rajasthan Experiences | Camel Safari, Heritage Walks, Food Tours & More`
- description: as specified in the brief

Keep existing JSON-LD.

## Popular Rajasthan Tours section

Insert after the discovery grid, before the existing "Customize your experience" CTA. Reuses `TourCard` and top 3 items from `src/data/tours.ts` (needs a quick read to confirm export shape). Section heading matches existing `LuxSectionHeading` pattern already used elsewhere. Includes a visible "View All Tour Packages" `LuxLinkBtn` to `/packages` below the grid.

## What is explicitly NOT changed

- Hero, navigation, typography, colors, spacing, animations
- Category showcase, trust pillars, travel styles, cities, reviews, final CTA
- Any other page or global component
- `experiences.ts` data file
- Button styles (uses updated `lux-btn-outline` maroon default from earlier task)

## Verification

After edit: build passes, `/experiences` renders, typing filters instantly, chips filter instantly, Load More reveals more, all "View Experience" CTAs visible at rest, mobile layout stacks correctly.
