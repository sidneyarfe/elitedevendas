interface LazyEventDetailsSectionProps {
  onCTAClick: () => void;
}

const LazyEventDetailsSection = ({ onCTAClick }: LazyEventDetailsSectionProps) => {
  return (
    <section className="py-12 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-gradient">
          Detalhes do Evento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Data */}
          <div className="text-center p-6 bg-gradient-workshop-subtle rounded-2xl border border-workshop-gold/20">
            <div className="w-16 h-16 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Data</h3>
            <p className="text-2xl font-bold text-workshop-gold">15 e 16</p>
            <p className="text-lg">de outubro de 2025</p>
          </div>

          {/* Horário */}
          <div className="text-center p-6 bg-gradient-workshop-subtle rounded-2xl border border-workshop-gold/20">
            <div className="w-16 h-16 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Horário</h3>
            <p className="text-2xl font-bold text-workshop-gold">9h às 13h</p>
            <p className="text-lg">(ambos os dias)</p>
          </div>

          {/* Local */}
          <div className="text-center p-6 bg-gradient-workshop-subtle rounded-2xl border border-workshop-gold/20">
            <div className="w-16 h-16 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19S6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Local</h3>
            <p className="text-lg font-bold text-workshop-gold">ON Office Coworking</p>
            <p className="text-sm">Av. Gen. Deodoro, 1893</p>
            <p className="text-sm">Nazaré, Belém/PA</p>
          </div>
        </div>

        {/* Imagens do Local */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="/src/assets/onoffice_sala.png"
              alt="Sala de treinamento On Office Belém"
              className="w-full h-64 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="/src/assets/onoffice_local.png"
              alt="Fachada On Office Belém - Local do evento"
              className="w-full h-64 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* O que trazer */}
        <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gradient">O que trazer:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-workshop-gold rounded-full"></div>
              <span>Traga notebook</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-workshop-gold rounded-full"></div>
              <span>Celular</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-workshop-gold rounded-full"></div>
              <span>Um caderno</span>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground">
            O ambiente é focado, climatizado e preparado para aplicação prática.
          </p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold mb-6">Garanta sua vaga agora – R$197</p>
          
          <button
            onClick={onCTAClick}
            className="text-xl py-6 px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105"
          >
            Garanto minha vaga agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default LazyEventDetailsSection;