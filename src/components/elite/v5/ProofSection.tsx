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
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gradient">
          💬 PROVAS REAIS DE BELÉM
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Print 1 - Dr. Rafael */}
          <div className="bg-background rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300">
            <img 
              src={drRafael} 
              alt="Resultado Dr. Rafael - R$512mil para R$1.009.567,89" 
              className="w-full rounded-xl mb-4"
              loading="lazy"
            />
            <p className="text-lg font-bold text-foreground mb-2">
              De R$512 mil para R$1.009.567,89 em 2 meses
            </p>
            <p className="text-muted-foreground">
              Dr. Rafael, clínica no Umarizal, aplicou a estratégia de WhatsApp e dobrou o faturamento
            </p>
          </div>

          {/* Print 2 - Placeholder para outros resultados */}
          <div className="bg-background rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="aspect-video bg-muted rounded-xl mb-4 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-4xl md:text-6xl font-black text-gradient mb-4">+300%</div>
                <p className="text-lg font-bold">Crescimento Médio</p>
              </div>
            </div>
            <p className="text-lg font-bold text-foreground mb-2">
              Empresários de Belém dobrando faturamento
            </p>
            <p className="text-muted-foreground">
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
