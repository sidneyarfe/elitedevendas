interface LazySolutionSectionProps {
  onCTAClick: () => void;
}
const LazySolutionSection = ({
  onCTAClick
}: LazySolutionSectionProps) => {
  return <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="md:text-5xl font-black mb-12 text-gradient text-2xl">
          Empresários de Belém estão enviando Simples Mensagens de Whatsapp e fechando vendas todos os dias.
        </h2>
        
        <h3 className="font-bold mb-8 text-lg">Sem depender de:</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-xl">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-xl">✕</span>
            </div>
            <p className="text-sm font-medium text-red-700 dark:text-red-300">Tráfego pago</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-xl">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-xl">✕</span>
            </div>
            <p className="text-sm font-medium text-red-700 dark:text-red-300">Agência</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-xl">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-xl">✕</span>
            </div>
            <p className="text-sm font-medium text-red-700 dark:text-red-300">Conteúdo no Instagram</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-xl">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-xl">✕</span>
            </div>
            <p className="text-sm font-medium text-red-700 dark:text-red-300">Publi de influencer</p>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-bold mb-8">E o melhor: usando apenas o que você já tem.</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-4 rounded-xl">
              <span className="font-semibold text-workshop-gold text-lg">um celular</span>
            </div>
            <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-4 rounded-xl">
              <span className="font-semibold text-workshop-gold text-lg">uma lista de clientes</span>
            </div>
            <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-4 rounded-xl">
              <span className="font-semibold text-workshop-gold text-lg">e uma mensagem no WhatsApp</span>
            </div>
          </div>
        </div>

        <p className="text-xl mb-8">
          Você vai entender tudo isso em detalhes no Workshop ELITE DE VENDAS.
        </p>

        <div className="flex justify-center mb-12">
          <button onClick={onCTAClick} className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105">QUERO APLICAR ESSE MÉTODO</button>
        </div>
      </div>
    </section>;
};
export default LazySolutionSection;