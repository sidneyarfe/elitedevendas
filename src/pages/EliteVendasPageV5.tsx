import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroVSL from '@/components/elite/v5/HeroVSL';
import LazySection from '@/components/LazySection';
import LazyEliteVendasV4FormModal from '@/components/elite/LazyEliteVendasV4FormModal';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const EliteVendasPageV5 = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleCTAClick = () => {
    setIsFormModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowFloatingCTA(window.scrollY > heroHeight);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Workshop Elite de Vendas - Dobre Seu Faturamento com WhatsApp</title>
        <meta name="description" content="Aprenda como empresários de Belém dobraram o faturamento vendendo pelo WhatsApp. Workshop presencial com garantia de resultados." />
        <meta name="keywords" content="vendas whatsapp, prospecção, vendas belém, workshop vendas, dobrar faturamento" />
        <link rel="canonical" href="https://elitedevendas.com.br/elitedevendas-v5" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Workshop Elite de Vendas - Dobre Seu Faturamento com WhatsApp" />
        <meta property="og:description" content="Aprenda como empresários de Belém dobraram o faturamento vendendo pelo WhatsApp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elitedevendas.com.br/elitedevendas-v5" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section - Critical, loads immediately */}
        <HeroVSL onCTAClick={handleCTAClick} />

        {/* All other sections lazy loaded */}
        <LazySection
          componentLoader={() => import('@/components/elite/v5/ProofSection')}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="200px"
          skeletonHeight="h-[600px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/PromiseSection')}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[500px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/BenefitsSection')}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[600px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/EventDetailsSection')}
          rootMargin="300px"
          skeletonHeight="h-[400px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/OfferSection')}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[700px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/GuaranteeSection')}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[400px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/UrgencySection')}
          componentProps={{ onCTAClick: handleCTAClick }}
          rootMargin="300px"
          skeletonHeight="h-[400px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/TestimonialsSection')}
          rootMargin="300px"
          skeletonHeight="h-[500px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/MentorsSection')}
          rootMargin="300px"
          skeletonHeight="h-[800px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/v5/FAQSection')}
          rootMargin="300px"
          skeletonHeight="h-[600px]"
        />

        <LazySection
          componentLoader={() => import('@/components/elite/Footer')}
          rootMargin="300px"
          skeletonHeight="h-[200px]"
        />

        {/* Floating CTA for mobile - shows after hero */}
        {showFloatingCTA && (
          <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gradient-workshop p-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
            <Button
              onClick={handleCTAClick}
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 text-sm rounded-xl shadow-glow transition-all"
            >
              🎯 GARANTIR MINHA VAGA AGORA
            </Button>
          </div>
        )}

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 md:bottom-8 right-4 z-40 bg-workshop-gold text-black p-3 rounded-full shadow-glow hover:scale-110 transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}

        {/* Form Modal */}
        <LazyEliteVendasV4FormModal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} />
      </main>
    </>
  );
};

export default EliteVendasPageV5;
