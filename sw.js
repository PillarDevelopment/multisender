importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f207cdc75184de60682.js",
    "revision": "59632592e7345ca37f6342f8bf3cb240"
  },
  {
    "url": "/_nuxt/1d4c49e2441208d7a916.js",
    "revision": "f72d3b02999877d87cc3beb73e0b71a8"
  },
  {
    "url": "/_nuxt/1dc46a33eaf3da611bf5.js",
    "revision": "ead9ee5cbfbfeef171a4383b3e22539f"
  },
  {
    "url": "/_nuxt/2d7cb982794b279d66bf.js",
    "revision": "12521325220a1c482479735b6041428a"
  },
  {
    "url": "/_nuxt/2ea2db3f4c9a6fb8c50e.js",
    "revision": "a4d69c5b2692413572af8979aa72c281"
  },
  {
    "url": "/_nuxt/37ecab0773c674dd873e.js",
    "revision": "453c770d10b2c7e7ecd3cc3cf872d5dd"
  },
  {
    "url": "/_nuxt/4e6a7a03cb75e3b6f042.js",
    "revision": "87c2bacf1c47f4c61b937e22d7320a5d"
  },
  {
    "url": "/_nuxt/83fb4df022018960fbec.js",
    "revision": "071782553e7eb57193e8e7d943fc88ef"
  },
  {
    "url": "/_nuxt/8dfd2089cbe21576fd7f.js",
    "revision": "484d35921b8b9c3aec8cf57846928283"
  },
  {
    "url": "/_nuxt/d1cfaf71211351a5f543.js",
    "revision": "bc302bd56e8d4c102e17860648ecfc71"
  },
  {
    "url": "/_nuxt/d98a2b68991cae94e160.js",
    "revision": "04320c31a9f8c63a0101b907565a3bf5"
  },
  {
    "url": "/_nuxt/d99ba1c1f00470270a3a.js",
    "revision": "1d423811094337f15043f7addf6e2ef9"
  },
  {
    "url": "/_nuxt/eb5c8a83607b9b003490.js",
    "revision": "1fb9cdce45a698b8d668f71bbf69e538"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
