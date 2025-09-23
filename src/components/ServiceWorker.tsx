import { useEffect } from 'react';

const ServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);
        } catch (registrationError) {
          console.log('SW registration failed: ', registrationError);
        }
      };

      registerSW();
    }
  }, []);

  return null;
};

// Simple service worker content
export const serviceWorkerContent = `
const CACHE_NAME = 'workshop-elite-v1';
const urlsToCache = [
  '/',
  '/src/assets/rodrigo-ana-mobile.png',
  '/src/assets/rodrigo-ana-desktop.png',
  '/src/assets/workshop-elite-logo.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
`;

export default ServiceWorker;