const CACHE_NAME = 'workshop-elite-v3';
const DYNAMIC_CACHE = 'workshop-elite-dynamic-v3';
const IMAGE_CACHE = 'workshop-images-v3';

// Static assets with cache TTL strategy
const urlsToCache = [
  '/',
  '/src/assets/rodrigo-ana-mobile.png',
  '/src/assets/rodrigo-ana-desktop.png',
  '/src/assets/workshop-elite-logo.png',
  '/src/assets/dr-rafael.png',
  '/src/assets/foto_ana.jpg',
  '/src/assets/foto_rodrigo.jpg',
  '/src/assets/on-office-interior.jpg'
];

// Critical resources with high priority
const criticalResources = [
  '/src/assets/rodrigo-ana-mobile.png',
  '/src/assets/rodrigo-ana-desktop.png'
];

// Enhanced cache TTL settings (in milliseconds)
const CACHE_TTL = {
  images: 30 * 24 * 60 * 60 * 1000, // 30 days
  scripts: 7 * 24 * 60 * 60 * 1000,  // 7 days
  styles: 7 * 24 * 60 * 60 * 1000,   // 7 days
  fonts: 365 * 24 * 60 * 60 * 1000,  // 1 year
  youtube: 24 * 60 * 60 * 1000       // 1 day for YouTube thumbnails
};

self.addEventListener('install', function(event) {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)),
      caches.open(IMAGE_CACHE).then(cache => cache.addAll(criticalResources)),
      caches.open(DYNAMIC_CACHE)
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE && cacheName !== IMAGE_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement cache strategies with TTL
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  const url = new URL(event.request.url);
  
  // Cache-first with TTL for images (including YouTube thumbnails)
  if (url.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg)$/) || url.hostname === 'img.youtube.com') {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          const dateHeader = response.headers.get('date');
          const date = new Date(dateHeader);
          const now = new Date();
          const age = now.getTime() - date.getTime();
          const ttl = url.hostname === 'img.youtube.com' ? CACHE_TTL.youtube : CACHE_TTL.images;
          
          if (age < ttl) {
            return response;
          }
        }
        
        return fetch(event.request).then(function(fetchResponse) {
          if (!fetchResponse || fetchResponse.status !== 200) {
            return fetchResponse;
          }
          
          const responseToCache = fetchResponse.clone();
          const headers = new Headers(responseToCache.headers);
          headers.set('date', new Date().toISOString());
          headers.set('Cache-Control', 'public, max-age=31536000');
          
          const newResponse = new Response(responseToCache.body, {
            status: responseToCache.status,
            statusText: responseToCache.statusText,
            headers: headers
          });
          
          const cacheToUse = url.hostname === 'img.youtube.com' ? DYNAMIC_CACHE : IMAGE_CACHE;
          caches.open(cacheToUse).then(function(cache) {
            cache.put(event.request, newResponse.clone());
          });
          
          return fetchResponse;
        }).catch(function() {
          return response || caches.match('/offline.html');
        });
      })
    );
  }
  // Cache-first for scripts and styles with TTL
  else if (url.pathname.match(/\.(js|css)$/)) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          const dateHeader = response.headers.get('date');
          if (dateHeader) {
            const date = new Date(dateHeader);
            const now = new Date();
            const age = now.getTime() - date.getTime();
            const ttl = url.pathname.endsWith('.js') ? CACHE_TTL.scripts : CACHE_TTL.styles;
            
            if (age < ttl) {
              return response;
            }
          }
        }
        
        return fetch(event.request).then(function(fetchResponse) {
          if (fetchResponse.status === 200) {
            const responseToCache = fetchResponse.clone();
            caches.open(DYNAMIC_CACHE).then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          }
          return fetchResponse;
        }).catch(function() {
          return response;
        });
      })
    );
  }
  // Network-first for other resources
  else {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response.status === 200) {
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
  }
});