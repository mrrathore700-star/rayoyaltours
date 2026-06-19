Plan: Final Navbar Balance Fix

Objective
Remove the language selector and rebalance the desktop navbar so it feels premium, centered, and uncluttered with proper breathing room across all screen sizes.

Files to modify
- src/components/Header.tsx
- src/index.css (small spacing utility additions if needed)

Changes

1. Remove language switching from the navbar
   - Remove the <LanguageSwitcher /> component from the desktop primary navigation.
   - Remove the <LanguageSwitcher variant="mobile" /> entry from the mobile menu.
   - Keep the LanguageSwitcher component file itself untouched in case it is reused later.

2. Constrain and center the header content
   - Wrap the main header bar (below the TrustBar) in a centered container.
   - Apply max-width: 1400px and responsive horizontal padding.
   - Remove full-width stretching so the navbar reads as a contained luxury bar rather than a wide ribbon.

3. Rebalance logo / nav proportions
   - Increase the gap between the logo area and the navigation group.
   - Center the navigation group visually within the available space.
   - Avoid a tight grid that compresses menu links; prefer a flexible layout that lets the nav group breathe while keeping the logo aligned left.

4. Increase spacing between nav items
   - Desktop (>= 1280px / xl): 24–36px between items, scaling with available width.
   - Laptop (1024–1279px / lg): 18–28px between items.
   - Preserve the existing lux-menu-link hover/active gold underline styling.

5. Responsive behavior
   - Maintain existing mobile/tablet hamburger menu behavior.
   - Keep TrustBar, mobile quick-action icons, and Call/WhatsApp buttons unchanged.
   - Ensure dropdown hover behavior on desktop and tap behavior on mobile remain intact.

Verification
   - Inspect the preview at desktop, laptop, tablet, and mobile widths to confirm the navbar is centered, uncrowded, and visually balanced.
   - Confirm the language selector no longer appears in either desktop or mobile menus.
   - Confirm all existing nav items remain: Home, Destinations, Journeys, Experiences, Transport, Reviews, About Us, Contact Us.