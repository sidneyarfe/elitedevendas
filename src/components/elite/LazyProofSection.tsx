import LazyYouTube from "../LazyYouTube";
import WorkshopButton from "../WorkshopButton";

interface LazyProofSectionProps {
  onCTAClick: () => void;
}

const LazyProofSection = ({ onCTAClick }: LazyProofSectionProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-workshop-subtle">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-black mb-12 text-gradient leading-tight">
          Esse dono de uma clínica no Umarizal foi de R$512mil a R$1.009.567,89 em apenas 2 meses com a Estratégia de Whatsapp.
        </h2>

        <div className="mb-8 max-w-3xl mx-auto">
          <LazyYouTube 
            videoId="B0cORHhpoQE" 
            title="Depoimento Dr. Rafael - Resultado Real" 
            className="rounded-2xl shadow-elegant" 
          />
        </div>

        <WorkshopButton onClick={onCTAClick} className="max-w-md mx-auto">
          QUERO TER ESSE RESULTADO
        </WorkshopButton>
      </div>
    </section>
  );
};

export default LazyProofSection;
