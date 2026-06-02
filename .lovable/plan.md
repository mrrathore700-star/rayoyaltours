## Final Navbar + Hero Responsive Polish

Scope: header sizing/spacing, logo cap, hero top padding. No SEO/content/URL/schema changes.

### `src/index.css` (.lux-logo block, lines 388–399)
Replace fixed heights with width-capped, height-auto, `object-contain`:
- Default: `max-width: 210px; max-height: 64px;`
- ≤1280px (laptop): `max-width: 190px; max-height: 60px;`
- ≤1024px (tablet): `max-width: 170px; max-height: 54px;`
- ≤768px (mobile): `max-width: 140px; max-height: 48px;`
- All: `width: auto; height: auto; object-fit: contain;`

### `src/components/Header.tsx`
- Navbar wrapper heights: `h-[76px] md:h-[80px] lg:h-[84px] xl:h-[88px]` (mobile 76 / tablet 80 / laptop 84 / desktop 88), flex center keeps logo vertically centered.
- Logo `<img>` class: drop hard `max-h-*` overrides; rely on CSS above (still `w-auto object-contain`).
- Desktop nav `gap`: replace `gap-7` with responsive `lg:gap-4 xl:gap-5 2xl:gap-6` (≈16/20/24px).
- Phone block (desktop): keep on far right, ensure single line — add `whitespace-nowrap`, label prefix `CONTACT` separator: `CONTACT · ☎ +91 98876 88843`, vertically centered via flex items-center.
- Mobile (<1024px): hamburger + logo only; phone number stays hidden in navbar (already moved into the slide-in menu). Mobile menu top offsets updated to `top-[76px] md:top-[80px]` and `max-h-[calc(100vh-76px)] md:max-h-[calc(100vh-80px)]`.

### `src/App.tsx` (line 42)
Update top padding to match new navbar heights: `pt-[76px] md:pt-[80px] lg:pt-[84px] xl:pt-[88px]`.

### `src/components/luxury/LuxHero.tsx` (line 58)
Add explicit safety margin on eyebrow/content wrapper so badge never sits under navbar:
- Wrapper: change `pt-8 md:pt-12` → `pt-[24px] md:pt-[30px] lg:pt-[40px]` (matches spec: 24/30/40px) while keeping `pb-12 md:pb-0`.
- Eyebrow `mb-6` retained; no other content changes.

### Not changing
- SEO, JSON-LD, meta, page copy, routes, hero copy/CTAs, footer, WhatsApp button.
- Memory/index.
