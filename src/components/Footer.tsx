import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
  <footer className="lux-footer-bg text-[#FFF8F0]">
    <div className="container mx-auto px-6 md:px-10 py-20 md:py-24">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="lux-rule-gold" />
          <span className="lux-eyebrow">Heritage Jaipur Travels</span>
          <span className="lux-rule-gold" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
          {t("footer.tagline")}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        <div>
          <h4 className="lux-eyebrow mb-5">{t("footer.story")}</h4>
          <p className="font-serif text-[15px] leading-relaxed text-[#FFF8F0]/80">
            {t("footer.storyText")}
          </p>
        </div>
        <div>
          <h4 className="lux-eyebrow mb-5">{t("footer.explore")}</h4>
          <ul className="space-y-3 text-sm text-[#FFF8F0]/80">
            {[
              { label: "About Us", to: "/about" },
              { label: "Tour Packages", to: "/packages" },
              { label: "Jaipur Sightseeing", to: "/sightseeing" },
              { label: "Heritage Experiences", to: "/experiences" },
              { label: "Gallery", to: "/gallery" },
              { label: "Journal", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[#C9A84C] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="lux-eyebrow mb-5">{t("footer.signatureJourneys")}</h4>
          <ul className="space-y-3 text-sm text-[#FFF8F0]/80">
            {[
              { label: "Rajasthan Royal Heritage", to: "/packages/rajasthan-royal" },
              { label: "The Golden Triangle", to: "/packages/golden-triangle" },
              { label: "Jaisalmer Desert Nights", to: "/packages/desert-safari" },
              { label: "Udaipur Lake Tour", to: "/packages/udaipur-lake" },
              { label: "Ranthambore Wild Trails", to: "/packages/golden-triangle-ranthambore" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[#C9A84C] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="lux-eyebrow mb-5">{t("footer.exploreRajasthan")}</h4>
          <ul className="space-y-3 text-sm text-[#FFF8F0]/80">
            {[
              { label: "Jaipur", to: "/destinations/jaipur" },
              { label: "Udaipur", to: "/destinations/udaipur" },
              { label: "Jodhpur", to: "/destinations/jodhpur" },
              { label: "Jaisalmer", to: "/destinations/jaisalmer" },
              { label: "Ranthambore", to: "/destinations/ranthambore" },
              { label: "Pushkar", to: "/destinations/pushkar" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[#C9A84C] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="lux-eyebrow mb-5">{t("footer.contact")}</h4>
          <ul className="space-y-4 text-sm text-[#FFF8F0]/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#C9A84C]" />
              <span>G 31 Ground Floor, Ganpati Plaza, MI Road, Jaipur 302001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[#C9A84C]" />
              <a href="tel:+919887688843" aria-label="Call Heritage Jaipur Travels" className="hover:text-[#C9A84C] transition-colors">+91 98876 88843</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[#C9A84C]" />
              <a href="mailto:info@heritagejaipurtravels.com" className="hover:text-[#C9A84C] transition-colors">info@heritagejaipurtravels.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 shrink-0 text-[#C9A84C]" />
              <a href="https://www.instagram.com/heritagejaipurtravels?igsh=MWR0d2licnJseGRqdQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A84C] transition-colors">@heritagejaipurtravels</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[#C9A84C]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.14em] uppercase text-[#FFF8F0]/60">
        <p>© {new Date().getFullYear()} Heritage Jaipur Travels — {t("footer.rights")}</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <Link to="/privacy-policy" className="hover:text-[#C9A84C] transition-colors">{t("footer.privacy")}</Link>
          <Link to="/terms-and-conditions" className="hover:text-[#C9A84C] transition-colors">{t("footer.terms")}</Link>
          <Link to="/cancellation-refund-policy" className="hover:text-[#C9A84C] transition-colors">{t("footer.refund")}</Link>
        </nav>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
