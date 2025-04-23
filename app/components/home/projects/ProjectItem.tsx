import { motion } from "framer-motion";
import { useEffect, useRef, type PropsWithChildren } from "react";
import { anim, fadeInDelay } from "~/animations/anim";
import type { ProjectItemType } from "~/types/project";
import { projects } from "~/utils/constants";

export function ProjectItem({
  index: itemIndex,
  id,
  url,
  content,
}: {
  index: number;
} & ProjectItemType) {
  return content.split(" ").map((word, index) => (
    <SpanItem key={word + index} id={id} delay={itemIndex + 1}>
      {index === 0 && (
        <div className="mx-4 flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-gray-500 text-[.5rem] font-light tracking-normal text-white transition-transform">
          {itemIndex + 1}
        </div>
      )}
      {word}
    </SpanItem>
  ));
}

const SpanItem = ({
  children,
  id,
  delay,
}: PropsWithChildren<{ id: string; delay: number }>) => {
  const ref = useRef<null | HTMLAnchorElement>(null);

  useEffect(() => {
    if (ref) {
      ref.current?.addEventListener("mouseenter", onMouseEnter);
      ref.current?.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      ref.current?.removeEventListener("mouseenter", onMouseEnter);
      ref.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const onMouseEnter = () => {
    const elements = document.querySelectorAll<HTMLSpanElement>(
      `[data-id='${id}']`,
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
    <span className="relative flex w-fit overflow-hidden">
      <motion.a
        {...anim(fadeInDelay, delay)}
        ref={ref}
        data-id={id}
        className="hoverable-item relative flex items-center px-2 py-0 text-[10vw] leading-[12vw] tracking-tighter text-gray-400 transition-all"
      >
        {children}
      </motion.a>
    </span>
  );
};
