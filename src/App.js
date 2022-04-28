import './App.css';
import Screen from './components/screen';

const livecameraIds = [
  "xvA-drlRwvg",
  "HpdO5Kq3o7Y", // 【LIVE】渋谷スクランブル交差点 ライブカメラ / Shibuya Scramble Crossing Live Camera
  "X437XmpsopA",
  "QOjmvL3e7Lc", // Tokyo Live Camera Ch1[4K] 東京 汐留 鉄道 ライブカメラ
  "YZWv7kej0Ks", // Tokyo Live Camera Ch2[4K/HDR] 東京 汐留 首都高 ライブカメラ
  "VG-pwPCjJ4Y", // 【ライブカメラ】名古屋駅/Nagoya Station
  "F3R97syoK40", // ４Ｋライブカメラ　レインボーブリッジと東京タワー、お台場東京。４Ｋライブ配信。羽田空港の飛行機。お天気カメラお台場東京
  "9Bq76emgglg",
  "jnuacQgCEEA",
  "Kn4sf1nJXCU",
  "2d0yO_QN1Iw",
  "Azbdr5jbN6o",
  "9lGlCPpoFuQ",
  "-K3sU_ObuIA",
  "S581fbJPqgc",
  "53AsLrecIS8",
  "m7W5jYfIRNo", // 十勝川白鳥大橋ライブカメラ（十勝川温泉第一ホテル屋上より
  "qHJMkze8lPg", // 東京駅丸の内口 ライブカメラ
  "FuuyEK-Vkuo", // 宮古島 天気カメラ ライブ配信（OTV沖縄テレビ）
  "qHJMkze8lPg", // 東京駅丸の内口 ライブカメラ
  "GA7WO_XD_3w", // [生中継] 明石海峡大橋ライブカメラ Akashi-Kaikyo Bridge 4K LIVE Camera Archive [3/21朝] 神戸淡路鳴門自動車道 大阪湾 淡路島 アーカイブ
  "0J7kRtEfwmU", // 湘南ライブカメラ鎌倉
  "qGy19eyEg7M", // 【LIVE】福岡空港ライブカメラ 2022-03-21 13:20-25:15 Fukuoka Japan Airport Live Camera
  "Ye5a2m4mhKc", // 【LIVE】沖縄県・国際通り方面ライブカメラ【琉球新報】
  "AmqmrrgBB2o", // 【LIVE】サンシャイン60通りライブカメラ：Tokyo City Live Camera ikebukuro
  "DjdUEyjx8GM", // 【 LIVE 】東京都 新宿 歌舞伎町 24時間 ライブ / Tokyo Shinjuku Kabukicho Live
  "MwEG6LEbbkw", // 【ライブ】東名高速・厚木IC付近　GW道路状況LIVE配信カメラ【ANN/テレ朝】
  "uKaJZR5CRtA", // [生中継] 明石海峡大橋ライブカメラ4K [4/29] Akashi-Kaikyo Bridge LIVE Camera Archive 神戸淡路鳴門自動車道 大阪湾 淡路島 アーカイブ
  "CE14EKMwZsc", // 【LIVE】大阪 道頓堀 ライブカメラ osaka Dotonbori Livecamera
  "3CmwLOgQxIY", // 【LIVE】東京・新宿駅前ライブカメラ Shinjuku, Tokyo JAPAN | TBS NEWS DIG
  "nWB0ZnYfO6I", // 富士芝桜まつりライブカメラ / Live Camera Fuji Shiba-sakura Festival
  "D84yopCfGtM", // 南アルプスライブカメラ
  "Iv2VUE_UhRQ", // [4K] 上高地河童橋ライブカメラ KAMIKOCHI KAPPA-BASHI LIVE CAMERA
  "K9lbv08KMc0", // 善光寺LIVEカメラ（INC長野ケーブルテレビ）
  "2j5xID8L4Vw", // 【Live-Japan】函館駅前ライブカメラ①・函館湾・摩周丸・お天気カメラ・Hakodate Hokkaido Live Camera
  "9wmH7B-fl-c", // 【Live-Japan】函館駅前ライブカメラ②・摩周丸・函館湾・お天気カメラ・Hakodate Hokkaido Live Camera
]

function App() {
  Array.prototype.shuffle = function() {
    const array = [...this];
   
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
   
    return array;
  }

  function getNextChannel() {
    return livecameraIds.shuffle()[0];
  }

  const width = window.outerWidth / 3;
  const height = window.outerHeight / 3;

  const ids = livecameraIds.shuffle();
  const screenCount = 9;
  const monitors = [...Array(screenCount)].map((_, i) => ids.shift())
                                          .map((id, i) => (<Screen key={i}
                                                              width={width}
                                                              height={height}
                                                              youtube_id={id}
                                                              getNextChannel={getNextChannel} />
                                                          ));

  return (
    <div className="App">
      {monitors}
    </div>
  );
}

export default App;
