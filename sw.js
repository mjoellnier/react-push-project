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
    "revision": "1e6f1017067ca7247eed83f95ae7640d"
  },
  {
    "url": "index.html",
    "revision": "d6c4609e848645b2415fb04b6da79af6"
  },
  {
    "url": "manifest.json",
    "revision": "e4fa7e8905845295be76901c571332f8"
  },
  {
    "url": "pushHandler.js",
    "revision": "f5cd16bd6468412a0f5d3e0a9d3f6d38"
  },
  {
    "url": "static/css/main.c97fe719.chunk.css",
    "revision": "6c6e5c6cc8e57f9b4d3e9e44dcf97e12"
  },
  {
    "url": "static/js/2.9c0a370a.chunk.js",
    "revision": "7d23e2e2e7f8a6dde6c6100e37573263"
  },
  {
    "url": "static/js/main.5a681e2b.chunk.js",
    "revision": "52dd48104c7e7157ca19866b239dd6aa"
  },
  {
    "url": "static/js/runtime-main.c8496598.js",
    "revision": "c94cb9dfdb9fcd217cd540dffcb080e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
