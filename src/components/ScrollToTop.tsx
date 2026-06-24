import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * True scroll restoration for React Router.
 *
 *  - PUSH / REPLACE  → scroll to top (or to #hash target).
 *  - POP (Back/Fwd)  → restore exact saved pixel position for that URL.
 *
 * Positions are keyed by `pathname + search` (URL), so Back from any page
 * always lands on the exact previous position regardless of history.key
 * changes (full reloads, new tabs reusing sessionStorage, etc.).
 * Persisted in sessionStorage so positions survive reloads within the tab.
 */
const STORAGE_KEY = "hjt:scroll-positions:v2";

type PositionMap = Record<string, number>;

const loadPositions = (): PositionMap => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const savePositions = (map: PositionMap) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* ignore quota / privacy mode */
  }
};

const urlKey = (pathname: string, search: string) => `${pathname}${search}`;

const ScrollToTop = () => {
  const { pathname, search, hash, key } = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  const positions = useRef<PositionMap>(loadPositions());
  const activeUrl = useRef<string>(urlKey(pathname, search));
  // While true, the scroll listener will NOT overwrite saved positions
  // (prevents clobbering during programmatic restore as content reflows).
  const suppressSave = useRef<boolean>(false);

  // Take control away from the browser's native scroll restoration.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  // Continuously remember the scroll position of the active URL.
  useEffect(() => {
    const onScroll = () => {
      if (suppressSave.current) return;
      positions.current[activeUrl.current] = window.scrollY;
    };
    const persist = () => savePositions(positions.current);

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

  useLayoutEffect(() => {
    const nextUrl = urlKey(pathname, search);

    // Save the position of the URL we're leaving (unless mid-restore).
    if (activeUrl.current !== nextUrl) {
      if (!suppressSave.current) {
        positions.current[activeUrl.current] = window.scrollY;
        savePositions(positions.current);
      }
      activeUrl.current = nextUrl;
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
        } else if (attempts > 40) {
          window.clearInterval(interval);
        }
      }, 50);
      return () => window.clearInterval(interval);
    }

    if (navType === "POP") {
      // Browser Back / Forward — restore the saved position for this URL.
      const saved = positions.current[nextUrl] ?? 0;
      suppressSave.current = true;

      let cancelled = false;
      let rafId = 0;
      let timeoutId = 0;
      const start = performance.now();
      // Wait until the document is tall enough to actually reach `saved`,
      // re-asserting each frame so late-loading images/fonts don't shift us off.
      const tryRestore = () => {
        if (cancelled) return;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const target = Math.min(saved, Math.max(0, maxScroll));
        window.scrollTo(0, target);

        const elapsed = performance.now() - start;
        // Keep re-asserting for up to 1.2s to absorb image/font reflow.
        if (elapsed < 1200) {
          rafId = window.requestAnimationFrame(tryRestore);
        } else {
          suppressSave.current = false;
        }
      };
      rafId = window.requestAnimationFrame(tryRestore);
      // Hard release of the suppress flag as a safety net.
      timeoutId = window.setTimeout(() => {
        suppressSave.current = false;
      }, 1400);

      return () => {
        cancelled = true;
        window.cancelAnimationFrame(rafId);
        window.clearTimeout(timeoutId);
        suppressSave.current = false;
      };
    }

    // Fresh navigation (PUSH / REPLACE) — always start at the top, instantly.
    window.scrollTo(0, 0);
  }, [pathname, search, hash, key, navType]);

  return null;
};

export default ScrollToTop;
