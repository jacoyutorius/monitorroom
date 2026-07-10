import './App.css';
import Screen from './components/screen';
import { getCameraIdentity, liveCameras } from './liveCameras';

function shuffle(items) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function App() {
  function getNextChannel(currentCamera) {
    const currentIdentity = getCameraIdentity(currentCamera);
    const candidates = liveCameras.filter(
      (camera) => getCameraIdentity(camera) !== currentIdentity
    );
    return shuffle(candidates)[0];
  }

  const width = window.outerWidth / 3;
  const height = window.outerHeight / 3;
  const screenCount = 9;
  const cameras = shuffle(liveCameras).slice(0, screenCount);
  const monitors = cameras.map((camera) => (
    <Screen
      key={camera.id}
      width={width}
      height={height}
      camera={camera}
      getNextChannel={getNextChannel}
    />
  ));

  return (
    <div className="App">
      {monitors}
    </div>
  );
}

export default App;
