import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}

const LuxSectionHeading = ({ eyebrow, title, intro, tone = "light", align = "center" }: Props) => {
  const titleColor = tone === "dark" ? "text-[#FFF8F0]" : "text-[#0F0F0F]";
  const introColor = tone === "dark" ? "text-[#FFF8F0]/75" : "text-[#0F0F0F]/65";
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`mb-14 md:mb-16 max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-3 mb-5 ${align === "center" ? "" : ""}`}>
          <span className="lux-rule-gold" />
          <span className="lux-eyebrow">{eyebrow}</span>
          {align === "center" && <span className="lux-rule-gold" />}
        </div>
      )}
      <h2 className={`font-display font-semibold leading-[1.1] tracking-tight text-3xl md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {intro && (
        <p className={`font-serif italic text-lg md:text-xl mt-5 leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </div>
  );
};

export default LuxSectionHeading;
