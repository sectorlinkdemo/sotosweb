import { Paintbrush, Smartphone, LayoutDashboard, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Paintbrush, Smartphone, LayoutDashboard, ShieldCheck];

const ServiciosSection = () => {
  const { t } = useLanguage();
  const items = t("servicios.items") as { title: string; desc: string }[];

  return (
    <section id="servicios" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t("servicios.title")}<span className="text-gradient">{t("servicios.titleHighlight")}</span>
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.title} className="glow-card p-6 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
