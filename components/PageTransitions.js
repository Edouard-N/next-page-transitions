import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MainComponent = styled.div`
  &.page-enter-active {
    position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    opacity: 0;
  }
  &.page-exit {
    ~ .wipe {
      transform: translateY(100%);
    }
  }
  &.page-exit-active {
    ~ .wipe {
      transform: translateY(0%);
      transition: transform 300ms ease;
    }

    main {
      transform: translateY(-${(props) => props.routingPageOffset}px);
    }
  }
  &.page-enter-done {
    ~ .wipe {
      transform: translateY(-100%);
      transition: transform 300ms ease;
    }
  }
`;

const Wipe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: red;
  z-index: 5;
  transform: translateY(100%);
`;

const PageTransitions = ({ children, route, routingPageOffset }) => {
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={route} classNames="page" timeout={300}>
          <MainComponent routingPageOffset={routingPageOffset}>
            {children}
          </MainComponent>
        </CSSTransition>
      </TransitionGroup>
      <Wipe className="wipe" />
    </>
  );
};

export default PageTransitions;