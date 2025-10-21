import onOfficeSala from "@/assets/onoffice_sala.png";
import onOfficeLocal from "@/assets/onoffice_local.png";
interface LazyEventDetailsSectionProps {
  onCTAClick: () => void;
}
const LazyEventDetailsSection = ({
  onCTAClick
}: LazyEventDetailsSectionProps) => {
  return <section className="py-12 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-gradient">
          Detalhes do Evento
        </h2>

        {/* Destaque: Duas Sessões */}
        <div className="mb-12 bg-gradient-to-r from-workshop-gold/10 via-workshop-gold/5 to-workshop-gold/10 border-2 border-workshop-gold/30 rounded-2xl p-6 md:p-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-workshop-gold/20 px-4 py-2 rounded-full mb-4">
              <svg className="w-5 h-5 text-workshop-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <span className="font-bold text-workshop-gold">ATENÇÃO: 2 SESSÕES DISPONÍVEIS</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Escolha a sessão que melhor se encaixa na sua agenda:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-workshop-gold/30 rounded-xl p-4">
                <p className="text-lg font-bold text-workshop-gold mb-1">SESSÃO 1</p>
                <p className="text-2xl font-black">05 de Novembro</p>
                <p className="text-lg">8h às 12h</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-workshop-gold/30 rounded-xl p-4">
                <p className="text-lg font-bold text-workshop-gold mb-1">SESSÃO 2</p>
                <p className="text-2xl font-black">06 de Novembro</p>
                <p className="text-lg">8h às 12h</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">* Você escolhe sua sessão após a inscrição</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Duração */}
          <div className="text-center p-6 bg-gradient-workshop-subtle rounded-2xl border border-workshop-gold/20">
            <div className="w-16 h-16 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Duração</h3>
            <p className="text-2xl font-bold text-workshop-gold">4 horas</p>
            <p className="text-lg">de conteúdo intensivo</p>
          </div>

          {/* Horário */}
          <div className="text-center p-6 bg-gradient-workshop-subtle rounded-2xl border border-workshop-gold/20">
            <div className="w-16 h-16 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Horário</h3>
            <p className="text-2xl font-bold text-workshop-gold">8h às 12h</p>
            <p className="text-lg">(cada sessão)</p>
          </div>

          {/* Local */}
          <div className="text-center p-6 bg-gradient-workshop-subtle rounded-2xl border border-workshop-gold/20">
            <div className="w-16 h-16 bg-workshop-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19S6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z" />
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
            <img src={onOfficeSala} alt="Sala de treinamento On Office Belém" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={onOfficeLocal} alt="Fachada On Office Belém - Local do evento" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
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
          
          <button onClick={onCTAClick} className="text-xl py-6 px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105">GARANTIR MINHA VAGA AGORA</button>
        </div>
      </div>
    </section>;
};
export default LazyEventDetailsSection;