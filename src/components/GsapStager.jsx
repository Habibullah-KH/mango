import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapStager() {
    useGSAP(()=>{
        gsap.to(".yellowBox", {
            rotation: 360,
            repeat: -1,
            yoyo: true,
            duration: 2,
            repeatDelay: 1,
            // stagger: 0.5,
            stagger: {
                amount: 1.5,
                grid: [2, 1],
                axis: "y",
                ease: "circ.easeInOut",
                from: "center"
            },
        })
    }, [])
  return (
    <>
      <div className="flex gap-2">
        <div className="yellowBox w-20 h-20 bg-amber-100 rounded-md"></div>
        <div className="yellowBox w-20 h-20 bg-amber-200 rounded-md"></div>
        <div className="yellowBox w-20 h-20 bg-amber-300 rounded-md"></div>
        <div className="yellowBox w-20 h-20 bg-amber-400 rounded-md"></div>
        <div className="yellowBox w-20 h-20 bg-amber-500 rounded-md"></div>
      </div>
    </>
  );
}
