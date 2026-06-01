## Navbar Redesign — Navy + Gold Luxury

Scope: header only. Hero, trust strip, and all other pages are not touched.

### Palette (locked)
- Gold: `#D4AF37`
- Dark Navy: `#0B1C33`
- Cream: `#F8F5EF`
- White: `#FFFFFF`

### Files to change

**`src/index.css`** — replace the `.lux-nav-top` / `.lux-nav` / `.lux-nav-link` / `.lux-logo` blocks:
- Background: `#FFFFFF` at top, `#F8F5EF` when scrolled (sticky)
- Elegant shadow when scrolled: `0 4px 20px -8px rgba(11,28,51,0.12)`
- Bottom hairline: `1px solid rgba(212,175,55,0.25)`
- Nav link: Cormorant Garamond, 14px, uppercase, `letter-spacing 1.6px`, color `#0B1C33`
- Hover: `#D4AF37` with smooth 0.35s transition; gold underline animates in
- Active: `#D4AF37` with persistent underline
- Logo height locked: 60px desktop, 50px tablet, 45px mobile — `object-fit: contain`, no stretch

**`src/components/Header.tsx`**:
- Header height: `h-20` (80px) desktop, `h-[70px]` tablet, `h-[64px]` mobile
- Keep all 9 menu items in current order
- Logo: left, links to `/`, sized per CSS above, sharp rendering
- Right side cluster:
  - Phone icon + `+91 98876 88843` (navy text, gold hover) — hidden on mobile
  - **New "ENQUIRE NOW" gold CTA button**: `#D4AF37` bg, `#FFFFFF` text, rounded-full, px-6 py-2.5, uppercase tracking, hover lift + slightly brighter gold, links to `/contact`
  - Hamburger (mobile only) moves to far right
- Mobile slide-in menu:
  - White `#FFFFFF` background (was cream)
  - Large touch targets (py-5)
  - Each item navy text, gold active state
  - Phone + Enquire Now CTAs at bottom
- Semantic structure preserved: `<header>` → `<nav aria-label="Primary">` → `<ul>` of links
- Sticky behavior already present via `fixed top-0`

**`src/App.tsx`** — adjust top padding to match new heights: `pt-[64px] md:pt-[70px] lg:pt-20`.

### Not changing
- Hero section on Home
- Trust strip (`LuxTrustStrip`)
- Footer, WhatsApp button, any page content
- Logo asset itself (current `src/assets/logo.png` is the elephant + palace emblem already)
- Memory/index — palette shift is navbar-scoped only

### Accessibility & SEO
- `<header>` landmark, `<nav aria-label="Primary">`, `aria-current="page"` on active link
- Hamburger has `aria-expanded` and `aria-controls`
- Logo `alt="Heritage Jaipur Travels"`; phone has `aria-label`
- Focus-visible gold ring on links and CTA
- `prefers-reduced-motion` already respected globally
