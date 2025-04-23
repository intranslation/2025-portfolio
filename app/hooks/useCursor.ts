import { useEffect, useRef, useState } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isClickable, setIsClickable] = useState(false);
  const [elementHovered, setElementHovered] = useState<null | string>(null);
  const animationFrameRef = useRef<null | number>(null);

  useEffect(() => {
    const updateCursorForm = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const selection = window.getSelection();

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.isContentEditable ||
        (selection && selection.toString().length > 0)
      ) {
        setIsClickable(true);
      } else {
        setElementHovered(null);
        setIsClickable(false);
      }
    };

    const updateMousePosition = (event: MouseEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        setPosition({
          x: event.clientX,
          y: event.clientY + window.scrollY,
        });

        updateCursorForm(event);
      });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return [position, setPosition, isClickable, elementHovered] as const;
};

export default useMousePosition;
