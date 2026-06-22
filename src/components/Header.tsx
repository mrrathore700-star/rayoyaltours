import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, Star, Award, Globe2, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const icon = "/heritage-jaipur-travels-icon.png";

type NavChild = { label: string; to: string; section?: boolean };

type NavItem = {
  labelKey: string;
  to?: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { labelKey: "nav.home", to: "/" },
  {
    labelKey: "nav.destinations",
    children: [
      { label: "Jaipur", to: "/destinations/jaipur" },
      { label: "Udaipur", to: "/destinations/udaipur" },
      { label: "Jodhpur", to: "/destinations/jodhpur" },
      { label: "Jaisalmer", to: "/destinations/jaisalmer" },
      { label: "Ranthambore", to: "/destinations/ranthambore" },
      { label: "Pushkar", to: "/destinations/pushkar" },
      { label: "View All Destinations →", to: "/destinations/jaipur" },
    ],
  },
  {
    labelKey: "nav.journeys",
    children: [
      { label: "Signature Rajasthan Tours", to: "", section: true },
      { label: "Grand Rajasthan Heritage Tour", to: "/packages/grand-rajasthan-heritage-tour" },
      { label: "Rajasthan Royal Heritage Tour", to: "/packages/rajasthan-royal" },
      { label: "Golden Triangle & Royal Rajasthan Tour", to: "/packages/golden-triangle-royal-rajasthan-tour" },
      { label: "Day Tours", to: "", section: true },
      { label: "Jaipur Full Day Tour", to: "/day-tours/jaipur-full-day-sightseeing" },
      { label: "Pushkar Day Trip", to: "/day-tours/pushkar-day-trip-from-jaipur" },
      { label: "Ranthambore Day Trip", to: "/day-tours/ranthambore-tiger-safari-day-trip" },
      { label: "View All Journeys →", to: "/packages" },
    ],
  },
  {
    labelKey: "nav.experiences",
    children: [
      { label: "Royal & Heritage Experiences", to: "/experiences/category/royal" },
      { label: "Desert & Adventure Experiences", to: "/experiences/category/desert" },
      { label: "Wildlife & Nature Experiences", to: "/experiences/category/wildlife" },
      { label: "Food & Cultural Experiences", to: "/experiences/category/food" },
      { label: "Art & Cultural Workshops", to: "/experiences/category/art" },
      { label: "Festivals & Events", to: "/experiences/category/festivals" },
      { label: "Local Lifestyle Experiences", to: "/experiences/category/local" },
      { label: "Wellness & Spiritual", to: "/experiences/category/wellness" },
      { label: "Photography Experiences", to: "/experiences/category/photography" },
      { label: "Luxury & Exclusive Experiences", to: "/experiences/category/luxury" },
      { label: "View All Experiences →", to: "/experiences" },
    ],
  },
  { labelKey: "nav.transport", to: "/taxi" },
  { labelKey: "nav.reviews", to: "/reviews" },
  { labelKey: "nav.about", to: "/about" },
  { labelKey: "nav.contact", to: "/contact" },
];

const WHATSAPP_URL = "https://wa.me/919887688843?text=Hi!%20I%20want%20to%20plan%20my%20Rajasthan%20trip";

const scrollToTopSmooth = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const TrustBar = () => (
  <div
    className="hidden md:block w-full text-white"
    style={{
      background: "linear-gradient(90deg, #6B1414 0%, #7A1E1E 50%, #6B1414 100%)",
      borderBottom: "1px solid rgba(201,168,76,0.35)",
    }}
  >
    <div className="container mx-auto px-4 lg:px-8 h-[36px] flex items-center justify-between text-[12px] tracking-[0.06em]"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
    >
      <div className="flex items-center gap-4 lg:gap-6">
        <span className="inline-flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-[#C9A84C] text-[#C9A84C]" />
          <span>4.8 Google Rating</span>
        </span>
        <span aria-hidden="true" className="h-3 w-px bg-[#C9A84C]/50" />
        <span className="inline-flex items-center gap-1.5">
          <Award className="h-3.5 w-3.5 text-[#C9A84C]" />
          <span>20+ Years Experience</span>
        </span>
        <span aria-hidden="true" className="hidden lg:inline-block h-3 w-px bg-[#C9A84C]/50" />
        <span className="hidden lg:inline-flex items-center gap-1.5">
          <Globe2 className="h-3.5 w-3.5 text-[#C9A84C]" />
          <span>Travelers from 40+ Countries</span>
        </span>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <a
          href="mailto:info@heritagejaipurtravels.com"
          className="hidden lg:inline-flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
        >
          <Mail className="h-3.5 w-3.5 text-[#C9A84C]" />
          info@heritagejaipurtravels.com
        </a>
        <span aria-hidden="true" className="hidden lg:inline-block h-3 w-px bg-[#C9A84C]/50" />
        <a
          href="tel:+919887688843"
          className="inline-flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
        >
          <Phone className="h-3.5 w-3.5 text-[#C9A84C]" />
          +91 9887688843
        </a>
      </div>
    </div>
  </div>
);

