import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import LuxSectionHeading from "./LuxSectionHeading";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import jodhpurFort from "@/assets/jodhpur-fort.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";
import pushkarLake from "@/assets/pushkar-lake.jpg";

const destinations = [
  {
    name: "Jaipur",
    tagline: "The Pink City",
    description: "Forts, palaces and bazaars — Rajasthan's capital and the starting point for most of our tours.",
    image: hawaMahal,
    to: "/contact?destination=Jaipur",
  },
  {
    name: "Udaipur",
    tagline: "City of Lakes",
    description: "Palaces, lakes and the Aravalli hills — a relaxed stop popular with couples and families.",
    image: udaipurLake,
    to: "/contact?destination=Udaipur",
  },
  {
    name: "Jodhpur",
    tagline: "The Blue City",
    description: "Mehrangarh Fort, the blue old town and easy day trips into the desert and Bishnoi villages.",
    image: jodhpurFort,
    to: "/contact?destination=Jodhpur",
  },
  {
    name: "Jaisalmer",
    tagline: "The Golden City",
    description: "The sandstone fort, Thar Desert dunes and overnight camel and jeep safaris.",
    image: jaisalmerFort,
    to: "/contact?destination=Jaisalmer",
  },
  {
    name: "Ranthambore",
    tagline: "Tiger Country",
    description: "Bengal tiger safaris in one of India's most well-known national parks, easy to combine with Jaipur.",
    image: ranthamboreTiger,
    to: "/contact?destination=Ranthambore",
  },
  {
    name: "Pushkar",
    tagline: "Lake Town",
    description: "Ghats, the Brahma temple and the annual Camel Fair — a short drive from Jaipur.",
    image: pushkarLake,
    to: "/contact?destination=Pushkar",
  },
];

const LuxDestinations = () => {
  return (
    <section className="lux-cream-bg py-24 md:py-32">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Destinations"
          title="Popular Places to Visit in Rajasthan"
          intro="Cities, forts, desert towns and wildlife parks our Jaipur team can include in your tour."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((d) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-sm bg-white shadow-[0_2px_30px_rgba(110,15,31,0.06)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(110,15,31,0.18)] hover:-translate-y-1 border border-[#C9A84C]/10 hover:border-[#C9A84C]/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.tagline}`}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0709]/85 via-[#1a0709]/25 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] bg-[#1a0709]/60 backdrop-blur-sm px-3 py-1.5 border border-[#C9A84C]/40">
                    {d.tagline}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 transition-colors duration-500 group-hover:text-[#C9A84C]">
                    {d.name}
                  </h3>
                  <div className="h-px w-12 bg-[#C9A84C] mb-4 transition-all duration-500 group-hover:w-20" />
                  <p className="text-sm md:text-[15px] text-white/85 leading-relaxed mb-5 line-clamp-3">
                    {d.description}
                  </p>
                  <Link
                    to={d.to}
                    aria-label={`Explore ${d.name}`}
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] hover:text-white transition-colors duration-300"
                  >
                    Explore Destination
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxDestinations;
