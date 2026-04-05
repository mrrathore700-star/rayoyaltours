import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="heritage-gradient text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">Heritage Jaipur Travels</h3>
          <p className="text-sm opacity-80 font-serif text-lg leading-relaxed">
            Your trusted partner for royal Rajasthan heritage tours. Experience the grandeur of India's most colorful state with local Jaipur experts.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { label: "Tour Packages", to: "/packages" },
              { label: "Jaipur Sightseeing", to: "/sightseeing" },
              { label: "Heritage Experiences", to: "/experiences" },
              { label: "Gallery", to: "/gallery" },
              { label: "Blog", to: "/blog" },
              { label: "Contact Us", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Popular Tours</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              "Jaipur Heritage Tour",
              "Golden Triangle Tour",
              "Rajasthan Royal Tour",
              "Desert Safari Jaisalmer",
              "Udaipur Lake Tour",
            ].map((tour) => (
              <li key={tour}>
                <Link to="/packages" className="hover:opacity-100 transition-opacity">
                  {tour}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              C-Scheme, Jaipur, Rajasthan 302001, India
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              +91 94610 69858
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:info@heritagejaipurtravels.com" className="hover:opacity-100 transition-opacity">info@heritagejaipurtravels.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Heritage Jaipur Travels. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
