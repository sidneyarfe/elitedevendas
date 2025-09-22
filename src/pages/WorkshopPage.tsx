import WorkshopButton from "@/components/WorkshopButton";
import WorkshopSection from "@/components/WorkshopSection";
import VagasCounter from "@/components/VagasCounter";
import CountdownTimer from "@/components/CountdownTimer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, MapPin, Users, Star, Shield, Zap, Target, Calendar } from "lucide-react";
import onOfficeImage from "@/assets/on-office-interior.jpg";
import anaImage from "@/assets/foto_ana.jpg";
import rodrigoImage from "@/assets/foto_rodrigo.jpg";
import onOfficeSalaImage from "@/assets/onoffice_sala.png";
import onOfficeLocalImage from "@/assets/onoffice_local.png";
import rodrigoAnaMobile from "@/assets/rodrigo-ana-mobile.png";
import rodrigoAnaDesktop from "@/assets/rodrigo-ana-desktop.png";
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
            {/* Mobile Image */}
            <img 
              src={rodrigoAnaMobile} 
              alt="Rodrigo e Ana - Mentores do Workshop Elite de Vendas" 
              className="block md:hidden w-full max-w-sm mx-auto object-contain"
            />
            {/* Desktop Image */}
            <img 
              src={rodrigoAnaDesktop} 
              alt="Rodrigo e Ana - Mentores do Workshop Elite de Vendas" 
              className="hidden md:block w-full max-w-2xl mx-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Você Já Gastou com Agências, Tráfego Pago, Conteúdo, Influencers… e <span className="text-gradient">Não Aumentou Suas Vendas?</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-5xl mx-auto font-medium leading-relaxed">
            <p className="mb-6">A verdade é que você nunca precisou de nada disso.</p>
            <p className="mb-6">Com apenas</p>
            
            {/* Caixas semi-transparentes douradas */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-3 rounded-xl shadow-glow/30 hover:bg-workshop-gold/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-workshop-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <span className="font-semibold text-workshop-gold">um celular</span>
                </div>
              </div>
              
              <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-3 rounded-xl shadow-glow/30 hover:bg-workshop-gold/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <span className="font-semibold text-workshop-gold">uma lista de clientes</span>
                </div>
              </div>
              
              <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-3 rounded-xl shadow-glow/30 hover:bg-workshop-gold/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-semibold text-workshop-gold">e uma mensagem no WhatsApp</span>
                </div>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl font-bold">você vai <span className="text-gradient">DOBRAR suas vendas em 7 dias</span> — sem gastar mais R$1.</p>
          </div>
          
          <div className="flex justify-center">
            <WorkshopButton className="animate-pulse-glow text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Quero aplicar isso no meu negócio agora
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* VSL Section com Prova Social */}
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
          
          {/* Prova Social */}
          <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20 mb-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold mb-4 italic">
              "Faturei R$32.526 em uma semana só mandando mensagem no WhatsApp."
            </blockquote>
            <p className="text-xl text-workshop-gold font-semibold">– João, dono de clínica</p>
          </div>
          
          <div className="flex justify-center">
            <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Quero aplicar isso no meu negócio agora
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: DIAGNÓSTICO */}
      <WorkshopSection>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-12 text-gradient">
            Você já contratou agência, investiu em tráfego, postou no Instagram, contratou influencer...
          </h1>
          
          <h2 className="text-3xl font-bold mb-8">E o que conseguiu?</h2>
          
          <div className="space-y-4 text-xl md:text-2xl font-medium text-muted-foreground mb-12">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p>Um ou dois agendamentos que não vieram</p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p>Orçamento pedido e ignorado</p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p>Clientes aparecendo só por indicação</p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p>Mais prejuízo do que retorno</p>
            </div>
          </div>
        </div>
      </WorkshopSection>

      <WorkshopSection background="card">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-12 text-gradient">
            O problema não é você. Não é seu produto. Não é o mercado.
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold mb-8">
            O problema é que você está tentando vender <span className="text-gradient">sem ter um processo de vendas.</span>
          </p>
          
          <p className="text-xl md:text-2xl mb-8">
            Quem tem processo não depende de sorte. Fecha cliente todo dia.
          </p>
          
          <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20 mb-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold mb-4 italic">
              "Antes só vinha cliente por indicação. Apliquei o que aprendi e em 7 dias fechei 3 contratos novos."
            </blockquote>
            <p className="text-xl text-workshop-gold font-semibold">– Rafael, consultório odontológico</p>
          </div>
          
          <div className="flex justify-center">
            <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Quero esse processo funcionando agora
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: APRESENTAÇÃO DA SOLUÇÃO */}
      <WorkshopSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-gradient">
            Empresários de Belém estão aplicando um método simples e fechando contrato toda semana.
          </h2>
          
          <h3 className="text-2xl font-bold mb-8">Sem depender de:</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-xl">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">✕</span>
              </div>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Tráfego pago</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-xl">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">✕</span>
              </div>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Agência</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-xl">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">✕</span>
              </div>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Conteúdo no Instagram</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-xl">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">✕</span>
              </div>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Publi de influencer</p>
            </div>
          </div>
          
          <p className="text-2xl font-bold mb-8">E o melhor: usando apenas o que você já tem.</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-3 rounded-xl shadow-glow/30">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-workshop-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span className="font-semibold text-workshop-gold">um celular</span>
              </div>
            </div>
            
            <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-3 rounded-xl shadow-glow/30">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="font-semibold text-workshop-gold">uma lista de clientes</span>
              </div>
            </div>
            
            <div className="bg-workshop-gold/20 backdrop-blur-sm border border-workshop-gold/30 px-6 py-3 rounded-xl shadow-glow/30">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-semibold text-workshop-gold">e uma mensagem no WhatsApp</span>
              </div>
            </div>
          </div>
          
          <p className="text-2xl font-bold mb-12">
            Você vai entender tudo isso em detalhes no Workshop <span className="text-gradient">ELITE DE VENDAS</span>.
          </p>
          
          <div className="flex justify-center">
            <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Quero participar do Workshop
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: O QUE VOCÊ VAI APRENDER */}
      <WorkshopSection background="card">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gradient">
            No Workshop Elite de Vendas, você vai descobrir:
          </h2>
          
          <div className="grid gap-4 md:gap-8">
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="bg-workshop-gold/20 text-workshop-gold font-black text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div className="text-left">
                  <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Como vender todo dia, sem precisar de tráfego pago, agências, conteúdo ou influencers.</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="bg-workshop-gold/20 text-workshop-gold font-black text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div className="text-left">
                  <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4">A estratégia para fechar R$10.000 em vendas nos próximos 7 dias usando contatos antigos de WhatsApp.</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="bg-workshop-gold/20 text-workshop-gold font-black text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div className="text-left">
                  <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Como conseguir +5.000 contatos de potenciais clientes em 30s usando Google Maps, redes sociais e LinkedIn.</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="bg-workshop-gold/20 text-workshop-gold font-black text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div className="text-left">
                  <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Como abordar, levar para reunião e vender para esses potenciais clientes - mesmo que eles não te conheçam.</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="bg-workshop-gold/20 text-workshop-gold font-black text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                <div className="text-left">
                  <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4">O passo a passo para reativar o cliente sumido e fazer ele comprar/recomprar em até 24h.</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="bg-workshop-gold/20 text-workshop-gold font-black text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">6</div>
                <div className="text-left">
                  <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Como manter sua agenda cheia de reuniões de venda com 30 minutos/dia de prospecção.</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Quero aprender isso
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: O QUE VOCÊ RECEBE */}
      <WorkshopSection background="gradient" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-workshop-subtle opacity-10"></div>
        <div className="relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-gradient">
              Ao garantir sua vaga, você recebe:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background/80 backdrop-blur-sm border border-workshop-gold/30 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-left">Acesso ao Workshop Presencial Ao Vivo (2 dias)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-left">Método completo de Prospecção e Vendas</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-left">Diagnóstico individual com nossos mentores</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-left">Grupo VIP de Networking com empresários participantes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-workshop/20 border-2 border-workshop-gold p-8 rounded-2xl relative">
                <div className="bg-gradient-workshop text-black py-2 px-6 rounded-full inline-block mb-6">
                  <span className="font-bold text-lg">🎁 BÔNUS EXCLUSIVOS</span>
                </div>
                <p className="text-xl font-bold mb-6 text-workshop-gold">(PARA OS 10 PRIMEIROS)</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-left">20 Materiais e Ferramentas de Vendas, Marketing e Gestão</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-left">CRM Simples para WhatsApp</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-left">Roteiros testados de prospecção</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-workshop-gold flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-left">Templates prontos de vendas e ativação</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-workshop-gold/20 p-8 rounded-2xl mb-8 max-w-2xl mx-auto">
              <p className="text-3xl font-black mb-4 text-gradient">12x de R$19,94</p>
              <p className="text-2xl font-bold text-workshop-gold">Ou R$197 à vista.</p>
            </div>
            
            <div className="flex justify-center">
              <WorkshopButton className="animate-pulse-glow text-xl py-6 px-12">
                Quero tudo isso pra mim
              </WorkshopButton>
            </div>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: PROVAS / DEPOIMENTOS */}
      <WorkshopSection>
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gradient">
            Resultados Reais de Quem Aplicou
          </h2>
          
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card border-workshop-gold/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="aspect-video rounded-xl mb-6 overflow-hidden">
                    <iframe src="https://www.youtube.com/embed/B0cORHhpoQE?modestbranding=1&rel=0&iv_load_policy=3" title="Depoimento Dirceu - Corretor de Imóveis" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <blockquote className="text-xl font-bold mb-4 italic">
                    "O principal diferencial do método do Rodrigo e Ana foi o RESULTADO"
                  </blockquote>
                  <p className="text-lg text-workshop-gold font-semibold">– Dirceu, corretor de imóveis</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-workshop-gold/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="aspect-video rounded-xl mb-6 overflow-hidden">
                    <iframe src="https://www.youtube.com/embed/gNn-2u2ZhzU?modestbranding=1&rel=0&iv_load_policy=3" title="Depoimento Milena" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <blockquote className="text-xl font-bold mb-4 italic">
                    "Hoje nós conseguimos rentabilizar muito mais nossos leads."
                  </blockquote>
                  <p className="text-lg text-workshop-gold font-semibold">– Milena</p>
                </CardContent>
              </Card>
            </div>
          
          <div className="flex justify-center">
            <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Quero isso no meu negócio
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: QUEM DEVE PARTICIPAR */}
      <WorkshopSection background="card">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gradient">
            Para Quem É Esse Workshop?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-4 p-4 bg-background border border-workshop-gold/20 rounded-xl hover:shadow-glow transition-all duration-300">
              <div className="w-3 h-3 bg-workshop-gold rounded-full flex-shrink-0"></div>
              <p className="text-lg font-medium text-left">Prestadores de serviço</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background border border-workshop-gold/20 rounded-xl hover:shadow-glow transition-all duration-300">
              <div className="w-3 h-3 bg-workshop-gold rounded-full flex-shrink-0"></div>
              <p className="text-lg font-medium text-left">Corretores de imóveis</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background border border-workshop-gold/20 rounded-xl hover:shadow-glow transition-all duration-300">
              <div className="w-3 h-3 bg-workshop-gold rounded-full flex-shrink-0"></div>
              <p className="text-lg font-medium text-left">Consultores e assessores</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background border border-workshop-gold/20 rounded-xl hover:shadow-glow transition-all duration-300">
              <div className="w-3 h-3 bg-workshop-gold rounded-full flex-shrink-0"></div>
              <p className="text-lg font-medium text-left">Profissionais liberais (psicólogos, engenheiros, dentistas)</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background border border-workshop-gold/20 rounded-xl hover:shadow-glow transition-all duration-300">
              <div className="w-3 h-3 bg-workshop-gold rounded-full flex-shrink-0"></div>
              <p className="text-lg font-medium text-left">Donos de clínica (estética, odontologia, fisioterapia)</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background border border-workshop-gold/20 rounded-xl hover:shadow-glow transition-all duration-300">
              <div className="w-3 h-3 bg-workshop-gold rounded-full flex-shrink-0"></div>
              <p className="text-lg font-medium text-left">Escritórios de advocacia, contabilidade, arquitetura</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background border border-workshop-gold/20 rounded-xl hover:shadow-glow transition-all duration-300 md:col-span-2">
              <div className="w-3 h-3 bg-workshop-gold rounded-full flex-shrink-0"></div>
              <p className="text-lg font-medium text-left">Donos de loja física ou serviço local</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Quero minha vaga
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: GARANTIA */}
      <WorkshopSection background="gradient" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-workshop-subtle opacity-10"></div>
        <div className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-workshop rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-workshop-gold shadow-glow">
                <Shield className="w-12 h-12 text-black" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
              Garantia Incondicional
            </h2>
            
            <div className="bg-background/80 backdrop-blur-sm border-2 border-workshop-gold p-8 rounded-2xl mb-8">
              <p className="text-2xl md:text-3xl font-bold mb-6">
                Ou você fecha <span className="text-gradient">5 vendas em 7 dias</span> com o que aplicou — ou recebe <span className="text-gradient">100% do seu dinheiro de volta.</span>
              </p>
              <p className="text-xl text-muted-foreground">
                Sem perguntas. Sem letras miúdas. Só mandar mensagem. <span className="text-workshop-gold font-bold">Risco zero.</span>
              </p>
            </div>
            
            <div className="flex justify-center">
              <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
                Quero minha vaga com garantia
              </WorkshopButton>
            </div>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: SOBRE OS CRIADORES */}
      <WorkshopSection>
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gradient">
            Sobre os Criadores
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12">
            <Card className="bg-card border-workshop-gold/20 overflow-hidden">
              <CardContent className="p-4 md:p-8">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 overflow-hidden rounded-full border-2 border-workshop-gold/30">
                  <img src={anaImage} alt="Ana Araújo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-workshop-gold">Ana Araújo</h3>
                <div className="space-y-2 md:space-y-4 text-left">
                  <p className="text-sm md:text-base font-semibold">CEO da Ás Marketing & Growth</p>
                  <p className="text-sm md:text-base font-semibold">Head de Vendas da Alavanc Negócios</p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Ao longo da minha carreira, me destaquei por realizar consultorias que realmente transformam negócios.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Entre as minhas conquistas notáveis, consegui aumentar o faturamento de uma empresa financeira em 1136%, saltando de 25 mil para 300 mil reais em apenas um mês.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Também impulsionei as vendas orgânicas de uma empresa de perfumes em 60% e otimizei o atendimento de um cliente do ramo alimentício em 50%, resultando em um crescimento impressionante de 300% no faturamento.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Em minha trajetória, continuo comprometida com a excelência, transformando desafios em oportunidades.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-workshop-gold/20 overflow-hidden">
              <CardContent className="p-4 md:p-8">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 overflow-hidden rounded-full border-2 border-workshop-gold/30">
                  <img src={rodrigoImage} alt="Rodrigo Marques" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-workshop-gold">Rodrigo Marques</h3>
                <div className="space-y-2 md:space-y-4 text-left">
                  <p className="text-sm md:text-base font-semibold">Fundador da Alavanc Negócios</p>
                  <p className="text-sm md:text-base font-semibold">Especialista em Estruturação Comercial</p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Administrador por formação e especialista em Estruturação Comercial e Gestão de Times.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Fundador da Alavanc Negócios, consultoria que já ajudou empresas a organizar processos, estruturar times e crescer de forma sustentável — gerando mais de R$ 10 milhões em faturamento para os negócios de nossa carteira.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Tenho forte atuação no ecossistema de inovação e empreendedorismo, sendo Diretor de Comunidades e Eventos na Açaí Valley e Alumni da Enactus Brasil.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Sempre com o propósito de impulsionar negócios, pessoas e comunidades através de estratégias bem definidas e executadas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Quero aprender com quem faz acontecer
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: DETALHES DO EVENTO */}
      <WorkshopSection background="card">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gradient">
            Detalhes do Evento
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-12">
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <Calendar className="w-8 h-8 md:w-12 md:h-12 text-workshop-gold mx-auto mb-2 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-workshop-gold">Data</h3>
              <p className="text-sm md:text-lg">15 e 16 de outubro de 2025</p>
            </div>
            
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <Clock className="w-8 h-8 md:w-12 md:h-12 text-workshop-gold mx-auto mb-2 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-workshop-gold">Horário</h3>
              <p className="text-sm md:text-lg">9h às 13h</p>
            </div>
            
            <div className="bg-background border border-workshop-gold/20 p-4 md:p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
              <MapPin className="w-8 h-8 md:w-12 md:h-12 text-workshop-gold mx-auto mb-2 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-workshop-gold">Local</h3>
              <p className="text-xs md:text-lg">ON Office Coworking Belém - Av. Gen. Deodoro, 1893. Nazaré, Belém/PA</p>
            </div>
          </div>
          
          {/* Local - On Office Fotos */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="overflow-hidden rounded-2xl border border-workshop-gold/20">
              <img src={onOfficeSalaImage} alt="Sala de treinamento On Office Belém" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-workshop-gold/20">
              <img src={onOfficeLocalImage} alt="Fachada On Office Belém - Local do evento" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="bg-gradient-workshop-subtle p-8 rounded-2xl border border-workshop-gold/20 mb-8">
            <p className="text-xl font-bold mb-4">O que trazer:</p>
            <p className="text-lg text-muted-foreground">
              Traga notebook, celular e um caderno. O ambiente é focado, climatizado e preparado para aplicação prática.
            </p>
          </div>
          
          <div className="flex justify-center">
            <WorkshopButton className="text-lg md:text-xl py-4 md:py-6 px-8 md:px-12">
              Garanta sua vaga agora – R$197
            </WorkshopButton>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: ESCASSEZ */}
      <WorkshopSection background="gradient" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-red-500/10"></div>
        <div className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-red-600 text-white py-3 px-8 rounded-full inline-block mb-8">
              <span className="font-bold text-lg">⚠️ ÚLTIMAS VAGAS</span>
            </div>
            
            <div className="mb-8">
              <VagasCounter />
            </div>
            
            
            
            <p className="text-2xl font-bold mb-8 text-red-600 dark:text-red-400">
              ⚠️ Resta apenas 1 vaga para acabar o bônus.
            </p>
            
            <div className="flex justify-center">
              <WorkshopButton className="animate-pulse-glow text-lg md:text-xl py-4 md:py-6 px-8 md:px-12 bg-red-600 hover:bg-red-700">
                Quero uma das últimas vagas
              </WorkshopButton>
            </div>
          </div>
        </div>
      </WorkshopSection>

      {/* SEÇÃO: FAQ */}
      <WorkshopSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gradient">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-workshop-gold/20 rounded-xl px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-workshop-gold transition-colors">
                Funciona para meu tipo de serviço?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Sim! O método funciona para qualquer negócio que vende serviços ou produtos de ticket médio/alto. Já ajudamos corretores, dentistas, advogados, consultores, donos de clínica e diversos outros segmentos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-workshop-gold/20 rounded-xl px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-workshop-gold transition-colors">
                E se eu não for "bom de vendas"?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Perfeito! O método foi criado justamente para quem não se considera "vendedor nato". Trabalhamos com roteiros, processos e técnicas que qualquer pessoa pode aplicar, independente da experiência em vendas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-workshop-gold/20 rounded-xl px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-workshop-gold transition-colors">
                Preciso de equipe pra aplicar?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Não! O método é desenhado para ser aplicado pelo próprio dono do negócio. Você mesmo pode prospectar, abordar e fechar seus clientes usando apenas seu celular.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-workshop-gold/20 rounded-xl px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-workshop-gold transition-colors">
                Vai ter gravação?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Não, o Workshop é 100% presencial e ao vivo. Não haverá gravações para garantir a exclusividade do conteúdo e o foco total dos participantes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-workshop-gold/20 rounded-xl px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-workshop-gold transition-colors">
                Já tentei de tudo... isso é diferente?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Sim! Diferente de cursos teóricos ou métodos complexos, nosso foco é 100% prático. Você sai do workshop com um processo funcionando e já testado por dezenas de empresários em Belém.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-workshop-gold/20 rounded-xl px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-workshop-gold transition-colors">
                Já vendo bem com indicação. Preciso disso?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Se você quer parar de depender da sorte e ter previsibilidade nas vendas, sim. Indicação é ótima, mas não é sustentável para crescer consistentemente. Com nosso método, você mantém as indicações E adiciona um fluxo previsível de novos clientes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="text-center mt-16">
            <p className="text-2xl md:text-3xl font-black mb-8 text-gradient">
              Pare de depender da sorte. Construa um processo de vendas que funciona todo dia.
            </p>
            
            <div className="flex justify-center">
              <WorkshopButton className="text-xl py-6 px-12 animate-pulse-glow">
                Quero esse processo no meu negócio agora
              </WorkshopButton>
            </div>
          </div>
        </div>
      </WorkshopSection>

      {/* CTA Fixo Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-workshop-gold/20 p-4 z-50">
        <div className="flex items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-workshop-gold">Últimas vagas!</p>
            <p className="text-xs text-muted-foreground">R$197 ou 12x R$19,94</p>
          </div>
          <WorkshopButton className="px-6 py-3">
            Garantir Vaga
          </WorkshopButton>
        </div>
      </div>
    </div>;
};
export default WorkshopPage;