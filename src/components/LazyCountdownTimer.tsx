import { lazy, Suspense } from 'react';

const CountdownTimer = lazy(() => import('./CountdownTimer'));

const LazyCountdownTimer = () => {
  return (
    <Suspense fallback={
      <div className="bg-card p-8 rounded-2xl border border-workshop-gold/20 text-center animate-pulse">
        <div className="h-8 bg-muted rounded mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-muted p-2 md:p-4 rounded-xl">
              <div className="h-8 bg-muted-foreground/20 rounded mb-2"></div>
              <div className="h-4 bg-muted-foreground/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    }>
      <CountdownTimer />
    </Suspense>
  );
};

export default LazyCountdownTimer;