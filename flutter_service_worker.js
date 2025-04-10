'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dc2963ba70c0f88b79f67075446f77db",
"assets/AssetManifest.bin.json": "a732f91719fcac53d8b77c81f02ef3f7",
"assets/AssetManifest.json": "ac67801585620c91bbda35db98e98e1c",
"assets/assets/images/batcom/batcom1.jpg": "9e2fd1e0a38e65118b032c06e8e2867c",
"assets/assets/images/batcom/batcom10.jpg": "4ead52bc803665ed17ed5fcb7ebd45af",
"assets/assets/images/batcom/batcom11.jpg": "798ec81d3b605f9608e6aee833c5cc9c",
"assets/assets/images/batcom/batcom12.jpg": "1f1f5f0b3112ded3a4262087aa8e9e3b",
"assets/assets/images/batcom/batcom13.jpg": "694ecbcfdee39ddc19ba175249a33710",
"assets/assets/images/batcom/batcom2.jpg": "f48a8eb2ec4b2543cfef2a3234fb1c28",
"assets/assets/images/batcom/batcom3.jpg": "0c274c6535cc452493a398411ba4896c",
"assets/assets/images/batcom/batcom4.jpg": "2ced28500d9f8401930890b8da3cfa22",
"assets/assets/images/batcom/batcom5.jpg": "2454f00f441641fe9172bda323c60ea1",
"assets/assets/images/batcom/batcom6.jpg": "8d8e116cc23a625317599c17d3271c28",
"assets/assets/images/batcom/batcom7.jpg": "44c62fa7dc1ed3672c9c347adb353247",
"assets/assets/images/batcom/batcom8.jpg": "d7995ae9fcaa4a10309d8220a77adbb6",
"assets/assets/images/batcom/batcom9.jpg": "cc5f9faa5442e2cb173b140b3755eb41",
"assets/assets/images/batcom.png": "9bfda952c5d9c67ae7a72696830fc29f",
"assets/assets/images/digit.png": "62a8dd510973bc2919d0538695af1d20",
"assets/assets/images/digiteam/Picture1.png": "999d7a4464344497997bd871bc99eee6",
"assets/assets/images/digiteam/Picture10.png": "6b1173b0ccd6fb0bc380ab749b89e201",
"assets/assets/images/digiteam/Picture11.png": "6617011642538ca83ddb0fea21162c87",
"assets/assets/images/digiteam/Picture12.png": "f76bfb95f482e14066e1fd1357933d5b",
"assets/assets/images/digiteam/Picture13.png": "80db98adaa59c8395199d0e296483100",
"assets/assets/images/digiteam/Picture14.png": "8a8cab24b8ac66d75b3058395bdf2839",
"assets/assets/images/digiteam/Picture15.png": "055e2980c6d8788d06137353b3d3d5f9",
"assets/assets/images/digiteam/Picture16.png": "1b1dfa01672989ee37c9e27541de2dd8",
"assets/assets/images/digiteam/Picture17.png": "a06c54d96e1a0620f3ee333c67636c09",
"assets/assets/images/digiteam/Picture18.png": "73cd419052d6a8a4cbb294f661a0e81f",
"assets/assets/images/digiteam/Picture2.png": "ee437f291a10c2347a17cf64e0a11bff",
"assets/assets/images/digiteam/Picture3.png": "193f685baaee3971d0efc4e7888884df",
"assets/assets/images/digiteam/Picture4.png": "4fe5e0f6c5d3bc7a32ad705c1f605196",
"assets/assets/images/digiteam/Picture5.png": "202d6ac9b8d7b1462d1931819f152c01",
"assets/assets/images/digiteam/Picture6.png": "388f7c0b9d1c2faf342eccf68a9f64c2",
"assets/assets/images/digiteam/Picture7.png": "9e962ab5fede6cf76fa9e1c2d2034b8e",
"assets/assets/images/digiteam/Picture8.png": "5621f553694a91aa0ba6f950ba7cbf45",
"assets/assets/images/digiteam/Picture9.png": "a052e3f326c99ffa0983efa7a1118470",
"assets/assets/images/dokumentasi-foto.png": "f93f0b1297d6810ae12786774b39aad7",
"assets/assets/images/fotoprofile.JPG": "87689360ae78eb647fa1edef370eea7c",
"assets/assets/images/instagram.png": "5db55c471abebc28fd2a04613ad4413c",
"assets/assets/images/linkedin.png": "63baa4d9e3e6bbafd85b8c6085bf9ec5",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Dasar%2520Git%2520dengan%2520Github.png": "fec6aac9094c428a4960c6f8d21d06ec",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Dasar%2520Pemrograman%2520Web.png": "97ddbea4b29a297596facd7faae6752c",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Fundamental%2520Aplikasi%2520Android.png": "9a61501a134a311ad7f9db2223272cf6",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Membuat%2520Aplikasi%2520Android%2520dengan%2520Jetpack%2520Compose.png": "c07048c5e7e9ee47f29d2df2e3ca8daa",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Membuat%2520Aplikasi%2520Android%2520untuk%2520Pemula.png": "d32a3916903cb8953eb7ef4d4c46d72e",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Membuat%2520Aplikasi%2520Flutter%2520untuk%2520Pemula.png": "fd9821b94d14ce4f1e290aa41826718d",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Pengembangan%2520Aplikasi%2520Android%2520Intermediate.png": "7cc348c01bfb6e903d74922fb5579e27",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Prinsip%2520Pemrograman%2520SOLID.png": "d277ad74abd9354c68b8b06d61cbab1a",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520UX%2520Design.png": "9024e784335ad2c9fa69eaa4ad5dc33c",
"assets/assets/images/sertifikat/Dicoding%2520Memulai%2520Dasar%2520Pemrograman%2520untuk%2520Menjadi%2520Pengembang%2520Software.png": "022e6ee6ae68203591421fdb28f7aa7b",
"assets/assets/images/sertifikat/Dicoding%2520Memulai%2520Pemrograman%2520dengan%2520Dart.png": "f264a9c725a489ca0ecfac30f8e26b69",
"assets/assets/images/sertifikat/Dicoding%2520Memulai%2520Pemrograman%2520Dengan%2520Kotlin.png": "81c3c34a2c4fd237595b66bb38ccb442",
"assets/assets/images/whatsapp.png": "7611f02494be1e121a6f6a391d3eafdc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "21b5447a893d80c8365c6732b14d566f",
"assets/NOTICES": "e45a26de835ce83799fc0763c40c7fec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0ea6ee823c1b1332918c14c3acbaa79d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b4a9d8ff115400ec6caf33e5332674b",
"/": "9b4a9d8ff115400ec6caf33e5332674b",
"main.dart.js": "2a81d7373ceefd255b8f87e818626bc1",
"manifest.json": "4d90c148641ede7e3218c8f1ae22dbe5",
"version.json": "4d96d886d8d61f8a1d29a020bdfd9fa8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
