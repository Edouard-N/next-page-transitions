import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const transitionZoom = keyframes`
0% {
    transform: scale(1);
}
    30% {transform: scale(.6);}
    70% {transform: scale(.6);}
    100% {transform: scale(1);}
}`;
const transitionOutFlip = keyframes`
from {
    transform: rotateY(0);
}
to {
    transform: rotateY(180deg);
}`;
const transitionInFlip = keyframes`
from {
    transform: rotateY(-180deg);
}
to {
    transform: rotateY(0);
}`;
const SecondaryComponent = styled.div`
  position: relative;
`;

const MainComponent = styled.div`
  transform-style: preserve-3d;

  backface-visibility: hidden;

  &.page-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // opacity: 0;

    z-index: 4;

    animation: 500ms ${transitionInFlip} 250ms cubic-bezier(0.37, 0, 0.63, 1)
      both;
    // backface-visibility: hidden;
  }
  &.page-enter-active,
  &.page-exit-active {
    .page-transition-inner {
      height: 100vh;
      overflow: hidden;
      animation: 1000ms ${transitionZoom} cubic-bezier(0.45, 0, 0.55, 1) both;
      background: white;
      backface-visibility: hidden;
    }
  }
  &.page-exit {
  }
  &.page-exit-active {
    main {
      transform: translateY(-${(props) => props.routingPageOffset}px);
    }

    animation: 500ms ${transitionOutFlip} 250ms cubic-bezier(0.37, 0, 0.63, 1)
      both;
    // backface-visibility: hidden;
  }
  &.page-enter-done {
  }
`;

const PageTransitions = ({ children, route, routingPageOffset }) => {
  const [transitioning, setTransitioning] = useState();

  const playTransition = () => {
    setTransitioning(true);
  };
  const stopTransition = () => {
    setTransitioning("");
  };
  return (
    <>
      <TransitionGroup className={transitioning ? "transitioning" : ""}>
        <CSSTransition
          key={route}
          classNames="page"
          timeout={1000}
          onEnter={playTransition}
          onExited={stopTransition}
        >
          <MainComponent routingPageOffset={routingPageOffset}>
            <SecondaryComponent className="page-transition-inner">
              {children}
            </SecondaryComponent>
          </MainComponent>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default PageTransitions;
