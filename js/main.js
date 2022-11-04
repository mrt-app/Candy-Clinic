const list = [
    {category: 1, rank: 1, name: 'クリスプチョコ ミルク', url: 'https://amzn.to/3SV2ePP'},
    {category: 1, rank: 2, name: 'チョコレート効果カカオ72%', url: 'https://amzn.to/3Nx9nVl'},
    {category: 1, rank: 2, name: 'チロルチョコ 105粒セット', url: 'https://amzn.to/3fC3Xvw'},
    {category: 1, rank: 1, name: 'ブラックサンダー1本×20個', url: 'https://amzn.to/3DAUltf'},
    {category: 1, rank: 3, name: 'リンドール テイスティングセット', url: 'https://amzn.to/3SZjsvq'},
    {category: 1, rank: 2, name: 'マカダミアチョコレート', url: 'https://amzn.to/3fC4Cgu'},
    {category: 4, rank: 4, name: 'メンタルバランスチョコレートGABA', url: 'https://amzn.to/3sRGWrC'},
    {category: 1, rank: 1, name: 'ジャイアントカプリコ(いちご)', url: 'https://amzn.to/3Ug5beA'},
    {category: 1, rank: 4, name: 'GABA ギャバ フォースリープ', url: 'https://amzn.to/3NsSKtW'},
    {category: 2, rank: 1, name: 'ポッキー5種', url: 'https://amzn.to/3zCU6MM'},
    {category: 3, rank: 2, name: 'いちごのたべっ子どうぶつ', url: 'https://amzn.to/3FHjSU6'},
    {category: 3, rank: 2, name: 'たべっ子水族館', url: 'https://amzn.to/3sTQp1D'},
    {category: 3, rank: 1, name: 'たべっ子どうぶつバター味', url: 'https://amzn.to/3fxcPCO'},
    {category: 4, rank: 1, name: 'じゃがりこサラダLサイズ 68g×12個', url: 'https://amzn.to/3SZKUsP'},
    {category: 2, rank: 3, name: 'SUNAO スナオ 発酵バター ×10袋', url: 'https://amzn.to/3FGrxSL'},
    {category: 4, rank: 2, name: '技のこだ割り 120g×6袋', url: 'https://amzn.to/3DVZsVZ'},
    {category: 3, rank: 4, name: 'ヨックモック シガール', url: 'https://amzn.to/3TUoydz'},
    {category: 2, rank: 4, name: 'ヨックモック クッキーアソート', url: 'https://amzn.to/3FGwgUs'},
    {category: 4, rank: 1, name: 'お徳用カルパス 140g×3袋', url: 'https://amzn.to/3DzxKwS'},
    {category: 3, rank: 1, name: 'ビスコミニパック(いちご) クリームサンド 5枚 ×40個', url: 'https://amzn.to/3WkeY5g'},
    {category: 3, rank: 1, name: 'ビスコミニパック クリームサンド 5枚 ×40個', url: 'https://amzn.to/3DW7XAs'},
    {category: 3, rank: 1, name: '江崎グリコ ビスコミニパック(カフェオレ) クリームサンド 5枚 ×40個', url: 'https://amzn.to/3Nutsvo'},
    {category: 4, rank: 1, name: 'マツモト 徳用おつまみ昆布100g', url: 'https://amzn.to/3DWuE7z'},
    {category: 1, rank: 3, name: 'オールシーズンチョコ 400g', url: 'https://amzn.to/3T57eBg'},
    {category: 2, rank: 1, name: 'カールチーズあじ 64g×10袋', url: 'https://amzn.to/3Nw10JC'},
    {category: 2, rank: 3, name: '紅茶のブールドネージュ', url: 'https://amzn.to/3DvgV6h'},
    {category: 2, rank: 4, name: 'ドライフルーツ フルーツミックス', url: 'https://amzn.to/3ftcocL'},
    {category: 2, rank: 4, name: 'コロンバン フレンチパイ セレクション 10枚入', url: 'https://amzn.to/3h6qIIu'},
    {category: 3, rank: 4, name: 'ブルボン 缶入トルテクッキー 60枚', url: 'https://amzn.to/3h8qSiH'},
    {category: 4, rank: 1, name: 'さかなっつハイ 10g×30個', url: 'https://amzn.to/3DZjYW1'},
    {category: 3, rank: 1, name: 'ハッピーターン', url: 'https://amzn.to/3sT6SD9'},
    {category: 2, rank: 3, name: 'とらや 小形羊羹 10本入', url: 'https://amzn.to/3ftd7uv'},
    {category: 4, rank: 1, name: 'ペンシルカルパス 20本', url: 'https://amzn.to/3DzkF6J'},
    {category: 4, rank: 3, name: 'ビーフステーキジャーキー ミディアムチャンク ホット150g', url: 'https://amzn.to/3FBgSZs'},
    {category: 4, rank: 2, name: 'KOIKEYA　STRONG　ポテトチップス　鬼コンソメビーフ　55g✕12袋', url: 'https://amzn.to/3WsoZgJ'},
    {category: 3, rank: 1, name: 'ゼロミルクキャンディ(袋) 50g×10個', url: 'https://amzn.to/3h3sY3g'},
    {category: 4, rank: 1, name: 'ヨーグレットミニ 32g×10袋', url: 'https://amzn.to/3DBAx97'},
    {category: 1, rank: 3, name: '大粒ラムネ 15袋', url: 'https://amzn.to/3FFUIFj'},
    {category: 4, rank: 2, name: 'BIGカツ 1枚×30袋', url: 'https://amzn.to/3DwrZQz'},
    {category: 4, rank: 2, name: '蒲焼さん太郎 1枚×60袋', url: 'https://amzn.to/3DALE1Z'},
    {category: 2, rank: 2, name: '焼肉さん太郎（30枚入り）× 4袋セット（計120枚）', url: 'https://amzn.to/3WlFewh'},
    {category: 4, rank: 2, name: 'わさびのり太郎 1枚×60袋', url: 'https://amzn.to/3UoG614'},
    {category: 1, rank: 1, name: '酢だこさん太郎 1枚×60袋', url: 'https://amzn.to/3sVj1HH'},
    {category: 1, rank: 1, name: '甘いか太郎キムチ味 1枚×30袋', url: 'https://amzn.to/3U1LCY1'},
    {category: 1, rank: 1, name: 'のし梅さん太郎　1袋x30枚入り', url: 'https://amzn.to/3sSX9Nd'},
    {category: 3, rank: 1, name: 'ココアシガレット 30個入', url: 'https://amzn.to/3FH7ZOa'},
    {category: 4, rank: 4, name: 'ポップコーン', url: 'https://amzn.to/3SXJqPL'},
    {category: 3, rank: 3, name: 'マシュマロ', url: 'https://amzn.to/3Un8fpy'},
    {category: 3, rank: 3, name: '2種のパイミックス バターパイ18枚 ココアパイ16枚', url: 'https://amzn.to/3h9zHJ6'},
    {category: 4, rank: 1, name: 'ハリボー ゴールドベア 80g ×10袋', url: 'https://amzn.to/3zAAHMH'},
    {category: 1, rank: 3, name: 'リーベスバウム', url: 'https://amzn.to/3WqHfHk'},
    {category: 3, rank: 4, name: 'HARADA ラスク', url: 'https://amzn.to/3FHaxMe'},
    {category: 3, rank: 4, name: 'シュガーバターの木', url: 'https://amzn.to/3frPW3N'},
    {category: 1, rank: 2, name: 'おやつカルパス 50個 ×5箱セット', url: 'https://amzn.to/3T5bVem'},
    {category: 1, rank: 2, name: 'チーズおやつ カマンベール入り 1箱（48本入）×3箱セット', url: 'https://amzn.to/3WpBR7x'},
    {category: 3, rank: 3, name: 'カラメルビスケット', url: 'https://amzn.to/3h9CWAg'},
    {category: 3, rank: 2, name: 'オリジナルバタークッキー', url: 'https://amzn.to/3UqrHBT'},
    {category: 1, rank: 4, name: 'ゴディバ  ゴールド コレクション', url: 'https://amzn.to/3sT0VGn'},
    {category: 4, rank: 1, name: 'ミンティアブリーズ シャイニーピンク', url: 'https://amzn.to/3tdtrCZ'},
    {category: 1, rank: 3, name: 'LIBERA リベラ (ミルクチョコレート) 50g×10個', url: 'https://amzn.to/3T271yV'},
    {category: 4, rank: 4, name: '電子レンジ用ポップコーン', url: 'https://amzn.to/3zFi9Lc'},
    {category: 1, rank: 4, name: 'ドライいちじく 人気サイズ800g', url: 'https://amzn.to/3DXzYrl'},
    {category: 2, rank: 2, name: 'アーモンドチョコ 88g×10個', url: 'https://amzn.to/3T0ru79'},
    {category: 2, rank: 3, name: 'とんがりコーンあっさり塩 21g×20袋', url: 'https://amzn.to/3WtLDVZ'},
    {category: 2, rank: 1, name: 'グーテ・デ・ロワ ホワイトチョコレート', url: 'https://amzn.to/3h7ttcL'},
    {category: 2, rank: 2, name: 'ちょこっとプッチンプリン 120g ×12個', url: 'https://amzn.to/3te2ZsV'},
    {category: 2, rank: 4, name: 'リンツ リンドール アソート 600g', url: 'https://amzn.to/3U6fQJs'},
    {category: 4, rank: 3, name: 'はごろも ぜんざい 150g (4028)×10個', url: 'https://amzn.to/3DCfx21'},
    {category: 3, rank: 2, name: 'キャラメルコーン 75g×12袋', url: 'https://amzn.to/3sXCaZy'},
    {category: 1, rank: 2, name: 'ラムネいろいろ 720g', url: 'https://amzn.to/3WkUg5g'},
    {category: 3, rank: 2, name: 'パティスリー銀座千疋屋 銀座レーズンサンド6個', url: 'https://amzn.to/3DyRJfp'},
    {category: 2, rank: 1, name: 'ギンビス チョコがしみこんだミニアスパラガス 25g×10袋', url: 'https://amzn.to/3fyx6YG'},
];
var step = 0;
var selectedCategory = 0;
var score = 0;

