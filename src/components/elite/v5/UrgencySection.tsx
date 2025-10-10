import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import VagasCounter from '@/components/VagasCounter';

interface UrgencySectionProps {
  onCTAClick: () => void;
}

const UrgencySection = memo(({ onCTAClick }: UrgencySectionProps) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-foreground">
          ⏳ Últimas vagas
        </h2>

        <div className="mb-10">
          <VagasCounter />
        </div>

        <div className="bg-gradient-workshop backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 text-center border-2 border-workshop-gold/50 shadow-glow">
          <p className="text-xl md:text-3xl font-black text-black">
            🎁 ÚLTIMA VAGA COM BÔNUS LIBERADO
          </p>
        </div>

        <div className="text-center">
          <WorkshopButton 
            onClick={onCTAClick}
            className="max-w-xl mx-auto mb-6"
          >
            APROVEITAR A ÚLTIMA VAGA COM BÔNUS
          </WorkshopButton>
          
          <p className="text-foreground font-bold text-base md:text-lg max-w-2xl mx-auto">
            Pare de depender da sorte. Construa um processo de vendas que funciona todo dia.
          </p>
        </div>
      </div>
    </section>
  );
});

UrgencySection.displayName = 'UrgencySection';

export default UrgencySection;
