// 日本の施設で飼育されているペンギン 12種
// 写真: Wikimedia Commons（各ファイルページに撮影者・ライセンス表記あり）
window.SPECIES = {
  emperor: {
    ja: "コウテイペンギン", en: "Emperor penguin", sci: "Aptenodytes forsteri",
    size: "約115〜130cm", iucn: "準絶滅危惧",
    desc: "世界最大のペンギン。南極の氷の上で冬に子育てをする。日本では名古屋港水族館とアドベンチャーワールドだけで見られる。",
    img: "img/species/emperor.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Aptenodytes_forsteri_-Snow_Hill_Island,_Antarctica_-adults_and_juvenile-8.jpg"
  },
  king: {
    ja: "キングペンギン", en: "King penguin", sci: "Aptenodytes patagonicus",
    size: "約85〜95cm", iucn: "低懸念",
    desc: "2番目に大きいペンギン。首元のオレンジ色が目印。ヒナは茶色いふわふわの羽毛で、親より大きく見えることも。",
    img: "img/species/king.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:SGI-2016-South_Georgia_(Fortuna_Bay)%E2%80%93King_penguin_(Aptenodytes_patagonicus)_04.jpg"
  },
  adelie: {
    ja: "アデリーペンギン", en: "Adélie penguin", sci: "Pygoscelis adeliae",
    size: "約70cm", iucn: "低懸念",
    desc: "目の周りの白いアイリングが特徴。南極にすむ、いわゆる“ペンギンらしい”見た目のペンギン。",
    img: "img/species/adelie.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Hope_Bay-2016-Trinity_Peninsula%E2%80%93Ad%C3%A9lie_penguin_(Pygoscelis_adeliae)_04.jpg"
  },
  gentoo: {
    ja: "ジェンツーペンギン", en: "Gentoo penguin", sci: "Pygoscelis papua",
    size: "約75〜90cm", iucn: "低懸念",
    desc: "オレンジ色のくちばしと、目の上の白い帯が目印。ペンギンの中で泳ぐのが最も速い（時速30km超とも）。",
    img: "img/species/gentoo.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Brown_Bluff-2016-Tabarin_Peninsula%E2%80%93Gentoo_penguin_(Pygoscelis_papua)_02.jpg"
  },
  chinstrap: {
    ja: "ヒゲペンギン", en: "Chinstrap penguin", sci: "Pygoscelis antarcticus",
    size: "約70cm", iucn: "低懸念",
    desc: "あごの下の黒い線が“ヒゲ”のように見える。南極半島周辺に多い。国内で見られる施設はわずか。",
    img: "img/species/chinstrap.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_(Pygoscelis_antarctica)_04.jpg"
  },
  macaroni: {
    ja: "マカロニペンギン", en: "Macaroni penguin", sci: "Eudyptes chrysolophus",
    size: "約70cm", iucn: "危急",
    desc: "額から伸びるオレンジ色の飾り羽が特徴。名前は18世紀イギリスの派手な若者「マカロニ」に由来する。",
    img: "img/species/macaroni.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:SGI-2016-South_Georgia_(Cooper_Bay)%E2%80%93Macaroni_penguin_(Eudyptes_chrysolophus)_01.jpg"
  },
  srock: {
    ja: "ミナミイワトビペンギン", en: "Southern rockhopper penguin", sci: "Eudyptes chrysocome",
    size: "約55cm", iucn: "危急",
    desc: "岩場をぴょんぴょん跳ねて移動する。黄色い飾り羽はキタイワトビより短め。",
    img: "img/species/srock.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Rockhopper_Penguin_on_Saunders_Island_(5586446214).jpg"
  },
  nrock: {
    ja: "キタイワトビペンギン", en: "Northern rockhopper penguin", sci: "Eudyptes moseleyi",
    size: "約55cm", iucn: "絶滅危惧",
    desc: "長くふさふさした黄色い飾り羽が特徴。日本では「イワトビペンギン」として紹介されることが多い。",
    img: "img/species/nrock.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Eudyptes_moseleyi_-Zoologischer_Garten_Berlin,_Germany-8a.jpg"
  },
  humboldt: {
    ja: "フンボルトペンギン", en: "Humboldt penguin", sci: "Spheniscus humboldti",
    size: "約65〜70cm", iucn: "危急",
    desc: "日本で最も多く飼育されているペンギン。南米ペルー・チリの沿岸にすみ、温暖な気候に強いので屋外展示が多い。",
    img: "img/species/humboldt.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Humboldt_Penguin,_Chilo%C3%A9,_CL-LL,_CL_imported_from_iNaturalist_photo_384752139.jpg"
  },
  magellanic: {
    ja: "マゼランペンギン", en: "Magellanic penguin", sci: "Spheniscus magellanicus",
    size: "約70cm", iucn: "低懸念",
    desc: "胸に黒い帯が2本あるのが特徴（フンボルトは1本）。南米南部のパタゴニア沿岸にすむ。",
    img: "img/species/magellanic.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:MagellanicPenguin.jpg"
  },
  african: {
    ja: "ケープペンギン", en: "African penguin", sci: "Spheniscus demersus",
    size: "約60〜70cm", iucn: "深刻な危機",
    desc: "アフリカ大陸にすむ唯一のペンギン。胸の黒い斑点の模様が一羽ずつ違う。野生の数が急減している。",
    img: "img/species/african.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Wikimania_2018,_Cape_Town_(_1050602),_crop.jpg"
  },
  little: {
    ja: "コガタペンギン（フェアリーペンギン）", en: "Little penguin", sci: "Eudyptula minor",
    size: "約30〜40cm", iucn: "低懸念",
    desc: "世界最小のペンギン。背中は青みがかった色で「ブルーペンギン」とも呼ばれる。オーストラリア・ニュージーランドにすむ。",
    img: "img/species/little.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Eudyptula_minor_Bruny_1.jpg"
  }
};
window.SPECIES_ORDER = ["emperor","king","adelie","gentoo","chinstrap","macaroni","srock","nrock","humboldt","magellanic","african","little"];
