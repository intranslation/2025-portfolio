import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import { anim } from "../anim";
import { useCursorStore } from "~/store/store";
import type { EffectNames } from "~/types/effects";
import { useEffectRenderer } from "~/hooks/useEffectRenderer";

interface Props {
  effectToBeRendered: EffectNames | undefined;
}

export default function SubRoute({
  children,
  effectToBeRendered,
}: PropsWithChildren<Props>) {
  const { setIsHover } = useCursorStore();
  const { views } = useEffectRenderer();
  // const textUp = anim({
  //   initial: {
  //     y: "13vw",
  //   },
  //   enter: {
  //     y: "0vw",
  //     transition: {
  //       duration: 1,
  //       ease: [0.83, 0, 0.17, 1],
  //     },
  //   },
  // });
  const fadeIn = anim({
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  });

  return (
    <motion.section {...fadeIn} className="min-h-screen px-4">
      <div className="bg-light-yellow fixed top-0 left-0 mx-auto flex w-full max-w-[1100px] flex-nowrap items-center justify-between px-6 py-2">
        <Link
          to={"/"}
          className="bg-red z-50 block"
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[6vw] w-[6vw] fill-gray-500"
          >
            <path d="M0 1H2V11H0V1Z" />
            <path d="M0 1H2V11H0V1Z" />
            <path d="M0 0H2V1H0V0Z" />
            <path d="M0 0H2V1H0V0Z" />
            <path d="M11 0V2L2 2L2 0H11Z" />
            <path d="M11 0V2L2 2L2 0H11Z" />
            <path d="M12.42 11L11.0092 12.4177L0.213526 1.67439L1.62429 0.256739L12.42 11Z" />
          </motion.svg>
        </Link>
        {effectToBeRendered && (
          <motion.h1
            // {...textUp}
            className={`relative px-2 font-thin whitespace-nowrap text-gray-800 uppercase`}
            style={{
              fontSize: "5vw",
            }}
          >
            {views[effectToBeRendered].name}
          </motion.h1>
        )}
      </div>
      {children}
    </motion.section>
  );
}
