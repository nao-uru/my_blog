import { FC, useRef, useEffect } from "react";

interface ScrollRevealContainerProps {
  move?: string;
  children?: any;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    import("scrollreveal").then(({ default: scrollReveal }) => {
      scrollReveal().reveal(el, {
        reset: true,
        delay: 400,
        opacity: 0,
        origin:
          move === "left"
            ? "left"
            : move === "right"
            ? "right"
            : move === "top"
            ? "top"
            : "bottom",
        distance: "40px"
      });
    });
  }, [sectionRef, move]);

  return <section ref={sectionRef}>{children}</section>;
};
export default ScrollRevealContainer;

