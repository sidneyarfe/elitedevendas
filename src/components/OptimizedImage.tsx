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

  // Generate WebP sources for better compression
  const generateWebPSrc = (originalSrc: string) => {
    // For static assets, try to use WebP if available
    const extension = originalSrc.split('.').pop();
    if (extension && ['jpg', 'jpeg', 'png'].includes(extension.toLowerCase())) {
      return originalSrc.replace(`.${extension}`, '.webp');
    }
    return originalSrc;
  };

  // Calculate aspect ratio for consistent dimensions
  const aspectRatio = width && height ? height / width : undefined;

  return (
    <div
      ref={intersectionRef as React.RefObject<HTMLDivElement>}
      className={cn(
        'relative overflow-hidden gpu-accelerated',
        !isLoaded && !shouldLoad && 'image-placeholder',
        className
      )}
      style={{ 
        width, 
        height,
        aspectRatio: aspectRatio ? `${width}/${height}` : undefined,
        minHeight: height || 'auto'
      }}
    >
      {shouldLoad && (
        <>
          {!hasError ? (
            <picture className="w-full h-full">
              <source 
                srcSet={generateWebPSrc(src)} 
                type="image/webp"
                sizes={sizes}
              />
              <img
                ref={imgRef}
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes={sizes}
                className={cn(
                  'transition-opacity duration-300 will-change-auto',
                  isLoaded ? 'opacity-100' : 'opacity-0',
                  'w-full h-full object-cover'
                )}
                onLoad={handleLoad}
                onError={handleError}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : 'auto'}
                style={{
                  contentVisibility: 'auto',
                  containIntrinsicSize: width && height ? `${width}px ${height}px` : 'auto'
                }}
              />
            </picture>
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
          style={{ 
            width, 
            height,
            aspectRatio: aspectRatio ? `${width}/${height}` : undefined
          }}
        />
      )}
      
      {/* Placeholder with fixed dimensions to prevent layout shift */}
      {!shouldLoad && (
        <div 
          className="w-full h-full bg-muted/50"
          style={{ 
            width, 
            height,
            aspectRatio: aspectRatio ? `${width}/${height}` : undefined,
            minHeight: height || 400
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;