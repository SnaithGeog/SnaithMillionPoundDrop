const CACHE_VERSION = "v3.0.0-storyboard";
const CACHE_STATIC = `static-${CACHE_VERSION}`;
const CACHE_RUNTIME = `runtime-${CACHE_VERSION}`;

const PRECACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./intro.mp3",
  "./game.mp3",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_STATIC);
    await cache.addAll(PRECACHE);
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => ![CACHE_STATIC, CACHE_RUNTIME].includes(k)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

function isNav(req){
  return req.mode === "navigate" || (req.method === "GET" && (req.headers.get("accept") || "").includes("text/html"));
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  if (isNav(req)){
    event.respondWith((async () => {
      try{
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE_RUNTIME);
        cache.put("./index.html", fresh.clone());
        return fresh;
      }catch{
        const cache = await caches.open(CACHE_STATIC);
        return (await cache.match("./index.html")) || new Response("Offline", {status:503});
      }
    })());
    return;
  }

  const url = new URL(req.url);

  if (url.origin === self.location.origin && (url.pathname.endsWith(".mp3") || url.pathname.endsWith(".wav"))){
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_STATIC);
      const cached = await cache.match(req);
      if (cached) return cached;
      try{
        const resp = await fetch(req);
        cache.put(req, resp.clone());
        return resp;
      }catch{
        return new Response("", {status:503});
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_RUNTIME);
    const cached = await cache.match(req);
    if (cached) return cached;
    try{
      const resp = await fetch(req);
      cache.put(req, resp.clone());
      return resp;
    }catch{
      return new Response("", {status:503});
    }
  })());
});
