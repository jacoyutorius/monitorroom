import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const Screen = props => {
  const initialState = props.youtube_id;
  const [channel, setchannel] = useState(initialState);
  const changeChannel = () => (setchannel(props.getNextChannel()));   
  const src = `https://www.youtube.com/embed/${channel}?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=${channel}`;

  return (
    <div className="screen">
      <iframe 
        width={props.width}
        height={props.height}
        src={src}
        frameBorder="0"
        fs="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
      <div className="controls">
        <button class="control-button" onClick={changeChannel}>
          <FontAwesomeIcon icon={faRotate} />
        </button>
      </div>
    </div>
  );
}

export default Screen;