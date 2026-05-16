import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "gold" | "outline";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const baseCls =
  "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-display tracking-[0.18em] uppercase text-xs md:text-sm transition-all duration-300";

const variantCls = (v: Variant) => (v === "gold" ? "lux-btn-gold" : "lux-btn-outline");

export const LuxLinkBtn = ({
  to,
  variant = "gold",
  children,
  className = "",
}: BaseProps & { to: string }) => (
  <Link to={to} className={`${baseCls} ${variantCls(variant)} ${className}`}>
    {children}
  </Link>
);

export const LuxAnchorBtn = ({
  href,
  variant = "gold",
  children,
  className = "",
  external = false,
}: BaseProps & { href: string; external?: boolean }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className={`${baseCls} ${variantCls(variant)} ${className}`}
  >
    {children}
  </a>
);

export default LuxLinkBtn;
