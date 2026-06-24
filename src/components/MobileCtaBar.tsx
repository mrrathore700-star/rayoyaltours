import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Send } from "lucide-react";

const WA = "https://wa.me/919887688843?text=Hi!%20I'd%20like%20to%20plan%20my%20Rajasthan%20trip.";

const MobileCtaBar = () => {
  const { pathname } = useLocation();
  // Hide on contact page (it's already a contact-focused page)
  if (pathname.startsWith("/contact")) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-2 p-2 border-t border-[#C9A84C]/30"
      style={{
        background: "rgba(15,15,15,0.96)",
        backdropFilter: "saturate(140%) blur(8px)",
        paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))",
      }}
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 py-3 rounded-full font-display tracking-[0.16em] uppercase text-[11px] text-white"
        style={{ background: "hsl(142,70%,38%)" }}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </a>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 py-3 rounded-full lux-btn-gold font-display tracking-[0.16em] uppercase text-[11px]"
      >
        <Send className="h-4 w-4" />
        Request Quote
      </Link>
    </div>
  );
};

export default MobileCtaBar;
