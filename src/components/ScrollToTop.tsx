import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Global scroll restoration.
 *
 *  - PUSH / REPLACE (new navigation): instantly scroll to top (or #hash target).
 *  - POP (browser Back / Forward): restore the exact previous scroll position
 *    for that history entry. Never force scroll to top.
 *
 * Positions are keyed by `location.key`, which is stable per history entry,
 * and persisted in sessionStorage so they survive full reloads within the tab.
 */
const STORAGE_KEY = "hjt:scroll-positions:v1";

const loadPositions = (): Record<string, number> => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"
  const positions = useRef<Record<string, number>>(loadPositions());
  const activeKey = useRef<string>(key);
  // While true, the scroll listener will NOT overwrite the saved position
  // for the active key (prevents clobbering during programmatic restore).
  const suppressSave = useRef<boolean>(false);

  // Take full control away from the browser's native scroll restoration.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  // Continuously remember the scroll position for the active history entry.
  useEffect(() => {
    const persist = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions.current));
      } catch {
        /* ignore quota / privacy mode */
      }
    };

    const onScroll = () => {
      if (suppressSave.current) return;
      positions.current[activeKey.current] = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", persist);
    window.addEventListener("beforeunload", persist);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", persist);
      window.removeEventListener("beforeunload", persist);
      persist();
    };
  }, []);

  // useLayoutEffect runs before the browser paints — no visible scroll flash.
  useLayoutEffect(() => {
    // Save the position of the entry we're leaving.
    if (activeKey.current !== key) {
      // Don't overwrite with 0 if we're mid-restore on the previous key.
      if (!suppressSave.current) {
        positions.current[activeKey.current] = window.scrollY;
      }
      activeKey.current = key;
    }

    // Hash anchors — scroll to the element once it mounts.
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let attempts = 0;
      const interval = window.setInterval(() => {
        attempts += 1;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          window.clearInterval(interval);
        } else if (attempts > 20) {
          window.clearInterval(interval);
        }
      }, 50);
      return () => window.clearInterval(interval);
    }

    if (navType === "POP") {
      // Browser Back / Forward — restore the saved position for this entry.
      const saved = positions.current[key] ?? 0;
      suppressSave.current = true;
      // Restore after the new route's DOM is laid out but before paint.
      const raf1 = window.requestAnimationFrame(() => {
        window.scrollTo({ top: saved, left: 0, behavior: "auto" });
        // Re-assert on the next frame in case content shifted (images, fonts).
        const raf2 = window.requestAnimationFrame(() => {
          window.scrollTo({ top: saved, left: 0, behavior: "auto" });
          suppressSave.current = false;
        });
        // Store for cleanup
        (raf1 as unknown as { _next?: number })._next = raf2;
      });
      return () => {
        suppressSave.current = false;
        window.cancelAnimationFrame(raf1);
        const next = (raf1 as unknown as { _next?: number })._next;
        if (next) window.cancelAnimationFrame(next);
      };
    }

    // Fresh navigation (PUSH / REPLACE) — always start at the top, instantly.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, key, navType]);

  return null;
};

export default ScrollToTop;
