const CACHE = "vynce-cache-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => k !== CACHE && caches.delete(k)))),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Skip non-GET, dev server, and extensions
  if (
    req.method !== "GET" ||
    req.url.includes("hot-update") ||
    req.url.startsWith("chrome-extension")
  ) {
    return;
  }

  // 🔵 Network-first for navigations (SPA routes)
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          caches.open(CACHE).then((c) => c.put(req, res.clone()));
          return res;
        })
        .catch(() => caches.match(req).then((res) => res || caches.match("/weathora/index.html"))),
    );
    return;
  }

  // 🔵 Cache-first for everything else (JS, CSS, images, fonts)
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req)
        .then((res) => {
          if (res.ok) {
            caches.open(CACHE).then((c) => c.put(req, res.clone()));
          }
          return res;
        })
        .catch(() => cached);
    }),
  );
});