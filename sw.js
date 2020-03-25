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
    "revision": "787d1d9b5200e6c1d9de169679f87018"
  },
  {
    "url": "index.html",
    "revision": "bd08129b932fd9359a40d781e89f53fe"
  },
  {
    "url": "manifest.json",
    "revision": "e4fa7e8905845295be76901c571332f8"
  },
  {
    "url": "static/css/main.9e630a28.chunk.css",
    "revision": "90832bc1e9ada2da1cf0add3d09e723d"
  },
  {
    "url": "static/js/2.1a209e6d.chunk.js",
    "revision": "b27bc0cc3fa16d904e884b8616723661"
  },
  {
    "url": "static/js/main.8158e981.chunk.js",
    "revision": "7821bdfbbd26f689985d5bc6f795a713"
  },
  {
    "url": "static/js/runtime-main.c8496598.js",
    "revision": "c94cb9dfdb9fcd217cd540dffcb080e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
