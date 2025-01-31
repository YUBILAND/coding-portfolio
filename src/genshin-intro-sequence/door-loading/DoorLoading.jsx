import React from "react";
import DoorLoadingDay from "./DoorLoadingDay";
import DoorLoadingNight from "./DoorLoadingNight";

const DoorLoading = ({ ref, time, onFinish }) => {
  return (
    <>
      {time === "day" ? (
        <DoorLoadingDay onFinish={onFinish} />
      ) : (
        <DoorLoadingNight ref={ref} onFinish={onFinish} />
      )}
    </>
  );
};

export default DoorLoading;
