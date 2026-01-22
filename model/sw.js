const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  'ui2.html'
];

// Instala o service worker e faz cache dos arquivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Responde com arquivos em cache quando offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
