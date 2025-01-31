import React from "react";
import { ReactComponent as GenshinElementsSVG } from "../svg_components/genshin_loading_elements.svg";

const OverflowContainer = ({ children, onClick }) => {
  console.log("rerender");
  return (
    <div
      className="overflow-hidden genshin w-screen h-screen absolute z-30 bg-white"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const WhiteBackground = () => (
  <div className="absolute top-0 left-0 z-10 w-screen h-screen bg-[white]" />
);

const ElementsLoading = ({ ref, canClick, onClick }) => {
  window.onload = () => {
    setTimeout(() => {
      canClick();
    }, 8000);
  };

  return (
    <div onClick={onClick} ref={ref}>
      <WhiteBackground />

      <OverflowContainer>
        <GenshinElementsSVG className="genshinContainer w-screen h-screen relative z-20 text-[#636363] bg-white" />
      </OverflowContainer>
    </div>
  );
};

export default ElementsLoading;
