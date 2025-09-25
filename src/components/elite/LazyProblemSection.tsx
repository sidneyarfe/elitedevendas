import drRafael from "@/assets/dr-rafael.png";
interface LazyProblemSectionProps {
  onCTAClick: () => void;
}
const LazyProblemSection = ({
  onCTAClick
}: LazyProblemSectionProps) => {
  return <>
      {/* SEÇÃO: DIAGNÓSTICO */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 text-gradient leading-tight mx-0 my-[50px]">
            Você já contratou agência, investiu em tráfego, postou no Instagram, contratou influencer...
          </h2>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">E o que conseguiu?</h3>
          
          <div className="space-y-3 md:space-y-4 text-base md:text-xl lg:text-2xl font-medium text-muted-foreground">
            <div className="flex items-start md:items-center gap-3 md:gap-4 justify-start md:justify-center text-left md:text-center">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2 md:mt-0"></div>
              <p className="flex-1">Um ou dois agendamentos que não vieram</p>
            </div>
            <div className="flex items-start md:items-center gap-3 md:gap-4 justify-start md:justify-center text-left md:text-center">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2 md:mt-0"></div>
              <p className="flex-1">Orçamento pedido e ignorado</p>
            </div>
            <div className="flex items-start md:items-center gap-3 md:gap-4 justify-start md:justify-center text-left md:text-center">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2 md:mt-0"></div>
              <p className="flex-1">Clientes aparecendo só por indicação</p>
            </div>
            <div className="flex items-start md:items-center gap-3 md:gap-4 justify-start md:justify-center text-left md:text-center">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2 md:mt-0"></div>
              <p className="flex-1">Mais prejuízo do que retorno</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="md:text-5xl font-black mb-12 text-gradient text-3xl">
            O problema não é você. Não é seu produto. Não é o mercado.
          </h2>
          
          <p className="md:text-3xl font-bold mb-8 text-xl">
            O problema é que você quis COMPLICAR o que é simples: <span className="text-gradient">vender.</span>
          </p>
          
          <p className="md:text-2xl mb-8 text-lg">
            E pra vender, basta mandar a mensagem certa pro cliente.
          </p>
          
          <div className="bg-gradient-workshop-subtle p-6 md:p-8 rounded-2xl border border-workshop-gold/20 mb-8 max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl font-medium mb-4 italic text-muted-foreground">
              "Antes só vinha cliente por indicação e raramente pelo marketing. Mas quando começamos a disparar essas Mensagens de Whatsapp, nosso faturamento foi de R$1.000.000 pra R$2.000.000/mês."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <img src={drRafael} alt="Dr. Rafael Viera" className="w-12 h-12 rounded-full object-cover border-2 border-workshop-gold" width="48" height="48" loading="lazy" decoding="async" />
              <p className="text-sm md:text-base text-workshop-gold font-medium">– Dr. Rafael Viera, Dono de Consultório Odontológico | Belém-PA</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button onClick={onCTAClick} className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105">QUERO TER O MESMO RESULTADO</button>
          </div>
        </div>
      </section>
    </>;
};
export default LazyProblemSection;