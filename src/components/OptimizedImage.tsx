import { useState, useCallback, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = '100vw',
  quality = 85
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const { ref: intersectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  });

  const shouldLoad = priority || isIntersecting;

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div
      ref={intersectionRef as React.RefObject<HTMLDivElement>}
      className={cn(
        'relative overflow-hidden',
        className
      )}
      style={{ width, height }}
    >
      {shouldLoad && !hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            'w-full h-full object-cover'
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
      
      {!isLoaded && !hasError && shouldLoad && (
        <div 
          className="absolute inset-0 loading-placeholder"
          style={{ width, height }}
        />
      )}
      
      {hasError && (
        <div 
          className="w-full h-full bg-muted/20 flex items-center justify-center border border-muted"
          style={{ width, height, minHeight: height || '200px' }}
        >
          <span className="text-muted-foreground text-xs opacity-50">Carregando...</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;