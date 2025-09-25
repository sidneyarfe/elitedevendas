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
            <div className="relative mb-4">
              <img 
                src="https://img.youtube.com/vi/B0cORHhpoQE/maxresdefault.jpg"
                alt="Depoimento Dirceu - Corretor de Imóveis"
                className="w-full aspect-video object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 ml-1 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <blockquote className="text-lg font-medium mb-4 italic">
              "O principal diferencial do método do Rodrigo e Ana foi o RESULTADO"
            </blockquote>
            
            <p className="text-workshop-gold font-medium">– Dirceu, corretor de imóveis</p>
          </div>

          {/* Depoimento Milena */}
          <div className="bg-card p-6 rounded-2xl border border-muted/20">
            <div className="relative mb-4">
              <img 
                src="https://img.youtube.com/vi/gNn-2u2ZhzU/maxresdefault.jpg"
                alt="Depoimento Milena"
                className="w-full aspect-video object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 ml-1 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
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