import { motion } from "framer-motion";
import useMousePosition from "~/hooks/useCursor";

export default function AboutMe() {
  const [position] = useMousePosition();

  const mouseTrackingAnimation = {
    x: (position.x / 2) * -0.025,
    y: (position.y / 2) * -0.025,
    transition: {
      type: "tween",
    },
  };

  return (
    <motion.section
      id="about"
      className="relative flex h-full min-h-screen snap-start flex-col justify-start perspective-midrange perspective-origin-center"
    >
      <motion.div
        className="relative flex h-full items-center justify-between"
        animate={mouseTrackingAnimation}
      >
        <div>
          <div className="absolute top-0 left-0 flex h-full flex-col gap-6 pt-[10vh] pl-10 max-sm:bg-black/40">
            <motion.h1
              className="z-20 lowercase"
              style={{
                fontSize: "clamp(3rem, 9vw, 10rem)",
                lineHeight: "clamp(3rem, 9vw, 10rem)",
              }}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 1,
                  ease: [0.83, 0, 0.17, 1],
                },
              }}
            >
              WELCOME TO MY ENGINEERING <br /> PORTFOLIO
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 1,
                  ease: [0.83, 0, 0.17, 1],
                },
              }}
              className="mt-6 flex flex-nowrap gap-12 font-light text-white max-sm:py-8 md:w-[40vw]"
              style={{
                fontSize: "clamp(1.5rem, 2vw, 3rem)",
                lineHeight: "clamp(1.5rem, 2vw, 2rem)",
              }}
            >
              <p className="w-fit">
                i’m a software engineer currently living in São Paulo, Brazil.
              </p>
              <p className="w-fit">
                working exclusively remotely with international teams since 2022
              </p>
            </motion.div>
          </div>
        </div>
        <motion.img
          initial={{ x: "10vw", opacity: 0 }}
          whileInView={{
            x: "0vw",
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
              ease: [0.83, 0, 0.17, 1],
            },
          }}
          src="/img/blurred_art.png"
          alt=""
          className="z-10 mb-auto h-full w-[55vw] object-cover max-sm:h-[28vh] max-sm:w-full md:h-[70vh] md:w-[50vw]"
        />
      </motion.div>

      <motion.div
        className="flex h-full items-center p-4"
        animate={mouseTrackingAnimation}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
              ease: [0.83, 0, 0.17, 1],
            },
          }}
          className="text-left font-light"
          style={{
            fontSize: "clamp(1.45rem, 2vw, 2.3rem)",
            lineHeight: "clamp(2.25rem, 3vw, 3.3rem)",
          }}
        >
          I'm an experienced engineer, with a focus on building visual
          experiences for enterprise level software, delivering applications
          that help people make better decisions based on data. I've developed
          projects in a variety of industries, such as banking, retail,
          marketing, and airlines. Apps based in GenAI and Data Visualization
          are my bread and butter.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
