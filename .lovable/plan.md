
## Goal

Replace the current short modal content for **Maharaja & Maharani Photoshoot** on `/experiences` with a fully structured, premium, scroll-friendly layout — without price, Book Now, or Customize buttons.

## Where it lives

The `/experiences` page (`src/pages/Experiences.tsx`) opens a `Dialog` modal when a card is clicked. Today every experience renders the same generic block (description + highlights + WhatsApp/View Full Details buttons). We will introduce an optional rich-content schema and special-case the modal rendering when it is present. Only the Maharaja Photoshoot will use it for now; the structure is reusable for future premium experiences.

## Changes

### 1. `src/data/experiences.ts`
- Extend the `Experience` interface with one optional field:
  ```ts
  details?: {
    subtitle: string;
    overview: string;            // cinematic paragraph
    unique: { title: string; text: string }[];
    willExperience: string[];
    willFeel: string;
    perfectMoments: string[];
    flow: string[];
    idealFor: string[];
    whyLove: string;
    planExperience: string[];
  };
  ```
- Attach a `details` object to the existing `maharaja-photoshoot` experience using the exact copy supplied by the user (Overview, What Makes This Unique, What You Will Experience, What You Will Feel, Perfect Moments, Experience Flow, Ideal For, Why Travelers Love It, Plan Your Experience).
- The existing `make()` helper stays untouched; we just spread `details` on after creation.

### 2. `src/pages/Experiences.tsx` — modal body
When `open.details` exists, render a new premium body **instead of** the current description / highlights / Book / View Full Details block. Layout:

- Header band already present (image + category + title) — add subtitle line under the title using `details.subtitle`.
- Sections rendered top-to-bottom with consistent spacing (`space-y-8`), each with a small lucide icon + heading:
  - Sparkles — Experience Overview (paragraph)
  - Crown — What Makes This Experience Unique (cards/bullets with **bold heading** + description)
  - Star — What You Will Experience (clean bullet list)
  - Heart — What You Will Feel (short paragraph in a soft `bg-muted/30` quote block)
  - Camera — Perfect Moments (bullets)
  - Footprints — Experience Flow (numbered step list)
  - Users — Ideal For (bullets)
  - Award — Why Travelers Love It (paragraph)
  - Phone — Plan Your Experience (bullets)
- Mobile-first: `prose`-like sizing, single column on mobile, two columns for the "Unique" cards from `sm:` up.
- **Remove** the WhatsApp "Book on WhatsApp" and "View Full Details" buttons for this layout, per the user's instruction. Keep only a minimal subtle text link "Close" / dialog X (already provided by the dialog).
- Keep the "You may also love" related-experiences section at the bottom — it is exploration-focused, not a booking CTA.

Generic experiences (without `details`) keep the current modal exactly as it is.

### 3. SEO / structured data
No route change. The existing JSON-LD on `/experiences` is fine. No new pages, no new dependencies.

## Out of scope
- No edits to `ExperienceDetail.tsx` (separate route, separate request if needed later).
- No price, Book Now, or Customize buttons added anywhere in this layout.
- No new icons package — all icons come from already-installed `lucide-react`.
