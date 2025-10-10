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
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gradient">
          💬 DEPOIMENTOS DE QUEM JÁ APLICOU
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="mb-4">
                <LazyYouTube 
                  videoId={testimonial.videoId}
                  title={`Depoimento ${testimonial.name} - ${testimonial.role}`}
                  className="rounded-t-2xl"
                />
              </div>
              
              <div className="p-6">
                <p className="text-lg font-bold text-foreground mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esses são apenas alguns dos empresários de Belém que aplicaram o método e{' '}
            <span className="text-gradient font-bold">dobraram suas vendas</span> usando apenas o WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
