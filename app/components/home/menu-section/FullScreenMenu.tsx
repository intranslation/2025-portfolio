import { ProjectItem } from "./projects/ProjectItem";
import { projects } from "~/utils/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { anim, fadeInText } from "~/animations/anim";
import LanguageSelector from "../../ui/language-selector/LanguageSelector";
import { useRef } from "react";
import useIsPastFirstPage from "~/hooks/useIsPastFirstPage";

export default function FullScreenMenu() {
  const container = useRef(
    document.querySelector("#scroll-container") as HTMLElement,
  );
  const { scrollYProgress } = useScroll({ container });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const isPastFirstPage = useIsPastFirstPage();

  return (
    <motion.div
      // style={{ opacity }}
      className="flex h-[101vh] flex-col justify-between overflow-visible px-4 py-8"
    >
      <motion.div
        className="relative flex items-end justify-between"
        style={{ opacity }}
      >
        <span className="relative flex w-full overflow-hidden">
          <motion.h1
            {...anim(fadeInText)}
            className="relative px-2 text-[3vw] font-thin whitespace-nowrap text-gray-200 uppercase mix-blend-difference xl:text-[2vw] 2xl:text-[1.5vw]"
          >
            INTERACTIVE PORTFOLIO
          </motion.h1>
        </span>
        <LanguageSelector />
      </motion.div>

      <motion.span
        className="flex flex-wrap items-center justify-start px-2 py-4 sm:mt-4 sm:px-5"
        style={{
          // position: isPastFirstPage ? "absolute" : "sticky",
          // justifyContent: isPastFirstPage ? "justify-center" : "justify-start",
          opacity: isPastFirstPage ? 1 : opacity,
        }}
        // animate={
        //   isPastFirstPage && {
        //     opacity: 1,
        //   }
        // }
      >
        {projects.map(({ id, content, url }, index) => (
          <ProjectItem
            key={index + id}
            index={index}
            id={id}
            content={content}
            url={url}
          />
        ))}
      </motion.span>

      <div>
        <span className="relative flex w-fit">
          <motion.span className="relative ml-auto" style={{ opacity }}>
            MADE BY HENRIQUE ALBUQUERQUE
          </motion.span>
        </span>
      </div>
    </motion.div>
  );
}
