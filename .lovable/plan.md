## Fix Header Theme on Experiences Page

### Problem
Every other page (Home, About, Packages, Blog, Contact, etc.) lets the transparent glass header overlay the cinematic hero image. On `/experiences`, the `<main>` has `pt-16 md:pt-20` padding, which pushes the hero down and leaves a blank strip under the header — so the header looks different (solid/disconnected) instead of floating over the hero like the rest of the site.

### Change
In `src/pages/Experiences.tsx`:
- Remove `pt-16 md:pt-20` from the `<main>` element so the hero starts at the very top of the viewport, behind the transparent header — matching every other page.

That's the only change. No other files touched, no data/content/logic changes.

### Result
The luxury glass header will overlay the Experiences hero exactly the way it overlays the Home, About, Packages, Blog, and Contact heroes — one consistent header treatment across the whole site.