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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3b75f6d11235549cc294c5aa3e792eb9"
  },
  {
    "url": "about.html",
    "revision": "7db54d5c902888f0e89403bc9307ff7f"
  },
  {
    "url": "assets/css/0.styles.44f7e77d.css",
    "revision": "17863ffb47abf34be8086829038be229"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fffd0b5d.js",
    "revision": "ed935520b1705a4d4e6937d2575285e5"
  },
  {
    "url": "assets/js/11.c2eda31d.js",
    "revision": "595163f1af7d970f1a22c3e137513bd3"
  },
  {
    "url": "assets/js/12.91f7cbee.js",
    "revision": "e3b854ba1f62b836d206ee0f3e017edf"
  },
  {
    "url": "assets/js/13.d1079d49.js",
    "revision": "17f092de192995da24ae938869f03697"
  },
  {
    "url": "assets/js/14.efd2094a.js",
    "revision": "8b2397ed085068e082b04922d513cacf"
  },
  {
    "url": "assets/js/15.00d7ef23.js",
    "revision": "33617ace758c8593f35354c3a756da25"
  },
  {
    "url": "assets/js/16.dd68896b.js",
    "revision": "673ca71b9e39bebaa1860a34e8fa05c5"
  },
  {
    "url": "assets/js/17.2c01cbb8.js",
    "revision": "ba0a9f2bb0f05d9414e56b689e3e11a9"
  },
  {
    "url": "assets/js/18.04c9f8fc.js",
    "revision": "703b027403f61946770b9b8e8fd90583"
  },
  {
    "url": "assets/js/19.39ecedb2.js",
    "revision": "e562ebfea889d9ac4f88f72001ffef4d"
  },
  {
    "url": "assets/js/2.40c85654.js",
    "revision": "341999e518f9cb42abdad44120764fda"
  },
  {
    "url": "assets/js/20.32fbf246.js",
    "revision": "e07f4b38ac0ec703ca02f5666faeef77"
  },
  {
    "url": "assets/js/21.55bc50fe.js",
    "revision": "faa3987fab631729f2dd96b7dcb90cee"
  },
  {
    "url": "assets/js/22.32a5b1d5.js",
    "revision": "085581589b99bc65a3f56a3e24e6a47f"
  },
  {
    "url": "assets/js/23.6c93781e.js",
    "revision": "868a5faaa736007b4d396c4b3baf69fb"
  },
  {
    "url": "assets/js/24.d457ae38.js",
    "revision": "84afb798b876ef6c8eadd623790815e4"
  },
  {
    "url": "assets/js/25.2bfdeb12.js",
    "revision": "51b766fd042d1b97bce0f36a28470f32"
  },
  {
    "url": "assets/js/26.07a7496c.js",
    "revision": "566c1bb6f6d2b7af717275d15dbb72ab"
  },
  {
    "url": "assets/js/27.34f1e69a.js",
    "revision": "0ccba0eae0d175c40c81e2a427352b85"
  },
  {
    "url": "assets/js/28.6df1800c.js",
    "revision": "7faafa84e277853b075f8a0cd8b12970"
  },
  {
    "url": "assets/js/29.4f312b23.js",
    "revision": "95c9a995463d861c62f3e92c370edeb5"
  },
  {
    "url": "assets/js/3.5d889f77.js",
    "revision": "8b08f679eb1cd8efbb0c546201b919e2"
  },
  {
    "url": "assets/js/4.338c6fd2.js",
    "revision": "0b4014143777262ee1a69abcf6874c7a"
  },
  {
    "url": "assets/js/5.bfd87b6e.js",
    "revision": "497a75bb51c716ddbecd6bf42da283d9"
  },
  {
    "url": "assets/js/6.097d8ca6.js",
    "revision": "f2651ec0cabb3cc10533c541f7c29bae"
  },
  {
    "url": "assets/js/7.ae567e69.js",
    "revision": "06cfd95681724fc49ce98fa2867f224f"
  },
  {
    "url": "assets/js/8.3e84830d.js",
    "revision": "bf9b895683b03e38d267601a2c951743"
  },
  {
    "url": "assets/js/9.b2eac3b9.js",
    "revision": "b45530ac26d17b170096622fa550efac"
  },
  {
    "url": "assets/js/app.23bd849e.js",
    "revision": "e58ace9e57be8934f2c9aca59a3e21ec"
  },
  {
    "url": "demo.html",
    "revision": "f2bb2ab3fd23fb6bdcb74f910628ec49"
  },
  {
    "url": "en/about.html",
    "revision": "a13a62138510b3d1b3da5003ce5ccf6e"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "a5bd50e0ef152a80aaad8a7c2938a5ad"
  },
  {
    "url": "en/guide/config.html",
    "revision": "60bbba0c5b3d3a07fa3efef2dfd84e13"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "2cb4d67c5b3348c3cd0a1d060eb5ebf8"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "6ec08d75d5a3c50875d145cd5ba102e1"
  },
  {
    "url": "en/guide/index.html",
    "revision": "3ebf0578094dd0cd83fc9482d1d045c7"
  },
  {
    "url": "en/guide/page.html",
    "revision": "980941944084e72cd2ad7823c2ee7edf"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "e6a50a0724cbcbf6c125c63480adfb53"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "d56c1264288c85f11e9e670738b829e1"
  },
  {
    "url": "en/index.html",
    "revision": "568a758a9eb4bc0e1089c3359df40c40"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "ff697a1b2f0318b9a0f421c84c79391d"
  },
  {
    "url": "guide/config.html",
    "revision": "5d6a43a7cf988fa8ca194a130d0bec06"
  },
  {
    "url": "guide/faq.html",
    "revision": "6c99283682265cabaf497508475eb889"
  },
  {
    "url": "guide/icon.html",
    "revision": "9277b73b5b35d5b395276d017175842a"
  },
  {
    "url": "guide/index.html",
    "revision": "328151dec6a802bf03f798e79b88214c"
  },
  {
    "url": "guide/page.html",
    "revision": "116f9df3b2b383b0117cee63e06a2914"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "cc2fe43cc27941a359a69b192248fabb"
  },
  {
    "url": "guide/Todo.html",
    "revision": "fd8bf497d65bf5ee9325f87979c64d7d"
  },
  {
    "url": "index.html",
    "revision": "7ce25a9f69a0b8f464e2edd718acff20"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "sponsor.html",
    "revision": "0084b89084787aac13f2d1a7b23d982b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
