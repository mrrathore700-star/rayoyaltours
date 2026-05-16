interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  eyebrow?: string;
  tone?: "light" | "dark";
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  eyebrow,
  tone = "light",
}: SectionHeadingProps) => {
  const titleColor = tone === "dark" ? "text-[#FFF8F0]" : "text-[#0F0F0F]";
  const subColor = tone === "dark" ? "text-[#FFF8F0]/75" : "text-[#0F0F0F]/65";
  return (
    <div className={`mb-14 md:mb-16 ${centered ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}>
        <span className="lux-rule-gold" />
        <span className="lux-eyebrow">{eyebrow ?? "Heritage Jaipur"}</span>
        {centered && <span className="lux-rule-gold" />}
      </div>
      <h2 className={`font-display font-semibold leading-[1.1] tracking-tight text-3xl md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-serif italic text-lg md:text-xl mt-5 max-w-2xl mx-auto leading-relaxed ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
