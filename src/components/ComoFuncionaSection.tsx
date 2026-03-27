import { useLanguage } from "@/i18n/LanguageContext";

const ComoFuncionaSection = () => {
  const { t } = useLanguage();
  const steps = t("comoFunciona.steps") as { title: string; desc: string }[];
  const nums = ["01", "02", "03", "04"];

  return (
    <section id="como-funciona" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t("comoFunciona.title")}<span className="text-gradient">{t("comoFunciona.titleHighlight")}</span>
        </h2>
        <p className="text-center text-muted-foreground mt-3">{t("comoFunciona.subtitle")}</p>

        <div className="mt-14 relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 hidden md:block" />
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                  {nums[i]}
                </div>
                <div className="glow-card p-6 flex-1">
                  <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
