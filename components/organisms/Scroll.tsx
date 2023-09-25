// import { FC, useRef, useEffect } from "react";
// import scrollReveal from "scrollreveal";

// interface ScrollRevealContainerProps {
//   move?: string;
// }

// const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
//   children,
//   move
// }) => {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (sectionRef.current)
//       scrollReveal().reveal(sectionRef.current, {
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
