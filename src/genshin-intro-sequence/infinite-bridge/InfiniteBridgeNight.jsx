import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const InfiniteBridgeNight = ({ ref, onClick, audio }) => {
  useEffect(() => {
    audio.volume = 0.1;
    audio.play();
  }, []);

  return (
    <div onClick={onClick} ref={ref}>
      <div className="w-screen h-screen bg-transparent absolute top-0 left-0 z-30"></div>

      <div className="absolute object-cover bottom-0  transition-opacity duration-1000">
        <ReactPlayer
          className="pointer-events-none"
          url="videos/Infinite_Bridge_Night.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default InfiniteBridgeNight;
