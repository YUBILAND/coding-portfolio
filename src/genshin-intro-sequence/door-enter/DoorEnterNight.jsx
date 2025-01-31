import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const DoorEnterNight = ({ ref, onFinish, audio }) => {
  const doorEnterAudio = new Audio("music/genshin_door_enter.mp3");

  useEffect(() => {
    const fadeOutAudio = () => {
      // console.log(audio.volume)
      if (audio.volume > 0) {
        audio.volume = Math.max(audio.volume - 0.01, 0);
      } else {
        audio.pause();
        clearInterval(intervalId);
      }
    };

    doorEnterAudio.volume = 0.5;
    doorEnterAudio.play();

    const intervalId = setInterval(fadeOutAudio, 150);

    return () => {
      doorEnterAudio.pause();
      audio.pause();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="w-screen h-screen bg-transparent absolute top-0 left-0 z-30"></div>

      <div className="absolute object-cover bottom-0">
        <ReactPlayer
          className="pointer-events-none"
          url="videos/Enter_Door.mp4"
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

export default DoorEnterNight;
