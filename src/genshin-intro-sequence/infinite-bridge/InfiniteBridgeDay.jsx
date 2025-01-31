import React from "react";

const InfiniteBridgeDay = ({ onClick }) => {
  let dayAudio = new Audio("music/Dream_Aria_Day.mp3");

  const playDayAudio = () => {
    dayAudio.volume = 0.1;
    dayAudio.play();
  };

  return (
    <video
      className="absolute object-cover bottom-0"
      onClick={playDayAudio}
      src="videos/Infinite_Bridge_Day.mp4"
      type="video/mp4"
      loop
      autoPlay
      muted
    />
  );
};

export default InfiniteBridgeDay;
