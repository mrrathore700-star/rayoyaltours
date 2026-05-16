import { ReactNode } from "react";
import { LuxLinkBtn, LuxAnchorBtn } from "./LuxButton";

interface LuxCtaBandProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primary?: { label: string; to?: string; href?: string; external?: boolean };
  secondary?: { label: string; to?: string; href?: string; external?: boolean };
}

const LuxCtaBand = ({ image, eyebrow, title, subtitle, primary, secondary }: LuxCtaBandProps) => (
  <section className="relative overflow-hidden lux-black-bg">
    <div className="absolute inset-0">
      <img src={image} alt="" aria-hidden="true" className="w-full h-full object-cover lux-ken-burns" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.75) 60%, rgba(15,15,15,0.92) 100%)",
        }}
      />
    </div>

    <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center max-w-3xl">
      {eyebrow && (
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="lux-rule-gold" />
          <span className="lux-eyebrow">{eyebrow}</span>
          <span className="lux-rule-gold" />
        </div>
      )}
      <h2 className="font-display font-semibold text-[#FFF8F0] text-3xl md:text-5xl lg:text-6xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-serif text-[#FFF8F0]/85 text-lg md:text-xl mt-6 leading-relaxed">
          {subtitle}
        </p>
      )}
      {(primary || secondary) && (
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {primary &&
            (primary.to ? (
              <LuxLinkBtn to={primary.to} variant="gold">{primary.label}</LuxLinkBtn>
            ) : (
              <LuxAnchorBtn href={primary.href!} external={primary.external} variant="gold">{primary.label}</LuxAnchorBtn>
            ))}
          {secondary &&
            (secondary.to ? (
              <LuxLinkBtn to={secondary.to} variant="outline">{secondary.label}</LuxLinkBtn>
            ) : (
              <LuxAnchorBtn href={secondary.href!} external={secondary.external} variant="outline">{secondary.label}</LuxAnchorBtn>
            ))}
        </div>
      )}
    </div>
  </section>
);

export default LuxCtaBand;
