import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const EliteVendasV4FormModal = lazy(() => import('./EliteVendasV4FormModal'));

interface LazyEliteVendasV4FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LazyEliteVendasV4FormModal = ({ isOpen, onClose }: LazyEliteVendasV4FormModalProps) => {
  if (!isOpen) return null;

  return (
    <Suspense fallback={
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card p-8 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <Skeleton className="h-8 w-3/4 mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-14 w-full mt-6" />
          </div>
        </div>
      </div>
    }>
      <EliteVendasV4FormModal isOpen={isOpen} onClose={onClose} />
    </Suspense>
  );
};

export default LazyEliteVendasV4FormModal;
