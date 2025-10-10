import { memo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQSection = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Trabalho com serviço específico. Funciona pro meu tipo de negócio?',
      answer: 'Se você precisa atrair clientes, sim. Já aplicamos com sucesso em clínicas, escritórios, assessorias, consultorias, lojas, restaurantes, agências de marketing, construção e mais.'
    },
    {
      question: 'E se eu não for "bom de vendas"?',
      answer: 'Não precisa ser. O processo é simples, direto e segue roteiro. Você vai saber exatamente o que falar, pra quem falar e quando falar.'
    },
    {
      question: 'Preciso ter equipe ou alguém pra aplicar o processo?',
      answer: 'Não. O método foi feito pra funcionar mesmo se for só você. Se tiver equipe, melhor ainda – você só vai multiplicar.'
    },
    {
      question: 'E se eu não conseguir aplicar depois?',
      answer: 'Você vai aplicar durante o workshop. Sai de lá com o processo rodando. Ainda assim, tem suporte por 7 dias e grupo exclusivo com a equipe.'
    },
    {
      question: 'Vai ter gravação?',
      answer: 'Não. O foco é aplicação ao vivo, com suporte direto. Quer resultado? Senta, presta atenção e executa.'
    },
    {
      question: 'Já tentei tráfego pago, agência, indicação... e nada funcionou. Isso é diferente?',
      answer: 'Sim. Aqui você assume o controle. Não depende de anúncio, não depende de indicação, não depende de ninguém. É processo testado com empresário real, como você.'
    },
    {
      question: 'Já vendo bem com indicação. Preciso disso?',
      answer: 'Sim. Indicação é ótimo, mas não é escalável. Com o processo certo, você gera novas oportunidades todos os dias – sem depender da sorte.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gradient">
          ❓ PERGUNTAS FREQUENTES
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-glow transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-card/80 transition-colors"
              >
                <span className="text-lg font-bold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-6 h-6 text-workshop-gold flex-shrink-0 transition-transform duration-300',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="p-6 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;
