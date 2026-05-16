import { ReactNode } from "react";

interface LuxHeroProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  height?: "tall" | "regular";
  align?: "center" | "left";
  overlay?: string;
}

const LuxHero = ({
  image,
  eyebrow,
  title,
  subtitle,
  actions,
  height = "regular",
  align = "center",
  overlay = "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.7) 100%)",
}: LuxHeroProps) => {
  const heightCls = height === "tall"
    ? "min-h-[88vh] md:min-h-[92vh]"
    : "min-h-[72vh] md:min-h-[78vh]";

  const alignCls = align === "left"
    ? "items-end md:items-center justify-start text-left"
    : "items-center justify-center text-center";

  return (
    <section className={`relative ${heightCls} flex ${alignCls} overflow-hidden lux-black-bg`}>
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover lux-ken-burns"
        />
        <div className="absolute inset-0" style={{ background: overlay }} />
      </div>

      <div className="lux-particles" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 7.3) % 100}%`,
              animationDuration: `${14 + (i % 6) * 3}s`,
              animationDelay: `${(i * 0.7) % 8}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 px-6 md:px-10 max-w-5xl mx-auto ${align === "left" ? "md:mx-0 md:ml-[8%]" : ""} pb-12 md:pb-0 pt-28 md:pt-32`}>
        {eyebrow && (
          <div className="lux-fade-up inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full lux-glass">
            <span className="lux-eyebrow">{eyebrow}</span>
          </div>
        )}
        <h1
          className="lux-fade-up font-display font-semibold text-[#FFF8F0] leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="lux-fade-up font-serif text-lg md:text-2xl text-[#FFF8F0]/85 mt-6 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            {subtitle}
          </p>
        )}
        {actions && (
          <div
            className="lux-fade-up mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: "0.45s" }}
          >
            {actions}
          </div>
        )}
      </div>
    </section>
  );
};

export default LuxHero;
