import React from "react";
import ReactPlayer from "react-player";

const DoorLoopNight = ({ ref, onClick }) => {
  return (
    <div onClick={onClick} ref={ref}>
      <div className="w-screen h-screen bg-transparent absolute top-0 left-0 z-30"></div>

      <div className="absolute object-cover bottom-0">
        <ReactPlayer
          className="pointer-events-none"
          url="videos/Door_Loop.mp4"
          playing
          muted
          loop
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default DoorLoopNight;
