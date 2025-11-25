const CACHE_NAME = 'frost-checker-cache-v1';
const urlsToCache = [
'./',
'./index.html',
'./manifest.json',
// add your CSS, JS files if separate
];

self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});

