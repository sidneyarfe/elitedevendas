const CACHE_NAME = 'workshop-elite-v1';
const urlsToCache = [
  '/',
  '/src/assets/rodrigo-ana-mobile.png',
  '/src/assets/rodrigo-ana-desktop.png',
  '/src/assets/workshop-elite-logo.png',
  '/src/assets/dr-rafael.png'
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