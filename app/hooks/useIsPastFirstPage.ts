import { useEffect, useRef, useState } from "react";

const useIsPastFirstPage = () => {
  const animationFrameRef = useRef<null | number>(null);
  const [isPastFirstPage, setIsPastFirstPage] = useState(false);

  const body = document.querySelector("body");

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        if (body) {
          setIsPastFirstPage(body.scrollTop > window.innerHeight * 0.8);
        }
      });
    };

    if (body) {
      body.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      body?.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return isPastFirstPage;
};

export default useIsPastFirstPage;
