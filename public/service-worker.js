//Installation
//Waiting
//Activation


const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    'manifest.webmanifest',
    '/dist/bundle.js',
];

// const CACHE_NAME = 'static-cache-v2';
// const DATA_CACHE_NAME = 'data-cache-v1';
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';


//Install Event //caches is a global varible so it doesn't need defining
self.addEventListener('install', (event) => {
     // pre cache image data --- see if this is needed for api/transaction
//   evt.waitUntil(
//     caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/images"))
//   );
  event.waitUntil( //pre cache the transation data based on the api/transactions route
    caches.open(RUNTIME).then(cache => cache.add("/api/transactions"))
  );

  event.waitUntil( //wait until our pre-cache or static cache has opened, then add those files to cache
    caches.open(PRECACHE).then(cache => {
    return cache.addAll(FILES_TO_CACHE);
    })
  );

 self.skipWaiting(); //waiting until previous service-working has been removed
  
});

// Activate Event (handler that deletes all old caches)
self.addEventListener('activate', (event) => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {  //Delete all other cahces that may
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
      })
      .then((deleteList) => {
        return Promise.all(
            deleteList.map((deleteCache) => {
            return caches.delete(deleteCache);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});


//fetch
self.addEventListener('fetch', (event) => {
    //cache successful events 
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then((cache) => {
          return fetch(event.request).then((response) => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});

