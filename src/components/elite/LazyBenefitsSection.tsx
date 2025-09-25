import workshopEliteLogo from "@/assets/workshop-elite-logo.png";

interface LazyBenefitsSectionProps {
  onCTAClick: () => void;
}

const LazyBenefitsSection = ({ onCTAClick }: LazyBenefitsSectionProps) => {
  return (
    <section className="py-12 px-4 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src={workshopEliteLogo}
            alt="Workshop Elite de Vendas Logo" 
            className="h-16 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-12 text-gradient">
          No Workshop Elite de Vendas, você vai descobrir:
        </h2>

        <div className="space-y-8 mb-12">
          {[
            {
              number: "1",
              title: "Como vender todo dia, sem precisar de tráfego pago, agências, conteúdo ou influencers."
            },
            {
              number: "2", 
              title: "A estratégia para fechar R$10.000 em vendas nos próximos 7 dias usando contatos antigos de WhatsApp."
            },
            {
              number: "3",
              title: "Como conseguir +5.000 contatos de potenciais clientes em 30s usando Google Maps, redes sociais e LinkedIn."
            },
            {
              number: "4",
              title: "Como abordar, levar para reunião e vender para esses potenciais clientes - mesmo que eles não te conheçam."
            },
            {
              number: "5",
              title: "O passo a passo para reativar o cliente sumido e fazer ele comprar/recomprar em até 24h."
            },
            {
              number: "6",
              title: "Como manter sua agenda cheia de reuniões de venda com 30 minutos/dia de prospecção."
            }
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 text-left max-w-4xl mx-auto">
              <div className="w-8 h-8 bg-workshop-gold text-black font-bold rounded-full flex items-center justify-center flex-shrink-0">
                {benefit.number}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">{benefit.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <button
            onClick={onCTAClick}
            className="text-lg py-4 px-8 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105"
          >
            Quero aprender isso
          </button>
        </div>

        {/* Ao garantir sua vaga, você recebe */}
        <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">Ao garantir sua vaga, você recebe:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-workshop-gold rounded-full"></div>
              <span className="text-lg font-medium">Acesso ao Workshop Presencial Ao Vivo (2 dias)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-workshop-gold rounded-full"></div>
              <span className="text-lg font-medium">Método completo de Prospecção e Vendas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-workshop-gold rounded-full"></div>
              <span className="text-lg font-medium">Diagnóstico individual com nossos mentores</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-workshop-gold rounded-full"></div>
              <span className="text-lg font-medium">Grupo VIP de Networking com empresários participantes</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
            <h4 className="text-xl font-bold mb-4 text-workshop-gold">🎁 BÔNUS EXCLUSIVOS</h4>
            <p className="text-sm text-gray-300 mb-4">(PARA OS 10 PRIMEIROS)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-workshop-gold rounded-full"></div>
                <span>20 Materiais e Ferramentas de Vendas, Marketing e Gestão</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-workshop-gold rounded-full"></div>
                <span>CRM Simples para WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-workshop-gold rounded-full"></div>
                <span>Roteiros testados de prospecção</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-workshop-gold rounded-full"></div>
                <span>Templates prontos de vendas e ativação</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-3xl md:text-4xl font-black text-workshop-gold mb-2">12x de R$20,37</div>
            <div className="text-xl font-bold">Ou R$197 à vista.</div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onCTAClick}
              className="text-xl py-6 px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105"
            >
              Quero tudo isso pra mim
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LazyBenefitsSection;