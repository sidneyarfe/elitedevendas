import WorkshopButton from "@/components/WorkshopButton";
import WorkshopSection from "@/components/WorkshopSection";
import VagasCounter from "@/components/VagasCounter";
import CountdownTimer from "@/components/CountdownTimer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, MapPin, Users, Star, Shield, Zap, Target, Calendar } from "lucide-react";
import onOfficeImage from "@/assets/on-office-interior.jpg";
const WorkshopPage = () => {
  return <div className="min-h-screen bg-background text-foreground">
      {/* Faixa Exclusiva */}
      <div className="bg-gradient-workshop text-black py-3 text-center">
        <p className="font-bold text-lg">Para EMPRESÁRIOS de BELÉM-PA</p>
      </div>

      {/* Hero Section */}
      <WorkshopSection padding="large" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-workshop-subtle opacity-5"></div>
        <div className="relative z-10">
          <div className="mb-8">
            <img src="/lovable-uploads/e6ab246c-04f3-40f2-9409-e8d57d75a7d0.png" alt="Workshop Elite de Vendas - Alavanc Consultoria" className="h-20 mx-auto mb-8 object-contain" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            O Fim da <span className="text-gradient">Montanha-Russa</span> no Seu Faturamento
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Workshop 100% prático para empresários que cansaram de depender de indicação, agências e tráfego pago – e querem atrair clientes todos os dias, gastando R$0 com anúncios.
          </p>
          
          <div className="mb-8 flex justify-center">
            <Card className="bg-card/90 border-border/40 max-w-md w-full">
              <CardContent className="p-4 flex items-center justify-center gap-4">
                <div className="bg-workshop-gold/20 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-workshop-gold" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold">15/09/2025</span>
                </div>
                <div className="bg-workshop-gold/20 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-workshop-gold" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold">ON Office Belém</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <WorkshopButton className="animate-pulse-glow text-xl py-6 px-12">
            GARANTIR VAGA AGORA
          </WorkshopButton>
        </div>
      </WorkshopSection>

      {/* VSL Section */}
      <WorkshopSection background="card">
        <div className="text-center">
          <div className="aspect-video bg-secondary rounded-2xl flex items-center justify-center mb-8 border border-muted">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-workshop rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-black ml-1"></div>
              </div>
              <p className="text-muted-foreground">Vídeo: Depoimento + Apresentação do Workshop</p>
            </div>
          </div>
        </div>
      </WorkshopSection>

      {/* Empatia Section */}
      <WorkshopSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-gradient">
            Seja sincero comigo…
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl font-medium text-muted-foreground">
            <p>• Você já contratou agência.</p>
            <p>• Já investiu em anúncios/tráfego pago.</p>
            <p>• Postou conteúdo no instagram.</p>
            <p>• Pagou caro… e no fim só teve prejuízo.</p>
          </div>
          
          <div className="mt-12 text-xl md:text-2xl leading-relaxed">
            <p className="mb-6">
              Seu faturamento oscila, os clientes só aparecem quando alguém indica, e todo mês vira uma nova batalha pra fechar no azul.
            </p>
            <p>
              Enquanto isso, o concorrente – que não entrega nem metade do que você entrega – parece ter uma <span className="text-gradient font-bold">fila de clientes</span>.
            </p>
          </div>
        </div>
      </WorkshopSection>

      {/* Quebra de Crença */}
      <WorkshopSection background="card">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-gradient">
            Mas POR QUE isso?
          </h2>
          
          <p className="text-2xl md:text-3xl font-bold mb-8">Eu te digo:</p>
          
          <div className="space-y-4 text-xl md:text-2xl mb-12">
            <p>O problema não é o seu produto.</p>
            <p>Não é seu preço.</p>
            <p>Não é o instagram ou a agência de marketing.</p>
            <p>Não é o mercado.</p>
            <p>E definitivamente não é você.</p>
          </div>
          
          <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20">
            <p className="text-2xl md:text-3xl font-black mb-4">
              O problema é que sua empresa <span className="text-gradient">não tem um processo de vendas</span>.
            </p>
            <p className="text-xl font-medium text-muted-foreground mb-6">E por isso depende da sorte.</p>
            <p className="text-xl font-medium">
              Enquanto isso, quem tem processo vende de forma <span className="text-gradient font-bold">previsível, todo dia, sem depender de ninguém</span>.
            </p>
          </div>
        </div>
      </WorkshopSection>

      {/* Big Idea */}
      <WorkshopSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Existe um jeito prático e imediato de <span className="text-gradient">virar esse jogo…</span>
          </h2>
          
          <p className="text-3xl md:text-4xl font-black mb-12">
            Participar do Workshop ELITE DE VENDAS
          </p>
          
          <p className="text-2xl font-bold mb-8">Nele, você vai aprender a:</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-workshop-gold/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-workshop-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">1. Abordar clientes certos</h4>
                <p className="text-muted-foreground">mesmo que nunca tenham ouvido falar da sua empresa.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-workshop-gold/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="w-16 h-16 text-workshop-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">2. Conduzir a conversa</h4>
                <p className="text-muted-foreground">até o fechamento – com método.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-workshop-gold/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-workshop-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">3. Criar um fluxo previsível</h4>
                <p className="text-muted-foreground">que roda todo dia, no piloto automático.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-2xl font-bold space-y-2 mb-12">
            <p>Sem anúncios.</p>
            <p>Sem agência.</p>
            <p>Sem precisar aparecer no Instagram.</p>
          </div>
          
          <WorkshopButton className="text-xl py-6 px-12">
            GARANTIR MINHA VAGA
          </WorkshopButton>
        </div>
      </WorkshopSection>

      {/* Apresentação do Workshop */}
      <WorkshopSection background="card">
        <div className="text-center">
          <div className="mb-8">
            <img src="/lovable-uploads/e6ab246c-04f3-40f2-9409-e8d57d75a7d0.png" alt="Workshop Elite de Vendas Logo" className="h-20 mx-auto mb-6 object-contain" />
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 px-[80px]">
            Para empresários de Belém-PA – que cansaram de perder tempo e dinheiro com soluções de vendas que não funcionam.
          </p>
          
          <h3 className="text-3xl font-bold mb-8 text-gradient">O que você vai receber:</h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {["Um processo pronto de prospecção ativa para você atrair clientes mesmo sem gastar R$1", "Um roteiro testado de vendas, pra fechar mais mesmo com objeções", "Ferramentas simples pra acompanhar tudo e saber onde está perdendo dinheiro", "Diagnóstico comercial com especialista pra identificar seus gargalos", "Grupo exclusivo com outros empresários focados em resultado"].map((item, index) => <div key={index} className="flex items-start gap-4 text-left">
                <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>)}
          </div>
          
          <p className="text-xl mb-8 text-muted-foreground">
            Tudo isso em poucas horas, ao vivo, com acompanhamento passo a passo.
          </p>
          
          <WorkshopButton className="text-xl py-6 px-12">
            GARANTIR VAGA AGORA
          </WorkshopButton>
        </div>
      </WorkshopSection>

      {/* Depoimentos */}
      <WorkshopSection>
        <h2 className="text-4xl font-black text-center mb-16 text-gradient">
          Resultados Reais de Quem Aplicou
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[{
          name: "Rafael",
          business: "Consultório Odontológico",
          testimonial: "Antes só vinha cliente por indicação. Apliquei o que aprendi no workshop e em 7 dias fechei 3 contratos novos.",
          videoPlaceholder: true
        }, {
          name: "Patrícia",
          business: "Assessoria Contábil",
          testimonial: "Contratei agência, gastei quase 10 mil em tráfego e não fechei nenhum cliente. Com esse método, consegui 15 reuniões em duas semanas.",
          videoPlaceholder: true
        }, {
          name: "João",
          business: "Engenharia e Projetos",
          testimonial: "Parei de esperar cliente aparecer e fui atrás. Hoje tenho mais controle e previsibilidade.",
          videoPlaceholder: true
        }].map((testimonial, index) => <Card key={index} className="bg-card border-workshop-gold/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                {testimonial.videoPlaceholder && (
                  <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center mb-6 border border-muted">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-workshop rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-black ml-1"></div>
                      </div>
                      <p className="text-muted-foreground text-sm">Vídeo Depoimento</p>
                    </div>
                  </div>
                )}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-workshop-gold text-workshop-gold" />)}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-bold text-workshop-gold">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center mt-12">
          <WorkshopButton>GARANTIR VAGA AGORA</WorkshopButton>
        </div>
      </WorkshopSection>

      {/* Para Quem É */}
      <WorkshopSection background="card">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-gradient">
            Para Quem É o Workshop Elite de Vendas?
          </h2>
          
          <div className="grid gap-6 text-left">
            {["Prestadores de serviço (TI, reformas, marketing, design) que precisam gerar contratos novos todo mês sem depender de indicação", "Consultores e assessores que têm conhecimento, mas falta cliente entrando com consistência", "Profissionais liberais (psicólogos, engenheiros, arquitetos, dentistas) que vivem de agenda cheia e não podem mais contar só com rede social", "Donos de clínicas (estética, odontologia, fisioterapia) que oferecem bom serviço, mas não conseguem atrair pacientes com regularidade", "Escritórios de advocacia, contabilidade e áreas técnicas que querem sair da dependência de indicação e alcançar mais clientes direto", "Donos de loja física ou serviço local que querem atrair gente da cidade e vender todos os dias pelo WhatsApp, sem gastar com tráfego"].map((item, index) => <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>)}
          </div>
          
          <div className="mt-12">
            <WorkshopButton>GARANTIR VAGA AGORA</WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* O que vai aprender */}
      <WorkshopSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-gradient">
            O QUE VOCÊ VAI APRENDER NO WORKSHOP?
          </h2>
          
          <div className="grid gap-6 text-left">
            {["Como extrair contatos de WhatsApp de clientes prontos para comprar usando Google Maps, redes sociais e LinkedIn.", "Como disparar mensagens pra esses contatos e receber uma enxurrada de \"tenho interesse\" em menos de 10 minutos.", "Como tirar pelo menos R$10.000 dos seus contatos antigos do WhatsApp em 7 dias.", "O erro fatal que trava suas vendas no WhatsApp logo na primeira mensagem – e como evitá-lo com um simples ajuste no início da conversa.", "O CRM mais simples do mundo para controlar suas vendas - que até uma criança aprende a usar em 20 minutos.", "O passo a passo exato (com texto pronto) que reativa o cliente sumido e faz ele responder em menos de 24 horas.", "Como organizar sua rotina comercial em 15 minutos por dia – e manter o funil sempre cheio sem precisar contratar ninguém.", "Como agendar 2 a 4 reuniões por dia, mesmo sem aparecer no Instagram ou investir um centavo em anúncios."].map((item, index) => <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-workshop rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-lg">{item}</p>
              </div>)}
          </div>
          
          <div className="mt-12">
            <WorkshopButton>GARANTIR VAGA AGORA</WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* Informações do Evento */}
      <WorkshopSection background="card">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-12 text-gradient">Local do Evento</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <div className="aspect-video bg-secondary rounded-2xl overflow-hidden mb-6 border border-muted">
                <img src={onOfficeImage} alt="ON Office - Espaço do Workshop Elite de Vendas" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="text-left space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-workshop-gold">Endereço:</h3>
                <p className="text-xl">ON Office – Av. Generalíssimo Deodoro, 1893</p>
                <p className="text-xl">Belém – PA</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2 text-workshop-gold">Data:</h3>
                <p className="text-xl">DD/MM</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2 text-workshop-gold">Horário:</h3>
                <p className="text-xl">das 9h às 13h</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20">
            <h3 className="text-2xl font-bold mb-6 text-workshop-gold">Importante:</h3>
            <div className="space-y-4 text-lg">
              <p>• Chegue com 15 minutos de antecedência</p>
              <p>• Traga seu notebook, celular e um caderno (você vai usar os dois)</p>
              <p>• O ambiente é climatizado, com estrutura completa para foco total na aplicação do método.</p>
            </div>
          </div>
        </div>
      </WorkshopSection>

      {/* Oferta */}
      <WorkshopSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-gradient">
            TUDO O QUE VOCÊ VAI RECEBER:
          </h2>
          
          <div className="bg-card border-2 border-workshop-gold rounded-2xl p-12 mb-12 shadow-glow">
            <div className="mb-8">
              <img src="/lovable-uploads/e6ab246c-04f3-40f2-9409-e8d57d75a7d0.png" alt="Workshop Elite de Vendas" className="h-16 mx-auto object-contain" />
            </div>
            <p className="text-xl mb-8">Data: DD/MM – das 9h às 13h</p>
            
            <h4 className="text-2xl font-bold mb-8">Você recebe:</h4>
            
            <div className="grid gap-4 text-left max-w-2xl mx-auto mb-12">
              {["Acesso ao workshop ao vivo", "Ferramentas e planilhas prontas", "Diagnóstico individual com especialista", "Grupo exclusivo no WhatsApp", "Modelos prontos de abordagem, venda e acompanhamento"].map((item, index) => <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>)}
            </div>
            
            <div className="text-center">
              <p className="text-6xl font-black mb-6 text-gradient">R$197</p>
              <WorkshopButton className="text-2xl py-8 px-16">
                GARANTIR VAGA AGORA
              </WorkshopButton>
            </div>
          </div>
        </div>
      </WorkshopSection>

      {/* Garantia */}
      <WorkshopSection background="card">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-gradient">
            TENHA RESULTADOS OU DEVOLVEMOS SEU DINHEIRO.
          </h2>
          
          <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20">
            <Shield className="w-16 h-16 text-workshop-gold mx-auto mb-6" />
            <p className="text-xl leading-relaxed">
              Participe do workshop, aplique o método. Se em até 14 dias você não gerar pelo menos 5 reuniões com potenciais clientes, devolvemos 100% do seu investimento, basta mandar uma mensagem.
            </p>
          </div>
        </div>
      </WorkshopSection>

      {/* Escassez */}
      <WorkshopSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-gradient">
            APENAS 30 VAGAS DISPONÍVEIS.
          </h2>
          
          <div className="bg-card p-8 rounded-2xl border border-workshop-gold/20 mb-8">
            <Users className="w-16 h-16 text-workshop-gold mx-auto mb-6" />
            <p className="text-xl leading-relaxed mb-8">
              O Workshop Elite de Vendas é ao vivo, com orientação individual – por isso, limitamos a apenas 30 empresários comprometidos. Se deixar pra depois, você vai ficar de fora.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <CountdownTimer />
            <VagasCounter />
          </div>
        </div>
      </WorkshopSection>

      {/* FAQ */}
      <WorkshopSection background="card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gradient">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-8">
            {[{
            question: "Trabalho com serviço específico. Funciona pro meu tipo de negócio?",
            answer: "Se você precisa atrair clientes, sim. Já aplicamos com sucesso em clínicas, escritórios, assessorias, consultorias, lojas, restaurantes, agências de marketing, construção e mais."
          }, {
            question: "E se eu não for \"bom de vendas\"?",
            answer: "Não precisa ser. O processo é simples, direto e segue roteiro. Você vai saber exatamente o que falar, pra quem falar e quando falar."
          }, {
            question: "Preciso ter equipe ou alguém pra aplicar o processo?",
            answer: "Não. O método foi feito pra funcionar mesmo se for só você. Se tiver equipe, melhor ainda – você só vai multiplicar."
          }, {
            question: "E se eu não conseguir aplicar depois?",
            answer: "Você vai aplicar durante o workshop. Sai de lá com o processo rodando. Ainda assim, tem suporte por 7 dias e grupo exclusivo com a equipe."
          }, {
            question: "Vai ter gravação?",
            answer: "Não. O foco é aplicação ao vivo, com suporte direto. Quer resultado? Senta, presta atenção e executa."
          }, {
            question: "Já tentei tráfego pago, agência, indicação... e nada funcionou. Isso é diferente?",
            answer: "Sim. Aqui você assume o controle. Não depende de anúncio, não depende de indicação, não depende de ninguém. É processo testado com empresário real, como você."
          }, {
            question: "Já vendo bem com indicação. Preciso disso?",
            answer: "Sim. Indicação é ótimo, mas não é escalável. Com o processo certo, você gera novas oportunidades todos os dias – sem depender da sorte."
          }].map((faq, index) => <Card key={index} className="bg-card border-workshop-gold/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-workshop-gold">→ {faq.question}</h3>
                  <p className="text-lg text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </WorkshopSection>

      {/* CTA Final */}
      <WorkshopSection padding="large" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Pare de depender da <span className="text-gradient">sorte</span>
          </h2>
          
          <p className="text-2xl mb-12 text-muted-foreground">
            Construa um processo de vendas que funciona todos os dias
          </p>
          
          <WorkshopButton className="text-2xl py-8 px-16 animate-pulse-glow">
            GARANTIR VAGA AGORA - R$197
          </WorkshopButton>
          
          <div className="mt-8 flex justify-center items-center gap-4 text-lg">
            <Shield className="w-6 h-6 text-workshop-gold" />
            <span>Garantia de 14 dias ou seu dinheiro de volta</span>
          </div>
        </div>
      </WorkshopSection>
    </div>;
};
export default WorkshopPage;