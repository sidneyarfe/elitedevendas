import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import { Check } from 'lucide-react';

interface BenefitsSectionProps {
  onCTAClick: () => void;
}

const BenefitsSection = memo(({ onCTAClick }: BenefitsSectionProps) => {
  const benefits = [
    'Vender ao vivo com a nossa ajuda.',
    'Aprender a estratégia que gerou R$10 MILHÕES em vendas usando apenas o whatsapp.',
    'Entender como usar seus contatos esquecidos no WhatsApp para gerar vendas AGORA.',
    'Como extrair +5000 contatos de potenciais clientes em 30s usando google, instagram ou linkedin.',
    'As mensagens certas pra fazer qualquer cliente comprar de primeira — mesmo sem conhecer sua empresa.',
    'Como replicar esse processo todos os dias (ou delegar para sua equipe rápido) — e dobrar o faturamento do seu negócio nos próximos 30 dias.'
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gradient">
          🧠 NESTE WORKSHOP, VOCÊ VAI:
        </h2>

        <div className="grid gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-workshop rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-black" strokeWidth={3} />
              </div>
              <p className="text-lg md:text-xl text-foreground font-medium">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WorkshopButton onClick={onCTAClick} className="max-w-xl mx-auto">
            QUERO APRENDER TUDO ISSO
          </WorkshopButton>
        </div>
      </div>
    </section>
  );
});

BenefitsSection.displayName = 'BenefitsSection';

export default BenefitsSection;
