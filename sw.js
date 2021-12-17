const cacheName ="calc"
const staticAssets= [
  './',
  './index.html',
  './style.css',
  './main.js',
  './manifest.json'
]

self.addEventListener('install', async e =>{
  const cache = await caches.open(cacheName)
  await cache.addAll(staticAssets)
  return self.skipWaiting()
})
self.addEventListener('activate', e=>{
  self.clients.claim()
})
self.addEventListener('fetch', async e=>{
  const req= e.request
  const url= new URL(req.url)

  if (url.origin === location.origin){
    e.respondWidth(cacheFirst(req))
  } else{
    e.respondWidth(networkAndCache(req))
  }
})