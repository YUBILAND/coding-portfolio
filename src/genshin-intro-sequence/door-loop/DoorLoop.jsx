import React from "react";
import DoorLoopDay from "./DoorLoopDay";
import DoorLoopNight from "./DoorLoopNight";

const DoorLoop = ({ ref, time, onClick }) => {
  return (
    <>
      {time === "day" ? (
        <DoorLoopDay onClick={onClick} />
      ) : (
        <DoorLoopNight ref={ref} onClick={onClick} />
      )}
    </>
  );
};

export default DoorLoop;
