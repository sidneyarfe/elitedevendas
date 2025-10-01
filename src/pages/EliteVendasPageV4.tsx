import { Helmet } from "react-helmet-async";
import CriticalHeroSectionV2 from "@/components/elite/CriticalHeroSectionV2";
import CriticalCTA from "@/components/elite/CriticalCTA";
import LazyProblemSection from "@/components/elite/LazyProblemSection";
import LazySolutionSection from "@/components/elite/LazySolutionSection";
import LazyPromiseSection from "@/components/elite/LazyPromiseSection";
import LazyTargetAudienceSection from "@/components/elite/LazyTargetAudienceSection";
import LazyBenefitsSection from "@/components/elite/LazyBenefitsSection";
import LazyTestimonialsSection from "@/components/elite/LazyTestimonialsSection";
import LazyGuaranteeSection from "@/components/elite/LazyGuaranteeSection";
import LazyCreatorsSection from "@/components/elite/LazyCreatorsSection";
import LazyEventDetailsSection from "@/components/elite/LazyEventDetailsSection";
import LazyFAQSection from "@/components/elite/LazyFAQSection";
import Footer from "@/components/elite/Footer";

const EliteVendasPageV4 = () => {
  const handleCTAClick = () => {
    window.open("https://pay.kiwify.com.br/5zvVurg", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Workshop Elite de Vendas - Dobre Suas Vendas em 2 Dias AO VIVO | Belém-PA</title>
        <meta 
          name="description" 
          content="Para empresários de Belém-PA. Em 2 dias, vamos dobrar suas vendas AO VIVO gastando R$0. Workshop presencial 15-16 out, 9h às 13h."
        />
        <meta name="keywords" content="vendas, whatsapp, belém, workshop, empresários, prospecção" />
        <meta property="og:title" content="Workshop Elite de Vendas - Dobre Suas Vendas em 2 Dias AO VIVO" />
        <meta property="og:description" content="Para empresários de Belém-PA. Em 2 dias, vamos dobrar suas vendas AO VIVO gastando R$0." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lp.alavanc.com/elitedevendas-v4" />
        <link rel="canonical" href="https://lp.alavanc.com/elitedevendas-v4" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://pay.kiwify.com.br" crossOrigin="anonymous" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <CriticalHeroSectionV2 onCTAClick={handleCTAClick} />

        {/* Problem Section */}
        <LazyProblemSection onCTAClick={handleCTAClick} />

        {/* Solution Section */}
        <LazySolutionSection onCTAClick={handleCTAClick} />

        {/* Promise Section */}
        <LazyPromiseSection onCTAClick={handleCTAClick} />

        {/* Target Audience Section */}
        <LazyTargetAudienceSection onCTAClick={handleCTAClick} />

        {/* Benefits Section */}
        <LazyBenefitsSection onCTAClick={handleCTAClick} onFirstButtonClick={handleCTAClick} />

        {/* Testimonials Section */}
        <LazyTestimonialsSection />

        {/* Guarantee Section */}
        <LazyGuaranteeSection onCTAClick={handleCTAClick} />

        {/* Creators Section */}
        <LazyCreatorsSection onCTAClick={handleCTAClick} />

        {/* Event Details Section */}
        <LazyEventDetailsSection onCTAClick={handleCTAClick} />

        {/* FAQ Section */}
        <LazyFAQSection />

        {/* Final CTA */}
        <CriticalCTA onCTAClick={handleCTAClick} />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default EliteVendasPageV4;
