import { Helmet } from "react-helmet-async";
import { Suspense, useState, lazy } from "react";

// Critical components - loaded immediately
import CriticalHeroSectionV2 from "@/components/elite/CriticalHeroSectionV2";
import CriticalCTA from "@/components/elite/CriticalCTA";

// Lazy loaded sections for performance
const LazyProblemSection = lazy(() => import("@/components/elite/LazyProblemSection"));
const LazySolutionSection = lazy(() => import("@/components/elite/LazySolutionSection"));
const LazyPromiseSection = lazy(() => import("@/components/elite/LazyPromiseSection"));
const LazyTargetAudienceSection = lazy(() => import("@/components/elite/LazyTargetAudienceSection"));
const LazyBenefitsSection = lazy(() => import("@/components/elite/LazyBenefitsSection"));
const LazyTestimonialsSection = lazy(() => import("@/components/elite/LazyTestimonialsSection"));
const LazyGuaranteeSection = lazy(() => import("@/components/elite/LazyGuaranteeSection"));
const LazyCreatorsSection = lazy(() => import("@/components/elite/LazyCreatorsSection"));
const LazyEventDetailsSection = lazy(() => import("@/components/elite/LazyEventDetailsSection"));
const LazyFAQSection = lazy(() => import("@/components/elite/LazyFAQSection"));
const LazyLeadFormModal = lazy(() => import("@/components/LazyLeadFormModal"));
import Footer from "@/components/elite/Footer";

// Loading fallback component
const SectionLoading = ({ height = "300px" }: { height?: string }) => (
  <div 
    className="w-full animate-pulse bg-muted/10 rounded-lg"
    style={{ height, minHeight: height }}
  />
);

const EliteVendasPageV2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsModalOpen(true);
  };

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits-section');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Workshop Elite de Vendas V2 - Dobre Suas Vendas em 2 Dias AO VIVO | Belém-PA</title>
        <meta 
          name="description" 
          content="Para empresários de Belém-PA. Em 2 dias, vamos dobrar suas vendas AO VIVO gastando R$0. Workshop presencial 15-16 out, 9h às 13h."
        />
        <meta name="keywords" content="vendas, whatsapp, belém, workshop, empresários, prospecção" />
        <meta property="og:title" content="Workshop Elite de Vendas V2 - Dobre Suas Vendas em 2 Dias AO VIVO" />
        <meta property="og:description" content="Para empresários de Belém-PA. Em 2 dias, vamos dobrar suas vendas AO VIVO gastando R$0." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lp.alavanc.com/elitedevendas-v2" />
        <link rel="canonical" href="https://lp.alavanc.com/elitedevendas-v2" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://pay.kiwify.com.br" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS will be inlined */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            .hero-container { 
              contain: layout style paint;
              will-change: transform;
            }
            .loading-placeholder {
              background: linear-gradient(90deg, 
                hsl(var(--muted)/0.1) 25%, 
                hsl(var(--muted)/0.2) 50%, 
                hsl(var(--muted)/0.1) 75%
              );
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `
        }} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Critical Hero Section V2 - loads immediately */}
        <CriticalHeroSectionV2 onCTAClick={scrollToBenefits} />

        {/* Lazy loaded sections with optimized loading */}
        <Suspense fallback={<SectionLoading height="400px" />}>
          <LazyProblemSection onCTAClick={scrollToBenefits} />
        </Suspense>

        <Suspense fallback={<SectionLoading height="500px" />}>
          <LazySolutionSection onCTAClick={scrollToBenefits} />
        </Suspense>

        <Suspense fallback={<SectionLoading height="400px" />}>
          <LazyPromiseSection onCTAClick={scrollToBenefits} />
        </Suspense>

        <Suspense fallback={<SectionLoading height="300px" />}>
          <LazyTargetAudienceSection onCTAClick={scrollToBenefits} />
        </Suspense>

        <Suspense fallback={<SectionLoading height="600px" />}>
          <LazyBenefitsSection onCTAClick={scrollToBenefits} onFirstButtonClick={handleCTAClick} />
        </Suspense>

        <Suspense fallback={<SectionLoading height="400px" />}>
          <LazyTestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionLoading height="300px" />}>
          <LazyGuaranteeSection onCTAClick={handleCTAClick} />
        </Suspense>

        <Suspense fallback={<SectionLoading height="500px" />}>
          <LazyCreatorsSection onCTAClick={handleCTAClick} />
        </Suspense>

        <Suspense fallback={<SectionLoading height="400px" />}>
          <LazyEventDetailsSection onCTAClick={handleCTAClick} />
        </Suspense>

        <Suspense fallback={<SectionLoading height="300px" />}>
          <LazyFAQSection />
        </Suspense>

        {/* Critical Final CTA */}
        <CriticalCTA onCTAClick={handleCTAClick} />

        {/* Footer */}
        <Footer />

        {/* Lazy Modal - only loads when needed */}
        {isModalOpen && (
          <Suspense fallback={
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-card p-6 rounded-lg max-w-md w-full animate-pulse">
                <div className="h-6 bg-muted rounded mb-4"></div>
                <div className="space-y-4">
                  {Array.from({length: 4}).map((_, i) => (
                    <div key={i} className="h-10 bg-muted rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          }>
            <LazyLeadFormModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default EliteVendasPageV2;