const BrandMark = ({ onNavigate }: { onNavigate: (to: string) => (e: React.MouseEvent) => void }) => (
  <Link
    to="/"
    onClick={onNavigate("/")}
    aria-label="Heritage Jaipur Travels — Home"
    className="flex items-center gap-3 md:gap-4 shrink-0 min-w-0 h-full"
  >
    <img
      src={icon}
      alt="Heritage Jaipur Travels"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="lux-brand-icon block"
    />
    <span className="flex flex-col items-center text-center leading-none min-w-0">
      <span
        className="lux-brand-script"
        style={{
          fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
          fontWeight: 600,
          color: "#0B1F4D",
          lineHeight: 0.95,
          letterSpacing: "0.5px",
        }}
      >
        Heritage
      </span>
      <span className="lux-brand-sub-row flex items-center justify-center gap-2 mt-1.5">
        <span aria-hidden="true" className="lux-brand-rule" />
        <span
          className="lux-brand-sub whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            color: "#7A1E1E",
            textTransform: "uppercase",
          }}
        >
          Jaipur Travels
        </span>
        <span aria-hidden="true" className="lux-brand-rule" />
      </span>
    </span>
  </Link>
);

const CallNowButton = () => (
  <a
    href="tel:+919887688843"
    aria-label="Call Heritage Jaipur Travels"
    className="inline-flex items-center justify-center gap-2 w-full font-serif text-[13px] tracking-[0.18em] uppercase text-white rounded-full transition-colors hover:brightness-95"
    style={{ backgroundColor: "#C9A84C", padding: "14px 22px" }}
  >
    <Phone className="h-4 w-4" />
    Call Now · +91 9887688843
  </a>
);

const isItemActive = (item: NavItem, pathname: string) => {
  if (item.to) return pathname === item.to;
  if (item.children) return item.children.some((c) => pathname === c.to.split("#")[0]);
  return false;
};

