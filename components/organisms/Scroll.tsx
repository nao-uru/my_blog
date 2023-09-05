import { FC, useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
  move?: string;
}

const Scroll = ({ children }) => {

  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 400,
        opacity: 0,

        distance: "40px"
      });
    }
  },[]);

  return (<section ref={sectionRef}>{children}</section>)
}

export{ Scroll }



// const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
//   children,
//   move
// }) => {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (sectionRef.current)
//       ScrollReveal().reveal(sectionRef.current, {
//         reset: true,
//         delay: 400,
//         opacity: 0,
//         origin:
//           move === "left"
//             ? "left"
//             : move === "right"
//             ? "right"
//             : move === "top"
//             ? "top"
//             : "bottom",
//         distance: "40px"
//       });
//   }, [sectionRef,move]);

//   return <section ref={sectionRef}>{children}</section>;
// };
// export default ScrollRevealContainer;
