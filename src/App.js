import './App.css';
import Screen from './components/screen';

const livecameraIds = [
  "xvA-drlRwvg",
  "HpdO5Kq3o7Y", // 【LIVE】渋谷スクランブル交差点 ライブカメラ / Shibuya Scramble Crossing Live Camera
  "X437XmpsopA",
  "QOjmvL3e7Lc",
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
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const screenCount = 9;

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
  const monitors = [...Array(screenCount)].map((_, i) => livecameraIds[getRandomInt(0, 9)])
                                          .shuffle()
                                          .map(id => (<Screen width={width}
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
