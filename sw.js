// Service Worker for Pixel Academy PWA
const CACHE_NAME = 'pixel-academy-v1';
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
  '/favicon/favicon.ico',
  '/favicon/favicon-32x32.png',
  '/favicon/favicon-16x16.png',
  '/favicon/android-chrome-192x192.png',
  '/favicon/android-chrome-512x512.png',
  '/favicon/apple-touch-icon-180x180.png'
];

// Install service worker - cache core assets
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

// Activate service worker - clean up old caches
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

// Fetch from cache first, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(networkResponse => {
          // Don't cache non-successful responses
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          // Cache the new resource
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
      .catch(() => {
        // Offline fallback for HTML pages
        if (event.request.destination === 'document') {
          return new Response(`
            <!DOCTYPE html>
            <html>
            <head><title>Offline - Pixel Academy</title>
            <style>
              body { font-family: 'Inter', sans-serif; text-align: center; padding: 50px; background: #f5f5f7; }
              .offline-icon { font-size: 4rem; color: #2c3e50; margin-bottom: 20px; }
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