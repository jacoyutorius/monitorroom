import { useState } from 'react';
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
  const screenCount = 9;
  const [cameras, setCameras] = useState(() =>
    shuffle(liveCameras).slice(0, screenCount)
  );

  function changeChannel(targetIndex) {
    setCameras((currentCameras) => {
      const activeIdentities = new Set(
        currentCameras
          .filter((_, index) => index !== targetIndex)
          .map((camera) => getCameraIdentity(camera))
      );
      const candidates = liveCameras.filter(
        (camera) => !activeIdentities.has(getCameraIdentity(camera))
      );

      if (candidates.length === 0) {
        return currentCameras;
      }

      const nextCamera = shuffle(candidates)[0];
      return currentCameras.map((camera, index) =>
        index === targetIndex ? nextCamera : camera
      );
    });
  }

  const monitors = cameras.map((camera, index) => (
    <Screen
      key={`${getCameraIdentity(camera)}-${index}`}
      camera={camera}
      onChangeChannel={() => changeChannel(index)}
    />
  ));

  return (
    <div className="App">
      {monitors}
    </div>
  );
}

export default App;
