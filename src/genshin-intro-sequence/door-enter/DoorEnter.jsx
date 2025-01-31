import React from "react";
import DoorEnterDay from "./DoorEnterDay";
import DoorEnterNight from "./DoorEnterNight";

const DoorEnter = ({ ref, time, onFinish, audio }) => {
  return (
    <>
      {time === "day" ? (
        <DoorEnterDay onFinish={onFinish} />
      ) : (
        <DoorEnterNight ref={ref} onFinish={onFinish} audio={audio} />
      )}
    </>
  );
};

export default DoorEnter;
