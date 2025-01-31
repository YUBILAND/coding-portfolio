import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const DoorLoadingNight = ({ ref, onFinish }) => {
  const doorAppearAudio = new Audio("music/genshin_door_appear.mp3");

  useEffect(() => {
    setTimeout(() => {
      doorAppearAudio.volume = 0.1;
      doorAppearAudio.play();
    }, 3500);

    // return () => {
    //   doorAppearAudio.pause()
    // }
  }, []);

  return (
    <div ref={ref}>
      <div className="w-screen h-screen bg-transparent absolute top-0 left-0 z-30"></div>

      <div className="absolute object-cover bottom-0">
        <ReactPlayer
          className="pointer-events-none"
          url="videos/Create_Door_Night.mp4"
          playing
          onEnded={onFinish}
          muted
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default DoorLoadingNight;
