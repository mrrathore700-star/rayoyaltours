Navbar se glass/blur effect hata kar website ki royal theme ke according solid Maroon + Gold navbar banana.

## Changes

**1. `src/index.css`**
- `.lux-nav-top` (hero state): remove `backdrop-filter`, replace transparent bg with solid `#2A0A12` (footer maroon — theme consistency). Gold bottom border `rgba(201,168,76,0.30)`, soft shadow.
- `.lux-nav` (scrolled state): solid maroon-to-darker gradient `linear-gradient(180deg, #2A0A12 0%, #1A0509 100%)`, no blur, stronger gold border `rgba(201,168,76,0.40)`, deeper shadow.
- Smooth transition on background/border preserved.

**2. `src/components/Header.tsx` — Mobile slide menu**
- Overlay background change from `rgba(15,15,15,0.97)` to solid `#2A0A12` for theme match.

## Preserved (no changes)
- Logo (`.lux-logo`), all sizing/responsive rules
- Navbar height `h-[90px] md:h-[105px]`
- Menu items, typography, gold hover underline
- Hamburger, mobile responsiveness
- Page spacing (`pt-[90px] md:pt-[105px]` in App.tsx)
- Phone CTA placement

## Result
Navbar ab glass/transparent nahi dikhega — solid royal maroon with gold accent border, jo Footer aur overall Rajasthan luxury theme ke saath perfectly blend hoga.