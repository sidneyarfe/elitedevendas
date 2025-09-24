import { lazy, Suspense } from 'react';

const LeadFormModal = lazy(() => import('./LeadFormModal').then(module => ({ default: module.LeadFormModal })));

interface LazyLeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LazyLeadFormModal = ({ isOpen, onClose }: LazyLeadFormModalProps) => {
  if (!isOpen) return null;

  return (
    <Suspense fallback={
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card p-6 rounded-lg max-w-md w-full animate-pulse">
          <div className="h-6 bg-muted rounded mb-4"></div>
          <div className="space-y-4">
            <div className="h-10 bg-muted rounded"></div>
            <div className="h-10 bg-muted rounded"></div>
            <div className="h-10 bg-muted rounded"></div>
            <div className="h-10 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    }>
      <LeadFormModal isOpen={isOpen} onClose={onClose} />
    </Suspense>
  );
};

export default LazyLeadFormModal;