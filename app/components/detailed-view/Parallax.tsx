import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "red_img_1.png",
  "red_img_2.png",
  "red_img_3.png",
  "red_img_4.png",
  "red_img_5.png",
  "red_img_6.png",
  "red_img_7.png",
  "red_img_8.png",
  "red_img_9.png",
  "red_img_10.png",
  "red_img_11.png",
  "red_img_12.png",
  "red_img_13.png",
  "red_img_14.png",
  "red_img_15.png",
  "red_img_16.png",
  "red_img_17.png",
  "red_img_18.png",
];

export default function Parallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-20vh", "60vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-50vh", "0vh"]);

  return (
    <div className="h-full w-full">
      <div className="flex h-[50vh] flex-col">
        <p className="text-[4vw] font-thin text-black">
          easy pick for websites where many examples of anything need to be
          shown gracefully.
        </p>
      </div>
      <div
        ref={container}
        className="relative box-border flex h-[100vh] gap-[2rem] overflow-hidden bg-[#2d2d2d] p-[2vw]"
      >
        <Column
          images={[images[0], images[1], images[2], images[12], images[16]]}
          y={y1}
        />
        <Column images={[images[3], images[4], images[5], images[13]]} y={y2} />
        <Column
          images={[images[6], images[7], images[8], images[14], images[17]]}
          y={y1}
        />
        <Column
          images={[images[9], images[10], images[11], images[15]]}
          y={y2}
        />
      </div>
      <div className="h-[50vh]"></div>
    </div>
  );
}

const Column = ({ images, y = 0 }: { images: string[]; y?: number }) => {
  return (
    <motion.div
      style={{ y }}
      className="relative flex h-[100vh] w-[25%] min-w-[250px] flex-col gap-[2vw]"
    >
      {images.map((image) => (
        <motion.div
          className="min-h-[clamp(400px, 35vw, 600px)] relative z-10 h-full w-full overflow-hidden rounded-[1vw]"
          // whileHover={{ scale: 1.05 }}
        >
          <img
            src={`resized/${image}`}
            alt="image"
            className={`w-screen object-cover object-right-bottom`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
