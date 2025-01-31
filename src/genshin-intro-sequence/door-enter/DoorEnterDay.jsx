import React, { useEffect } from "react";

const DoorEnterDay = () => {
  const doorAudio = new Audio("music/genshin_door_appear.mp3");

  useEffect(() => {
    setTimeout(() => {
      doorAudio.volume = 0.01;
      doorAudio.play();
    }, 3500);
  }, []);
  return <div>DoorEnterNight</div>;
};

export default DoorEnterDay;
