import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

const LazyYouTube = ({ videoId, title, className }: LazyYouTubeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div 
      ref={containerRef}
      className={cn("aspect-video rounded-xl overflow-hidden relative bg-gray-900", className)}
    >
      {!isLoaded ? (
        <>
          {isVisible && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={loadVideo}
              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
              aria-label={`Reproduzir vídeo: ${title}`}
            >
              <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
            </button>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&iv_load_policy=3&autoplay=1`}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyYouTube;