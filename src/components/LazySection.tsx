import { lazy, Suspense, ComponentType } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Skeleton } from './ui/skeleton';

interface LazySectionProps {
  componentLoader: () => Promise<{ default: ComponentType<any> }>;
  componentProps?: any;
  rootMargin?: string;
  skeletonHeight?: string;
}

const LazySection = ({ 
  componentLoader, 
  componentProps = {},
  rootMargin = '300px',
  skeletonHeight = 'h-96'
}: LazySectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin,
    triggerOnce: true
  });

  return (
    <section ref={ref}>
      {isIntersecting ? (
        <Suspense fallback={
          <div className={`w-full ${skeletonHeight} animate-pulse bg-muted/20`}>
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-6">
              <Skeleton className="h-12 w-3/4 mx-auto" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-16 w-1/2 mx-auto" />
            </div>
          </div>
        }>
          {(() => {
            const LazyComponent = lazy(componentLoader);
            return <LazyComponent {...componentProps} />;
          })()}
        </Suspense>
      ) : (
        <div className={`w-full ${skeletonHeight}`} />
      )}
    </section>
  );
};

export default LazySection;
