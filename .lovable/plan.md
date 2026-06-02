## Mobile Header Optimization

Scope: `src/components/Header.tsx` only. Desktop (≥1024px) unchanged.

### Navbar (below 1024px)
- Left: logo only, full visibility, capped at navbar height (`max-h-[44px]` on mobile, `max-h-[50px]` on tablet), `object-contain`, no crop.
- Right: hamburger icon only. Remove the visible phone number row from mobile navbar.
- Keep `xl:` breakpoint for desktop nav and the inline phone link (desktop only, as today).

### Mobile slide-in menu (when hamburger open)
Order top-to-bottom:

1. **Gold "CALL NOW" button** at top of panel
   - `href="tel:+919887688843"`, phone icon + label "CALL NOW +91 98876 88843"
   - Style: bg `#C9A84C`, text `#FFFFFF`, `rounded-full`, padding `12px 20px`, full-width, subtle hover darken
2. Nav links in order: Home, About, Packages, Sightseeing, Transport, Experiences, Gallery, Journal, Contact (already correct)
3. Below menu: same Gold CALL NOW button repeated for easy reach + email line `info@heritagejaipurtravels.com` as a muted `mailto:` link

Panel stays full-height white, navy text, gold active underline (unchanged styling system).

### Responsive safety
- Navbar height retained: `h-[64px]` mobile, `h-[70px]` tablet, `h-20` desktop — matches existing `App.tsx` top padding, so hero badge stays visible.
- Logo width auto, height-capped → no overflow at 320/360/375/390/414.
- Hamburger right-aligned via existing flex layout; min 44×44 tap target preserved.

### Not changing
- `src/index.css`, `src/App.tsx`, logo asset, desktop navbar, hero, footer.
