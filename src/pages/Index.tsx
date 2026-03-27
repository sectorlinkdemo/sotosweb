import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiciosSection from "@/components/ServiciosSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import PrecioSection from "@/components/PrecioSection";
import FAQSection from "@/components/FAQSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ServiciosSection />
      <ComoFuncionaSection />
      <PrecioSection />
      <FAQSection />
      <ContactoSection />
    </main>
    <Footer />
  </>
);

export default Index;
