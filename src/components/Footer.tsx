import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="SotosWeb" className="h-7" />
          </a>
          <p className="text-xs text-muted-foreground mt-1">{t("footer.tagline")}</p>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm text-muted-foreground">
          <a href="#servicios" className="hover:text-foreground transition-colors">{t("nav.servicios")}</a>
          <a href="#precio" className="hover:text-foreground transition-colors">{t("nav.precio")}</a>
          <a href="#faq" className="hover:text-foreground transition-colors">{t("nav.faq")}</a>
          <a href="#contacto" className="hover:text-foreground transition-colors">{t("nav.contacto")}</a>
        </nav>
      </div>
      <div className="container mx-auto mt-6 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
        <p>© 2026 SotosWeb</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">{t("footer.legal")}</a>
          <a href="#" className="hover:text-foreground transition-colors">{t("footer.privacy")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
