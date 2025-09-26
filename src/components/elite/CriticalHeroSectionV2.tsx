import rodrigoAnaMobile from "@/assets/rodrigo-ana-mobile.webp";
import rodrigoAnaDesktop from "@/assets/rodrigo-ana-desktop.png";

interface CriticalHeroSectionV2Props {
  onCTAClick: () => void;
}

const CriticalHeroSectionV2 = ({
  onCTAClick
}: CriticalHeroSectionV2Props) => {
  return (
    <>
      {/* Faixa Exclusiva */}
      <div className="bg-gradient-workshop text-black py-3 text-center">
        <p className="font-bold text-lg">ATENÇÃO EMPRESÁRIOS de BELÉM-PA</p>
      </div>

      {/* Hero Section */}
      <div className="relative hero-container">
        {/* Images Section */}
        <div className="w-full">
          {/* Mobile Image - critical resource */}
          <picture>
            <source media="(max-width: 768px)" srcSet={rodrigoAnaMobile} type="image/webp" />
            <source media="(min-width: 769px)" srcSet={rodrigoAnaDesktop} type="image/png" />
            <img src={rodrigoAnaMobile} alt="Rodrigo e Ana - Mentores do Workshop Elite de Vendas" className="w-full object-cover gpu-accelerated" loading="eager" decoding="async" fetchPriority="high" width="800" height="600" />
          </picture>
          
          {/* Text Section - Mobile overlapping, Desktop below image */}
          <div className="absolute inset-0 flex items-end justify-center py-0 my-0 md:relative md:items-start">
            <div className="w-full text-center text-white pb-8 md:pb-16 md:pt-8 max-w-7xl mx-auto px-0 py-0 md:bg-background md:text-foreground">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                <span className="text-gradient">EMPRESÁRIO DE BELÉM:</span>{" "}
                Em 2 dias, vamos <span className="text-gradient">DOBRAR suas vendas AO VIVO</span> — sem gastar R$1.
              </h1>
              
              <div className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 max-w-5xl mx-auto font-medium leading-relaxed">
                <p className="mb-4 md:mb-6 px-[30px]">E você nunca mais vai depender de tráfego pago/anúncios, agências ou influencers. No <span className="text-gradient font-bold">Workshop Elite de Vendas</span>, vamos instalar o Processo Comercial que gerou <span className="text-gradient font-bold">+R$10 MILHÕES</span> em faturamento para nossos clientes na sua empresa.</p>
                
                <p className="mb-4 md:mb-6 px-[30px]">Usando apenas o que você já tem:<br />
                📱 um celular, 📋 sua lista de contatos e 💬 uma mensagem de WhatsApp.</p>
                
                {/* Cards de informações do evento */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-3 md:px-6 py-2 md:py-3 rounded-xl shadow-glow/30 hover:bg-workshop-gold/30 transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <svg className="w-4 h-4 md:w-6 md:h-6 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-semibold text-workshop-gold text-sm md:text-base">📍 Workshop Elite de Vendas — Belém/PA</span>
                    </div>
                  </div>
                  
                  <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-3 md:px-6 py-2 md:py-3 rounded-xl shadow-glow/30 hover:bg-workshop-gold/30 transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <svg className="w-4 h-4 md:w-6 md:h-6 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-workshop-gold text-sm md:text-base">🗓 15 e 16 de outubro | 9h às 13h</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button onClick={onCTAClick} className="animate-pulse-glow md:text-lg lg:text-xl md:py-4 lg:py-6 md:px-8 lg:px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105 mx-[30px] text-xl px-[10px] py-[10px]">GARANTA SUA VAGA AGORA</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CriticalHeroSectionV2;