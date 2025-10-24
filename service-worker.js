const CACHE_NAME = 'conect-wifi-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/components/Header.js',
  '/components/Hero.js',
  '/components/Features.js',
  '/components/Plans.js',
  '/components/HowItWorks.js',
  '/components/Testimonials.js',
  '/components/CTA.js',
  '/components/Footer.js',
  '/components/ContactModal.js',
  '/components/Alert.js',
  '/components/ReviewsModal.js'
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