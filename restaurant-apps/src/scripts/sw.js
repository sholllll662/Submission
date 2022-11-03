import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime'

const assetsToCache = [
    './',
    './icons/restaurant-16x16.png',
    './icons/restaurant-24x24.png',
    './icons/restaurant-32x32.png',
    './icons/restaurant-64x64.png',
    './icons/restaurant-128x128.png',
    './icons/restaurant-256x256.png',
    './icons/restaurant-512x512.png',
    './index.html',
    './app.bundle.js',
    './app.webmanifest',
    './sw.bundle.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache  ]))
});

self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache())
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request))
});