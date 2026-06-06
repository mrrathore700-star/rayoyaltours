import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-6 z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A84C] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        bottom: "96px",
        width: "48px",
        height: "48px",
        backgroundColor: "#C9A84C",
        color: "#FFFFFF",
        boxShadow: "0 8px 24px -6px rgba(201, 168, 76, 0.55)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#D4AF37";
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 12px 32px -4px rgba(201, 168, 76, 0.75)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#C9A84C";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 24px -6px rgba(201, 168, 76, 0.55)";
      }}
    >
      <ChevronUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
};

export default BackToTop;
