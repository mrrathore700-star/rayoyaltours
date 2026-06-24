import { ReactNode } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

type BtnDef = {
  label: string;
  to?: string;
  href?: string;
  external?: boolean;
  icon?: "wa" | "send" | "none";
};

interface LuxInlineCtaProps {
  eyebrow?: string;
  heading: ReactNode;
  subtitle?: ReactNode;
  primary: BtnDef;
  secondary?: BtnDef;
  tone?: "cream" | "white" | "dark";
  compact?: boolean;
}

const baseBtn =
  "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-display tracking-[0.18em] uppercase text-[11px] md:text-xs transition-all duration-300";

const Btn = ({ btn, variant }: { btn: BtnDef; variant: "gold" | "outline" }) => {
  const cls = `${baseBtn} ${variant === "gold" ? "lux-btn-gold" : "lux-btn-outline"}`;
  const Icon = btn.icon === "wa" ? MessageCircle : btn.icon === "send" ? Send : null;
  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" />} {btn.label}
    </>
  );
  if (btn.to) {
    return (
      <Link to={btn.to} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={btn.href}
      target={btn.external ? "_blank" : undefined}
      rel={btn.external ? "noopener noreferrer" : undefined}
      className={cls}
    >
      {content}
    </a>
  );
};

const LuxInlineCta = ({
  eyebrow,
  heading,
  subtitle,
  primary,
  secondary,
  tone = "cream",
  compact = false,
}: LuxInlineCtaProps) => {
  const isDark = tone === "dark";
  const sectionCls = isDark
    ? "lux-black-bg text-[#FFF8F0]"
    : tone === "white"
      ? "bg-white"
      : "lux-cream-bg";
  const pad = compact ? "py-10 md:py-12" : "py-14 md:py-16";
  const headColor = isDark ? "text-[#FFF8F0]" : "text-[#0F0F0F]";
  const subColor = isDark ? "text-[#FFF8F0]/75" : "text-[#0F0F0F]/65";
  const borderColor = isDark ? "border-[#C9A84C]/30" : "border-[#C9A84C]/25";

  return (
    <section className={`${sectionCls} ${pad}`}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-3xl mx-auto text-center border ${borderColor} rounded-sm p-8 md:p-10 ${
            isDark ? "bg-white/5" : "bg-white/55 backdrop-blur-sm"
          }`}
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="lux-rule-gold" />
              <span className="lux-eyebrow">{eyebrow}</span>
              <span className="lux-rule-gold" />
            </div>
          )}
          <h3 className={`font-display font-semibold ${headColor} text-2xl md:text-3xl leading-tight`}>
            {heading}
          </h3>
          {subtitle && (
            <p className={`font-serif ${subColor} text-base md:text-lg mt-4 leading-relaxed`}>
              {subtitle}
            </p>
          )}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Btn btn={primary} variant="gold" />
            {secondary && <Btn btn={secondary} variant="outline" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxInlineCta;
