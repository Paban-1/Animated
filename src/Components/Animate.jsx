import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Animate = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: document.body,   // listen to page scroll
        start: "top top",
        end: "+=2000",            // scroll distance
        scrub: true,              // smooth sync with scroll
      },
      width: 400,                 // grow width
      height: 400,                // grow height
      ease: "none",
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",       // makes it a circle
        backgroundColor: "black",
        position: "fixed",         // stays in the middle
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Animate;
