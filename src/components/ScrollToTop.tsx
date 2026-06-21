import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Scroll behaviour:
 *  - New navigation (PUSH / REPLACE): scroll to top (or to #hash target).
 *  - Browser Back / Forward (POP): restore the previous scroll position
 *    for that history entry — never force scroll to top.
 *
 * Positions are keyed by `location.key`, which is stable per history entry.
 */
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"
  const positions = useRef<Map<string, number>>(new Map());
  const currentKey = useRef<string>(key);

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
    const onScroll = () => {
      positions.current.set(currentKey.current, window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Save the scroll position of the entry we're leaving.
    if (currentKey.current !== key) {
      positions.current.set(currentKey.current, window.scrollY);
      currentKey.current = key;
    }

    // Hash links — scroll to the element after layout.
    if (hash) {
      const id = hash.replace("#", "");
      let attempts = 0;
      const interval = window.setInterval(() => {
        attempts += 1;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.clearInterval(interval);
        } else if (attempts > 10) {
          window.clearInterval(interval);
        }
      }, 80);
      return () => window.clearInterval(interval);
    }

    if (navType === "POP") {
      // Back / Forward — restore the previous scroll position.
      const saved = positions.current.get(key) ?? 0;
      // Wait a frame so the new route has rendered before scrolling.
      const raf = window.requestAnimationFrame(() => {
        window.scrollTo({ top: saved, left: 0, behavior: "auto" });
      });
      return () => window.cancelAnimationFrame(raf);
    }

    // Fresh navigation — start at the top.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, key, navType]);

  return null;
};

export default ScrollToTop;
