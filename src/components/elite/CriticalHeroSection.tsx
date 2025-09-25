import rodrigoAnaMobile from "@/assets/rodrigo-ana-mobile.png";
import rodrigoAnaDesktop from "@/assets/rodrigo-ana-desktop.png";
interface CriticalHeroSectionProps {
  onCTAClick: () => void;
}
const CriticalHeroSection = ({
  onCTAClick
}: CriticalHeroSectionProps) => {
  return <>
      {/* Faixa Exclusiva */}
      <div className="bg-gradient-workshop text-black py-3 text-center">
        <p className="font-bold text-lg">Para EMPRESÁRIOS de BELÉM-PA</p>
      </div>

      {/* Hero Section */}
      <div className="relative hero-container">
        {/* Images Section */}
        <div className="w-full">
          {/* Mobile Image - critical resource */}
          <picture>
            <source media="(max-width: 768px)" srcSet={rodrigoAnaMobile} type="image/png" />
            <source media="(min-width: 769px)" srcSet={rodrigoAnaDesktop} type="image/png" />
            <img src={rodrigoAnaMobile} alt="Rodrigo e Ana - Mentores do Workshop Elite de Vendas" className="w-full object-cover gpu-accelerated" loading="eager" decoding="async" fetchPriority="high" width="800" height="600" />
          </picture>
          
          {/* Text Section - Mobile overlapping, Desktop below image */}
          <div className="absolute inset-0 flex items-end justify-center py-0 my-0 md:relative md:items-start">
            <div className="w-full text-center text-white pb-8 md:pb-16 md:pt-8 max-w-7xl mx-auto px-0 py-0 md:bg-background md:text-foreground">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                Você Já Gastou com Agências, Tráfego Pago, Conteúdo, Influencers… e{" "}
                <span className="text-gradient">Não Aumentou Suas Vendas?</span>
              </h1>
              
              <div className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 max-w-5xl mx-auto font-medium leading-relaxed">
                <p className="mb-4 md:mb-6 px-[30px]">A verdade é que você nunca precisou de nada disso.</p>
                <p className="mb-4 md:mb-6">Com apenas</p>
                
                {/* Caixas semi-transparentes douradas - otimizadas */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-3 md:px-6 py-2 md:py-3 rounded-xl shadow-glow/30 hover:bg-workshop-gold/30 transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <svg className="w-4 h-4 md:w-6 md:h-6 text-workshop-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      <span className="font-semibold text-workshop-gold text-sm md:text-base">um celular</span>
                    </div>
                  </div>
                  
                  <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-3 md:px-6 py-2 md:py-3 rounded-xl shadow-glow/30 hover:bg-workshop-gold/30 transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <svg className="w-4 h-4 md:w-6 md:h-6 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      <span className="font-semibold text-workshop-gold text-sm md:text-base">uma lista de clientes</span>
                    </div>
                  </div>
                  
                  <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-3 md:px-6 py-2 md:py-3 rounded-xl shadow-glow/30 hover:bg-workshop-gold/30 transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <svg className="w-4 h-4 md:w-6 md:h-6 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="font-semibold text-workshop-gold text-sm md:text-base">e uma mensagem no WhatsApp</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg md:text-2xl lg:text-3xl font-bold px-[30px]">
                  você vai <span className="text-gradient">DOBRAR suas vendas em 7 dias</span> — sem gastar mais R$1.
                </p>
              </div>
              
              <div className="flex justify-center">
                <button onClick={onCTAClick} className="animate-pulse-glow md:text-lg lg:text-xl py-3 md:py-4 lg:py-6 md:px-8 lg:px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105 px-0 mx-[30px] text-xl">QUERO APLICAR NO MEU NEGÓCIO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default CriticalHeroSection;