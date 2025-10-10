import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import { Check, Gift } from 'lucide-react';

interface OfferSectionProps {
  onCTAClick: () => void;
}

const OfferSection = memo(({ onCTAClick }: OfferSectionProps) => {
  const included = [
    'Acesso ao Workshop Presencial (2 dias)',
    'Método completo de Prospecção e Vendas',
    'Diagnóstico comercial com nossa equipe',
    'Grupo VIP de Networking com empresários locais'
  ];

  const bonuses = [
    '20 Materiais e Ferramentas de Vendas, Marketing e Gestão',
    'CRM Simples para WhatsApp',
    'Roteiros de prospecção e templates prontos'
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-workshop-subtle">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gradient">
          💰 OFERTA E BÔNUS
        </h2>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card mb-8">
          {/* What's Included */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-foreground">
              Ao garantir sua vaga, você recebe:
            </h3>
            
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bonuses */}
          <div className="bg-gradient-workshop p-8 rounded-xl mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-black" />
              <h3 className="text-2xl md:text-3xl font-black text-black">
                🎁 BÔNUS EXCLUSIVOS
              </h3>
            </div>
            
            <p className="text-lg font-bold text-black mb-6">
              Para os 10 primeiros inscritos:
            </p>

            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" strokeWidth={3} />
                  <p className="text-lg font-bold text-black">{bonus}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-black/20 rounded-lg">
              <p className="text-red-800 font-black text-lg text-center">
                ⚠️ ÚLTIMA VAGA COM BÔNUS DISPONÍVEL
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="inline-block bg-background px-8 py-6 rounded-xl shadow-card">
              <p className="text-sm text-muted-foreground mb-2">Investimento</p>
              <p className="text-4xl md:text-5xl font-black text-gradient mb-2">R$ 197</p>
              <p className="text-lg text-muted-foreground">ou 12x de R$ 20,37</p>
            </div>
          </div>

          <WorkshopButton onClick={onCTAClick} className="w-full max-w-2xl mx-auto">
            💸 QUERO GARANTIR MINHA VAGA AGORA
          </WorkshopButton>
        </div>
      </div>
    </section>
  );
});

OfferSection.displayName = 'OfferSection';

export default OfferSection;
