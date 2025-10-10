import { memo } from 'react';
import fotoRodrigo from '@/assets/foto_rodrigo.jpg';
import fotoAna from '@/assets/foto_ana.jpg';

const MentorsSection = memo(() => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gradient">
          👥 QUEM SÃO OS MENTORES
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Rodrigo Marques */}
          <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-workshop-gold">
                <img 
                  src={fotoRodrigo} 
                  alt="Rodrigo Marques - Mentor Workshop Elite de Vendas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">Rodrigo Marques</h3>
              <p className="text-workshop-gold font-bold mb-2">Fundador da Alavanc Negócios</p>
              <p className="text-sm text-muted-foreground">Especialista em Estruturação Comercial</p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Administrador por formação e especialista em Estruturação Comercial e Gestão de Times.
              </p>
              <p>
                Fundador da Alavanc Negócios, consultoria que já ajudou empresas a organizar processos, 
                estruturar times e crescer de forma sustentável — gerando mais de{' '}
                <span className="text-gradient font-bold">R$ 10 milhões</span> em faturamento para os 
                negócios de nossa carteira.
              </p>
              <p>
                Forte atuação no ecossistema de inovação e empreendedorismo, sendo Diretor de Comunidades 
                e Eventos na Açaí Valley e Alumni da Enactus Brasil.
              </p>
              <p className="text-foreground font-bold">
                Sempre com o propósito de impulsionar negócios, pessoas e comunidades através de 
                estratégias bem definidas e executadas.
              </p>
            </div>
          </div>

          {/* Ana Araújo */}
          <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-workshop-gold">
                <img 
                  src={fotoAna} 
                  alt="Ana Araújo - Mentora Workshop Elite de Vendas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">Ana Araújo</h3>
              <p className="text-workshop-gold font-bold mb-2">CEO da Ás Marketing & Growth</p>
              <p className="text-sm text-muted-foreground">Head de Vendas da Alavanc Negócios</p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Ao longo da minha carreira, me destaquei por realizar consultorias que realmente 
                transformam negócios.
              </p>
              <p>
                Entre as minhas conquistas notáveis, consegui aumentar o faturamento de uma empresa 
                financeira em <span className="text-gradient font-bold">1136%</span>, saltando de 25 mil 
                para 300 mil reais em apenas um mês.
              </p>
              <p>
                Também impulsionei as vendas orgânicas de uma empresa de perfumes em{' '}
                <span className="text-gradient font-bold">60%</span> e otimizei o atendimento de um 
                cliente do ramo alimentício em 50%, resultando em um crescimento impressionante de{' '}
                <span className="text-gradient font-bold">300%</span> no faturamento.
              </p>
              <p className="text-foreground font-bold">
                Em minha trajetória, continuo comprometida com a excelência, transformando desafios 
                em oportunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MentorsSection.displayName = 'MentorsSection';

export default MentorsSection;
