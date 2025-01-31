import React from "react";
import InfiniteBridgeDay from "./InfiniteBridgeDay";
import InfiniteBridgeNight from "./InfiniteBridgeNight";

const InfiniteBridge = ({ ref, time, onClick, audio }) => {
  return (
    <>
      {time === "day" ? (
        <InfiniteBridgeDay onClick={onClick} />
      ) : (
        <InfiniteBridgeNight ref={ref} onClick={onClick} audio={audio} />
      )}
    </>
  );
};

export default InfiniteBridge;
