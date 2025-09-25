import { Users } from "lucide-react";

interface LazyTargetAudienceSectionProps {
  onCTAClick: () => void;
}

const LazyTargetAudienceSection = ({ onCTAClick }: LazyTargetAudienceSectionProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-workshop-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-workshop-gold/5 via-transparent to-workshop-gold/5"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-workshop-gold rounded-full mb-6">
            <Users className="w-8 h-8 text-black" />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black mb-6 text-gradient">
            Para Quem É Esse Workshop?
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforme seu negócio com estratégias comprovadas de venda via WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "💼", text: "Prestadores de serviço" },
            { icon: "🏠", text: "Corretores de imóveis" }, 
            { icon: "📊", text: "Consultores e assessores" },
            { icon: "👨‍⚕️", text: "Profissionais liberais (psicólogos, engenheiros, dentistas)" },
            { icon: "🏥", text: "Donos de clínica (estética, odontologia, fisioterapia)" },
            { icon: "⚖️", text: "Escritórios de advocacia, contabilidade, arquitetura" },
            { icon: "🏪", text: "Donos de loja física ou serviço local" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-white/10 backdrop-blur-sm border border-workshop-gold/20 p-6 rounded-xl hover:bg-white/20 hover:border-workshop-gold/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-medium leading-relaxed group-hover:text-workshop-gold transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-workshop-gold/30 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-bold mb-4 text-workshop-gold">
              ✨ Método exclusivo para empresários locais
            </p>
            <p className="text-muted-foreground">
              Desenvolvido especialmente para negócios que atendem clientes presencialmente em Belém e região
            </p>
          </div>

          <button 
            onClick={onCTAClick} 
            className="text-lg md:text-xl py-6 px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105"
          >
            GARANTIR MINHA VAGA
          </button>
        </div>
      </div>
    </section>
  );
};

export default LazyTargetAudienceSection;