import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { getCurrentVideoId, getEmbedUrl } from '../liveCameras';

const Screen = props => {
  const [camera, setCamera] = useState(props.camera);
  const videoId = getCurrentVideoId(camera);

  const changeChannel = () => setCamera(props.getNextChannel(camera));
  const src = getEmbedUrl(videoId);

  return (
    <div className="screen">
      <iframe
        src={src}
        title={camera.title}
        frameBorder="0"
        fs="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
      <div className="controls">
        <button
          className="control-button"
          type="button"
          onClick={changeChannel}
          aria-label={`${camera.title}を切り替え`}
        >
          <FontAwesomeIcon icon={faRotate} />
        </button>
      </div>
    </div>
  );
}

export default Screen;
