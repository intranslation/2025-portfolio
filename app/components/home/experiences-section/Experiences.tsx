import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "BCG X",
    url: "https://www.bcg.com/",
    date: "03/2025 - Present",
    description:
      "Leading technical implementation of enterprise level software",
  },
  {
    title: "Software Engineer",
    company: "BCG X",
    url: "https://www.bcg.com/",
    date: "08/2022 - 03/2025",
    description: "Delivering high quality software for top 100 companies",
  },
  {
    title: "Junior Software Engineer",
    company: "SAFRA",
    url: "https://www.safra.com.br/",
    date: "05/2021 - 07/2022",
    description: "Modernizing banking in an legacy environment",
  },
  {
    title: "Intern",
    company: "SAFRA",
    url: "https://www.safra.com.br/",
    date: "01/2020 - 05/2021",
    description: "Learning how the world works",
  },
];

export default function Experiences() {
  return (
    <motion.section
      id="career"
      className="mx-4 flex min-h-screen flex-col justify-center py-[10vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
    >
      <div className="h-fit px-4">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceCard({
  experience: { title, company, date, description },
}: {
  experience: (typeof experiences)[0];
}) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.div
      className="relative w-full overflow-hidden"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <div className="z-10 flex w-full items-center justify-between max-sm:my-8 max-sm:flex-col">
        <span
          className="z-10 text-[5vw] font-light tracking-tighter whitespace-nowrap uppercase mix-blend-difference max-sm:whitespace-normal"
          style={{
            fontSize: "clamp(3rem, 5vw, 10rem)",
          }}
        >
          {title}
        </span>
        <div className="flex w-full items-center justify-between">
          <span
            className="z-10 mr-auto ml-6 text-[2vw] font-light whitespace-nowrap text-gray-300 mix-blend-difference"
            style={{
              fontSize: "clamp(1rem, 2vw, 10rem)",
            }}
          >
            at {company}
          </span>
          <span className="z-10 mx-2 h-[1px] w-full bg-white mix-blend-difference transition-all"></span>

          <span className="z-10 whitespace-nowrap mix-blend-difference">
            {date}
          </span>
        </div>
      </div>
      <motion.div
        className="absolute top-0 left-0 z-30 flex h-full w-full items-center justify-between"
        style={{
          background: "#fff",
          maskImage:
            "linear-gradient(to right, black 0%, black 20%, black 100%)",
          maskRepeat: "no-repeat",
          maskPosition: "0% 0%",
          maskSize: "100%",
        }}
        animate={{
          maskSize: isHovering ? "100%" : "0%",
          transition: {
            duration: 0.25,
            ease: "easeInOut",
          },
        }}
      >
        <span
          className="z-10 px-2 text-[3vw] font-light tracking-tighter whitespace-normal uppercase mix-blend-difference"
          style={{
            fontSize: "clamp(2rem, 3vw, 10rem)",
          }}
        >
          {description}
        </span>

        {/* <span className="z-10 text-[3vw] font-light tracking-tighter whitespace-nowrap uppercase mix-blend-difference">
          {"MORE >>"}
        </span> */}
      </motion.div>
    </motion.div>
  );
}

// function ExperienceModal() {
//   return (
//     <motion.div>
//       <h1>Hi ni</h1>
//     </motion.div>
//   );
// }
