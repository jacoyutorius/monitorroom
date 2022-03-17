import './App.css';
import Screen from './components/screen';

const livecameraIds = [
  "xvA-drlRwvg",
  "HpdO5Kq3o7Y",
  "X437XmpsopA",
  "QOjmvL3e7Lc",
  "VG-pwPCjJ4Y",
  "F3R97syoK40",
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
  Array.prototype.shuffle = function() {
    const array = [...this];
   
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
   
    return array;
  }

  const monitors = [...Array(9)].map((_, i) => livecameraIds[getRandomInt(0, 9)])
                                .shuffle()
                                .map(id => (<Screen width="560" height="315" youtube_id={id} />));

  return (
    <div className="App">
      {monitors}
    </div>
  );
}

export default App;
