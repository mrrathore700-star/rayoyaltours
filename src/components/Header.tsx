import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "lux-nav" : "lux-nav-top"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-[76px] md:h-[80px] lg:h-[88px] px-4 md:px-8 gap-4">
        <Link
          to="/"
          className="logo-container flex items-center shrink-0 group"
          aria-label="Heritage Jaipur Travels — Home"
        >
          <img
            src={logo}
            alt="Heritage Jaipur Travels Luxury Rajasthan Tours"
            width={200}
            height={80}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="lux-logo block h-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`lux-nav-link ${location.pathname === link.to ? "is-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+919887688843"
            aria-label="Call Heritage Jaipur Travels"
            className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#C9A84C] hover:text-[#FFF8F0] transition-colors"
          >
            <Phone className="h-4 w-4" />
            +91 98876 88843
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-3 min-h-11 min-w-11 text-[#FFF8F0] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile slide menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[90px] z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0" style={{ background: "#2A0A12" }} />
        <nav className="relative container mx-auto px-6 pt-10 pb-14 flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`lux-nav-link py-4 border-b border-[#C9A84C]/15 ${
                location.pathname === link.to ? "is-active" : ""
              }`}
              style={{ animation: open ? `lux-fade-up 0.5s ease-out ${i * 0.05}s both` : "none" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919887688843"
            aria-label="Call Heritage Jaipur Travels"
            className="mt-8 inline-flex items-center justify-center gap-2 py-3 rounded-full lux-btn-gold tracking-[0.18em] uppercase text-xs font-display"
          >
            <Phone className="h-4 w-4" /> +91 98876 88843
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
