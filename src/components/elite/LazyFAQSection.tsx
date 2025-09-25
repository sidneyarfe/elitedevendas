import { useState } from "react";
const LazyFAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const faqs = [{
    question: "Funciona para meu tipo de serviço?",
    answer: "Sim! O método funciona para qualquer tipo de serviço ou negócio local. Já testamos com dentistas, advogados, corretores, consultores, donos de clínica, prestadores de serviço e muito mais. O que importa é ter clientes para contactar."
  }, {
    question: 'E se eu não for "bom de vendas"?',
    answer: "Perfeito! O método foi criado justamente para quem não tem experiência em vendas. Você vai receber scripts prontos, templates testados e o passo a passo completo. Muitos dos nossos melhores resultados vieram de pessoas que nunca haviam vendido antes."
  }, {
    question: "Preciso de equipe pra aplicar?",
    answer: "Não! Você pode aplicar tudo sozinho. Na verdade, começar sozinho é até melhor porque você domina todo o processo antes de eventualmente delegar para uma equipe. Tudo foi pensado para ser simples e direto."
  }, {
    question: "Vai ter gravação?",
    answer: "Não. O workshop é 100% presencial e ao vivo, sem gravação. Isso garante total foco, networking real entre os participantes e aplicação prática imediata. É uma experiência única que não pode ser replicada online."
  }, {
    question: "Já tentei de tudo... isso é diferente?",
    answer: "Entendemos sua frustração. A diferença é que este não é mais um curso teórico. É um método prático, testado e com resultados comprovados. Você vai sair do workshop já aplicando e vendo resultados nos primeiros dias."
  }, {
    question: "Já vendo bem com indicação. Preciso disso?",
    answer: "Se você já vende por indicação, imagina o que pode fazer com um processo estruturado de prospecção! Você vai multiplicar seus resultados e não depender mais apenas da sorte ou do boca a boca. Vai ter controle total sobre suas vendas."
  }];
  return <section className="py-12 px-4">
      <div className="max-w-4xl mx-[20px]">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-gradient">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-card border border-muted/20 rounded-xl overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/10 transition-colors" onClick={() => setOpenQuestion(openQuestion === index ? null : index)}>
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <div className={`transform transition-transform duration-200 ${openQuestion === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-workshop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openQuestion === index && <div className="px-6 pb-4 border-t border-muted/20">
                  <p className="text-muted-foreground pt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};
export default LazyFAQSection;