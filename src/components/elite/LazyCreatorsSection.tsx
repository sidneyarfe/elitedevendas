import fotoAna from "@/assets/foto_ana.jpg";
import fotoRodrigo from "@/assets/foto_rodrigo.jpg";
interface LazyCreatorsSectionProps {
  onCTAClick: () => void;
}
const LazyCreatorsSection = ({
  onCTAClick
}: LazyCreatorsSectionProps) => {
  return <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-gradient">Conheça Seus Mentores</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ana Araújo */}
          <div className="bg-card p-8 rounded-2xl border border-muted/20">
            <div className="flex flex-col items-center text-center">
              <img src={fotoAna} alt="Ana Araújo" className="w-32 h-32 rounded-full object-cover border-4 border-workshop-gold mb-6" loading="lazy" decoding="async" />
              
              <h3 className="text-2xl font-bold mb-2 text-workshop-gold">Ana Araújo</h3>
              <div className="text-lg font-medium mb-4 text-muted-foreground">
                <p>CEO da Ás Marketing & Growth</p>
                <p>Head de Vendas da Alavanc Negócios</p>
              </div>
              
              <div className="text-sm leading-relaxed space-y-3">
                <p>Ao longo da minha carreira, me destaquei por realizar consultorias que realmente transformam negócios.</p>
                
                <p>Entre as minhas conquistas notáveis, consegui aumentar o faturamento de uma empresa financeira em 1136%, saltando de 25 mil para 300 mil reais em apenas um mês.</p>
                
                <p>Também impulsionei as vendas orgânicas de uma empresa de perfumes em 60% e otimizei o atendimento de um cliente do ramo alimentício em 50%, resultando em um crescimento impressionante de 300% no faturamento.</p>
                
                <p>Em minha trajetória, continuo comprometida com a excelência, transformando desafios em oportunidades.</p>
              </div>
            </div>
          </div>

          {/* Rodrigo Marques */}
          <div className="bg-card p-8 rounded-2xl border border-muted/20">
            <div className="flex flex-col items-center text-center">
              <img src={fotoRodrigo} alt="Rodrigo Marques" className="w-32 h-32 rounded-full object-cover border-4 border-workshop-gold mb-6" loading="lazy" decoding="async" />
              
              <h3 className="text-2xl font-bold mb-2 text-workshop-gold">Rodrigo Marques</h3>
              <div className="text-lg font-medium mb-4 text-muted-foreground">
                <p>Fundador da Alavanc Negócios</p>
                <p>Especialista em Estruturação Comercial</p>
              </div>
              
              <div className="text-sm leading-relaxed space-y-3">
                <p>Administrador por formação e especialista em Estruturação Comercial e Gestão de Times.</p>
                
                <p>Fundador da Alavanc Negócios, consultoria que já ajudou empresas a organizar processos, estruturar times e crescer de forma sustentável — gerando mais de R$ 10 milhões em faturamento para os negócios de nossa carteira.</p>
                
                <p>Tenho forte atuação no ecossistema de inovação e empreendedorismo, sendo Diretor de Comunidades e Eventos na Açaí Valley e Alumni da Enactus Brasil.</p>
                
                <p>Sempre com o propósito de impulsionar negócios, pessoas e comunidades através de estratégias bem definidas e executadas.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button onClick={onCTAClick} className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12 bg-gradient-workshop text-black font-bold rounded-xl shadow-workshop hover:shadow-workshop-hover transition-all duration-300 transform hover:scale-105">QUERO APRENDER COM QUEM VIVE DISSO!</button>
        </div>
      </div>
    </section>;
};
export default LazyCreatorsSection;