import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import { Shield } from 'lucide-react';

interface GuaranteeSectionProps {
  onCTAClick: () => void;
}

const GuaranteeSection = memo(({ onCTAClick }: GuaranteeSectionProps) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-gradient">
          🔒 GARANTIA INCONDICIONAL
        </h2>

        <div className="bg-gradient-workshop-subtle p-8 md:p-12 rounded-2xl border-2 border-workshop-gold shadow-glow mb-8">
          <div className="w-20 h-20 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-black" />
          </div>

          <p className="text-2xl md:text-4xl font-black mb-6 text-foreground leading-tight">
            Ou você fecha <span className="text-gradient">10 vendas</span> em até{' '}
            <span className="text-gradient">7 dias</span> após o workshop
          </p>
          
          <p className="text-xl md:text-2xl font-bold mb-8 text-foreground">
            — ou devolvemos <span className="text-gradient">100% do seu dinheiro</span>.
          </p>
          
          <div className="bg-background rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground">
              ✅ Sem perguntas<br />
              ✅ Sem letras miúdas<br />
              ✅ Só mandar mensagem<br />
              ✅ <span className="text-foreground font-bold">Risco zero</span>
            </p>
          </div>

          <WorkshopButton onClick={onCTAClick} className="max-w-xl mx-auto">
            QUERO MINHA VAGA COM A GARANTIA
          </WorkshopButton>
        </div>
      </div>
    </section>
  );
});

GuaranteeSection.displayName = 'GuaranteeSection';

export default GuaranteeSection;
