import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useIsPastFirstPage from "~/hooks/useIsPastFirstPage";
import { projects } from "~/utils/constants";

const languages = ["english", "portuguese"];

export default function Navbar() {
  const isPastFirstPage = useIsPastFirstPage();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const about = document.getElementById("about");
    const career = document.getElementById("career");
    // const mixtapes = document.getElementById("mixtapes");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();

      console.log(rect.top, rect.bottom);
      return rect.bottom > 0 && rect.bottom <= window.innerHeight;
    }
    const container = document.querySelector(
      "#scroll-container",
    ) as HTMLElement;
    container.addEventListener("scroll", () => {
      console.log("scrolling");
      if (isElementInViewport(about)) {
        setCurrentSectionIndex(0);
      }
      if (isElementInViewport(career)) {
        setCurrentSectionIndex(1);
      }
      // if (isElementInViewport(mixtapes)) {
      //   setCurrentSectionIndex(2);
      // }
    });
  }, []);

  return (
    <motion.div
      style={{
        height: "3rem",
        opacity: 0,
      }}
      animate={{
        opacity: isPastFirstPage ? 1 : 0,
        transition: {
          delay: 0.5,
          ease: "easeInOut",
        },
      }}
      // whileHover={{
      //   height: "7.5rem",
      // }}
      className="fixed top-0 left-0 z-30 flex w-full justify-between overflow-hidden text-[1.5rem]"
    >
      <motion.ul
        className="flex flex-col py-2"
        animate={{
          y: `${currentSectionIndex * -2.4}rem`,
        }}
      >
        {projects.map((project, i) => (
          <li
            key={project.content}
            className="flex items-center gap-0 text-gray-200 transition-colors hover:text-gray-200"
          >
            <div className="mx-4 flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-gray-500 text-[.5rem] font-light tracking-normal text-white transition-transform">
              {i + 1}
            </div>
            {project.content}
          </li>
        ))}
      </motion.ul>
      <ul className="px-2 py-2 text-right font-light tracking-normal text-gray-400 uppercase">
        {languages.map((language) => (
          <li key={language} className="transition-colors hover:text-gray-200">
            {language}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
