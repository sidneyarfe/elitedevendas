import rodrigoAnaPromise from "@/assets/rodrigo-ana-promise.png";
import workshopLogo from "@/assets/workshop-elite-logo.png";

interface LazyPromiseSectionProps {
  onCTAClick: () => void;
}

const LazyPromiseSection = ({ onCTAClick }: LazyPromiseSectionProps) => {
  return (
    <section className="bg-card">
      {/* Mobile: Full-width image touching borders */}
      <div className="md:hidden">
        <div className="relative">
          <img 
            src={rodrigoAnaPromise} 
            alt="Rodrigo e Ana - Mentores do Workshop Elite de Vendas" 
            className="w-full h-auto object-cover object-center"
            loading="lazy"
          />
          <div className="absolute bottom-4 right-4">
            <img 
              src={workshopLogo} 
              alt="Workshop Elite de Vendas Logo" 
              className="h-12 opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Desktop: Contained image with padding */}
      <div className="hidden md:block py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="relative mb-12">
            <div className="relative inline-block">
              <img 
                src={rodrigoAnaPromise} 
                alt="Rodrigo e Ana - Mentores do Workshop Elite de Vendas" 
                className="rounded-2xl shadow-2xl max-w-full h-auto"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4">
                <img 
                  src={workshopLogo} 
                  alt="Workshop Elite de Vendas Logo" 
                  className="h-16 md:h-20 opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promise Content */}
      <div className="py-8 md:py-0 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gradient">
              Nossa Promessa é Simples:
            </h2>
            
            <p className="text-xl md:text-2xl mb-4 font-semibold">
              Se você aplicar exatamente o que vamos ensinar no Workshop Elite de Vendas...
            </p>
            
            <p className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
              Você vai DOBRAR suas vendas em 7 dias — ou devolvemos seu dinheiro.
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Não é teoria. Não é enrolação. É um método testado e comprovado por centenas de empresários em Belém que já transformaram seus negócios.
            </p>

            <div className="flex justify-center pb-8 md:pb-16">
              <button 
                onClick={onCTAClick}
                className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105"
              >
                QUERO ESSA GARANTIA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LazyPromiseSection;