import { motion } from "framer-motion";
import Projects from "./projects/Projects";
import { anim, fadeInText } from "~/animations/anim";
import LanguageSelector from "../ui/language-selector/LanguageSelector";
import { projects } from "~/utils/constants";
import useIsPastFirstPage from "~/hooks/useIsPastFirstPage";

// DESIGN REFERENCE https://www.befreaky.co/

/* Todo for this page
[X] Full screen menu
[ ] Navbar that comes up on scroll
[ ] Navbar comes up while being hovered
[ ]
*/

const languages = ["english", "portuguese"];

export function HomeView() {
  const isPastFirstPage = useIsPastFirstPage();
  return (
    <>
      <motion.div
        style={{
          height: 0,
        }}
        animate={{
          height: isPastFirstPage ? "3rem" : 0,
        }}
        whileHover={{
          height: "7.5rem",
        }}
        className="fixed top-0 left-0 z-30 flex w-full justify-between overflow-hidden border border-gray-600 bg-white text-[1.5rem]"
      >
        <ul className="flex flex-col py-2">
          {projects.map((project, i) => (
            <li
              key={project.content}
              className="flex items-center gap-0 text-gray-500 hover:text-black"
            >
              <div className="mx-4 flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-gray-500 text-[.5rem] font-light tracking-normal text-white transition-transform">
                {i + 1}
              </div>
              {project.content}
            </li>
          ))}
        </ul>
        <ul className="px-2 py-2 text-right font-light tracking-normal text-gray-600 uppercase hover:text-black">
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </motion.div>

      {/* <Navbar />s */}
      <div className="flex h-screen snap-start flex-col px-4 py-8">
        <div className="flex items-end justify-between">
          <span className="relative flex w-full overflow-hidden">
            <motion.h1
              {...anim(fadeInText)}
              className="relative px-2 text-[3vw] font-thin whitespace-nowrap text-gray-800 uppercase"
            >
              INTERACTIVE PORTFOLIO
            </motion.h1>
          </span>
          <LanguageSelector />
        </div>

        <Projects />

        <div className="mt-auto">
          <span className="relative flex w-fit">
            <motion.span className="relative ml-auto">
              MADE BY HENRIQUE ALBUQUERQUE
            </motion.span>
          </span>
        </div>
      </div>

      <div className="h-screen snap-start"></div>
    </>
  );
}
