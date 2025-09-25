import { Shield } from "lucide-react";

interface LazyGuaranteeSectionProps {
  onCTAClick: () => void;
}

const LazyGuaranteeSection = ({ onCTAClick }: LazyGuaranteeSectionProps) => {
  return (
    <section className="py-12 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20">
          <div className="w-20 h-20 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-black" />
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