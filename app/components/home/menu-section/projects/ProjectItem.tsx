import {
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { anim, fadeInDelay } from "~/animations/anim";
import type { ProjectItemType } from "~/types/project";
import { projects } from "~/utils/constants";
import "./style.css";
import useIsPastFirstPage from "~/hooks/useIsPastFirstPage";

const BigWord = ({
  children,
  id,
  delay,
  index,
}: PropsWithChildren<{ id: string; delay: number; index: number }>) => {
  const [isInView, setVisibility] = useState(false);
  const ref = useRef<null | HTMLAnchorElement>(null);

  const container = useRef(
    document.querySelector("#scroll-container") as HTMLElement,
  );
  const { scrollYProgress } = useScroll({ container });
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.2, 0.25],
    ["10vw", "8vw", "2vw"],
    {
      ease: easeInOut,
    },
  );

  const isPastFirstPage = useIsPastFirstPage();

  const onMouseEnter = () => {
    const elements = document.querySelectorAll<HTMLSpanElement>(
      `[data-id="${id}"]`,
    );

    if (elements.length > 0) {
      elements.forEach((item) => item.classList.add("hover-effect"));
    }

    projects.map((item) => {
      if (item.id === id) {
        return;
      }

      const iterator = document.querySelectorAll<HTMLSpanElement>(
        `[data-id='${item.id}']`,
      );

      for (const el of iterator) {
        el.classList.add("unfocused");
      }
    });
  };

  const onMouseLeave = () => {
    const elements = document.querySelectorAll<HTMLSpanElement>(
      `[data-id='${id}']`,
    );

    if (elements.length > 0) {
      elements.forEach((item) => item.classList.remove("hover-effect"));
    }

    projects.map((item) => {
      const iterator = document.querySelectorAll<HTMLSpanElement>(
        `[data-id='${item.id}']`,
      );

      for (const el of iterator) {
        el.classList.remove("unfocused");
      }
    });
  };

  return (
    <motion.span
      className="relative flex w-fit overflow-hidden py-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.a
        {...anim(fadeInDelay, delay)}
        ref={ref}
        href={"#" + id}
        data-id={id}
        className={`hoverable-item z-10 flex items-center px-2 py-0 tracking-tighter transition-all ${isInView && "hover-effect"} ${index == 0 && "font-libre"} break-words`}
        style={{
          fontSize: "clamp(4rem, 10vw, 12rem)",
          lineHeight: "clamp(5rem, 11vw, 12rem)",
        }}
      >
        {children}
      </motion.a>
    </motion.span>
  );
};

const LittleRoundNumber = ({ children }: PropsWithChildren) => (
  <div className="mx-4 flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-gray-800 text-[.5rem] font-light tracking-normal text-white transition-transform xl:h-[1.2rem] xl:w-[1.2rem] xl:text-[.8rem]">
    {children}
  </div>
);

export const ProjectItem = ({
  index: itemIndex,
  id,
  content,
}: {
  index: number;
} & ProjectItemType) => {
  const words = content.split(" ").map((word, index) => {
    const isFirstWord = index === 0;

    return (
      <BigWord key={word + index} id={id} delay={itemIndex + 1} index={index}>
        {isFirstWord && <LittleRoundNumber>{itemIndex + 1}</LittleRoundNumber>}
        {word}
      </BigWord>
    );
  });

  return <>{words}</>;
};
