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
        <div className="relative overflow-hidden">
          <img 
            src={rodrigoAnaPromise} 
            alt="Rodrigo e Ana - Mentores do Workshop Elite de Vendas" 
            className="w-full h-auto object-cover object-center scale-150 mt-4 mb-8"
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
      <div className="py-12 md:py-16 px-4 bg-gradient-to-b from-transparent via-workshop-gold/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-workshop rounded-full"></div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-gradient leading-tight">
              Nossa Promessa é Simples:
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm border border-workshop-gold/20 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-xl md:text-2xl mb-6 font-semibold leading-relaxed">
                Se você aplicar exatamente o que vamos ensinar no Workshop Elite de Vendas...
              </p>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-workshop opacity-10 rounded-xl"></div>
                <p className="text-2xl md:text-3xl font-black mb-8 text-gradient p-6 relative">
                  Você vai DOBRAR suas vendas em 7 dias — ou devolvemos seu dinheiro.
                </p>
              </div>
              
            </div>

            <div className="flex justify-center pb-8 md:pb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-workshop rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <button 
                  onClick={onCTAClick}
                  className="relative text-lg md:text-xl py-6 md:py-8 px-10 md:px-16 bg-gradient-workshop text-black font-black rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105"
                >
                  ✨ QUERO ESSA GARANTIA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LazyPromiseSection;