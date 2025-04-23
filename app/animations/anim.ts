import { cubicBezier, type Variants } from "framer-motion";

export const anim = (variants: Variants, custom?: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};

export const mainContentTransition = anim({
  initial: { opacity: 1 },
  enter: {
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
});

export const fadeInText = {
  initial: {
    top: "10vw",
  },
  enter: {
    top: "0vw",
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const fadeInDelay = {
  initial: {
    // top: "10vw",
    opacity: 0,
  },
  enter: (delay = 0) => ({
    // top: "0vw",
    opacity: 1,
    transition: {
      delay: 0.5 * delay,
      duration: 1.5,
      ease: [0.83, 0, 0.17, 1],
    },
  }),
};

export const scaleHeaderDown = anim({
  initial: {
    height: "6vw",
    fontSize: "7vw",
  },
  enter: {
    height: "3vw",
    fontSize: "3vw",
    transition: {
      delay: 1,
      duration: 0.5,
      easings: "easeIn",
    },
  },
});
