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
    "revision": "a131cef832b1b0470b8fafd3391b1da2"
  },
  {
    "url": "index.html",
    "revision": "4fb73471c884cbd6bb479d8d112630e8"
  },
  {
    "url": "manifest.json",
    "revision": "e4fa7e8905845295be76901c571332f8"
  },
  {
    "url": "pushHandler.js",
    "revision": "3ce869a2611ef9b4408e1376b1784e56"
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
    "url": "static/js/main.06018b15.chunk.js",
    "revision": "a7e188a0aed516b3ee99078a55c702af"
  },
  {
    "url": "static/js/runtime-main.c8496598.js",
    "revision": "c94cb9dfdb9fcd217cd540dffcb080e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
