import React, { useContext } from "react";
import ReactPlayer from "react-player";
import GenshinContext from "../../contexts/GenshinContext";

const DoorLoadingDay = () => {
  const { infiniteBridge, setInfiniteBridge } = useContext(GenshinContext);

  return (
    <ReactPlayer
      className="pointer-events-none"
      url="videos/Create_Door_Night.mp4"
      playing
      loop
      muted
      width="100%"
      height="100%"
    />
  );
};

export default DoorLoadingDay;
