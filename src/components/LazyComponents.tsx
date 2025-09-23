import { lazy } from 'react';

// Lazy load non-critical components
export const LeadFormModal = lazy(() => import('./LeadFormModal').then(module => ({ default: module.LeadFormModal })));
export const Accordion = lazy(() => import('./ui/accordion').then(module => ({ default: module.Accordion })));
export const AccordionContent = lazy(() => import('./ui/accordion').then(module => ({ default: module.AccordionContent })));
export const AccordionItem = lazy(() => import('./ui/accordion').then(module => ({ default: module.AccordionItem })));
export const AccordionTrigger = lazy(() => import('./ui/accordion').then(module => ({ default: module.AccordionTrigger })));
export const Card = lazy(() => import('./ui/card').then(module => ({ default: module.Card })));
export const CardContent = lazy(() => import('./ui/card').then(module => ({ default: module.CardContent })));
export const Badge = lazy(() => import('./ui/badge').then(module => ({ default: module.Badge })));