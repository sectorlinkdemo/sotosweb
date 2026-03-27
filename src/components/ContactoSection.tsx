import { useState } from "react";
import { MessageCircle, Mail, Copy, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactoSection = () => {
  const { t } = useLanguage();
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("+34616206227");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <div className="glow-card p-8 md:p-12 text-center border-primary/30">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("contacto.title")}
            <span className="text-gradient">{t("contacto.titleHighlight")}</span>
            {t("contacto.titleEnd")}
          </h2>
          <p className="text-muted-foreground mt-3">{t("contacto.subtitle")}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Flip card for WhatsApp */}
            <div className="relative h-12" style={{ perspective: "600px", minWidth: "200px" }}>
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front - WhatsApp button */}
                <button
                  onClick={() => setFlipped(true)}
                  className="absolute inset-0 bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <MessageCircle size={18} />
                  {t("contacto.whatsapp")}
                </button>

                {/* Back - Phone number + copy */}
                <div
                  className="absolute inset-0 bg-gradient-primary text-primary-foreground font-semibold rounded-full flex items-center justify-center gap-2"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <a href="tel:+34616206227" className="hover:underline text-sm md:text-base">
                    +34 616 206 227
                  </a>
                  <button
                    onClick={handleCopy}
                    className="ml-1 p-1 rounded-full hover:bg-white/20 transition-colors"
                    title="Copiar"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <a
              href={`mailto:micael@sotosweb.com?subject=${encodeURIComponent(t("contacto.emailSubject"))}&body=${encodeURIComponent(t("contacto.emailBody"))}`}
              className="border border-border text-foreground font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
