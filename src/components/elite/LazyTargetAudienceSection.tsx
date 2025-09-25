interface LazyTargetAudienceSectionProps {
  onCTAClick: () => void;
}

const LazyTargetAudienceSection = ({ onCTAClick }: LazyTargetAudienceSectionProps) => {
  return (
    <section className="py-12 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-card p-8 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">Para Quem É Esse Workshop?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Prestadores de serviço",
              "Corretores de imóveis", 
              "Consultores e assessores",
              "Profissionais liberais (psicólogos, engenheiros, dentistas)",
              "Donos de clínica (estética, odontologia, fisioterapia)",
              "Escritórios de advocacia, contabilidade, arquitetura",
              "Donos de loja física ou serviço local"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                <div className="w-2 h-2 bg-workshop-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={onCTAClick} 
              className="text-lg py-4 px-8 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105"
            >
              GARANTIR MINHA VAGA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LazyTargetAudienceSection;