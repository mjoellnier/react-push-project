/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "./pushHandler.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "c3f7e1c89ea96ca3d1d13a13e2dcf6f1"
  },
  {
    "url": "index.html",
    "revision": "706e18a65cc86565a8bb1a9b515d4300"
  },
  {
    "url": "manifest.json",
    "revision": "e4fa7e8905845295be76901c571332f8"
  },
  {
    "url": "pushHandler.js",
    "revision": "352da00e3cf508c2766359e0ea556bd5"
  },
  {
    "url": "static/css/main.3377d92b.chunk.css",
    "revision": "4da809dede5f7f6093a785ddb952ba5d"
  },
  {
    "url": "static/js/2.9c0a370a.chunk.js",
    "revision": "7d23e2e2e7f8a6dde6c6100e37573263"
  },
  {
    "url": "static/js/main.920137e1.chunk.js",
    "revision": "1dc7d245aa97591c502fc98b7c422fd4"
  },
  {
    "url": "static/js/runtime-main.c8496598.js",
    "revision": "c94cb9dfdb9fcd217cd540dffcb080e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
