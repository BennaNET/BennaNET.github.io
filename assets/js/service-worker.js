const CACHE = "bennaNET-cache-v1";

const FILES = [
  "/",
  "/index.html",
  "/search/index.html",
  "/assets/css/main.css"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
