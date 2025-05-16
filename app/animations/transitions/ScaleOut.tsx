import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { anim, mainContentTransition } from "../anim";

export default function ScaleOut({ children }: PropsWithChildren) {
  const slideIn = {
    initial: (i: number) => ({
      left: "130vw",
      transition: {
        duration: 0.75,
        delay: 0.05 * i,
      },
    }),
    enter: (i: number) => ({
      left: "-130vw",
      transition: {
        duration: 0.75,
        delay: 0.05 * i,
      },
    }),
    exit: (i: number) => ({
      left: "130vw",
      transition: {
        duration: 0.75,
        delay: 0.05 * i,
      },
    }),
  };

  const offsetLeft = 130;
  const nbOfColumns = 5;

  return (
    <>
      {Array.from({ length: nbOfColumns }).map((_, i) =>
        i !== nbOfColumns - 1 ? (
          <motion.div
            key={i}
            {...anim(slideIn, nbOfColumns - i)}
            className={`fixed top-0 h-screen w-screen skew-x-12 ${i % 2 === 0 ? "bg-black" : "bg-white"} z-50`}
          ></motion.div>
        ) : (
          <motion.div
            key={i}
            {...anim(slideIn, nbOfColumns - i)}
            className={`fixed top-0 h-screen w-screen skew-x-12 ${i % 2 === 0 ? "bg-black" : "bg-white"} z-50`}
          ></motion.div>
        ),
      )}
      {children}
    </>
  );
}
