interface LazyGuaranteeSectionProps {
  onCTAClick: () => void;
}

const LazyGuaranteeSection = ({ onCTAClick }: LazyGuaranteeSectionProps) => {
  return (
    <section className="py-12 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20">
          <div className="w-20 h-20 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H15V9H19V21Z"/>
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gradient">
            Garantia Incondicional
          </h2>
          
          <p className="text-xl md:text-2xl font-bold mb-6">
            Ou você fecha 10 vendas em 7 dias com o que aplicou — ou recebe 100% do seu dinheiro de volta.
          </p>
          
          <p className="text-lg mb-8 text-muted-foreground">
            Sem perguntas. Sem letras miúdas. Só mandar mensagem. Risco zero.
          </p>
          
          <button
            onClick={onCTAClick}
            className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105"
          >
            Quero minha vaga com garantia
          </button>
        </div>
      </div>
    </section>
  );
};

export default LazyGuaranteeSection;