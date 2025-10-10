import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import { Shield } from 'lucide-react';

interface GuaranteeSectionProps {
  onCTAClick: () => void;
}

const GuaranteeSection = memo(({ onCTAClick }: GuaranteeSectionProps) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-foreground">
          🔒 Garantia incondicional
        </h2>

        <div className="bg-gradient-workshop-subtle p-8 md:p-12 rounded-2xl border-2 border-workshop-gold shadow-glow">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-black" />
          </div>

          <p className="text-2xl md:text-4xl font-black mb-6 text-foreground leading-tight text-center">
            Ou você fecha <span className="text-gradient">10 vendas</span> em até{' '}
            <span className="text-gradient">7 dias</span> após o workshop
          </p>
          
          <p className="text-xl md:text-3xl font-bold mb-8 text-foreground text-center">
            — ou devolvemos <span className="text-gradient">100% do seu dinheiro</span>.
          </p>
          
          <div className="bg-card rounded-xl p-6 md:p-8 mb-8 border border-muted/10">
            <div className="space-y-3 text-left max-w-md mx-auto">
              <p className="text-base md:text-lg text-foreground flex items-center gap-3">
                <span className="text-workshop-gold text-2xl">✓</span>
                <span className="font-medium">Sem perguntas</span>
              </p>
              <p className="text-base md:text-lg text-foreground flex items-center gap-3">
                <span className="text-workshop-gold text-2xl">✓</span>
                <span className="font-medium">Sem letras miúdas</span>
              </p>
              <p className="text-base md:text-lg text-foreground flex items-center gap-3">
                <span className="text-workshop-gold text-2xl">✓</span>
                <span className="font-medium">Só mandar mensagem</span>
              </p>
              <p className="text-base md:text-lg text-foreground flex items-center gap-3">
                <span className="text-workshop-gold text-2xl">✓</span>
                <span className="font-black">Risco zero</span>
              </p>
            </div>
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
