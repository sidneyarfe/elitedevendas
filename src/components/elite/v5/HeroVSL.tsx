import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import LazyYouTube from '@/components/LazyYouTube';

interface HeroVSLProps {
  onCTAClick: () => void;
}

const HeroVSL = memo(({ onCTAClick }: HeroVSLProps) => {
  return (
    <section className="relative min-h-[90vh] bg-background py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
            Como esse <span className="text-gradient">EMPRESÁRIO DE BELÉM</span> vendeu{' '}
            <span className="text-gradient">R$1.009.567,89</span> em 2 meses mandando{' '}
            <span className="text-gradient">MENSAGENS DE WHATSAPP</span>.
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
            Usando apenas o whatsapp, ele dobrou o faturamento. Veja o vídeo e entenda como aplicar isso no seu negócio também.
          </p>
        </div>

        {/* VSL Video */}
        <div className="mb-8 md:mb-12">
          <LazyYouTube 
            videoId="YWD6LsS39iQ" 
            title="Como vender R$1 milhão pelo WhatsApp - VSL Elite de Vendas" 
            className="rounded-2xl shadow-2xl"
          />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <WorkshopButton 
            onClick={onCTAClick}
            className="max-w-xl mx-auto text-base md:text-lg"
          >
            👉 QUERO APLICAR ISSO NO MEU NEGÓCIO AGORA
          </WorkshopButton>
          
          <p className="text-sm text-muted-foreground mt-4">
            ✅ Vagas limitadas • 🔒 Garantia incondicional
          </p>
        </div>
      </div>
    </section>
  );
});

HeroVSL.displayName = 'HeroVSL';

export default HeroVSL;
