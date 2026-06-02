import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
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

const CallNowButton = () => (
  <a
    href="tel:+919887688843"
    aria-label="Call Heritage Jaipur Travels"
    className="inline-flex items-center justify-center gap-2 w-full font-serif text-[13px] tracking-[0.18em] uppercase text-white rounded-full transition-colors hover:brightness-95"
    style={{ backgroundColor: "#C9A84C", padding: "12px 20px" }}
  >
    <Phone className="h-4 w-4" />
    Call Now · +91 98876 88843
  </a>
);

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
      <div className="container mx-auto flex items-center justify-between h-[76px] md:h-[80px] lg:h-[84px] xl:h-[88px] px-4 md:px-6 lg:px-8 gap-4">
        <Link
          to="/"
          className="logo-container flex items-center shrink-0 group min-w-0"
          aria-label="Heritage Jaipur Travels — Home"
        >
          <img
            src={logo}
            alt="Heritage Jaipur Travels"
            width={210}
            height={64}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="lux-logo block"
          />
        </Link>

        <nav aria-label="Primary" className="hidden xl:flex items-center xl:gap-5 2xl:gap-6 shrink-0">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={`lux-nav-link ${active ? "is-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <a
            href="tel:+919887688843"
            aria-label="Call Heritage Jaipur Travels"
            className="hidden xl:inline-flex items-center gap-2 font-serif text-[13px] tracking-[0.15em] uppercase text-[#0B1C33] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            <span className="text-[#0B1C33]/60">Contact</span>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <Phone className="h-4 w-4" />
            +91 98876 88843
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="xl:hidden p-3 min-h-11 min-w-11 text-[#0B1C33] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile slide menu */}
      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 top-[76px] md:top-[80px] z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white" />
        <nav
          aria-label="Mobile"
          className="relative container mx-auto px-6 pt-6 pb-14 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-76px)] md:max-h-[calc(100vh-80px)]"
        >
          <div className="pb-4">
            <CallNowButton />
          </div>

          {navLinks.map((link, i) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={`lux-nav-link py-5 border-b border-[#D4AF37]/15 ${active ? "is-active" : ""}`}
                style={{ animation: open ? `lux-fade-up 0.5s ease-out ${i * 0.05}s both` : "none" }}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-8 flex flex-col gap-4 items-center">
            <CallNowButton />
            <a
              href="mailto:info@heritagejaipurtravels.com"
              className="inline-flex items-center gap-2 font-serif text-[12px] tracking-[0.15em] uppercase text-[#0B1C33]/70 hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@heritagejaipurtravels.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
