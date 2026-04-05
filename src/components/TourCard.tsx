import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface TourCardProps {
  image: string;
  title: string;
  duration: string;
  highlights: string[];
  price: string;
  slug?: string;
}

const TourCard = ({ image, title, duration, highlights, price, slug }: TourCardProps) => (
  <div className="heritage-card group">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
        {price}
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" /> {duration}
        </span>
      </div>
      <ul className="space-y-1 mb-4">
        {highlights.map((h, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
            <MapPin className="h-3 w-3 text-primary shrink-0" /> {h}
          </li>
        ))}
      </ul>
      <Link
        to={slug ? `/packages/${slug}` : "/contact"}
        className="inline-flex items-center justify-center w-full py-2.5 rounded-md heritage-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Book Now
      </Link>
    </div>
  </div>
);

export default TourCard;
