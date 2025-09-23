const CACHE_NAME = 'workshop-elite-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

const urlsToCache = [
  '/',
  '/src/assets/rodrigo-ana-mobile.png',
  '/src/assets/rodrigo-ana-desktop.png',
  '/src/assets/workshop-elite-logo.png',
  '/src/assets/dr-rafael.png',
  '/src/assets/foto_ana.jpg',
  '/src/assets/foto_rodrigo.jpg'
];

const criticalResources = [
  '/src/assets/rodrigo-ana-mobile.png',
  '/src/assets/rodrigo-ana-desktop.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(urlsToCache)),
      caches.open(DYNAMIC_CACHE)
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', function(event) {
  const { request } = event;
  const url = new URL(request.url);

  // Handle critical resources with cache-first strategy
  if (criticalResources.some(resource => url.pathname.includes(resource))) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        return cachedResponse || fetch(request).then(networkResponse => {
          const responseClone = networkResponse.clone();
          caches.open(STATIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return networkResponse;
        });
      })
    );
    return;
  }

  // Handle other resources with network-first strategy
  event.respondWith(
    fetch(request)
      .then(networkResponse => {
        // Cache successful responses
        if (networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache
        return caches.match(request);
      })
  );
});