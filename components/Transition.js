import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1, x: 0 },
  entered: { opacity: 1, x: 100 },
  exiting: { opacity: 0, x: 0 },
  exited: { opacity: 0, x: 50 },
};

export const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);
