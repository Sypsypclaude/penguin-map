(() => {
  const SP = window.SPECIES, ORDER = window.SPECIES_ORDER, FAC = window.FACILITIES;
  const PREF_ORDER = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
  const KEY = "penguin-map-v1";
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const gImg = q => "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(q);
  const gMap = f => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(f.name + " " + f.pref);

  // ---- 保存データ（このブラウザの localStorage） ----
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { store = {}; }
  const rec = f => store[f.name] || {};
  const save = (f, patch) => {
    store[f.name] = { ...rec(f), ...patch };
    localStorage.setItem(KEY, JSON.stringify(store));
    refreshMarkers(); renderStats(); if (!$("#list").hidden) renderList();
  };

  // ---- 地図 ----
  const map = L.map("map", { zoomControl: true, minZoom: 4, zoomSnap: 0.5 }).fitBounds([[30.5, 129], [45.5, 145.5]]);
  const gsi = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  });
  const pale = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  });
  pale.addTo(map);
  const photo = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg", {
    maxZoom: 18, attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  });
  const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
  });
  L.control.layers({ "地理院 淡色地図": pale, "地理院 標準地図": gsi, "航空写真": photo, "OpenStreetMap": osm }, null, { position: "topright" }).addTo(map);

  // ---- 都道府県（境界線・色分け・件数バッジ） ----
  // 引いて見ているときは「県ごと」、拡大すると施設ごとのピンに切り替える
  const PREF_ZOOM = 8;
  const shortPref = p => p === "北海道" ? p : p.replace(/[都府県]$/, "");
  const prefStat = p => {
    const fs = FAC.filter(f => f.pref === p && matches(f));
    return { n: fs.length, v: fs.filter(f => rec(f).visited).length, fs };
  };
  map.createPane("prefs").style.zIndex = 350;
  const prefLayer = L.geoJSON(window.PREFS, {
    pane: "prefs",
    style: () => ({}),
    onEachFeature: (feat, layer) => {
      layer.on("click", e => { L.DomEvent.stop(e); openPref(feat.properties.nam_ja, true); });
    }
  }).addTo(map);
  const prefBounds = {};
  prefLayer.eachLayer(l => { prefBounds[l.feature.properties.nam_ja] = l.getBounds(); });
  function stylePrefs() {
    const z = map.getZoom();
    prefLayer.eachLayer(l => {
      const { n, v } = prefStat(l.feature.properties.nam_ja);
      l.setStyle({
        color: "#0f2a44", weight: z < 6 ? 1.8 : z < PREF_ZOOM ? 2.6 : 3, opacity: 1,
        // 行った県＝濃い青、まだの県＝薄い青、施設のない県＝灰色
        fillColor: v ? "#1c5bd6" : n ? "#74c0fc" : "#adb5bd",
        fillOpacity: z < PREF_ZOOM ? (v ? .5 : n ? .3 : .15) : (v ? .14 : n ? .08 : .06)
      });
    });
  }

  // 県の件数バッジ（県内の施設の平均位置に置く）
  const prefBadges = L.layerGroup();
  function renderPrefBadges() {
    prefBadges.clearLayers();
    const showName = map.getZoom() >= 6;
    for (const p of PREF_ORDER) {
      const { n, v, fs } = prefStat(p);
      const pts = fs.filter(f => f.lat != null);
      if (!n || !pts.length) continue;
      const lat = pts.reduce((s, f) => s + f.lat, 0) / pts.length, lng = pts.reduce((s, f) => s + f.lng, 0) / pts.length;
      L.marker([lat, lng], {
        icon: L.divIcon({ className: "", iconSize: null,
          html: `<div class="pb ${v ? "v" : ""} ${showName ? "" : "mini"}">${showName ? `<span>${esc(shortPref(p))}</span>` : ""}<b>${n}</b></div>` }),
        title: `${p}（${n}施設）`, keyboard: true
      }).on("click", e => {
        L.DomEvent.stop(e);
        // 近くに他の県のバッジが重なっていたら、選び間違えないようにまず拡大する
        const here = map.latLngToContainerPoint(e.latlng);
        const crowded = prefBadges.getLayers().some(m => m !== e.target && map.latLngToContainerPoint(m.getLatLng()).distanceTo(here) < 34);
        if (crowded && map.getZoom() < PREF_ZOOM - 1) map.setView(e.latlng, map.getZoom() + 2);
        else openPref(p, true);
      }).addTo(prefBadges);
    }
  }
  function updateMode() {
    const prefMode = map.getZoom() < PREF_ZOOM;
    if (prefMode) { map.removeLayer(cluster); prefBadges.addTo(map); renderPrefBadges(); }
    else { map.removeLayer(prefBadges); cluster.addTo(map); }
    stylePrefs();
  }

  const markers = new Map();
  const cluster = L.markerClusterGroup({
    showCoverageOnHover: false, maxClusterRadius: 35, disableClusteringAtZoom: 11, spiderfyOnMaxZoom: true,
    iconCreateFunction: c => {
      const n = c.getChildCount(), v = c.getAllChildMarkers().some(m => rec(m.options.fac).visited);
      return L.divIcon({ className: "", html: `<div class="clu ${v ? "v" : ""}"><b>${n}</b>か所</div>`, iconSize: null });
    }
  });
  map.on("zoomend", updateMode);
  // 施設1か所のピン。行った施設は青く塗って✓
  const PENGUIN_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="13.5" rx="7" ry="9" fill="#14181f"/><ellipse cx="12" cy="15" rx="4.6" ry="6.6" fill="#fff"/><circle cx="12" cy="7.5" r="5" fill="#14181f"/><ellipse cx="10.3" cy="7.8" rx="1.8" ry="2.2" fill="#fff"/><ellipse cx="13.7" cy="7.8" rx="1.8" ry="2.2" fill="#fff"/><circle cx="10.5" cy="7.8" r=".8" fill="#14181f"/><circle cx="13.5" cy="7.8" r=".8" fill="#14181f"/><path d="M10.9 9.6h2.2L12 11.2z" fill="#f5a524"/></svg>';
  const iconFor = f => {
    const r = rec(f);
    return L.divIcon({ className: "", iconSize: [34, 34], iconAnchor: [17, 17],
      html: `<div class="pin ${r.visited ? "visited" : ""}">${PENGUIN_SVG}${r.visited ? '<i class="ck">✓</i>' : ""}</div>` });
  };
  FAC.forEach(f => {
    if (f.lat == null) return;
    const m = L.marker([f.lat, f.lng], { icon: iconFor(f), title: f.name, fac: f })
      .bindTooltip(`${esc(f.name)}`, { className: "tip", direction: "top", offset: [0, -16] })
      .on("click", () => openSheet(f));
    markers.set(f, m);
  });

  // ---- フィルター ----
  const state = { q: "", species: new Set(), onlyVisited: false, onlyUnvisited: false };
  const matches = f => {
    const r = rec(f);
    if (state.onlyVisited && !r.visited) return false;
    if (state.onlyUnvisited && r.visited) return false;
    if (state.species.size && ![...state.species].every(s => f.species.includes(s))) return false;
    if (state.q) {
      const hay = (f.name + f.pref + (f.address || "") + f.species.map(s => SP[s].ja).join("")).toLowerCase();
      if (!hay.includes(state.q.toLowerCase())) return false;
    }
    return true;
  };
  function refreshMarkers() {
    const show = [];
    markers.forEach((m, f) => { m.setIcon(iconFor(f)); if (matches(f)) show.push(m); });
    cluster.clearLayers(); cluster.addLayers(show);
    stylePrefs();
    if (map.hasLayer(prefBadges)) renderPrefBadges();
  }

  const chips = $("#speciesChips");
  ORDER.forEach(k => {
    const n = FAC.filter(f => f.species.includes(k)).length;
    const b = document.createElement("button");
    b.className = "chip"; b.setAttribute("aria-pressed", "false");
    b.innerHTML = `${esc(SP[k].ja.replace(/（.*）/, ""))}<span class="n">${n}</span>`;
    b.onclick = () => {
      state.species.has(k) ? state.species.delete(k) : state.species.add(k);
      b.setAttribute("aria-pressed", state.species.has(k));
      applyFilters();
    };
    chips.appendChild(b);
  });
  $("#search").addEventListener("input", e => { state.q = e.target.value.trim(); applyFilters(); });
  $("#onlyVisited").addEventListener("change", e => { state.onlyVisited = e.target.checked; if (e.target.checked) { $("#onlyUnvisited").checked = false; state.onlyUnvisited = false; } applyFilters(); });
  $("#onlyUnvisited").addEventListener("change", e => { state.onlyUnvisited = e.target.checked; if (e.target.checked) { $("#onlyVisited").checked = false; state.onlyVisited = false; } applyFilters(); });
  function applyFilters() {
    refreshMarkers();
    if (!$("#list").hidden) renderList();
    const shown = FAC.filter(f => f.lat != null && matches(f));
    if (shown.length && (state.q || state.species.size)) {
      map.fitBounds(L.latLngBounds(shown.map(f => [f.lat, f.lng])).pad(0.2), { maxZoom: 11 });
    }
  }

  // ---- 統計 ----
  function renderStats() {
    const visited = FAC.filter(f => rec(f).visited);
    const seen = new Set(visited.flatMap(f => f.species));
    const prefs = new Set(FAC.map(f => f.pref)), vPrefs = new Set(visited.map(f => f.pref));
    $("#stats").innerHTML = `<span class="wide">全<b>${FAC.length}</b>施設・<b>${ORDER.length}</b>種　｜　</span>行った <b>${visited.length}</b> 施設・<b>${vPrefs.size}</b>/${prefs.size} 県・会えた <b>${seen.size}</b>/${ORDER.length} 種`;
  }

  // ---- 一覧 ----
  $("#listToggle").onclick = e => {
    const list = $("#list"); list.hidden = !list.hidden;
    e.currentTarget.setAttribute("aria-pressed", !list.hidden);
    if (!list.hidden) renderList();
    setTimeout(() => map.invalidateSize(), 50);
  };
  function renderList() {
    const items = FAC.filter(matches).sort((a, b) => PREF_ORDER.indexOf(a.pref) - PREF_ORDER.indexOf(b.pref));
    let html = `<div class="pref-head">${items.length} 施設</div>`, cur = "";
    for (const f of items) {
      if (f.pref !== cur) { cur = f.pref; html += `<div class="pref-head">${esc(cur)}</div>`; }
      const r = rec(f);
      html += `<div class="list-item ${r.visited ? "visited" : ""}" data-name="${esc(f.name)}"><span class="dot"></span><div>
        <div class="nm">${esc(f.name)}${r.stars ? ` <span style="color:var(--star)">${"★".repeat(r.stars)}</span>` : ""}</div>
        <div class="meta">${esc(f.type)}・${f.species.map(s => esc(SP[s].ja.replace(/ペンギン.*/, ""))).join("／")}</div></div></div>`;
    }
    html += `<div class="sec note">記録はこのブラウザに保存されます。（アプリの版：2026-11-24 アクセス情報）<br>
      <button class="btn" id="exportBtn">記録を書き出す</button> <button class="btn" id="importBtn">読み込む</button></div>`;
    const list = $("#list"); list.innerHTML = html;
    list.querySelectorAll(".list-item").forEach(el => el.onclick = () => {
      const f = FAC.find(x => x.name === el.dataset.name);
      if (f.lat != null) map.setView([f.lat, f.lng], 13);
      openSheet(f);
    });
    $("#exportBtn").onclick = () => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(store, null, 1)], { type: "application/json" }));
      a.download = "penguin-map-records.json"; a.click();
    };
    $("#importBtn").onclick = () => {
      const inp = document.createElement("input"); inp.type = "file"; inp.accept = "application/json";
      inp.onchange = async () => {
        try { const data = JSON.parse(await inp.files[0].text()); store = { ...store, ...data };
          localStorage.setItem(KEY, JSON.stringify(store)); refreshMarkers(); renderStats(); renderList(); alert("読み込みました"); }
        catch { alert("読み込めませんでした（JSONファイルを選んでください）"); }
      };
      inp.click();
    };
  }

  // ---- 詳細シート ----
  const sheet = $("#sheet");
  $("#sheetClose").onclick = () => closeSheet(true);
  document.addEventListener("keydown", e => { if (e.key === "Escape") { if (!$("#lightbox").hidden) $("#lightbox").hidden = true; else closeSheet(true); } });
  map.on("click", () => closeSheet(false));
  // ×で閉じたときは、見ていた県の全体を地図の真ん中にぴったり表示する
  function closeSheet(backToPref) {
    const wasOpen = sheet.classList.contains("open");
    sheet.classList.remove("open"); sheet.setAttribute("aria-hidden", "true");
    if (backToPref && wasOpen && sheetPref) map.fitBounds(prefView(sheetPref), { padding: [16, 16] });
  }

  const spShort = k => SP[k].ja.replace(/（.*）/, "").replace(/ペンギン$/, "");
  function openSpecies(k, f) {
    const s = SP[k], lb = $("#lightbox"), name = s.ja.replace(/（.*）/, "");
    lb.innerHTML = `
      <div class="sp-pop" role="dialog" aria-modal="true" aria-label="${esc(s.ja)}">
        <button class="pop-close" aria-label="閉じる">×</button>
        <img src="${esc(s.img)}" alt="${esc(s.ja)}">
        <div class="pop-body">
          <div class="t">${esc(s.ja)}<span class="badge ${s.iucn === "低懸念" ? "lc" : ""}">${esc(s.iucn)}</span></div>
          <div class="s">${esc(s.sci)}・体長 ${esc(s.size)}</div>
          <p>${esc(s.desc)}</p>
          <div class="ext">
            <a href="${gImg(name)}" target="_blank" rel="noopener">Google画像 ↗</a>
            ${f ? `<a href="${gImg(f.name + " " + name)}" target="_blank" rel="noopener">${esc(f.name)}の${esc(spShort(k))} ↗</a>` : ""}
            <a href="${esc(s.credit)}" target="_blank" rel="noopener">写真の出典 ↗</a>
          </div>
        </div>
      </div>`;
    lb.hidden = false;
    lb.onclick = e => { if (e.target === lb || e.target.closest(".pop-close")) lb.hidden = true; };
  }

  // 県全体が収まる範囲。東京（小笠原など）のように島が遠い県は、施設のある範囲に合わせる
  function prefView(p) {
    const pb = prefBounds[p], fs = FAC.filter(f => f.pref === p && f.lat != null);
    if (pb && pb.getNorthEast().distanceTo(pb.getSouthWest()) <= 600000) return pb;
    return fs.length ? L.latLngBounds(fs.map(f => [f.lat, f.lng])).pad(0.6) : pb;
  }
  // 今シートで見ている県（×で閉じたら、この県の全体に戻す）
  let sheetPref = null;

  // 県のシート：県内の施設一覧と、県内で会える種類
  function openPref(p, zoom) {
    sheetPref = p;
    if (zoom && prefBounds[p]) {
      map.fitBounds(prefView(p), { maxZoom: 10, paddingBottomRight: window.innerWidth > 720 ? [440, 0] : [0, window.innerHeight * 0.5] });
    }
    const all = FAC.filter(f => f.pref === p);
    const shown = all.filter(matches);
    const sps = ORDER.filter(k => all.some(f => f.species.includes(k)));
    const v = all.filter(f => rec(f).visited).length;
    $("#sheetBody").innerHTML = `
      <div class="sh-head">
        <div class="type">都道府県</div>
        <h2>${esc(p)}</h2>
        <div class="addr">ペンギンに会える施設 ${all.length} か所・行った ${v} か所</div>
      </div>
      <div class="sec">
        <h3>${esc(shortPref(p))}で会えるペンギン（${sps.length}種）</h3>
        <div class="sp-chips">${sps.map(k => `<button class="spc" data-k="${k}"><img src="${esc(SP[k].img)}" alt="">${esc(SP[k].ja.replace(/（.*）/, ""))}</button>`).join("")}</div>
      </div>
      <div class="sec">
        <h3>施設（${shown.length}${shown.length !== all.length ? ` / 全${all.length}` : ""}）</h3>
        ${shown.length ? "" : `<p class="note">今の絞り込みに合う施設はありません。</p>`}
        ${shown.map(f => { const r = rec(f); return `
          <button class="pf ${r.visited ? "visited" : ""}" data-name="${esc(f.name)}">
            <span class="dot"></span>
            <span class="pf-main">
              <span class="nm">${esc(f.name)}${r.stars ? ` <span class="st">${"★".repeat(r.stars)}</span>` : ""}</span>
              <span class="meta">${esc(f.type)}・${f.species.map(s => esc(SP[s].ja.replace(/ペンギン.*/, ""))).join("／")}</span>
            </span>
            <span class="chev">›</span>
          </button>`; }).join("")}
      </div>`;
    $("#sheetBody").querySelectorAll(".spc").forEach(b => b.onclick = () => openSpecies(b.dataset.k));
    $("#sheetBody").querySelectorAll(".pf").forEach(el => el.onclick = () => {
      const f = FAC.find(x => x.name === el.dataset.name);
      if (f.lat != null) map.setView([f.lat, f.lng], Math.max(map.getZoom(), 13));
      openSheet(f, p);
    });
    sheet.classList.add("open"); sheet.setAttribute("aria-hidden", "false"); sheet.scrollTop = 0;
  }

  function openSheet(f, backPref) {
    sheetPref = backPref || null;
    const r = rec(f);
    const sps = [...f.species].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
    $("#sheetBody").innerHTML = `
      ${backPref ? `<button class="back" id="backPref">‹ ${esc(backPref)}の一覧</button>` : ""}
      <div class="sh-head">
        <div class="type">${esc(f.pref)}・${esc(f.type)}</div>
        <h2>${esc(f.name)}</h2>
        ${f.address ? `<div class="addr">📍 ${esc(f.address)} 付近</div>` : ""}
        ${f.note ? `<div class="addr" style="color:#c92a2a;margin-top:4px">⚠ ${esc(f.note)}</div>` : ""}
      </div>
      <div class="links">
        <a class="btn primary" href="${esc(f.url)}" target="_blank" rel="noopener">公式 ↗</a>
        <a class="btn" href="${gMap(f)}" target="_blank" rel="noopener">Google ↗</a>
        <a class="btn" href="${gImg(f.name + " ペンギン")}" target="_blank" rel="noopener">ペンギン写真 ↗</a>
      </div>

      <div class="sec acc">
        <h3>アクセス</h3>
        ${f.access?.train ? `<div class="acc-row"><span class="acc-k">電車・バス</span><span>${esc(f.access.train)}</span></div>` : ""}
        ${f.access?.car ? `<div class="acc-row"><span class="acc-k">車</span><span>${esc(f.access.car)}</span></div>` : ""}
        ${f.access?.train || f.access?.car ? "" : `<p class="note">公式サイトでアクセス方法を確認してください。</p>`}
        <a class="btn route" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(f.name + " " + f.pref)}" target="_blank" rel="noopener">現在地からの経路 ↗</a>
        ${f.access?.src ? `<p class="note">出典：<a href="${esc(f.access.src)}" target="_blank" rel="noopener">公式サイトのアクセス案内</a>（2026年11月時点）</p>` : ""}
      </div>

      <div class="sec rate">
        <h3>わたしの記録</h3>
        <div class="row">
          <button class="toggle-visit ${r.visited ? "on" : ""}" id="visitBtn">${r.visited ? "✓ 行った！" : "行った！"}</button>
          <span class="saved" id="saved">保存しました</span>
        </div>
        <div id="rateBody" ${r.visited ? "" : "hidden"}>
          <div class="row"><span>評価</span><div class="stars" id="stars">${[1,2,3,4,5].map(i => `<button data-v="${i}" class="${(r.stars || 0) >= i ? "on" : ""}" aria-label="${i}つ星">★</button>`).join("")}</div></div>
          <div class="row"><label>訪問日 <input type="date" id="visitDate" value="${esc(r.date || "")}"></label></div>
          <textarea id="memo" placeholder="感想メモ（推しペンギン、混雑具合、おすすめの時間帯など）">${esc(r.memo || "")}</textarea>
        </div>
      </div>

      <div class="sec">
        <h3>会えるペンギン（${sps.length}種）</h3>
        <div class="sp-row">${sps.map(k => `
          <button class="spi" data-k="${k}" aria-label="${esc(SP[k].ja)}の説明">
            <img src="${esc(SP[k].img)}" alt="" loading="lazy">
            <span>${esc(spShort(k))}</span>
          </button>`).join("")}</div>
        <p class="note">写真をタップすると説明が出ます。飼育種は変わることがあるので、お出かけ前に公式サイトで確認してください。</p>
      </div>`;

    if (backPref) $("#backPref").onclick = () => openPref(backPref, false);
    const flash = () => { const s = $("#saved"); s.classList.add("show"); clearTimeout(flash.t); flash.t = setTimeout(() => s.classList.remove("show"), 1200); };
    $("#visitBtn").onclick = () => {
      const v = !rec(f).visited;
      save(f, { visited: v, date: v && !rec(f).date ? new Date().toISOString().slice(0, 10) : rec(f).date });
      openSheet(f, backPref); flash();
    };
    $("#stars").querySelectorAll("button").forEach(b => b.onclick = () => {
      const v = +b.dataset.v, nv = rec(f).stars === v ? 0 : v;
      save(f, { stars: nv });
      $("#stars").querySelectorAll("button").forEach(x => x.classList.toggle("on", +x.dataset.v <= nv));
      flash();
    });
    $("#visitDate").onchange = e => { save(f, { date: e.target.value }); flash(); };
    let t; $("#memo").oninput = e => { clearTimeout(t); t = setTimeout(() => { save(f, { memo: e.target.value }); flash(); }, 400); };
    $("#sheetBody").querySelectorAll(".spi").forEach(b => {
      const img = b.querySelector("img");
      img.onerror = () => { img.onerror = null; img.removeAttribute("src"); };
      b.onclick = () => openSpecies(b.dataset.k, f);
    });
    sheet.classList.add("open"); sheet.setAttribute("aria-hidden", "false"); sheet.scrollTop = 0;
  }

  refreshMarkers(); renderStats(); updateMode();
})();
