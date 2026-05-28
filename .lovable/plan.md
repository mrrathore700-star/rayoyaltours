# Luxury Navbar & Favicon Refinement

**Awaiting logo upload** — please attach the transparent PNG logo before I switch to build mode. I'll save it to `src/assets/logo.png` (overwriting the current one) and crop the Hawa Mahal element for the favicon.

## Decisions locked in
- Logo size: **200px desktop / 140px mobile** (auto height)
- Palette: keep existing **Maroon / Royal Gold / Sand Beige** site tokens — ignore the Navy/Pink swap to preserve sitewide consistency
- Favicon: crop the pink Hawa Mahal element from the uploaded logo

## Scope

### 1. `src/components/Header.tsx`
- Replace logo block: `<img>` with `width={200}` / `height` auto on desktop, `width={140}` on mobile via responsive classes (`w-[140px] md:w-[200px]`), `alt="Heritage Jaipur Travels Luxury Rajasthan Tours"`, `fetchpriority="high"`, explicit dimensions for CLS
- Remove the adjacent "Heritage Jaipur" text wordmark (logo already contains brand name) to keep navbar clean at the larger size
- Increase navbar height to accommodate larger logo: `h-20 md:h-28`
- Add subtle hover scale on logo (`hover:scale-[1.03] transition-transform duration-500`)
- Keep existing scroll-blur (`lux-nav` class) and gold hover underline on nav links (already in `index.css`)
- Mobile menu: keep current full-screen overlay, refine stagger timing, ensure touch targets ≥44px
- Right CTA: keep `+91 94610 69858` with phone icon; visible on `md+`

### 2. `src/assets/logo.png`
- Overwrite with uploaded file (after user uploads)

### 3. Favicon set (`public/`)
- Crop Hawa Mahal portion from logo → generate:
  - `public/favicon.png` (32×32, overwrite existing)
  - `public/apple-touch-icon.png` (180×180)
  - `public/android-chrome-192.png`, `public/android-chrome-512.png`
- Delete stale `public/favicon.ico` if present (browsers auto-request it)

### 4. `index.html`
- Update favicon links:
  ```html
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512.png" />
  ```
- Update sitewide `<title>` → `Luxury Rajasthan Tours | Heritage Jaipur Travels`
- Update sitewide `<meta description>` → `Experience private luxury Rajasthan tours, heritage stays, cultural journeys, and premium local experiences with Heritage Jaipur Travels.`
- Update matching `og:title` / `og:description` / `twitter:*`

### 5. CSS (`src/index.css`)
- No new design tokens — existing `lux-nav`, `lux-nav-link`, `lux-btn-gold` already cover blur, gold underline, hover glow
- Add only a small `.lux-logo` utility if needed for hover scale (otherwise inline Tailwind)

## Out of scope
- No palette change (Navy/Pink ignored per your answer)
- No font change (existing Cinzel/Cormorant/serif stack already matches the requested luxury serifs)
- No other pages touched

## Next step
Upload the transparent PNG logo and I'll execute on approval.
