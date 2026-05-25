## Plan: Add 4 new blog posts

Update `src/pages/Blog.tsx` only.

### 1. Add 3 image imports at the top
```ts
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
```
(`desertSafari` is already imported.)

### 2. Append 4 entries to the `posts` array
- Post 5: desertSafari — "Best Time to Visit Rajasthan" — slug `best-time-visit-rajasthan` — April 15, 2026
- Post 6: jaisalmerFort — "Camel Safari Jaisalmer — The Complete Guide" — slug `camel-safari-jaisalmer-guide` — April 20, 2026
- Post 7: ranthamboreTiger — "Ranthambore Tiger Safari — Everything You Need to Know" — slug `ranthambore-tiger-safari-guide` — April 25, 2026
- Post 8: udaipurLake — "Udaipur Travel Guide — The City of Lakes" — slug `udaipur-lake-city-guide` — May 1, 2026

### 3. Verify existing slugs
Existing 4 slugs already match the required values — no change needed.

### Notes
- No other files modified.
- No routing or detail pages added (out of scope).
