'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e04780f9c956060ff6436d804ceb5d89",
".git/config": "5b7f6d6868f123a029f1dbe11f1ec0da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "a8668dffbf10d5577f44eea04eecae49",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ede70871c7ad0bc08bbd1db9ffd88d6",
".git/logs/refs/heads/main": "96ce8e2dc2bf526300c26330d6d05fd9",
".git/logs/refs/heads/master": "fa917b1743359f75165fa23a61e2d40c",
".git/logs/refs/remotes/origin/main": "88076b718613db4982fa3216e7db7c85",
".git/objects/06/a5abd70d8f68547a2fd66c098c041bcb860865": "34d70d3ec919ca17c5ab6363ae40c9cf",
".git/objects/0b/58868630fe70629092b8d8bc98eb75f262d50f": "ec7b6676603a4bcbe309b0759305aad5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/15/8b1becc9b4640c37eea09a8783550d7364627f": "ebe449de9899e69d4a7247564989420b",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/19/61870d44523f8ab5fc3b57365fd06b4c27b6f8": "c6d45ff7c3196cd2217cb3d6fef80076",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/4142fb41643a666443b6ad549ae7106c44b5be": "028bfb37849b731effe1c8e26e4b768b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2c/78b9c409201b9f278ec7b538818a42195487a6": "b9f79735441f80741dda41f09ebc2327",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/30/4abc00d1293c5158d455e9d35afa4c9605f4b4": "666f0c3dcbb4dbe639f4c25e937d5f8b",
".git/objects/38/4ff45f80a0b6f8b17cedbd61137810efd15d74": "25c557cd84d01c429e4f298195f71bdf",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/4d/13c6fbb25152b1875d9857a0d575119697bc86": "e5542d2f898e82e42a22037276a7fdbd",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/ff3f1d89c360e1d7676b87056a2be5de0aea75": "d849f5905e542e612e632eb9f4872faa",
".git/objects/4f/085c84f9da98a6ada54e76f3db0186e00ca77f": "0c827ecf815c3f1b3594f28d36137822",
".git/objects/4f/41a4534ca4a3b8ae7aceb2b5d322ca9b3a7879": "20a7c067cf9ca136b68668ea1173274b",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/4c64cc4bf1b009f9b52a7ce29d341852b75316": "1b5ba2c85176cd868a56eb949db8cdfa",
".git/objects/5a/9a375d3df13629fa9411d989ac372e3132c385": "400341afc47e1d349a2f0128b6ddaed7",
".git/objects/5b/d69010235108094cd8b90942c8b84fcc260970": "940ee9ccde7b85d76d8cced907c3d8ff",
".git/objects/5c/34de450073d8c848a23dfefb6f9f8bc200acaf": "9b97dc5a80921674092e9c81e1e25acb",
".git/objects/64/91f876f8a4b8737905441475926950de06410c": "7ccd0e090e6fe15fddf550620b82141d",
".git/objects/69/f5db7e906b3b5c93bb152e4c1915ba2fb5f41e": "d2612511cba7ea890ad9f70df04f7e5d",
".git/objects/6d/49da52f076dbf5e8cf477c88254beaba52500b": "f61d70706bb60c51ebbe5ef99bd8236b",
".git/objects/75/9348c74a64f369a9882bfd3a06c70559219d0a": "b326cb793c8d5bbf2392203e2f3acdd6",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/28b184fb4e0d1772475bbb53b1771bf5ff1c45": "444bf445851783736360c487597bc5b7",
".git/objects/80/6d8bf065445948997d6d24c415a576a6b7508f": "19dce031a18f83d5fa8365d888bf0130",
".git/objects/80/ab8e3b11242071612e9e89e9eb4a98d949038f": "9fc533de6f3d4d2d5547443f6c0688f3",
".git/objects/82/7005304a91951a3aa91aceea317520f6110a70": "b0b5269a02692807d80a42340c823cb0",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8f/a2650ae2e8ff0289ea0e2c0724fef4ea4290da": "eaaeeec339aff0eac93675fc7e7f4c8c",
".git/objects/95/710546c15786e52c6fe11721f1eb455da7e856": "1ffb730c0766aeb7b8b5212514a46046",
".git/objects/97/42328e9740b2799196bdb8d1a3ce68266a670a": "444369839b2e353a8fc2f10073cdfd7b",
".git/objects/99/cc64e0940805516b4dc5d1511598d026f196ae": "3ae7675978ce0623cbaceda9936c48a8",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9c/9d8df5134bab5af26e3de510794f1042807fbc": "5b20fa92b0e1d9cc7f636bc938d29b1c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/663ab37c594870e13456384bea86a96cc4da65": "7d8adb059b0f1382a0015cc2ca0e8347",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/3c770eb83b325c36b85526bb5faab3a7ce2431": "260214546e3c33662fa29a4e15c9346f",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b2/3f8c7dc828f6496879e344467df33c44e42751": "7f8c8d5db97dfd4ab9e1eb034c820919",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/cc/968f3ea177ad1582a6dd610ab5fd4c18ca9f7e": "4db51477023c3849e1b8c2dc40426244",
".git/objects/cf/760657a7c0ebcaf1505ec49b8f2e604502ffd4": "74cafbe4bae2aa6ed0a9ef26aeda728b",
".git/objects/d3/80efb25e46ceaaa11d8c4eaded4070105e1af1": "b724721de0a6bfcde63b012813e9722a",
".git/objects/d8/0899778f0b64f05350774b4592dd5d7f96bede": "c344962138d3a66305a71a506234b83f",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f8/eccc253ef21e2a60523638498546df42143330": "a3ef3c0f3825568f374ac424a8b984de",
".git/objects/f9/f414681819b0a62e2af528a5464ac87079aa07": "4c0749316e8ab2bdfd5710b4052844f1",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "6ff7fc14cac57d48ed693dd13a399dac",
".git/refs/heads/master": "6ff7fc14cac57d48ed693dd13a399dac",
".git/refs/remotes/origin/main": "6ff7fc14cac57d48ed693dd13a399dac",
"assets/AssetManifest.json": "40e1b142820d1aafb75592cff19e2eea",
"assets/assets/2.jpg": "d65c2743eff77553632343df1be8a0dc",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/my.png": "d65c2743eff77553632343df1be8a0dc",
"assets/assets/projects/bmiapp.jpg": "4c262a0540d359add6aeb701a648eabb",
"assets/assets/projects/bmiappicon.jpg": "6e7b0e7199601025d17ee725c2a3c505",
"assets/assets/projects/bmibaner.jpg": "5e253b4da162f74dabbb1a1b955312da",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "c2d0f49db71b69644cff9a2aaba35761",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e9f3807d05c957124ba00b936d4cc2e2",
"/": "e9f3807d05c957124ba00b936d4cc2e2",
"main.dart.js": "4817e91359d4c67fe2c7171af185c19c",
"manifest.json": "f195f24f1e94d6bf2022c78a5fc6dab5",
"version.json": "515e3ce772d1beb48748f2ff58af41eb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
