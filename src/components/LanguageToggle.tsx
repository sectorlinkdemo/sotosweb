import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";

const languages: { code: Lang; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
];

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-secondary/50"
        aria-label="Change language"
      >
        <Globe size={18} />
        <span className="text-xs font-medium uppercase">{lang}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg overflow-hidden z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                lang === l.code
                  ? "text-foreground bg-primary/10 font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
