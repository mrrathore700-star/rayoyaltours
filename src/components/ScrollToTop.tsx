import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // If a hash is present, scroll to that section after layout settles
    if (hash) {
      const id = hash.replace("#", "");
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      // Try a few times in case section mounts after async content
      let attempts = 0;
      const interval = setInterval(() => {
        attempts += 1;
        if (tryScroll() || attempts > 10) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }

    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 50);
    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
