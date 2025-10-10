import { memo } from 'react';
import LazyYouTube from '@/components/LazyYouTube';

const TestimonialsSection = memo(() => {
  const testimonials = [
    {
      videoId: 'YWD6LsS39iQ',
      name: 'Dirceu',
      role: 'Corretor',
      quote: 'O principal diferencial do método do Rodrigo e da Ana foi o RESULTADO.'
    },
    {
      videoId: 'YWD6LsS39iQ',
      name: 'Milena',
      role: 'Empresária',
      quote: 'Hoje geramos vendas diárias só com WhatsApp.'
    },
    {
      videoId: 'YWD6LsS39iQ',
      name: 'João',
      role: 'Dono de clínica',
      quote: 'Dobrei meu faturamento em 30 dias.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-workshop-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-foreground">
          💬 Depoimentos reais
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border border-muted/10 hover:border-workshop-gold/30"
            >
              <div className="mb-4">
                <LazyYouTube 
                  videoId={testimonial.videoId}
                  title={`Depoimento ${testimonial.name} - ${testimonial.role}`}
                  className="rounded-t-2xl"
                />
              </div>
              
              <div className="p-6">
                <p className="text-lg md:text-xl font-bold text-foreground mb-4 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-black text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm md:text-base text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-card p-6 md:p-8 rounded-2xl border border-muted/10">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Esses são apenas alguns dos empresários de Belém que aplicaram o método e{' '}
            <span className="text-gradient font-black">dobraram suas vendas</span> usando apenas o WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
