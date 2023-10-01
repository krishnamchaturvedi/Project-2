const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/global.css',
  '/build/bundle.css',
  '/build/bundle.js',
  '/favicon.png', // Make sure to include all necessary assets
];

// Install the service worker and cache the required assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate the service worker and remove outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve cached assets or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        return response;
      }

      // Fetch from network if not found in cache
      return fetch(event.request);
    })
  );
});
