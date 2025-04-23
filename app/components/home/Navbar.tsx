import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "~/utils/constants";

const languages = ["english", "portuguese"];

export default function Navbar() {
  const { scrollYProgress, scrollY } = useScroll();
  const height = useTransform(
    scrollY,
    [0, window.innerHeight * 0.5],
    ["1vh", "5vh"],
  );

  const [activeTab, setActiveTab] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState(0);

  const Y = useTransform(scrollYProgress, [0, 1], ["0vw", "5vw"]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        height: Y,
        // height: "10vh",
      }}
      animate={{
        transition: {
          delay: 1,
        },
      }}
      //   whileHover={{
      //     height: "fit-content",
      //   }}
      className="fixed top-0 left-0 z-30 flex w-full justify-between overflow-hidden border border-gray-600 bg-white text-[2vw]"
    >
      <ul className="flex flex-col py-2">
        {projects.map((project, i) => (
          <li className="flex items-center gap-0 text-gray-500 hover:text-black">
            <div className="mx-4 flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-gray-500 text-[.5rem] font-light tracking-normal text-white transition-transform">
              {i + 1}
            </div>
            {project.content}
          </li>
        ))}
      </ul>
      <p>{Y.get()}</p>
      <ul className="px-2 py-2 text-right text-[2vw] font-light tracking-normal text-gray-600 uppercase hover:text-black">
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
    </motion.div>
  );
}
