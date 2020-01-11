
let cacheName = 'cache_v7';
const listOfPages = [
    './index.html',
    './README.md',
    './restaurant.html',
    './js/main.js',
    './js/dbhelper.js',
    './js/restaurant_info.js',
    './data/restaurants.json',
    './css/styles.css',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg' 
]

// Calling install event
self.addEventListener('install', event => {
  event.waitUntil(preCache());
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== cacheName ) {
              console.log('deleted old cache success')
              return caches.delete(cache);
              
            }
          })
        )
      })
  )
})

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found', event.request.url, 'in cache')
          return response;
        }
        console.log('network request for ', event.request.url)
        return fetch(event.request)
          
      }) .catch(error => {

      })
  )
})


function preCache() {
  return caches
    .open(cacheName)
    .then(cache => {
      cache.addAll(listOfPages)
      console.log('Cached it successfully');
    })
    .then(() => skipWaiting())
    .catch(error => console.log(`An error occured with caching ${error}`))
}

