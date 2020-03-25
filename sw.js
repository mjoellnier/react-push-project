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
    "revision": "8d3e0a6641167ae52d6a1df028d5bd7a"
  },
  {
    "url": "index.html",
    "revision": "9ab620686c1aff752e3669986e7704d4"
  },
  {
    "url": "manifest.json",
    "revision": "3a5122a5929333777a9a30061641523a"
  },
  {
    "url": "static/css/main.5f361e03.chunk.css",
    "revision": "1472653e7cd5f55fc8eabda93770382e"
  },
  {
    "url": "static/js/2.3e9221e2.chunk.js",
    "revision": "fc16233254790cb4115508be81f37297"
  },
  {
    "url": "static/js/main.3278f862.chunk.js",
    "revision": "eaef6e48c8341043c22679e8b966e054"
  },
  {
    "url": "static/js/runtime-main.c8496598.js",
    "revision": "c94cb9dfdb9fcd217cd540dffcb080e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
