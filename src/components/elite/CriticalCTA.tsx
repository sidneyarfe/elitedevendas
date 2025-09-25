interface CriticalCTAProps {
  onCTAClick: () => void;
}

const CriticalCTA = ({ onCTAClick }: CriticalCTAProps) => {
  return (
    <section className="bg-gradient-workshop py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6 text-black">
          ⚠️ ÚLTIMAS VAGAS
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-black mb-4">VAGAS RESTANTES</h3>
            <div className="text-6xl font-black text-red-600 mb-2">21</div>
            <p className="text-lg text-gray-700">de 30 vagas disponíveis</p>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700 font-medium">
              ⚠️ Resta apenas 1 vaga para acabar o bônus.
            </p>
          </div>
        </div>

        <button
          onClick={onCTAClick}
          className="bg-black text-white font-bold text-xl py-6 px-12 rounded-xl shadow-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
        >
          Quero uma das últimas vagas
        </button>

        <p className="text-black font-medium text-lg mt-6">
          Pare de depender da sorte. Construa um processo de vendas que funciona todo dia.
        </p>
      </div>
    </section>
  );
};

export default CriticalCTA;