import restaurantScreenshot from "@/assets/restaurant-screenshot.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-8 items-center relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}<span className="text-gradient">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
            {t("hero.subtitle")}
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#como-funciona"
              className="border border-border text-foreground font-semibold px-6 py-3 rounded-full hover:bg-secondary transition-colors text-sm text-center"
            >
              {t("hero.ctaSecondary")}
            </a>
            <a
              href="#contacto"
              className="bg-gradient-cta text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm text-center"
            >
              {t("hero.ctaPrimary")}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {t("hero.note")}
          </p>
        </div>

        <div className="relative flex justify-center">
          <div
            className="absolute rounded-full blur-[60px] md:blur-[80px]"
            style={{
              inset: "-15%",
              background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.5), hsl(220 85% 60% / 0.35), transparent 70%)",
            }}
          />
          <div
            className="relative z-10 w-full max-w-[500px] md:max-w-[700px] rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border-[2px] md:border-[3px] border-border"
          >
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-card">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-destructive" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ background: "#febc2e" }} />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ background: "#28c840" }} />
              </div>
              <div className="flex-1 mx-2 md:mx-4">
                <div className="rounded-md px-3 py-1 text-[10px] md:text-xs text-muted-foreground bg-background">
                  restaurante-ejemplo.com
                </div>
              </div>
            </div>
            <img
              src={restaurantScreenshot}
              alt="Ejemplo de web para restaurante"
              width={1100}
              height={700}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
