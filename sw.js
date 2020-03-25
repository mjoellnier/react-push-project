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
    "revision": "1cd751ab038e65159a89cfbff46c7869"
  },
  {
    "url": "index.html",
    "revision": "7f3b103161bec43cae7febb667ceffc8"
  },
  {
    "url": "manifest.json",
    "revision": "fc5f0986353ccd1fb360f9e99ffd6916"
  },
  {
    "url": "static/css/main.9e630a28.chunk.css",
    "revision": "90832bc1e9ada2da1cf0add3d09e723d"
  },
  {
    "url": "static/js/2.d52f34c4.chunk.js",
    "revision": "25f0cd9afe987218051043be12d719b6"
  },
  {
    "url": "static/js/main.6c625baf.chunk.js",
    "revision": "f2fd81a32910f35f4e592c8736d346a7"
  },
  {
    "url": "static/js/runtime-main.c8496598.js",
    "revision": "c94cb9dfdb9fcd217cd540dffcb080e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
