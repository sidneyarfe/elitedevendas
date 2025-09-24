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

  // Generate responsive srcSet for WebP support
  const generateSrcSet = (baseSrc: string) => {
    const extension = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${extension}`, '');
    
    // For WebP support, we'd normally generate different sizes
    // For now, we'll use the original image but with optimized loading
    return baseSrc;
  };

  return (
    <div
      ref={intersectionRef as React.RefObject<HTMLDivElement>}
      className={cn(
        'relative overflow-hidden',
        !isLoaded && 'image-placeholder',
        className
      )}
      style={{ width, height }}
    >
      {shouldLoad && (
        <>
          {!hasError ? (
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              className={cn(
                'transition-opacity duration-300 will-change-transform',
                isLoaded ? 'opacity-100' : 'opacity-0',
                'w-full h-full object-cover'
              )}
              onLoad={handleLoad}
              onError={handleError}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              style={{
                contentVisibility: 'auto',
                containIntrinsicSize: width && height ? `${width}px ${height}px` : 'auto'
              }}
            />
          ) : (
            <div 
              className="w-full h-full bg-muted flex items-center justify-center"
              style={{ width, height }}
            >
              <span className="text-muted-foreground text-sm">Imagem não encontrada</span>
            </div>
          )}
        </>
      )}
      
      {!isLoaded && !hasError && shouldLoad && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          style={{ width, height }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;