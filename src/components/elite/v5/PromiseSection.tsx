import { memo } from 'react';
import WorkshopButton from '@/components/WorkshopButton';
import workshopLogo from '@/assets/workshop-elite-logo.png';
import { X } from 'lucide-react';

interface PromiseSectionProps {
  onCTAClick: () => void;
}

const PromiseSection = memo(({ onCTAClick }: PromiseSectionProps) => {
  const noMoreDependencies = [
    'Indicações',
    'Gastar com anúncios',
    'Agências',
    'Conteúdos no instagram',
    'Publi de influencer',
    'E até panfletos'
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-workshop-subtle">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={workshopLogo} 
            alt="Workshop Elite de Vendas" 
            className="h-16 md:h-24 w-auto"
            loading="lazy"
          />
        </div>

        {/* Main Promise */}
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-foreground leading-tight">
          💡 A GRANDE PROMESSA DO WORKSHOP
        </h2>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card mb-8">
          <p className="text-xl md:text-3xl font-bold text-foreground mb-8 leading-relaxed">
            Neste workshop, você vai <span className="text-gradient">VENDER AO VIVO</span> e{' '}
            <span className="text-gradient">DOBRAR SUAS VENDAS</span> usando{' '}
            <span className="text-gradient">APENAS o WHATSAPP</span>
          </p>

          <div className="bg-background rounded-xl p-6 md:p-8 mb-8">
            <p className="text-xl md:text-2xl font-bold mb-6 text-foreground">
              Nunca mais vai depender de:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {noMoreDependencies.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-6 h-6 text-destructive flex-shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-lg md:text-xl text-muted-foreground">
            <p className="font-bold text-foreground">Sem anúncios.</p>
            <p className="font-bold text-foreground">Sem agências.</p>
            <p className="font-bold text-foreground">Sem depender de sorte.</p>
          </div>

          <div className="mt-8 p-6 bg-gradient-workshop rounded-xl">
            <p className="text-xl md:text-2xl font-black text-black">
              📱 Tudo com um celular, sua lista de contatos atual e mensagens certas no WhatsApp.
            </p>
          </div>
        </div>

        <WorkshopButton onClick={onCTAClick} className="max-w-xl mx-auto">
          QUERO PARTICIPAR DO WORKSHOP ELITE DE VENDAS
        </WorkshopButton>
      </div>
    </section>
  );
});

PromiseSection.displayName = 'PromiseSection';

export default PromiseSection;
