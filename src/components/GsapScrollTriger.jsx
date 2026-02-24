import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function GsapScrollTriger() {
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
        gsap.to(box, {
            
            rotation: 360,
            borderRadius: "100%",
            scale: 1.5,
            scrollTrigger: {
                trigger: box,
                start: "bottom bottom",
                end: "top 20%",
                scrub: true,
            },
            ease: "power1.inOut"
        })
    })
  }, {scope: scrollRef});
  return (
    <>
      <div className="h-screen mt-[50rem]" ref={scrollRef}>
        <div className="yellowBox w-20 h-20 bg-amber-400 rounded-md"></div>
        <div className="yellowBox w-20 h-20 bg-lime-400 rounded-md"></div>
      </div>
    </>
  );
}
