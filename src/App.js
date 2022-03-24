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
  "I4vmQ8x4yM4",
  "Kn4sf1nJXCU",
  "2d0yO_QN1Iw",
  "Azbdr5jbN6o",
  "9lGlCPpoFuQ",
  "-K3sU_ObuIA",
  "S581fbJPqgc",
  "53AsLrecIS8",
  "m7W5jYfIRNo", // 十勝川白鳥大橋ライブカメラ（十勝川温泉第一ホテル屋上より
  "qHJMkze8lPg", // 東京駅丸の内口 ライブカメラ
  "P1DRWEdRjtQ", // 夜景がきれい！あべのハルカス・通天閣/OSAKA NIGHT VEW
  "FuuyEK-Vkuo", // 宮古島 天気カメラ ライブ配信（OTV沖縄テレビ）
  "qHJMkze8lPg", // 東京駅丸の内口 ライブカメラ
  "GA7WO_XD_3w", // [生中継] 明石海峡大橋ライブカメラ Akashi-Kaikyo Bridge 4K LIVE Camera Archive [3/21朝] 神戸淡路鳴門自動車道 大阪湾 淡路島 アーカイブ
  "0J7kRtEfwmU", // 湘南ライブカメラ鎌倉
  "qGy19eyEg7M", // 【LIVE】福岡空港ライブカメラ 2022-03-21 13:20-25:15 Fukuoka Japan Airport Live Camera
  "fC3MiylRabk", // 明石海峡大橋夕焼けライブカメラ
  "AfZQIxX_nQE", // 【LIVE】サンシャイン60通りライブカメラ：Tokyo City Live Camera ikebukuro
  "Ye5a2m4mhKc", // 【LIVE】沖縄県・国際通り方面ライブカメラ【琉球新報】
  "NGflxiA9A0o", // 【LIVE】 大阪　心斎橋ライブカメラ　OSAKA SHINSAIBASHI LIVE CAMERA　大丸心斎橋北側です。待ち合わせの確認にも！
  "esX3U1xiOdA", // ディズニー花火【舞浜ライブカメラ / 24時間ライブ配信】噴火・航空機・富士山 LIVE　
  "KikoI23I9lQ", // 横浜汽車道ライブカメラ２ /Yokohama Live Camera ２
  "nySbZ93Od6U", // 【Live-Japan】函館駅前ライブカメラ②・摩周丸・函館湾・お天気カメラ・Hakodate Hokkaido Live Camera
  "wqCswzEsNVA", // 新大阪ライブカメラ（Sin-Osaka Cam）HD
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
