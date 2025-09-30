import { Helmet } from "react-helmet-async";
import { CheckCircle2, Calendar, Clock, MapPin, Rocket, Users, FileText, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import WorkshopSection from "@/components/WorkshopSection";
import Footer from "@/components/elite/Footer";

const EliteVendasObrigadoV1 = () => {
  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/CeyegpeOI7g9R2g435YGVP", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Inscrição Confirmada! - Workshop Elite de Vendas | Belém-PA</title>
        <meta 
          name="description" 
          content="Sua vaga no Workshop Elite de Vendas está confirmada! Entre no grupo do WhatsApp para receber todas as informações."
        />
        <link rel="canonical" href="https://lp.alavanc.com/elitedevendas-obg-v1" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section - Confirmação */}
        <WorkshopSection className="text-center pt-20 pb-12" background="gradient">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-workshop rounded-full flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="w-12 h-12 text-black" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gradient animate-fade-in">
            Parabéns, sua inscrição está confirmada!
          </h1>
          
          <p className="text-xl md:text-2xl font-bold mb-4 animate-fade-in">
            Você garantiu sua vaga no <span className="text-gradient">Workshop Elite de Vendas — Belém/PA</span>.
          </p>
        </WorkshopSection>

        {/* Card de Informações do Evento */}
        <WorkshopSection className="py-8">
          <Card className="max-w-3xl mx-auto bg-card border-workshop-gold/20 shadow-workshop">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Calendar className="w-8 h-8 text-workshop-gold mb-3" />
                  <p className="font-bold text-lg mb-1">Data</p>
                  <p className="text-muted-foreground">15 e 16 de outubro de 2025</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-workshop-gold mb-3" />
                  <p className="font-bold text-lg mb-1">Horário</p>
                  <p className="text-muted-foreground">9h às 13h</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-workshop-gold mb-3" />
                  <p className="font-bold text-lg mb-1">Local</p>
                  <p className="text-muted-foreground">On Office Belém Coworking — Av. Gen. Deodoro, 1893 - Nazaré, Belém - PA, 66040-140</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </WorkshopSection>

        {/* O que vai acontecer agora */}
        <WorkshopSection background="card" className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Rocket className="w-10 h-10 text-workshop-gold mr-3" />
              <h2 className="text-3xl md:text-4xl font-black text-gradient">
                O que vai acontecer agora?
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-gradient-workshop-subtle p-6 rounded-xl border border-workshop-gold/10">
                <div className="w-8 h-8 bg-gradient-workshop rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-black font-bold">1</span>
                </div>
                <p className="text-lg leading-relaxed">
                  Em dois dias intensos, vamos <strong>aplicar junto com você</strong> o Estratégia de WhatsApp que gerou <strong>+R$10 MILHÕES</strong> em vendas para nossos clientes em Belém.
                </p>
              </div>
              
              <div className="flex gap-4 items-start bg-gradient-workshop-subtle p-6 rounded-xl border border-workshop-gold/10">
                <div className="w-8 h-8 bg-gradient-workshop rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-black font-bold">2</span>
                </div>
                <p className="text-lg leading-relaxed">
                  Você vai sair do workshop <strong>JÁ VENDENDO</strong> e com método aplicado na sua empresa, pronto para repetir todos os dias.
                </p>
              </div>
              
              <div className="flex gap-4 items-start bg-gradient-workshop-subtle p-6 rounded-xl border border-workshop-gold/10">
                <div className="w-8 h-8 bg-gradient-workshop rounded-full flex items-center justify-center shrink-0 mt-1">
                  <span className="text-black font-bold">3</span>
                </div>
                <p className="text-lg leading-relaxed">
                  Ainda vai ter acesso a materiais exclusivos, diagnóstico individual e networking com empresários da região.
                </p>
              </div>
            </div>
          </div>
        </WorkshopSection>

        {/* CTA WhatsApp Principal */}
        <WorkshopSection className="py-16 text-center" background="gradient">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto mb-4 text-workshop-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-gradient">
                Ação importante agora:
              </h2>
              <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                Todo o acompanhamento pré-evento, informações de acesso e materiais de apoio serão enviados pelo <strong>Grupo Oficial do WhatsApp</strong>.
              </p>
              <p className="text-xl font-bold mb-8">
                👉 Clique no botão abaixo e entre agora no grupo para não perder nada:
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-black text-lg md:text-xl py-6 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto inline-flex items-center justify-center gap-3"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              ENTRAR NO GRUPO OFICIAL DO WHATSAPP
            </button>
          </div>
        </WorkshopSection>

        {/* Atenção - Benefícios do Grupo */}
        <WorkshopSection background="card" className="py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <AlertCircle className="w-10 h-10 text-workshop-gold mr-3" />
              <h2 className="text-3xl md:text-4xl font-black text-gradient">
                Atenção:
              </h2>
            </div>
            
            <Card className="bg-gradient-workshop-subtle border-workshop-gold/20">
              <CardContent className="p-8">
                <p className="text-lg font-bold mb-6 text-center">
                  Esse grupo é exclusivo para participantes confirmados. É lá que você vai receber:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-card/50 p-4 rounded-lg">
                    <Calendar className="w-6 h-6 text-workshop-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Lembretes e instruções do evento</p>
                      <p className="text-sm text-muted-foreground">Mantenha-se informado sobre todos os detalhes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-card/50 p-4 rounded-lg">
                    <FileText className="w-6 h-6 text-workshop-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Materiais extras</p>
                      <p className="text-sm text-muted-foreground">Conteúdos exclusivos para você se preparar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-card/50 p-4 rounded-lg">
                    <Users className="w-6 h-6 text-workshop-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Orientações da equipe Alavanc</p>
                      <p className="text-sm text-muted-foreground">Suporte direto e esclarecimento de dúvidas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </WorkshopSection>

        {/* CTA WhatsApp Final */}
        <WorkshopSection className="py-12 text-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-black text-lg md:text-xl py-6 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto inline-flex items-center justify-center gap-3"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            ENTRAR NO GRUPO OFICIAL DO WHATSAPP
          </button>
        </WorkshopSection>

        <Footer />
      </div>
    </>
  );
};

export default EliteVendasObrigadoV1;