window.onload = function() {
    step = 0;
    let q1 = document.getElementById('q1');
    q1.className = q1.className.className = "dialog-frame";

}

function generatePrescription() {
    const date = new Date();
    const options = {era: 'short', year:'numeric',month:'long',day:'numeric'};
    const dateString = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(date);
    document.getElementById('created_at').innerText = dateString;
    document.getElementById('expired_at').innerText = dateString;
    document.getElementById('fox').src = "./images/candy_clinic_fin.webp";

    let resultList = list.filter(function(item) { return item.category == selectedCategory });
    shuffleArray(resultList);

    const targetListElement = document.getElementById('results');
    targetListElement.innerHTML = '';
    for(var i=0; i<resultList.length; ++i) {
        if (i > 2) { break; }
        const link = document.createElement("a");
        link.target = "_blank" ;
        link.href = resultList[i].url;
        link.innerText = resultList[i].name;
        const list = document.createElement("li");
        list.appendChild(link);
        targetListElement.appendChild(list);
    }
}

function anser(q, value) {
    document.getElementById('q' + q).className = "dialog-frame hide";
    step = q;

    if (step == 1) {
        selectedCategory = value;
    } else {
        score += value;
        if (score >= 4) {
            score = 4;
        }
    }

    if (step == 3) {
        generatePrescription();
        let answer = document.getElementById('answer');
        answer.className = answer.className.replace('hide', '');
        answer.animate(
            [
                { opacity: 0 },
                { opacity: 1 }
            ],
            {
                duration: 500,
                fill: 'forwards'
            }
        );
    } else {
        let nextQ = document.getElementById('q'+ (q+1))
        nextQ.className = "dialog-frame";
        nextQ.animate(
            [
                { opacity: 0 },
                { opacity: 1 }
            ],
            {
                duration: 300,
                fill: 'forwards'
            }
        );

    }
}

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}
  