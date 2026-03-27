import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.servicios"), href: "#servicios" },
    { label: t("nav.comoFunciona"), href: "#como-funciona" },
    { label: t("nav.precio"), href: "#precio" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.contacto"), href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="SotosWeb" className="h-20 md:h-24" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#contacto"
            className="bg-gradient-cta text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            {t("nav.cta")}
          </a>
        </nav>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-gradient-cta text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.cta")}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
