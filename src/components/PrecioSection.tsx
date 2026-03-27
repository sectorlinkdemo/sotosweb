import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const PrecioSection = () => {
  const { t } = useLanguage();
  const features = t("precio.features") as string[];

  return (
    <section id="precio" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t("precio.title")}<span className="text-gradient">{t("precio.titleHighlight")}</span>
        </h2>

        <div className="mt-14 glow-card p-8 md:p-10 text-center border-primary/30 relative overflow-hidden">
          {/* Limited offer badge */}
          <div className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
            <Sparkles size={14} />
            {t("precio.limitedOffer")}
          </div>

          {/* Price block */}
          <div className="flex items-center justify-center gap-4">
            <p className="text-2xl md:text-3xl font-bold text-muted-foreground line-through decoration-2 opacity-50">
              {t("precio.oldPrice")}
            </p>
            <p className="text-6xl md:text-7xl font-extrabold text-gradient">499€</p>
          </div>

          <p className="text-muted-foreground mt-3">{t("precio.subtitle")}</p>

          <ul className="mt-8 text-left space-y-4 max-w-md mx-auto">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-8 inline-block w-full bg-gradient-primary text-primary-foreground font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            {t("precio.cta")}
          </a>
          <p className="text-xs text-muted-foreground mt-4">{t("precio.extra")}</p>
        </div>
      </div>
    </section>
  );
};

export default PrecioSection;
