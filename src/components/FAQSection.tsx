import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();
  const items = t("faq.items") as { q: string; a: string }[];

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t("faq.title")}<span className="text-gradient">{t("faq.titleHighlight")}</span>
        </h2>

        <Accordion type="single" collapsible className="mt-14 space-y-3">
          {items.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glow-card px-6 border-border">
              <AccordionTrigger className="text-foreground text-sm font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
