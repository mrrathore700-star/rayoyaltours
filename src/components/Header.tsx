import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Packages", to: "/packages" },
  { label: "Sightseeing", to: "/sightseeing" },
  { label: "Transport", to: "/taxi" },
  { label: "Experiences", to: "/experiences" },
  { label: "Gallery", to: "/gallery" },
  { label: "Journal", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const PHONE = "+91 94610 69858";
const TEL = "+919461069858";
const WA = "919461069858";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isScrolled = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "lux-nav-light" : "lux-nav-clear"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4 md:px-8"
      >
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Heritage Jaipur Travels — Home">
          <img
            src={logo}
            alt="Heritage Jaipur Travels"
            width={180}
            height={60}
            loading="eager"
            // @ts-expect-error fetchpriority is valid HTML
            fetchpriority="high"
            className="h-[45px] lg:h-[60px] w-auto object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={`lux-nav-link-v2 px-3 py-2 ${
                    isScrolled ? "is-dark" : "is-light"
                  } ${active ? "is-active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${TEL}`}
            className={`hidden xl:inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-colors ${
              isScrolled ? "text-[#0B1C33] hover:text-[#D4AF37]" : "text-[#F8F5EF] hover:text-[#D4AF37]"
            }`}
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex lux-cta-gold px-6 py-2.5 rounded-full text-xs font-display tracking-[0.2em] uppercase"
          >
            Enquire Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-3 min-h-11 min-w-11 flex items-center justify-center transition-colors ${
              isScrolled ? "text-[#0B1C33]" : "text-[#F8F5EF]"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 pt-8 pb-4">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      aria-current={active ? "page" : undefined}
                      className={`block py-4 text-base tracking-[0.12em] uppercase font-display border-b border-[#0B1C33]/10 transition-colors ${
                        active ? "text-[#D4AF37]" : "text-[#0B1C33] hover:text-[#D4AF37]"
                      }`}
                      style={{ animation: open ? `lux-fade-up 0.5s ease-out ${i * 0.04}s both` : "none" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-[#0B1C33]/10 p-6 space-y-3 bg-[#F8F5EF]">
            <a
              href={`tel:${TEL}`}
              className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#0B1C33]/20 text-[#0B1C33] text-xs tracking-[0.18em] uppercase font-display"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#0B1C33]/20 text-[#0B1C33] text-xs tracking-[0.18em] uppercase font-display"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center py-3.5 rounded-full lux-cta-gold text-xs tracking-[0.2em] uppercase font-display"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
