import { useState, useCallback } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

const LazyYouTube = ({ videoId, title, className }: LazyYouTubeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Use sddefault.jpg for smaller file size (640x480 vs 1280x720)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;

  if (!isLoaded) {
    return (
      <div
        className={cn(
          "relative aspect-video rounded-xl overflow-hidden cursor-pointer group bg-muted",
          className
        )}
        onClick={handleLoad}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("aspect-video rounded-xl overflow-hidden", className)}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default LazyYouTube;