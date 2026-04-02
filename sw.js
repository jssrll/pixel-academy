// Pixel Academy PWA Service Worker
const CACHE_NAME = 'pixel-academy-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/script.js',
  '/js/books-database.js',
  '/js/ai-tools.js',
  '/js/minsu-portal.js',
  '/js/settings.js',
  '/manifest.json',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

// Install event - cache core assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Pixel Academy...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching core assets');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('[Service Worker] Cache failed:', err))
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Pixel Academy...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
      .catch(() => {
        if (event.request.destination === 'document') {
          return new Response(`
            <!DOCTYPE html>
            <html>
            <head><title>Offline - Pixel Academy</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: 'Inter', sans-serif; text-align: center; padding: 50px; background: #f5f5f7; margin: 0; }
              .offline-icon { font-size: 4rem; color: #2c3e50; margin-bottom: 20px; }
              button { background: #2c3e50; color: white; border: none; padding: 12px 24px; border-radius: 30px; cursor: pointer; margin-top: 20px; }
            </style>
            </head>
            <body>
              <div class="offline-icon">📚</div>
              <h2>You're Offline</h2>
              <p>Please check your internet connection to access Pixel Academy resources.</p>
              <button onclick="window.location.reload()">Retry</button>
            </body>
            </html>
          `, { headers: { 'Content-Type': 'text/html' } });
        }
        return new Response('Offline - Resource not available', { status: 503 });
      })
  );
});