import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TourCardProps {
  image: string;
  title: string;
  duration: string;
  highlights: string[];
  price?: string;
  slug?: string;
}

const TourCard = ({ image, title, duration, highlights, slug }: TourCardProps) => (
  <Link
    to={slug ? `/packages/${slug}` : "/contact"}
    className="lux-edit-card group block"
  >
    <img src={image} alt={title} loading="lazy" className="lux-edit-img" />
    <div className="lux-edit-overlay" />
    <div className="lux-edit-body">
      <div className="flex items-center gap-3 mb-3">
        <span className="lux-rule-gold" />
        <span className="lux-eyebrow text-[10px]">{highlights.slice(0, 3).join(" · ")}</span>
      </div>
      <h3 className="font-display text-2xl md:text-[26px] font-semibold leading-snug mb-3 text-[#FFF8F0]">
        {title}
      </h3>
      <div className="flex items-center justify-between text-[13px] text-[#FFF8F0]/75">
        <span className="inline-flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-[#C9A84C]" /> {duration}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[#C9A84C] tracking-[0.16em] uppercase text-[11px] group-hover:gap-3 transition-all">
          View Journey <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </Link>
);

export default TourCard;
