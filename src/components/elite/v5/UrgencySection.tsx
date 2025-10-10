import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import VagasCounter from '@/components/VagasCounter';

interface UrgencySectionProps {
  onCTAClick: () => void;
}

const UrgencySection = memo(({ onCTAClick }: UrgencySectionProps) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-workshop">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-black">
          ⏳ ÚLTIMAS VAGAS
        </h2>

        <div className="mb-8">
          <VagasCounter />
        </div>

        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 mb-8 text-center">
          <p className="text-xl md:text-2xl font-black text-black">
            🎁 ÚLTIMA VAGA COM BÔNUS LIBERADO
          </p>
        </div>

        <div className="text-center">
          <WorkshopButton 
            onClick={onCTAClick}
            className="max-w-xl mx-auto bg-black hover:bg-gray-800 border-0"
            variant="default"
          >
            APROVEITAR A ÚLTIMA VAGA COM BÔNUS
          </WorkshopButton>
          
          <p className="text-black font-bold text-lg mt-6">
            Pare de depender da sorte. Construa um processo de vendas que funciona todo dia.
          </p>
        </div>
      </div>
    </section>
  );
});

UrgencySection.displayName = 'UrgencySection';

export default UrgencySection;
