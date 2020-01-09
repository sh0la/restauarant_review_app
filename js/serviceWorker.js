
let cacheName = 'cache_v1';
const listOfFiles = [
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

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        cache.addAll(listOfFiles)
      .catch(error => console.log(`An error occured with caching ${error}`))
      })
  )
})

