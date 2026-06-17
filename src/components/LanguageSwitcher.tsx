import { useEffect, useRef, useState } from "react";
import { Globe2, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/i18n";

interface Props {
  variant?: "desktop" | "mobile";
}

const LanguageSwitcher = ({ variant = "desktop" }: Props) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language?.split("-")[0]) ??
    SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const change = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className="border-b border-[#C9A84C]/15">
        <details className="group">
          <summary
            className="lux-menu-link w-full py-5 flex items-center justify-between cursor-pointer list-none"
            aria-label="Select language"
          >
            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4" />
              {current.flag} {current.label}
            </span>
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <ul className="pb-4 pl-2 flex flex-col">
            {SUPPORTED_LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  onClick={() => change(l.code)}
                  className="w-full text-left flex items-center justify-between py-3 px-3 font-serif text-[15px] tracking-[0.03em] text-[#0B1C33]/80 hover:text-[#C9A84C] border-l border-[#C9A84C]/25 hover:border-[#C9A84C] transition-colors"
                >
                  <span>{l.flag} {l.label}</span>
                  {l.code === current.code && <Check className="h-4 w-4 text-[#C9A84C]" />}
                </button>
              </li>
            ))}
          </ul>
        </details>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Select language"
        className="lux-menu-link whitespace-nowrap inline-flex items-center gap-1.5"
      >
        <Globe2 className="h-4 w-4" />
        <span>{current.flag}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>
      <div
        className={`absolute right-0 top-full pt-4 z-50 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`min-w-[180px] origin-top transition-all duration-300 ${
            open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-[0.98]"
          }`}
        >
          <div
            className="relative rounded-sm border border-[#C9A84C]/30 shadow-[0_24px_60px_-20px_rgba(11,28,51,0.25)] overflow-hidden"
            style={{ backgroundColor: "#FFFDF8" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
            />
            <ul className="py-2">
              {SUPPORTED_LANGUAGES.map((l) => {
                const active = l.code === current.code;
                return (
                  <li key={l.code}>
                    <button
                      type="button"
                      onClick={() => change(l.code)}
                      className={`w-full text-left flex items-center justify-between px-5 py-2.5 font-serif text-[14px] tracking-[0.04em] transition-all duration-200 border-l-2 ${
                        active
                          ? "border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/[0.06]"
                          : "border-transparent text-[#0B1C33] hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-[#C9A84C]/[0.05]"
                      }`}
                    >
                      <span>{l.flag} {l.label}</span>
                      {active && <Check className="h-4 w-4" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
