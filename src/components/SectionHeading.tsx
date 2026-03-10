interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className={`mt-4 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
      <span className="h-px w-12 bg-primary" />
      <span className="h-2 w-2 rounded-full bg-secondary" />
      <span className="h-px w-12 bg-primary" />
    </div>
  </div>
);

export default SectionHeading;
