## Plan: True React Router scroll restoration

### Goal
Fix the existing scroll restoration behavior so browser Back/Forward returns to the exact saved pixel position, while normal link navigation still opens pages at the top.

### Files to change
- `src/components/ScrollToTop.tsx` only.

### Implementation steps
1. **Replace the current restoration timing logic**
   - Keep using React Router navigation type detection.
   - Keep `PUSH` / `REPLACE` behavior as immediate `window.scrollTo(0, 0)`.
   - Improve `POP` behavior so it restores only the saved scroll value for the destination URL.

2. **Save scroll positions more reliably before navigation**
   - Track the active URL as `pathname + search`.
   - Persist the latest scroll position continuously during scrolling.
   - Explicitly save the current URL’s scroll position before the route changes.
   - Also persist on page hide/unload.

3. **Prevent saved values from being overwritten during restoration**
   - Keep a restoration lock/suppression flag.
   - While restoration is running, ignore scroll events so the saved footer position cannot be replaced by intermediate values.

4. **Restore exact pixel position on POP**
   - Read the saved scroll value for the target URL.
   - Wait until the page is tall enough to support that scroll position.
   - Re-apply the exact saved `scrollY` over a short stabilization window to counter late-loading images/layout shifts.
   - Do not use an estimated or proportional position.

5. **Add defensive route/content stabilization**
   - Use `requestAnimationFrame` plus a bounded retry window.
   - Stop once the target pixel position has been reached and the document height is stable, or after a safety timeout.
   - Keep restoration instant, not smooth.

6. **Validate the required success test**
   - Use Playwright to reproduce:
     - Home → scroll to footer → record `window.scrollY`
     - Click Terms & Conditions
     - Confirm Terms opens at `0`
     - Browser Back
     - Confirm restored `window.scrollY` matches the original footer pixel position within browser rounding tolerance.
   - Also sanity-check at least one additional route such as About or Destinations.

### Behavior after fix
- New page clicks: top of page.
- Browser Back/Forward: exact saved scroll position for that URL.
- Positions stored per URL/path.
- Saved positions are not overwritten during restoration.
- No layout, styling, typography, route, or page-content changes.