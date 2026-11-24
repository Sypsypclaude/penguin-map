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
  const map = L.map("map", { zoomControl: true, minZoom: 4 }).setView([36.5, 137.5], 5);
  const gsi = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  }).addTo(map);
  const pale = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  });
  const photo = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg", {
    maxZoom: 18, attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  });
  const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
  });
  L.control.layers({ "地理院 標準地図": gsi, "地理院 淡色地図": pale, "航空写真": photo, "OpenStreetMap": osm }, null, { position: "topright" }).addTo(map);

  const markers = new Map();
  const cluster = L.markerClusterGroup({
    showCoverageOnHover: false, maxClusterRadius: 45, disableClusteringAtZoom: 10, spiderfyOnMaxZoom: true,
    iconCreateFunction: c => {
      const n = c.getChildCount(), v = c.getAllChildMarkers().some(m => rec(m.options.fac).visited);
      return L.divIcon({ className: "", html: `<div class="clu ${v ? "v" : ""}">${n}</div>`, iconSize: [40, 40] });
    }
  }).addTo(map);
  const iconFor = f => {
    const r = rec(f), n = f.species.length;
    const cls = r.visited ? "visited" : n > 1 ? "multi" : "";
    return L.divIcon({ className: "", html: `<div class="pin ${cls}"><span>${r.visited && r.stars ? "★" + r.stars : n}</span></div>`, iconSize: [34, 34], iconAnchor: [17, 34] });
  };
  FAC.forEach(f => {
    if (f.lat == null) return;
    const m = L.marker([f.lat, f.lng], { icon: iconFor(f), title: f.name, fac: f })
      .bindTooltip(`${esc(f.name)}（${f.species.length}種）`, { className: "tip", direction: "top", offset: [0, -30] })
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
    $("#stats").innerHTML = `<span class="wide">全<b>${FAC.length}</b>施設・<b>${ORDER.length}</b>種　｜　</span>行った <b>${visited.length}</b> 施設・会えた <b>${seen.size}</b>/${ORDER.length} 種`;
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
    html += `<div class="sec note">記録はこのブラウザに保存されます。<br>
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
  $("#sheetClose").onclick = closeSheet;
  document.addEventListener("keydown", e => { if (e.key === "Escape") { if (!$("#lightbox").hidden) $("#lightbox").hidden = true; else closeSheet(); } });
  map.on("click", closeSheet);
  function closeSheet() { sheet.classList.remove("open"); sheet.setAttribute("aria-hidden", "true"); }

  function openSheet(f) {
    const r = rec(f);
    const sps = [...f.species].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
    $("#sheetBody").innerHTML = `
      <div class="sh-head">
        <div class="type">${esc(f.pref)}・${esc(f.type)}</div>
        <h2>${esc(f.name)}</h2>
        ${f.address ? `<div class="addr">📍 ${esc(f.address)} 付近</div>` : ""}
        ${f.note ? `<div class="addr" style="color:#c92a2a;margin-top:4px">⚠ ${esc(f.note)}</div>` : ""}
      </div>
      <div class="links">
        <a class="btn primary" href="${esc(f.url)}" target="_blank" rel="noopener">${f.urlIsSearch ? "公式サイトを検索" : "公式サイト"} ↗</a>
        <a class="btn" href="${gMap(f)}" target="_blank" rel="noopener">Googleマップ ↗</a>
        <a class="btn" href="${gImg(f.name + " ペンギン")}" target="_blank" rel="noopener">この施設のペンギン写真 ↗</a>
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
        ${sps.map(k => { const s = SP[k]; return `
          <div class="sp">
            <img src="${esc(s.img)}" alt="${esc(s.ja)}" loading="lazy" data-k="${k}">
            <div>
              <div class="t">${esc(s.ja)}<span class="badge ${s.iucn === "低懸念" ? "lc" : ""}">${esc(s.iucn)}</span></div>
              <div class="s">${esc(s.sci)}</div>
              <div class="m">体長 ${esc(s.size)}</div>
              <p>${esc(s.desc)}</p>
              <div class="ext">
                <a href="${gImg(s.ja.replace(/（.*）/, ""))}" target="_blank" rel="noopener">Google画像 ↗</a>
                <a href="${gImg(f.name + " " + s.ja.replace(/（.*）/, ""))}" target="_blank" rel="noopener">この施設の${esc(s.ja.replace(/（.*）/, "").replace("ペンギン", ""))} ↗</a>
              </div>
            </div>
          </div>`; }).join("")}
        <p class="note">写真：Wikimedia Commons（各写真をタップすると出典）。飼育種は変わることがあるので、お出かけ前に公式サイトで確認してください。</p>
      </div>`;

    const flash = () => { const s = $("#saved"); s.classList.add("show"); clearTimeout(flash.t); flash.t = setTimeout(() => s.classList.remove("show"), 1200); };
    $("#visitBtn").onclick = () => {
      const v = !rec(f).visited;
      save(f, { visited: v, date: v && !rec(f).date ? new Date().toISOString().slice(0, 10) : rec(f).date });
      openSheet(f); flash();
    };
    $("#stars").querySelectorAll("button").forEach(b => b.onclick = () => {
      const v = +b.dataset.v, nv = rec(f).stars === v ? 0 : v;
      save(f, { stars: nv });
      $("#stars").querySelectorAll("button").forEach(x => x.classList.toggle("on", +x.dataset.v <= nv));
      flash();
    });
    $("#visitDate").onchange = e => { save(f, { date: e.target.value }); flash(); };
    let t; $("#memo").oninput = e => { clearTimeout(t); t = setTimeout(() => { save(f, { memo: e.target.value }); flash(); }, 400); };
    $("#sheetBody").querySelectorAll(".sp img").forEach(img => {
      img.onerror = () => { img.onerror = null; img.src = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><text y="7.5" x="1.5" font-size="7">🐧</text></svg>'); };
      img.onclick = () => {
        const s = SP[img.dataset.k], lb = $("#lightbox");
        lb.innerHTML = `<img src="${esc(s.img)}" alt=""><div class="cap">${esc(s.ja)} — <a href="${esc(s.credit)}" target="_blank" rel="noopener">出典・ライセンス（Wikimedia Commons）</a></div>`;
        lb.hidden = false; lb.onclick = e => { if (e.target.tagName !== "A") lb.hidden = true; };
      };
    });
    sheet.classList.add("open"); sheet.setAttribute("aria-hidden", "false"); sheet.scrollTop = 0;
  }

  refreshMarkers(); renderStats();
})();
