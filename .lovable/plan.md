## Goal

Two changes:
1. Make the navbar logo fully visible (no cropping) at premium luxury sizing across all breakpoints.
2. Ensure every page's content starts below the fixed navbar — never behind it.

## 1. Navbar logo — full visibility, larger, cinematic

File: `src/components/Header.tsx`

- Increase navbar height so the full logo (Hawa Mahal + elephant + road + airplane + wordmark) breathes:
  - Desktop: `h-24 md:h-28` → **`h-[90px] md:h-[105px]`**
  - Keeps it within the requested 95–110px desktop / 85–95px mobile envelope.
- Replace the current logo `<img>` classes with a dedicated `logo-container` wrapper + image rules so nothing gets clipped:
  ```tsx
  <Link to="/" className="logo-container flex items-center shrink-0" aria-label="Heritage Jaipur Travels — Home">
    <img
      src={logo}
      alt="Heritage Jaipur Travels Luxury Rajasthan Tours"
      width={360}
      height={140}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="lux-logo block h-auto object-contain"
    />
  </Link>
  ```
- Add CSS in `src/index.css` under `@layer utilities`:
  ```css
  .lux-logo {
    width: 340px;
    height: auto;
    object-fit: contain;
    transition: transform .35s ease;
    filter: drop-shadow(0 0 10px rgba(200,155,60,0.15));
  }
  .lux-logo:hover { transform: scale(1.02); }
  @media (max-width: 1024px) { .lux-logo { width: 280px; } }
  @media (max-width: 768px)  { .lux-logo { width: 240px; } }
  @media (max-width: 380px)  { .lux-logo { width: 210px; } }
  .logo-container { overflow: visible; min-width: max-content; }
  ```
- Keep existing nav links, phone CTA, hamburger, and mobile slide-out untouched in structure. Only ensure right-side cluster uses `shrink-0` so the logo never compresses.
- Mobile slide menu `top-20` → **`top-[90px]`** to match the new navbar height.

## 2. Universal "content below navbar" fix

The fixed navbar is now ~90px / 105px tall. Instead of patching every page individually, add a single global offset:

File: `src/App.tsx`

- Wrap the routed `<main>` (or the `<Routes>` container) with `pt-[90px] md:pt-[105px]` so every page automatically clears the navbar.
- Pages that already include their own hero top-padding (via `LuxHero`'s `pt-28 md:pt-32`) will visually still look fine — the small extra space reads as luxury whitespace, and no hero gets clipped behind the navbar anymore.
- Revert the ad-hoc `pt-20 md:pt-28` previously added to `ExperienceDetail.tsx` and `ExperienceCategory.tsx` so spacing isn't doubled.

Optionally, where `LuxHero` is used, reduce its internal padding from `pt-28 md:pt-32` to `pt-8 md:pt-12` so the hero image sits flush below the navbar without an empty band. (Single edit in `src/components/luxury/LuxHero.tsx`.)

## 3. Navbar background (keep cinematic, slight tune)

In `src/index.css`, tweak `.lux-nav-top` background to the requested tint:
```css
background: rgba(20,12,10,0.34);
backdrop-filter: blur(14px) saturate(140%);
border-bottom: 1px solid rgba(200,155,60,0.15);
```
Keep the denser `.lux-nav` (scrolled) state as-is for the smooth on-scroll darkening.

## Out of scope

- No changes to menu items, fonts, phone CTA copy, footer, or any page content.
- No new dependencies.
- Logo asset itself is not modified — only how it's displayed.

## Files touched

- `src/components/Header.tsx` — navbar height, logo wrapper/classes, mobile menu offset
- `src/index.css` — `.lux-logo` rules + `.lux-nav-top` tint tweak
- `src/App.tsx` — global top padding for routed content
- `src/components/luxury/LuxHero.tsx` — reduce internal top padding (optional, to avoid double spacing)
- `src/pages/ExperienceDetail.tsx`, `src/pages/ExperienceCategory.tsx` — remove redundant `pt-20 md:pt-28`
