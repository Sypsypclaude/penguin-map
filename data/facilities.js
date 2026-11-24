// 日本でペンギンに会える施設一覧（2026年11月時点で収集）
// 出典: ペンギン・ポスト「ペンギンに会える水族館・動物園」, いきものアカデミー「ペンギンがみられる全国の施設」ほか
// アクセス: 各施設の公式サイトのアクセス案内を要約（2026年11月）
// 座標: OpenStreetMap Nominatim + 手動補正
window.FACILITIES = [
 {
  "name": "札幌市円山動物園",
  "pref": "北海道",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.city.sapporo.jp/zoo/",
  "lat": 43.04875,
  "lng": 141.30613,
  "address": "北海道 札幌市 中央区 宮ケ丘 裏参道",
  "access": {
   "train": "地下鉄東西線「円山公園」駅から徒歩約15分（バスもあり）",
   "car": "円山公園の駐車場あり",
   "src": "https://www.city.sapporo.jp/zoo/s077/25827.html"
  }
 },
 {
  "name": "旭川市旭山動物園",
  "pref": "北海道",
  "type": "動物園",
  "species": [
   "king",
   "gentoo",
   "humboldt",
   "nrock"
  ],
  "url": "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/",
  "lat": 43.76864,
  "lng": 142.47927,
  "address": "北海道 旭川市 東旭川町日の出",
  "access": {
   "train": "JR旭川駅前から旭川電気軌道バス（約40分）",
   "car": "旭川北ICから約20分・無料駐車場あり",
   "src": "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/generalinformation/d053767.html"
  }
 },
 {
  "name": "AOAO SAPPORO",
  "pref": "北海道",
  "type": "水族館",
  "species": [
   "nrock",
   "little"
  ],
  "url": "https://aoao-sapporo.blue/",
  "lat": 43.05776,
  "lng": 141.35358,
  "address": "北海道 札幌市 中央区 狸小路 南2条西3",
  "access": {
   "train": "地下鉄「大通」駅から徒歩約3分／市電「狸小路」から徒歩1分",
   "car": "専用駐車場なし（近くの有料駐車場）",
   "src": "https://aoao-sapporo.blue/access/"
  }
 },
 {
  "name": "おたる水族館",
  "pref": "北海道",
  "type": "水族館",
  "species": [
   "gentoo",
   "humboldt"
  ],
  "url": "https://otaru-aq.jp/",
  "lat": 43.23701,
  "lng": 141.0114,
  "address": "北海道 小樽市 祝津 祝津三丁目",
  "access": {
   "train": "JR小樽駅前から北海道中央バス「水族館」行き",
   "car": "札幌から約60〜70分・駐車場あり",
   "src": "https://otaru-aq.jp/guide/access"
  }
 },
 {
  "name": "稚内市ノシャップ寒流水族館",
  "pref": "北海道",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.city.wakkanai.hokkaido.jp/suizokukan/",
  "lat": 45.44926,
  "lng": 141.64491,
  "address": "北海道 稚内市 ノシャップ 富士見二丁目",
  "access": {
   "train": "JR稚内駅から宗谷バス約15分「ノシャップ」下車、徒歩5分",
   "car": "稚内駅から約10分",
   "src": "https://www.city.wakkanai.hokkaido.jp/suizokukan/koutsuu/"
  }
 },
 {
  "name": "サンピアザ水族館",
  "pref": "北海道",
  "type": "水族館",
  "species": [
   "african"
  ],
  "url": "https://www.sunpiazza-aquarium.com/",
  "lat": 43.03681,
  "lng": 141.4718,
  "address": "北海道 札幌市 厚別区 厚別中央 厚別中央2条5",
  "access": {
   "train": "地下鉄東西線「新さっぽろ」駅から徒歩約5分／JR新札幌駅から徒歩約3分",
   "car": "道央道 大谷地IC・札幌南ICから約8〜10分",
   "src": "https://www.sunpiazza-aquarium.com/access/"
  }
 },
 {
  "name": "登別マリンパークニクス",
  "pref": "北海道",
  "type": "水族館",
  "species": [
   "king",
   "african",
   "nrock"
  ],
  "url": "https://www.nixe.co.jp/",
  "lat": 42.45506,
  "lng": 141.18276,
  "address": "北海道 登別市 登別東町一丁目",
  "access": {
   "train": "JR登別駅から徒歩約5分",
   "car": "道央道 登別東ICから約5分",
   "src": "https://nixe-aqua.com/access/"
  }
 },
 {
  "name": "室蘭民報みんなの水族館",
  "pref": "北海道",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.google.com/search?q=%E5%AE%A4%E8%98%AD%E6%B0%91%E5%A0%B1%E3%81%BF%E3%82%93%E3%81%AA%E3%81%AE%E6%B0%B4%E6%97%8F%E9%A4%A8%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88",
  "lat": 42.341,
  "lng": 140.947,
  "address": "北海道 室蘭市 祝津町",
  "urlIsSearch": true
 },
 {
  "name": "青森県営浅虫水族館",
  "pref": "青森県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://asamushi-aqua.com/",
  "lat": 40.8977,
  "lng": 140.8616,
  "address": "青森県 青森市 浅虫",
  "access": {
   "car": "青森道 青森東ICから約15分",
   "src": "https://asamushi-aqua.com/userguide/access"
  }
 },
 {
  "name": "岩手サファリパーク",
  "pref": "岩手県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://www.iwate-safari.jp/",
  "lat": 38.81051,
  "lng": 141.25944,
  "address": "岩手県 一関市",
  "access": {
   "train": "JR花泉駅からタクシー約20分",
   "car": "若柳金成ICから約30分／一関ICから約45分",
   "src": "https://www.iwate-safari.jp/access"
  }
 },
 {
  "name": "仙台市八木山動物公園フジサキの杜",
  "pref": "宮城県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.city.sendai.jp/zoo/",
  "lat": 38.2453,
  "lng": 140.8486,
  "address": "宮城県 仙台市太白区 八木山本町",
  "access": {
   "train": "地下鉄東西線「八木山動物公園」駅すぐ（仙台駅から12分）",
   "car": "仙台南ICから約20分・駐車場あり（有料）",
   "src": "https://www.city.sendai.jp/zoo/information/3-access.html"
  }
 },
 {
  "name": "仙台うみの杜水族館",
  "pref": "宮城県",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "macaroni",
   "magellanic",
   "humboldt",
   "african",
   "srock",
   "little"
  ],
  "url": "https://www.uminomori.jp/umino/index.html",
  "lat": 38.27106,
  "lng": 140.98047,
  "address": "宮城県 仙台市 宮城野区 中野 中野四丁目",
  "access": {
   "train": "JR仙石線「中野栄」駅から徒歩約15分、またはミヤコーバス",
   "src": "https://www.uminomori.jp/umino/access/"
  }
 },
 {
  "name": "秋田市大森山動物園",
  "pref": "秋田県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.city.akita.lg.jp/zoo/index.html",
  "lat": 39.67119,
  "lng": 140.07541,
  "address": "秋田県 秋田市 浜田字潟端 浜田",
  "access": {
   "train": "JR秋田駅から秋田中央交通バス（新屋線）約40分",
   "car": "無料駐車場あり",
   "src": "https://www.city.akita.lg.jp/zoo/guide/1003687.html"
  }
 },
 {
  "name": "男鹿水族館GAO",
  "pref": "秋田県",
  "type": "水族館",
  "species": [
   "gentoo",
   "nrock"
  ],
  "url": "https://www.gao-aqua.jp/",
  "lat": 39.9466,
  "lng": 139.7065,
  "address": "秋田県 男鹿市 戸賀塩浜",
  "access": {
   "train": "JR男鹿駅からタクシー約30分、または路線バス",
   "car": "秋田道 昭和男鹿半島ICから",
   "src": "https://www.gao-aqua.jp/about/access"
  }
 },
 {
  "name": "東北サファリパーク",
  "pref": "福島県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "http://tohoku-safaripark.co.jp/",
  "lat": 37.64216,
  "lng": 140.36335,
  "address": "福島県 二本松市 沢松倉"
 },
 {
  "name": "新潟市水族館マリンピア日本海",
  "pref": "新潟県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.marinepia.or.jp/",
  "lat": 37.92362,
  "lng": 139.028,
  "address": "新潟県 新潟市 中央区 水道町二丁目 参道",
  "access": {
   "train": "新潟駅バスターミナルから新潟交通バス（C22系統）約25分「水族館前」",
   "car": "新潟中央IC・新潟西ICなどから約25分・無料駐車場",
   "src": "https://www.marinepia.or.jp/access/"
  }
 },
 {
  "name": "上越市立水族博物館 うみがたり",
  "pref": "新潟県",
  "type": "水族館",
  "species": [
   "magellanic"
  ],
  "url": "https://www.umigatari.jp/",
  "lat": 37.17352,
  "lng": 138.23299,
  "address": "新潟県 上越市 西本町三丁目",
  "access": {
   "train": "直江津駅から路線バス「直江津ショッピングセンター前」下車、徒歩約7分",
   "src": "https://www.umigatari.jp/joetsu/access/"
  }
 },
 {
  "name": "長岡市寺泊水族博物館",
  "pref": "新潟県",
  "type": "水族館",
  "species": [
   "magellanic"
  ],
  "url": "https://www.google.com/search?q=%E5%AF%BA%E6%B3%8A%E6%B0%B4%E6%97%8F%E5%8D%9A%E7%89%A9%E9%A4%A8%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88",
  "lat": 37.63386,
  "lng": 138.76027,
  "address": "新潟県 長岡市",
  "urlIsSearch": true
 },
 {
  "name": "富山市ファミリーパーク",
  "pref": "富山県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.toyama-familypark.jp/",
  "lat": 36.69068,
  "lng": 137.1477,
  "address": "富山県 富山市 古沢",
  "access": {
   "train": "JR富山駅南口から地鉄バス（16系統）約25分「ファミリーパーク前」すぐ",
   "car": "北陸道 富山西ICから約5分",
   "src": "https://www.toyama-familypark.jp/info/access"
  }
 },
 {
  "name": "高岡古城公園動物園",
  "pref": "富山県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.takaokakojyozoo.jp/",
  "lat": 36.74732,
  "lng": 137.02217,
  "address": "富山県 高岡市 定塚町 新横町",
  "access": {
   "train": "あいの風とやま鉄道「高岡」駅から徒歩15分",
   "car": "能越道 高岡ICから約15分",
   "src": "https://www.takaokakojyozoo.jp/page-26/"
  }
 },
 {
  "name": "魚津水族館",
  "pref": "富山県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.uozu-aquarium.jp/",
  "lat": 36.79831,
  "lng": 137.38812,
  "address": "富山県 魚津市"
 },
 {
  "name": "いしかわ動物園",
  "pref": "石川県",
  "type": "動物園",
  "species": [
   "magellanic"
  ],
  "url": "https://www.ishikawazoo.jp/",
  "lat": 36.43331,
  "lng": 136.54618,
  "address": "石川県 能美市 徳山町"
 },
 {
  "name": "のとじま水族館",
  "pref": "石川県",
  "type": "水族館",
  "species": [
   "humboldt",
   "magellanic"
  ],
  "url": "https://www.notoaqua.jp/",
  "lat": 37.14872,
  "lng": 136.98216,
  "address": "石川県 七尾市 能登島南町",
  "access": {
   "train": "和倉温泉方面から能登島交通の路線バス",
   "car": "能越道 和倉ICから（能登島へ）",
   "src": "https://www.notoaqua.jp/access/"
  }
 },
 {
  "name": "越前松島水族館",
  "pref": "福井県",
  "type": "水族館",
  "species": [
   "king",
   "humboldt"
  ],
  "url": "https://www.echizen-aquarium.com/",
  "lat": 36.25265,
  "lng": 136.14668,
  "address": "福井県 坂井市 三国町梶",
  "access": {
   "train": "えちぜん鉄道「あわら湯のまち」駅からバス約15分",
   "car": "国道305号経由・北陸道 加賀IC方面から",
   "src": "https://www.echizen-aquarium.com/information/access.html"
  }
 },
 {
  "name": "甲府市遊亀公園附属動物園",
  "pref": "山梨県",
  "type": "動物園",
  "species": [
   "magellanic"
  ],
  "url": "https://www.city.kofu.yamanashi.jp/zoo/",
  "lat": 35.65076,
  "lng": 138.57195,
  "address": "山梨県 甲府市 若松町 中央四丁目",
  "note": "リニューアルのため休園・展示変更の可能性があります。公式サイトで確認してください",
  "access": {
   "train": "JR甲府駅南口から山梨交通バス",
   "car": "中央道 甲府南ICから約10分",
   "src": "https://www.city.kofu.lg.jp/zoo/access.html"
  }
 },
 {
  "name": "小諸市動物園",
  "pref": "長野県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.google.com/search?q=%E5%B0%8F%E8%AB%B8%E5%B8%82%E5%8B%95%E7%89%A9%E5%9C%92%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88",
  "lat": 36.32592,
  "lng": 138.41825,
  "address": "長野県 小諸市 古城二丁目",
  "urlIsSearch": true
 },
 {
  "name": "須坂市動物園",
  "pref": "長野県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.city.suzaka.nagano.jp/suzaka_zoo/",
  "lat": 36.64241,
  "lng": 138.31112,
  "address": "長野県 須坂市 望岳台 墨坂南五丁目",
  "access": {
   "train": "すざか市民バス「臥竜公園」下車、徒歩約10分",
   "car": "上信越道 須坂長野東ICから・周辺に駐車場",
   "src": "https://www.city.suzaka.nagano.jp/suzaka_zoo/info/4206.html"
  }
 },
 {
  "name": "飯田市立動物園",
  "pref": "長野県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://iidazoo.jp/",
  "lat": 35.51393,
  "lng": 137.82396,
  "address": "長野県 飯田市 橋南 扇町 銀座五丁目"
 },
 {
  "name": "静岡市立日本平動物園",
  "pref": "静岡県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.nhdzoo.jp/",
  "lat": 34.97982,
  "lng": 138.44051,
  "address": "静岡県 静岡市 駿河区 池田"
 },
 {
  "name": "浜松市動物園",
  "pref": "静岡県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://hamazoo.net/",
  "lat": 34.76446,
  "lng": 137.62739,
  "address": "静岡県 浜松市 中央区 舘山寺町",
  "access": {
   "train": "浜松駅バスターミナル1番から遠鉄バス「舘山寺温泉」行き「動物園」下車、徒歩2分",
   "src": "https://hamazoo.net/access.php"
  }
 },
 {
  "name": "掛川花鳥園",
  "pref": "静岡県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://k-hana-tori.com/",
  "lat": 34.76169,
  "lng": 138.01538,
  "address": "静岡県 掛川市 南郷 上張 南二丁目"
 },
 {
  "name": "富士花鳥園",
  "pref": "静岡県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://kamoltd.co.jp/fuji/",
  "lat": 35.40884,
  "lng": 138.58631,
  "address": "静岡県 富士宮市",
  "access": {
   "train": "富士急行バス「富士丘入り口」下車、徒歩約10分",
   "car": "東名 富士IC・新東名 新富士ICから約45分",
   "src": "https://kamoltd.co.jp/fuji/access"
  }
 },
 {
  "name": "あわしまマリンパーク",
  "pref": "静岡県",
  "type": "水族館",
  "species": [
   "humboldt",
   "african",
   "nrock"
  ],
  "url": "http://www.marinepark.jp/",
  "lat": 35.03358,
  "lng": 138.89002,
  "address": "静岡県 沼津市 内浦重寺",
  "access": {
   "train": "JR沼津駅からバス約30分／伊豆長岡駅からタクシー約10〜15分",
   "car": "東名 沼津ICから国道414号経由",
   "src": "https://www.marinepark.jp/access/"
  }
 },
 {
  "name": "伊豆・三津シーパラダイス",
  "pref": "静岡県",
  "type": "水族館",
  "species": [
   "humboldt",
   "african"
  ],
  "url": "https://www.mitosea.com/",
  "lat": 35.01966,
  "lng": 138.89618,
  "address": "静岡県 沼津市 内浦長浜",
  "access": {
   "train": "JR三島駅から伊豆箱根バス",
   "car": "東名 沼津IC・新東名 長泉沼津ICから約30分",
   "src": "https://www.mitosea.com/infomation/"
  }
 },
 {
  "name": "下田海中水族館",
  "pref": "静岡県",
  "type": "水族館",
  "species": [
   "king",
   "humboldt"
  ],
  "url": "https://shimoda-aquarium.com/",
  "lat": 34.66617,
  "lng": 138.94606,
  "address": "静岡県 下田市 武ガ浜 三丁目",
  "access": {
   "train": "伊豆急下田駅からバス7分・タクシー5分・徒歩25分",
   "car": "修善寺道路 月ヶ瀬ICから約40km・駐車場200台",
   "src": "https://shimoda-aquarium.com/information/access/"
  }
 },
 {
  "name": "名古屋港水族館",
  "pref": "愛知県",
  "type": "水族館",
  "species": [
   "emperor",
   "adelie",
   "gentoo",
   "chinstrap"
  ],
  "url": "https://nagoyaaqua.jp/",
  "lat": 35.09097,
  "lng": 136.87803,
  "address": "愛知県 名古屋市 港区 港町 入船二丁目",
  "access": {
   "train": "地下鉄名港線「名古屋港」駅3番出口から徒歩5分",
   "car": "名古屋高速 港明ICから約10分（ガーデンふ頭駐車場など）",
   "src": "https://nagoyaaqua.jp/access/"
  }
 },
 {
  "name": "名古屋市東山動植物園",
  "pref": "愛知県",
  "type": "動物園",
  "species": [
   "humboldt",
   "nrock"
  ],
  "url": "https://www.higashiyama.city.nagoya.jp/",
  "lat": 35.15653,
  "lng": 136.98182,
  "address": "愛知県 名古屋市 千種区",
  "access": {
   "train": "地下鉄東山線「東山公園」駅3番出口から徒歩3分",
   "car": "東名 名古屋ICから約15分",
   "src": "https://www.higashiyama.city.nagoya.jp/01_annai/01_02koutsu/"
  }
 },
 {
  "name": "のんほいパーク（豊橋総合動植物公園）",
  "pref": "愛知県",
  "type": "動物園",
  "species": [
   "king",
   "gentoo",
   "humboldt",
   "srock"
  ],
  "url": "https://www.nonhoi.jp/",
  "lat": 34.72009,
  "lng": 137.43275,
  "address": "愛知県 豊橋市",
  "access": {
   "train": "JR東海道線「二川」駅南口から徒歩約6分",
   "car": "東名 豊川ICから約40分",
   "src": "https://www.nonhoi.jp/information/"
  }
 },
 {
  "name": "南知多ビーチランド",
  "pref": "愛知県",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "humboldt"
  ],
  "url": "https://beachland.jp/",
  "lat": 34.78681,
  "lng": 136.85471,
  "address": "愛知県 知多郡 美浜町 奥田",
  "access": {
   "train": "名鉄知多新線「知多奥田」駅から徒歩15分",
   "car": "南知多道路 美浜ICから約10分",
   "src": "https://beachland.jp/"
  }
 },
 {
  "name": "鳥羽水族館",
  "pref": "三重県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://aquarium.co.jp/",
  "lat": 34.48201,
  "lng": 136.84533,
  "address": "三重県 鳥羽市"
 },
 {
  "name": "伊勢シーパラダイス",
  "pref": "三重県",
  "type": "水族館",
  "species": [
   "king",
   "macaroni",
   "african",
   "humboldt"
  ],
  "url": "https://ise-seaparadise.com/",
  "lat": 34.50737,
  "lng": 136.79128,
  "address": "三重県 伊勢市 二見町江",
  "access": {
   "train": "鳥羽バスセンターから約12分／伊勢市駅前から約46分「夫婦岩東口」",
   "src": "https://ise-seaparadise.com/access/"
  }
 },
 {
  "name": "恩賜上野動物園",
  "pref": "東京都",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.tokyo-zoo.net/zoo/ueno/",
  "lat": 35.7164,
  "lng": 139.7713,
  "address": "東京都 台東区 上野公園",
  "access": {
   "train": "JR上野駅「公園口」から徒歩5分",
   "src": "https://www.tokyo-zoo.net/ueno/visitor-info/access/index.html"
  }
 },
 {
  "name": "葛西臨海水族園",
  "pref": "東京都",
  "type": "水族館",
  "species": [
   "king",
   "humboldt",
   "srock",
   "little"
  ],
  "url": "https://www.tokyo-zoo.net/zoo/kasai/",
  "lat": 35.6406,
  "lng": 139.862,
  "address": "東京都 江戸川区 臨海町",
  "access": {
   "train": "JR京葉線「葛西臨海公園」駅から徒歩5分",
   "car": "首都高湾岸線 葛西ICから約10分",
   "src": "https://www.tokyo-zoo.net/kasai/visitor-info/access/index.html"
  }
 },
 {
  "name": "羽村市動物公園",
  "pref": "東京都",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://hamurazoo.jp/",
  "lat": 35.7583,
  "lng": 139.3176,
  "address": "東京都 羽村市 羽",
  "access": {
   "train": "JR青梅線「羽村」駅東口から徒歩20分",
   "src": "https://hamurazoo.jp/access/"
  }
 },
 {
  "name": "江戸川区自然動物園",
  "pref": "東京都",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.edogawa-kankyozaidan.jp/zoo/",
  "lat": 35.6661,
  "lng": 139.872,
  "address": "東京都 江戸川区 北葛西（行船公園内）",
  "access": {
   "train": "東京メトロ東西線「西葛西」駅北口から徒歩15分",
   "src": "https://www.edogawa-kankyozaidan.jp/zoo/218/"
  }
 },
 {
  "name": "サンシャイン水族館",
  "pref": "東京都",
  "type": "水族館",
  "species": [
   "african"
  ],
  "url": "https://sunshinecity.jp/aquarium/",
  "lat": 35.7289,
  "lng": 139.7197,
  "address": "東京都 豊島区 東池袋"
 },
 {
  "name": "しながわ水族館",
  "pref": "東京都",
  "type": "水族館",
  "species": [
   "magellanic"
  ],
  "url": "https://www.aquarium.gr.jp/",
  "lat": 35.59,
  "lng": 139.736,
  "address": "東京都 品川区 勝島（しながわ区民公園内）"
 },
 {
  "name": "アクアパーク品川",
  "pref": "東京都",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "nrock",
   "african"
  ],
  "url": "https://www.aqua-park.jp/aqua/",
  "lat": 35.6268,
  "lng": 139.7393,
  "address": "東京都 港区 高輪",
  "access": {
   "train": "JR・京急「品川」駅高輪口から徒歩約2分",
   "src": "https://www.aqua-park.jp/aqua/access/"
  }
 },
 {
  "name": "すみだ水族館",
  "pref": "東京都",
  "type": "水族館",
  "species": [
   "magellanic"
  ],
  "url": "https://www.sumida-aquarium.com/",
  "lat": 35.7101,
  "lng": 139.8095,
  "address": "東京都 墨田区 押上（東京スカイツリータウン内）",
  "access": {
   "train": "「押上（スカイツリー前）」駅から徒歩5分（東京スカイツリータウン内）",
   "src": "https://www.sumida-aquarium.com/about/access/"
  }
 },
 {
  "name": "川崎市夢見ヶ崎動物公園",
  "pref": "神奈川県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.google.com/search?q=%E5%A4%A2%E8%A6%8B%E3%83%B6%E5%B4%8E%E5%8B%95%E7%89%A9%E5%85%AC%E5%9C%92%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88",
  "lat": 35.54956,
  "lng": 139.66497,
  "address": "神奈川県 川崎市 幸区 南加瀬",
  "urlIsSearch": true
 },
 {
  "name": "横浜市立野毛山動物園",
  "pref": "神奈川県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.hama-midorinokyokai.or.jp/zoo/nogeyama/",
  "lat": 35.44754,
  "lng": 139.62264,
  "address": "神奈川県 横浜市 西区 老松町",
  "access": {
   "train": "京急「日ノ出町」駅から徒歩10分／JR「桜木町」駅から徒歩15分",
   "src": "https://www.hama-midorinokyokai.or.jp/zoo/nogeyama/access.php"
  }
 },
 {
  "name": "よこはま動物園ズーラシア",
  "pref": "神奈川県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.hama-midorinokyokai.or.jp/zoo/zoorasia/",
  "lat": 35.49678,
  "lng": 139.52365,
  "address": "神奈川県 横浜市 旭区 上白根町",
  "access": {
   "train": "相鉄線「鶴ヶ峰」「三ツ境」駅からバス約15分／JR・地下鉄「中山」駅からバス約18分",
   "car": "東名 横浜町田ICから約15分",
   "src": "https://www.hama-midorinokyokai.or.jp/zoo/zoorasia/access.php"
  }
 },
 {
  "name": "長井海の手公園 ソレイユの丘",
  "pref": "神奈川県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://soleil-park.jp/",
  "lat": 35.19512,
  "lng": 139.61268,
  "address": "神奈川県 横須賀市 初声町和田",
  "access": {
   "train": "京急「三崎口」駅から京急バス「ソレイユの丘」行き約20分",
   "src": "https://soleil-park.jp/access"
  }
 },
 {
  "name": "新江ノ島水族館",
  "pref": "神奈川県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.enosui.com/",
  "lat": 35.31007,
  "lng": 139.47944,
  "address": "神奈川県 藤沢市 片瀬海岸 片瀬海岸二丁目",
  "access": {
   "train": "小田急江ノ島線「片瀬江ノ島」駅から徒歩3分",
   "src": "https://www.enosui.com/access.php"
  }
 },
 {
  "name": "横浜・八景島シーパラダイス",
  "pref": "神奈川県",
  "type": "水族館",
  "species": [
   "king",
   "adelie",
   "gentoo",
   "macaroni",
   "nrock",
   "african",
   "magellanic"
  ],
  "url": "https://www.seaparadise.co.jp/",
  "lat": 35.3365,
  "lng": 139.64578,
  "address": "神奈川県 横浜市 金沢区 八景島",
  "access": {
   "train": "京急「金沢八景」駅からシーサイドライン「八景島」駅",
   "car": "横浜横須賀道路 並木ICから約2km",
   "src": "https://www.seaparadise.co.jp/access/"
  }
 },
 {
  "name": "箱根園水族館",
  "pref": "神奈川県",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "macaroni",
   "african",
   "srock"
  ],
  "url": "https://www.princehotels.co.jp/amuse/hakone-en/suizokukan/",
  "lat": 35.21224,
  "lng": 139.00931,
  "address": "神奈川県 足柄下郡 箱根 元箱根",
  "access": {
   "train": "小田原駅から伊豆箱根バス約1時間20分「箱根園」",
   "car": "東名 御殿場ICから約45分",
   "src": "https://www.princehotels.co.jp/amuse/hakone-en/information/access.html"
  }
 },
 {
  "name": "千葉市動物公園",
  "pref": "千葉県",
  "type": "動物園",
  "species": [
   "african",
   "humboldt"
  ],
  "url": "https://www.city.chiba.jp/zoo/index.html",
  "lat": 35.64258,
  "lng": 140.12551,
  "address": "千葉県 千葉市 若葉区 みつわ台四丁目",
  "access": {
   "train": "千葉都市モノレール「動物公園」駅から徒歩1分（千葉駅から約12分）",
   "src": "https://www.city.chiba.jp/zoo/guide/access.html"
  }
 },
 {
  "name": "市原ぞうの国",
  "pref": "千葉県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://zounokuni.com/",
  "lat": 35.35524,
  "lng": 140.1822,
  "address": "千葉県 市原市 山小川",
  "access": {
   "car": "圏央道 市原鶴舞ICから約5分",
   "src": "https://zounokuni.com/access/"
  }
 },
 {
  "name": "鴨川シーワールド",
  "pref": "千葉県",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "nrock",
   "humboldt"
  ],
  "url": "https://www.kamogawa-seaworld.jp/",
  "lat": 35.11525,
  "lng": 140.11903,
  "address": "千葉県 鴨川市 東町（飛地）",
  "access": {
   "train": "JR安房鴨川駅から無料送迎バス約10分",
   "car": "館山道 松ヶ丘ICから",
   "src": "https://www.kamogawa-seaworld.jp/access/route/"
  }
 },
 {
  "name": "埼玉県こども動物自然公園",
  "pref": "埼玉県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.parks.or.jp/sczoo/",
  "lat": 36.00151,
  "lng": 139.37408,
  "address": "埼玉県 東松山市 岩殿",
  "access": {
   "train": "東武東上線「高坂」駅からバス約5分「こども動物自然公園」すぐ",
   "car": "関越道 鶴ヶ島ICから約20分",
   "src": "https://www.parks.or.jp/sczoo/guide/000/000195.html"
  }
 },
 {
  "name": "東武動物公園",
  "pref": "埼玉県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.tobuzoo.com/",
  "lat": 36.02496,
  "lng": 139.72657,
  "address": "埼玉県 南埼玉郡 宮代町 百間 百間二丁目",
  "access": {
   "train": "東武線「東武動物公園」駅から徒歩約10分（600m）",
   "car": "東北道 久喜ICから約20分",
   "src": "https://www.tobuzoo.com/access/"
  }
 },
 {
  "name": "日立市かみね動物園",
  "pref": "茨城県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.city.hitachi.lg.jp/zoo/",
  "lat": 36.60754,
  "lng": 140.6592,
  "address": "茨城県 日立市 本宮町一丁目",
  "access": {
   "train": "JR日立駅から茨城交通バス約10分「神峰公園口」下車、徒歩約3分",
   "car": "常磐道 日立中央ICから約5分",
   "src": "https://www.city.hitachi.lg.jp/zoo/1004402.html"
  }
 },
 {
  "name": "アクアワールド茨城県大洗水族館",
  "pref": "茨城県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.aquaworld-oarai.com/",
  "lat": 36.33332,
  "lng": 140.59387,
  "address": "茨城県 東茨城郡 大洗町 祝町",
  "access": {
   "car": "北関東道 水戸大洗ICから国道51号経由",
   "src": "https://www.aquaworld-oarai.com/guide/access-car/"
  }
 },
 {
  "name": "宇都宮動物園",
  "pref": "栃木県",
  "type": "動物園",
  "species": [
   "magellanic"
  ],
  "url": "https://utsunomiya-zoo.com/",
  "lat": 36.63245,
  "lng": 139.8545,
  "address": "栃木県 宇都宮市 野沢町",
  "access": {
   "train": "関東バス「下金井」停留所から徒歩約5分",
   "car": "東北道 宇都宮ICから約5分",
   "src": "https://utsunomiya-zoo.com/access/"
  }
 },
 {
  "name": "那須どうぶつ王国",
  "pref": "栃木県",
  "type": "動物園",
  "species": [
   "humboldt",
   "african",
   "gentoo"
  ],
  "url": "https://www.nasu-oukoku.com/",
  "lat": 37.13205,
  "lng": 140.04041,
  "address": "栃木県 那須郡 那須町 大島 大谷"
 },
 {
  "name": "桐生が岡動物園",
  "pref": "群馬県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.city.kiryu.lg.jp/zoo/index.html",
  "lat": 36.42062,
  "lng": 139.33976,
  "address": "群馬県 桐生市 天神町二丁目"
 },
 {
  "name": "群馬サファリパーク",
  "pref": "群馬県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.safari.co.jp/",
  "lat": 36.22581,
  "lng": 138.88506,
  "address": "群馬県 富岡市 岡本",
  "access": {
   "car": "上信越道 富岡ICから約10分（5.6km）",
   "src": "https://safari.co.jp/access/"
  }
 },
 {
  "name": "京都市動物園",
  "pref": "京都府",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www5.city.kyoto.jp/zoo/",
  "lat": 35.01303,
  "lng": 135.78631,
  "address": "京都府 京都市 左京区 永観堂町飛地 南禅寺草川町"
 },
 {
  "name": "京都水族館",
  "pref": "京都府",
  "type": "水族館",
  "species": [
   "african"
  ],
  "url": "https://www.kyoto-aquarium.com/",
  "lat": 34.98755,
  "lng": 135.74788,
  "address": "京都府 京都市 下京区 上之町",
  "access": {
   "train": "JR「梅小路京都西」駅から徒歩約7分／京都駅中央口から徒歩約15分",
   "car": "専用駐車場なし",
   "src": "https://www.kyoto-aquarium.com/about/access/"
  }
 },
 {
  "name": "丹後魚っ知館",
  "pref": "京都府",
  "type": "水族館",
  "species": [
   "magellanic"
  ],
  "url": "https://www.google.com/search?q=%E4%B8%B9%E5%BE%8C%E9%AD%9A%E3%81%A3%E7%9F%A5%E9%A4%A8%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88",
  "lat": 35.5735,
  "lng": 135.199,
  "address": "京都府 宮津市 小田宿野",
  "urlIsSearch": true
 },
 {
  "name": "天王寺動物園",
  "pref": "大阪府",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.tennojizoo.jp/",
  "lat": 34.65064,
  "lng": 135.50836,
  "address": "大阪府 大阪市 浪速区 恵美須東一丁目 公東町＜旧南陽新地＞",
  "access": {
   "train": "Osaka Metro「動物園前」駅・JR「天王寺」駅から徒歩5〜10分",
   "car": "専用駐車場なし（天王寺公園地下駐車場など）",
   "src": "https://www.tennojizoo.jp/info/outline/"
  }
 },
 {
  "name": "ニフレル",
  "pref": "大阪府",
  "type": "水族館",
  "species": [
   "african"
  ],
  "url": "https://www.nifrel.jp/",
  "lat": 34.80628,
  "lng": 135.53365,
  "address": "大阪府 吹田市 千里万博公園",
  "access": {
   "train": "大阪モノレール「万博記念公園」駅すぐ（EXPOCITY内）",
   "car": "名神 吹田IC・中国道 中国吹田ICから（EXPOCITY駐車場）",
   "src": "https://www.nifrel.jp/guide/access.html"
  }
 },
 {
  "name": "海遊館",
  "pref": "大阪府",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "adelie",
   "srock"
  ],
  "url": "https://www.kaiyukan.com/",
  "lat": 34.65516,
  "lng": 135.42939,
  "address": "大阪府 大阪市 港区 海岸通一丁目",
  "access": {
   "train": "大阪メトロ中央線「大阪港」駅1番出口から徒歩約5分",
   "car": "阪神高速 天保山出口からすぐ・駐車場あり",
   "src": "https://www.kaiyukan.com/info/access/"
  }
 },
 {
  "name": "神戸市立王子動物園",
  "pref": "兵庫県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.kobe-ojizoo.jp/",
  "lat": 34.71073,
  "lng": 135.21423,
  "address": "兵庫県 神戸市 灘区 原田通三丁目 ミュージアムロード"
 },
 {
  "name": "姫路セントラルパーク",
  "pref": "兵庫県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://www.central-park.co.jp/",
  "lat": 34.86998,
  "lng": 134.75223,
  "address": "兵庫県 姫路市 豊富町神谷",
  "access": {
   "train": "JR姫路駅北口から神姫バス（74系統）",
   "car": "大阪から約55分",
   "src": "https://www.central-park.co.jp/access/"
  }
 },
 {
  "name": "神戸どうぶつ王国",
  "pref": "兵庫県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://www.kobe-oukoku.com/",
  "lat": 34.65419,
  "lng": 135.22317,
  "address": "兵庫県 神戸市 中央区 港島南町六丁目",
  "access": {
   "train": "ポートライナー「計算科学センター（神戸どうぶつ王国・富岳前）」駅すぐ",
   "car": "阪神高速 京橋・生田川出口から",
   "src": "https://www.kobe-oukoku.com/access"
  }
 },
 {
  "name": "城崎マリンワールド",
  "pref": "兵庫県",
  "type": "水族館",
  "species": [
   "african",
   "king",
   "humboldt"
  ],
  "url": "https://marineworld.hiyoriyama.co.jp/",
  "lat": 35.65578,
  "lng": 134.82405,
  "address": "兵庫県 豊岡市 竹野町 竹野町竹野 東町",
  "access": {
   "car": "大阪 池田IC・神戸 西宮北ICなどから北近畿豊岡道経由",
   "src": "https://marineworld.hiyoriyama.co.jp/information/info01"
  }
 },
 {
  "name": "姫路市立水族館",
  "pref": "兵庫県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.city.himeji.lg.jp/aqua/",
  "lat": 34.82266,
  "lng": 134.67634,
  "address": "兵庫県 姫路市 福沢町 延末一丁目"
 },
 {
  "name": "AQUARIUM × ART átoa",
  "pref": "兵庫県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://atoa-kobe.jp/",
  "lat": 34.68324,
  "lng": 135.19361,
  "address": "兵庫県 神戸市 中央区 新港町",
  "access": {
   "train": "JR・阪神「元町」駅から南へ徒歩約15分／三宮駅から徒歩約18分",
   "src": "https://atoa-kobe.jp/access/"
  }
 },
 {
  "name": "和歌山城公園動物園",
  "pref": "和歌山県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "http://wakayamajo.jp/animal/index.html",
  "lat": 34.22694,
  "lng": 135.17301,
  "address": "和歌山県 和歌山市 南細工町 広瀬通丁二丁目",
  "access": {
   "train": "JR和歌山駅から和歌山バス約10分「和歌山城前」すぐ／南海「和歌山市」駅から徒歩約15分",
   "src": "https://wakayamajo.jp/access/"
  }
 },
 {
  "name": "アドベンチャーワールド",
  "pref": "和歌山県",
  "type": "動物園",
  "species": [
   "emperor",
   "king",
   "gentoo",
   "adelie",
   "chinstrap",
   "african",
   "nrock",
   "little"
  ],
  "url": "https://www.aws-s.com/",
  "lat": 33.6659,
  "lng": 135.37243,
  "address": "和歌山県 西牟婁郡 白浜町 才野",
  "access": {
   "train": "JR白浜駅から路線バス",
   "car": "紀勢道 南紀白浜ICから約4.6km",
   "src": "https://www.aws-s.com/guide/access/"
  }
 },
 {
  "name": "池田動物園",
  "pref": "岡山県",
  "type": "動物園",
  "species": [
   "magellanic"
  ],
  "url": "https://ikedazoo.jp/",
  "lat": 34.67482,
  "lng": 133.90624,
  "address": "岡山県 岡山市 北区 いずみ町 伊福町三丁目 島田筋",
  "access": {
   "train": "JR岡山駅西口からタクシー約8分",
   "src": "https://ikedazoo.jp/access/"
  }
 },
 {
  "name": "広島市安佐動物公園",
  "pref": "広島県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "http://www.asazoo.jp/",
  "lat": 34.49699,
  "lng": 132.44309,
  "address": "広島県 広島市 安佐北区 上安七丁目",
  "access": {
   "train": "広島バスセンターからバス（全体約50分）／アストラムライン経由で約40分",
   "car": "山陽道 広島北ICから約15〜20分",
   "src": "http://www.asazoo.jp/info/access.php"
  }
 },
 {
  "name": "福山市立動物園",
  "pref": "広島県",
  "type": "動物園",
  "species": [
   "gentoo",
   "humboldt"
  ],
  "url": "https://www.fukuyamazoo.jp/",
  "lat": 34.52369,
  "lng": 133.27921,
  "address": "広島県 福山市"
 },
 {
  "name": "宮島水族館",
  "pref": "広島県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.miyajima-aqua.jp/",
  "lat": 34.29548,
  "lng": 132.31565,
  "address": "広島県 廿日市市 宮島町 弥山登山道 大元ルート"
 },
 {
  "name": "松江フォーゲルパーク",
  "pref": "島根県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://www.ichibata.co.jp/vogelpark/",
  "lat": 35.47725,
  "lng": 132.94461,
  "address": "島根県 松江市 大垣町",
  "access": {
   "train": "一畑電車「松江フォーゲルパーク」駅すぐ（松江しんじ湖温泉駅から約15分）",
   "src": "https://www.ichibata.co.jp/vogelpark/info"
  }
 },
 {
  "name": "島根県立しまね海洋館アクアス",
  "pref": "島根県",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "humboldt",
   "nrock"
  ],
  "url": "https://aquas.or.jp/",
  "lat": 34.923,
  "lng": 132.087,
  "address": "島根県 浜田市 久代町",
  "access": {
   "train": "JR山陰本線「波子」駅から徒歩",
   "src": "https://aquas.or.jp/guide/access/"
  }
 },
 {
  "name": "周南市徳山動物園",
  "pref": "山口県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://tokuyama-zoo.jp/",
  "lat": 34.06207,
  "lng": 131.8158,
  "address": "山口県 周南市 東金剛山 蓮ヶ浴 岐南町"
 },
 {
  "name": "下関市立しものせき水族館 海響館",
  "pref": "山口県",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "macaroni",
   "nrock",
   "humboldt",
   "magellanic"
  ],
  "url": "https://www.kaikyokan.com/",
  "lat": 33.95443,
  "lng": 130.94243,
  "address": "山口県 下関市 南部町 上田中町三丁目",
  "access": {
   "train": "JR下関駅からバス約5分「海響館前」",
   "car": "中国道 下関ICから・近くに駐車場あり",
   "src": "https://www.kaikyokan.com/access.php"
  }
 },
 {
  "name": "とくしま動物園",
  "pref": "徳島県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.google.com/search?q=%E3%81%A8%E3%81%8F%E3%81%97%E3%81%BE%E5%8B%95%E7%89%A9%E5%9C%92%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88",
  "lat": 34.01486,
  "lng": 134.52179,
  "address": "徳島県 徳島市 渋野町",
  "urlIsSearch": true
 },
 {
  "name": "新屋島水族館",
  "pref": "香川県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://r.goope.jp/new-yashima-aq/",
  "lat": 34.35807,
  "lng": 134.09971,
  "address": "香川県 高松市 屋島東町"
 },
 {
  "name": "四国水族館",
  "pref": "香川県",
  "type": "水族館",
  "species": [
   "african"
  ],
  "url": "https://shikoku-aquarium.jp/",
  "lat": 34.31233,
  "lng": 133.80779,
  "address": "香川県 綾歌郡 宇多津町 浜一番丁",
  "access": {
   "train": "JR予讃線「宇多津」駅北口から徒歩約12分",
   "car": "瀬戸中央道 坂出北ICから約5分",
   "src": "https://shikoku-aquarium.jp/access/"
  }
 },
 {
  "name": "愛媛県立とべ動物園",
  "pref": "愛媛県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.tobezoo.com/",
  "lat": 33.76237,
  "lng": 132.79281,
  "address": "愛媛県 伊予郡 砥部町 上原町"
 },
 {
  "name": "虹の森公園おさかな館",
  "pref": "愛媛県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.google.com/search?q=%E8%99%B9%E3%81%AE%E6%A3%AE%E5%85%AC%E5%9C%92%E3%81%8A%E3%81%95%E3%81%8B%E3%81%AA%E9%A4%A8%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88",
  "lat": 33.221,
  "lng": 132.716,
  "address": "愛媛県 北宇和郡 松野町 延野々",
  "urlIsSearch": true
 },
 {
  "name": "高知県立のいち動物公園",
  "pref": "高知県",
  "type": "動物園",
  "species": [
   "humboldt",
   "gentoo"
  ],
  "url": "https://noichizoo.or.jp/",
  "lat": 33.57021,
  "lng": 133.70798,
  "address": "高知県 香南市 野市町兎田 野市町みどり野一丁目",
  "access": {
   "train": "土佐くろしお鉄道「のいち」駅から徒歩20分",
   "car": "高知東部道 香南のいちICから約10分",
   "src": "https://noichizoo.or.jp/guide/access/"
  }
 },
 {
  "name": "桂浜水族館",
  "pref": "高知県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://katurahama-aq.jp/",
  "lat": 33.49727,
  "lng": 133.57365,
  "address": "高知県 高知市 浦戸",
  "access": {
   "train": "JR高知駅・はりまや橋からとさでん交通バス「桂浜」行き約30分",
   "car": "高知道 高知ICから約30分",
   "src": "https://katurahama-aq.jp/info.html"
  }
 },
 {
  "name": "福岡市動植物園",
  "pref": "福岡県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://zoo.city.fukuoka.lg.jp/",
  "lat": 33.57324,
  "lng": 130.38981,
  "address": "福岡県 福岡市 中央区 南公園 桜坂三丁目"
 },
 {
  "name": "久留米市鳥類センター",
  "pref": "福岡県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "https://kurumekoen.org/birdc/",
  "lat": 33.32,
  "lng": 130.52807,
  "address": "福岡県 久留米市 南薫町",
  "access": {
   "train": "西鉄「櫛原」駅から徒歩5分",
   "src": "https://kurumekoen.org/pool/pool_access/"
  }
 },
 {
  "name": "マリンワールド海の中道",
  "pref": "福岡県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://marine-world.jp/",
  "lat": 33.66141,
  "lng": 130.36335,
  "address": "福岡県 福岡市 東区 西戸崎",
  "access": {
   "train": "JR香椎線「海ノ中道」駅から（香椎駅で乗り換え）",
   "car": "福岡都市高速 アイランドシティ出口から",
   "src": "https://marine-world.jp/access/"
  }
 },
 {
  "name": "九十九島動植物園森きらら",
  "pref": "長崎県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.morikirara.jp/",
  "lat": 33.1747,
  "lng": 129.6965,
  "address": "長崎県 佐世保市 船越町",
  "access": {
   "train": "JR佐世保駅から約30分（バス）",
   "car": "西九州道 佐世保中央ICから",
   "src": "https://www.morikirara.jp/access/"
  }
 },
 {
  "name": "長崎ペンギン水族館",
  "pref": "長崎県",
  "type": "水族館",
  "species": [
   "king",
   "gentoo",
   "chinstrap",
   "african",
   "humboldt",
   "magellanic",
   "nrock",
   "srock",
   "little"
  ],
  "url": "https://penguin-aqua.jp/",
  "lat": 32.75818,
  "lng": 129.94676,
  "address": "長崎県 長崎市 宿町 界一丁目",
  "access": {
   "train": "長崎駅前からタクシー約30分（路線バスもあり）",
   "car": "長崎道 長崎芒塚ICから約5分",
   "src": "https://penguin-aqua.jp/access/"
  }
 },
 {
  "name": "熊本市動植物園",
  "pref": "熊本県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.ezooko.jp/",
  "lat": 32.77525,
  "lng": 130.74749,
  "address": "熊本県 熊本市 東区",
  "access": {
   "train": "市電・バス「動植物園入口」下車、徒歩10分",
   "car": "九州道 益城熊本空港ICから約20分",
   "src": "https://www.ezooko.jp/one_html3/pub/default.aspx?c_id=7"
  }
 },
 {
  "name": "阿蘇カドリー・ドミニオン",
  "pref": "熊本県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://www.cuddly.co.jp/",
  "lat": 32.93175,
  "lng": 131.06701,
  "address": "熊本県 阿蘇市 蔵原"
 },
 {
  "name": "別府ラクテンチ",
  "pref": "大分県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://rakutenchi.jp/",
  "lat": 33.284,
  "lng": 131.485,
  "address": "大分県 別府市 流川通り"
 },
 {
  "name": "大分マリーンパレス水族館 うみたまご",
  "pref": "大分県",
  "type": "水族館",
  "species": [
   "magellanic"
  ],
  "url": "https://www.umitamago.jp/",
  "lat": 33.25897,
  "lng": 131.53564,
  "address": "大分県 大分市",
  "access": {
   "car": "大分道 別府ICから県道52号・国道10号経由",
   "src": "https://www.umitamago.jp/access/"
  }
 },
 {
  "name": "つくみイルカ島",
  "pref": "大分県",
  "type": "水族館",
  "species": [
   "magellanic"
  ],
  "url": "https://www.tsukumi-irukajima.jp/",
  "lat": 33.056,
  "lng": 131.92,
  "address": "大分県 津久見市 大字四浦",
  "access": {
   "train": "JR津久見駅から約15分",
   "car": "東九州道 津久見ICから約20分",
   "src": "https://www.tsukumi-irukajima.jp/access/"
  }
 },
 {
  "name": "宮崎市フェニックス自然動物園",
  "pref": "宮崎県",
  "type": "動物園",
  "species": [
   "african"
  ],
  "url": "http://www.miyazaki-city-zoo.jp/",
  "lat": 31.9845,
  "lng": 131.466,
  "address": "宮崎県 宮崎市 塩路"
 },
 {
  "name": "鹿児島市平川動物公園",
  "pref": "鹿児島県",
  "type": "動物園",
  "species": [
   "humboldt"
  ],
  "url": "https://hirakawazoo.jp/",
  "lat": 31.4627,
  "lng": 130.50413,
  "address": "鹿児島県 鹿児島市 平川町",
  "access": {
   "train": "JR谷山駅・五位野駅から路線バス",
   "car": "九州道 鹿児島ICから指宿スカイライン経由",
   "src": "https://hirakawazoo.jp/access/"
  }
 },
 {
  "name": "志布志湾大黒イルカランド",
  "pref": "鹿児島県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://www.google.com/search?q=%E5%BF%97%E5%B8%83%E5%BF%97%E6%B9%BE%E5%A4%A7%E9%BB%92%E3%82%A4%E3%83%AB%E3%82%AB%E3%83%A9%E3%83%B3%E3%83%89%20%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88",
  "lat": 31.442,
  "lng": 131.08,
  "address": "鹿児島県 肝属郡 東串良町 柏原",
  "urlIsSearch": true
 },
 {
  "name": "DMMかりゆし水族館",
  "pref": "沖縄県",
  "type": "水族館",
  "species": [
   "humboldt"
  ],
  "url": "https://kariyushi-aquarium.com/",
  "lat": 26.15632,
  "lng": 127.65071,
  "address": "沖縄県 豊見城市",
  "access": {
   "train": "那覇空港からタクシー約20分（水族館行きバスもあり）",
   "car": "豊見城・名嘉地ICから",
   "src": "https://kariyushi-aquarium.com/access/"
  }
 }
];