const DesktopDropdown = ({ item, pathname }: { item: NavItem; pathname: string }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  const active = isItemActive(item, pathname);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={handleEnter}
        onBlur={handleLeave}
        className={`lux-menu-link whitespace-nowrap inline-flex items-center gap-1 ${active ? "is-active" : ""}`}
      >
        {t(item.labelKey)}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>


      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`min-w-[260px] origin-top transition-all duration-300 ${
            open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-[0.98]"
          }`}
        >
          <div
            className="relative rounded-sm border border-[#C9A84C]/30 shadow-[0_24px_60px_-20px_rgba(11,28,51,0.25)] overflow-hidden"
            style={{ backgroundColor: "#FFFDF8" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
            />
            <ul className="py-2">
              {item.children!.map((child, idx) => {
                if (child.section) {
                  return (
                    <li
                      key={`section-${idx}`}
                      className={`px-5 ${idx === 0 ? "pt-2" : "pt-3"} pb-1 font-serif text-[10px] tracking-[0.22em] uppercase text-[#C9A84C]`}
                    >
                      {child.label}
                    </li>
                  );
                }
                const childActive = pathname === child.to.split("#")[0];
                return (
                  <li key={child.label}>
                    <Link
                      to={child.to}
                      className={`block px-5 py-2.5 font-serif text-[14px] tracking-[0.04em] transition-all duration-200 border-l-2 ${
                        childActive
                          ? "border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/[0.06]"
                          : "border-transparent text-[#0B1C33] hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-[#C9A84C]/[0.05] hover:pl-6"
                      }`}
                    >
                      {child.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileNavItem = ({
  item,
  pathname,
  onNavigate,
  index,
  open: menuOpen,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: (to: string) => (e: React.MouseEvent) => void;
  index: number;
  open: boolean;
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const active = isItemActive(item, pathname);
  const style: React.CSSProperties = {
    animation: menuOpen ? `lux-fade-up 0.5s ease-out ${index * 0.05}s both` : "none",
  };

  if (!item.children) {
    return (
      <Link
        to={item.to!}
        onClick={onNavigate(item.to!)}
        aria-current={active ? "page" : undefined}
        className={`lux-menu-link py-5 border-b border-[#C9A84C]/15 ${active ? "is-active" : ""}`}
        style={style}
      >
        {t(item.labelKey)}
      </Link>
    );
  }

  return (
    <div className="border-b border-[#C9A84C]/15" style={style}>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className={`lux-menu-link w-full py-5 flex items-center justify-between ${active ? "is-active" : ""}`}
      >
        <span>{t(item.labelKey)}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <div
        className={`grid transition-all duration-400 ease-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="pb-4 pl-2 flex flex-col">
            {item.children.map((child) => (
              <li key={child.label}>
                <Link
                  to={child.to}
                  onClick={onNavigate(child.to)}
                  className="block py-3 px-3 font-serif text-[15px] tracking-[0.03em] text-[#0B1C33]/80 hover:text-[#C9A84C] border-l border-[#C9A84C]/25 hover:border-[#C9A84C] transition-colors"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (to: string) => (e: React.MouseEvent) => {
    const [path] = to.split("#");
    if (location.pathname === path && !to.includes("#")) {
      e.preventDefault();
      scrollToTopSmooth();
    }
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        boxShadow: scrolled ? "0 6px 24px -10px rgba(11,28,51,0.18)" : "none",
      }}
    >
      <TrustBar />
      <div
        style={{
          backgroundColor: "#F8F5EF",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div
          className="mx-auto h-[72px] sm:h-[80px] md:h-[88px] lg:h-[96px] xl:h-[100px] px-4 md:px-6 lg:px-10 xl:px-12 flex items-center justify-between gap-6 lg:gap-10 xl:gap-14"
          style={{ maxWidth: "1400px" }}
        >
          <BrandMark onNavigate={handleNav} />

          <nav
            aria-label="Primary"
            className="hidden xl:flex items-center justify-center flex-1 flex-nowrap min-w-0 gap-[22px] 2xl:gap-[32px]"
          >
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.labelKey} item={item} pathname={location.pathname} />
              ) : (
                <Link
                  key={item.labelKey}
                  to={item.to!}
                  onClick={handleNav(item.to!)}
                  aria-current={location.pathname === item.to ? "page" : undefined}
                  className={`lux-menu-link whitespace-nowrap ${location.pathname === item.to ? "is-active" : ""}`}
                >
                  {t(item.labelKey)}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center justify-end shrink-0 min-w-0 gap-2">

            {/* Mobile quick actions */}
            <a
              href="tel:+919887688843"
              aria-label="Call"
              className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-white"
              style={{ backgroundColor: "#C9A84C" }}
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-white"
              style={{ backgroundColor: "#1FA855" }}
            >
              <MessageCircle className="h-4 w-4" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="xl:hidden p-2 min-h-10 min-w-10 text-[#0B1C33] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 top-[72px] sm:top-[80px] md:top-[124px] lg:top-[132px] z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white" />
        <nav
          aria-label="Mobile"
          className="relative container mx-auto px-6 pt-6 pb-14 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-124px)] lg:max-h-[calc(100vh-132px)]"
        >
          <div className="pb-4 flex flex-col gap-3">
            <CallNowButton />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full font-serif text-[13px] tracking-[0.18em] uppercase text-white rounded-full"
              style={{ background: "linear-gradient(135deg, #1FA855 0%, #128C3E 100%)", padding: "14px 22px" }}
            >
              <MessageCircle className="h-4 w-4" />
              {t("common.whatsapp")}
            </a>
          </div>

          {navItems.map((item, i) => (
            <MobileNavItem
              key={item.labelKey}
              item={item}
              pathname={location.pathname}
              onNavigate={handleNav}
              index={i}
              open={open}
            />
          ))}

          

          <div className="mt-8 flex flex-col gap-4 items-center">
            <a
              href="mailto:info@heritagejaipurtravels.com"
              className="inline-flex items-center gap-2 font-serif text-[13px] tracking-[0.15em] uppercase text-[#0B1C33]/70 hover:text-[#C9A84C] transition-colors"
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
