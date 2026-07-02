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

const getCurrentUrlKey = () => `${window.location.pathname}${window.location.search}`;

const isModifiedClick = (event: MouseEvent) =>
  event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || event.button !== 0;

const isSameOriginNavigation = (anchor: HTMLAnchorElement) => {
  try {
    const url = new URL(anchor.href);
    return url.origin === window.location.origin;
  } catch {
    return false;
  }
};

const ScrollToTop = () => {
  const { pathname, search, hash, key } = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  const positions = useRef<PositionMap>(loadPositions());
  const activeUrl = useRef<string>(urlKey(pathname, search));
  // While true, the scroll listener will NOT overwrite saved positions
  // (prevents clobbering during programmatic restore as content reflows).
  const suppressSave = useRef<boolean>(false);

  const rememberCurrentPosition = () => {
    if (suppressSave.current) return;
    positions.current[activeUrl.current] = window.scrollY;
    savePositions(positions.current);
  };

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

    const onClickCapture = (event: MouseEvent) => {
      if (isModifiedClick(event)) return;
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      if (!isSameOriginNavigation(anchor)) return;

      const url = new URL(anchor.href);
      const currentUrl = getCurrentUrlKey();
      const nextUrl = `${url.pathname}${url.search}`;

      if (nextUrl !== currentUrl) {
        rememberCurrentPosition();
      }
    };

    const onPopState = () => {
      rememberCurrentPosition();
    };

    const persist = () => savePositions(positions.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClickCapture, true);
    window.addEventListener("popstate", onPopState);
    window.addEventListener("pagehide", persist);
    window.addEventListener("beforeunload", persist);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("pagehide", persist);
      window.removeEventListener("beforeunload", persist);
      rememberCurrentPosition();
    };
  }, []);

  useLayoutEffect(() => {
    const nextUrl = urlKey(pathname, search);

    // Switch the active URL after React Router changes routes. Do not save here:
    // by this point the new route may already have changed document height and
    // clamped scrollY, which would overwrite the exact pre-navigation value.
    if (activeUrl.current !== nextUrl) {
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
      let stableFrames = 0;
      let lastHeight = 0;
      const start = performance.now();
      // Wait until the document is tall enough to actually reach `saved`,
      // re-asserting each frame so late-loading images/fonts don't shift us off.
      const tryRestore = () => {
        if (cancelled) return;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const canReachSavedPosition = saved <= Math.max(0, maxScroll);
        const target = canReachSavedPosition ? saved : Math.max(0, maxScroll);
        window.scrollTo(0, target);

        if (pageHeight === lastHeight && Math.abs(window.scrollY - target) <= 1) {
          stableFrames += 1;
        } else {
          stableFrames = 0;
          lastHeight = pageHeight;
        }

        const elapsed = performance.now() - start;
        // Keep re-asserting until the exact pixel position is stable, while
        // allowing late-loading images/fonts to expand the page enough first.
        if (elapsed < 2500 && (!canReachSavedPosition || stableFrames < 8)) {
          rafId = window.requestAnimationFrame(tryRestore);
        } else {
          suppressSave.current = false;
          positions.current[nextUrl] = window.scrollY;
          savePositions(positions.current);
        }
      };
      rafId = window.requestAnimationFrame(tryRestore);
      // Hard release of the suppress flag as a safety net.
      timeoutId = window.setTimeout(() => {
        suppressSave.current = false;
      }, 2800);

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
