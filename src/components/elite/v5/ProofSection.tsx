import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import drRafael from '@/assets/dr-rafael.webp';

interface ProofSectionProps {
  onCTAClick: () => void;
}

const ProofSection = memo(({ onCTAClick }: ProofSectionProps) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-foreground">
          Resultados reais de quem aplicou em Belém:
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Print 1 - Dr. Rafael */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-muted/10 hover:border-workshop-gold/30">
            <img 
              src={drRafael} 
              alt="Resultado Dr. Rafael - R$512mil para R$1.009.567,89" 
              className="w-full rounded-xl mb-6 shadow-md"
              loading="lazy"
            />
            <p className="text-xl md:text-2xl font-black text-foreground mb-3">
              De R$512 mil para R$1.009.567,89 em 2 meses
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Dr. Rafael, clínica no Umarizal, aplicou a estratégia de WhatsApp e dobrou o faturamento
            </p>
          </div>

          {/* Print 2 - Placeholder para outros resultados */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-muted/10 hover:border-workshop-gold/30">
            <div className="aspect-video bg-gradient-workshop-subtle rounded-xl mb-6 flex items-center justify-center border-2 border-workshop-gold/20">
              <div className="text-center p-6">
                <div className="text-5xl md:text-7xl font-black text-gradient mb-4">+300%</div>
                <p className="text-xl md:text-2xl font-black text-foreground">Crescimento Médio</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-black text-foreground mb-3">
              Empresários de Belém dobrando faturamento
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Com a mesma estratégia de prospecção pelo WhatsApp
            </p>
          </div>
        </div>

        <div className="text-center">
          <WorkshopButton onClick={onCTAClick} className="max-w-xl mx-auto">
            👉 QUERO DESTRAVAR MINHAS VENDAS TAMBÉM
          </WorkshopButton>
        </div>
      </div>
    </section>
  );
});

ProofSection.displayName = 'ProofSection';

export default ProofSection;
