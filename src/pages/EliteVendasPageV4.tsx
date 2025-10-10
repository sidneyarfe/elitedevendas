import { useState } from "react";
import { Helmet } from "react-helmet-async";
import CriticalHeroSectionV2 from "@/components/elite/CriticalHeroSectionV2";
import CriticalCTA from "@/components/elite/CriticalCTA";
import LazySection from "@/components/LazySection";
import LazyEliteVendasV4FormModal from "@/components/elite/LazyEliteVendasV4FormModal";

const EliteVendasPageV4 = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsFormModalOpen(true);
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
        <link rel="preconnect" href="https://sidneyarfe.app.n8n.cloud" crossOrigin="anonymous" />
        
        {/* DNS prefetch for YouTube thumbnails */}
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section - Critical, loaded immediately */}
        <CriticalHeroSectionV2 onCTAClick={handleCTAClick} />

        {/* Proof Section - Lazy loaded with Intersection Observer */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyProofSection")}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="200px"
          skeletonHeight="h-[500px]"
        />

        {/* Solution Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazySolutionSection")}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[600px]"
        />

        {/* Promise Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyPromiseSection")}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[700px]"
        />

        {/* Target Audience Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyTargetAudienceSection")}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[600px]"
        />

        {/* Benefits Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyBenefitsSection")}
          componentProps={{ onCTAClick: handleCTAClick, onFirstButtonClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[800px]"
        />

        {/* Testimonials Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyTestimonialsSection")}
          rootMargin="300px"
          skeletonHeight="h-[600px]"
        />

        {/* Guarantee Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyGuaranteeSection")}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[500px]"
        />

        {/* Creators Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyCreatorsSection")}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[700px]"
        />

        {/* Event Details Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyEventDetailsSection")}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[600px]"
        />

        {/* FAQ Section */}
        <LazySection 
          componentLoader={() => import("@/components/elite/LazyFAQSection")}
          rootMargin="300px"
          skeletonHeight="h-[500px]"
        />

        {/* Final CTA - Critical */}
        <CriticalCTA onCTAClick={handleCTAClick} />

        {/* Footer */}
        <LazySection 
          componentLoader={() => import("@/components/elite/Footer")}
          rootMargin="200px"
          skeletonHeight="h-[200px]"
        />
      </div>

      {/* Form Modal - Only loaded when opened */}
      <LazyEliteVendasV4FormModal 
        isOpen={isFormModalOpen} 
        onClose={() => setIsFormModalOpen(false)} 
      />
    </>
  );
};

export default EliteVendasPageV4;
