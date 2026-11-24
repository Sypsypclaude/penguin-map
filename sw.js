// オフラインでもアプリ画面が開けるようにするキャッシュ。
// アプリのファイルを変えたら VERSION を上げる（古いキャッシュが消えて新しい版になる）。
const VERSION = "v4";
const APP = `app-${VERSION}`;
const TILES = "tiles"; // 一度表示した地図タイル（上限あり）
const TILE_LIMIT = 1500;

const APP_FILES = [
  "./", "index.html", "css/style.css", "js/app.js", "data/species.js", "data/facilities.js", "data/prefs.js",
  "manifest.webmanifest", "img/icon-180.png", "img/icon-192.png", "img/icon-512.png",
  ...["emperor","king","adelie","gentoo","chinstrap","macaroni","srock","nrock","humboldt","magellanic","african","little"].map(k => `img/species/${k}.jpg`),
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css",
  "https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("app-") && k !== APP).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

async function trimTiles() {
  const c = await caches.open(TILES);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - TILE_LIMIT; i++) await c.delete(keys[i]);
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // 地図タイル: ネット優先、つながらなければ前に見たタイル
  if (/cyberjapandata\.gsi\.go\.jp|tile\.openstreetmap\.org/.test(url.host)) {
    e.respondWith(fetch(req).then(res => {
      if (res.ok || res.type === "opaque") {
        const copy = res.clone();
        caches.open(TILES).then(c => c.put(req, copy)).then(trimTiles);
      }
      return res;
    }).catch(() => caches.match(req).then(r => r || Response.error())));
    return;
  }

  // アプリ本体: ネット優先（更新がすぐ届く）、オフラインならキャッシュ
  if (url.origin === location.origin || url.host === "unpkg.com") {
    // GitHub Pages は10分キャッシュさせるので、毎回サーバーに更新を確かめる（no-cache）
    const fresh = url.origin === location.origin ? fetch(req.url, { cache: "no-cache", credentials: "same-origin" }) : fetch(req);
    e.respondWith(fresh.then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(APP).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
  }
});
