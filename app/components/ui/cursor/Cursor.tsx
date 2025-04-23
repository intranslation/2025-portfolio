import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import useMousePosition from "~/hooks/useCursor";

export default function Cursor() {
  const { scrollY } = useScroll();
  const [position, setPosition, isClickable] = useMousePosition();
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0,
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPosition((prev) => ({
      ...prev,
      y: prev.y + latest * 1.5 - prev.y,
    }));
  });

  const showArrow = isClickable;
  // const showArrow = isTest;
  return (
    <motion.svg
      height="22.5"
      width="22.5"
      animate={{
        // ...boxStyle,
        opacity: 1,
        x: position.x - vw * 0.015,
        y: position.y - vw * 0.015,
        transition: {
          bounce: 0.2,
        },
      }}
      initial={{
        opacity: 0,
        rotate: "315deg",
      }}
      exit={{
        opacity: 0,
      }}
      className="pointer-events-none absolute z-50 w-fit overflow-visible fill-white mix-blend-exclusion"
    >
      {showArrow && (
        <motion.path
          d="M1 7H15M15 7L9 13M15 7L9 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            height: "1.5vw",
            width: "1.5vw",
          }}
          initial={{
            opacity: 0,
            scale: 3,
          }}
          animate={{
            opacity: 1,
            scale: 1.5,
            transition: {
              duration: 0.25,
            },
          }}
          exit={{
            opacity: 0,
            scale: 3,
          }}
        />
      )}

      {!showArrow && (
        <motion.circle
          cx={20}
          cy={20}
          r={20}
          initial={{
            opacity: 0,
            scale: 2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.25,
            },
          }}
          exit={{
            opacity: 0,
            scale: 3,
          }}
        />
      )}
    </motion.svg>
  );
}
