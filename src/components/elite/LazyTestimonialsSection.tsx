import LazyYouTube from "../LazyYouTube";

const LazyTestimonialsSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-gradient">
          Depoimentos Reais de Quem Aplicou
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Depoimento Dirceu */}
          <div className="bg-card p-6 rounded-2xl border border-muted/20">
            <div className="mb-4">
              <LazyYouTube 
                videoId="B0cORHhpoQE"
                title="Depoimento Dirceu - Corretor de Imóveis"
                className="rounded-lg"
              />
            </div>
            
            <blockquote className="text-lg font-medium mb-4 italic">
              "O principal diferencial do método do Rodrigo e Ana foi o RESULTADO"
            </blockquote>
            
            <p className="text-workshop-gold font-medium">– Dirceu, corretor de imóveis</p>
          </div>

          {/* Depoimento Milena */}
          <div className="bg-card p-6 rounded-2xl border border-muted/20">
            <div className="mb-4">
              <LazyYouTube 
                videoId="gNn-2u2ZhzU"
                title="Depoimento Milena"
                className="rounded-lg"
              />
            </div>
            
            <blockquote className="text-lg font-medium mb-4 italic">
              "Hoje nós conseguimos rentabilizar muito mais nossos leads."
            </blockquote>
            
            <p className="text-workshop-gold font-medium">– Milena</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LazyTestimonialsSection;