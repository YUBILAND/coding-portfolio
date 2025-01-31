import React, { useCallback, useContext, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GenshinContext from "../contexts/GenshinContext";
import ElementsLoading from "./ElementsLoading";
import DoorEnter from "./door-enter/DoorEnter";
import DoorLoading from "./door-loading/DoorLoading";
import DoorLoop from "./door-loop/DoorLoop";
import InfiniteBridge from "./infinite-bridge/InfiniteBridge";

const IntroSequence = () => {
  const { loadingStep, setLoadingStep } = useContext(GenshinContext);

  const [enableClick, setEnableClick] = useState(false);

  const canClickCallback = () => {
    setEnableClick(true);
  };

  const onClickOne = () => {
    enableClick && setLoadingStep(1);
  };

  const goToNextSequence = useCallback(() => {
    setLoadingStep((prev) => prev + 1);
  }, []);

  const nightAudioRef = useRef(new Audio("music/Dream_Aria_Night.mp3"));

  const nodeRef = React.useRef(null);
  const nodeRef1 = React.useRef(null);
  const nodeRef2 = React.useRef(null);
  const nodeRef3 = React.useRef(null);
  const nodeRef4 = React.useRef(null);

  const animationDuration = 500;

  if (loadingStep >= 2) {
    document.body.style.backgroundColor = "black";
  }

  const transitionSteps = [
    {
      nodeRef: nodeRef,
      key: "elements-loading",
      timeout: animationDuration,
      classNames: "transition",
      component: ElementsLoading,
      props: { ref: nodeRef, canClick: canClickCallback, onClick: onClickOne },
    },
    {
      nodeRef: nodeRef1,
      key: "infinite-bridge",
      timeout: animationDuration,
      classNames: "transition",
      component: InfiniteBridge,
      props: {
        ref: nodeRef1,
        time: "night",
        onClick: goToNextSequence,
        audio: nightAudioRef.current,
      },
    },
    {
      nodeRef: nodeRef2,
      key: "door-loading",
      timeout: animationDuration,
      classNames: "transition",
      component: DoorLoading,
      props: { ref: nodeRef2, time: "night", onFinish: goToNextSequence },
    },
    {
      nodeRef: nodeRef3,
      key: "door-loop",
      timeout: animationDuration,
      classNames: "transition",
      component: DoorLoop,
      props: { ref: nodeRef3, time: "night", onClick: goToNextSequence },
    },
    {
      nodeRef: nodeRef4,
      key: "door-enter",
      timeout: animationDuration,
      classNames: "transition",
      component: DoorEnter,
      props: {
        ref: nodeRef4,
        time: "night",
        onClick: goToNextSequence,
        audio: nightAudioRef.current,
      },
    },
  ];

  const renderIntroSequence = () => {
    const currentStep = transitionSteps[loadingStep];
    const {
      nodeRef,
      key,
      timeout,
      classNames,
      component: Component,
      props,
    } = currentStep;
    return (
      <TransitionGroup>
        <CSSTransition
          nodeRef={nodeRef}
          key={key}
          timeout={timeout}
          classNames={classNames}
          unmountOnExit
        >
          <Component {...props} />
        </CSSTransition>
      </TransitionGroup>
    );
  };

  return renderIntroSequence();
};

export default IntroSequence;
