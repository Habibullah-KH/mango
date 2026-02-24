import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function GsapTimeLine() {
  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useGSAP(() => {
    timeline.to("#yellowBox", {
        x:100,
        rotation: 360,
        duration: 2,
        ease: "back.inOut"
        
    })

    timeline.to("#yellowBox", {
        y: 50,
        x:120,
        rotation: 360,
        duration: 2,
        borderRadius: "100%",
        ease: "back.inOut"

    })

    timeline.to("#yellowBox", {
        x:300,
        rotation: 360,
        duration: 2,
        borderRadius: "100%",
        ease: "back.inOut"
        
    })

    
    timeline.to("#yellowBox", {
        y: -100,
        x:320,
        rotation: 360,
        duration: 2,
        borderRadius: "100%",
        ease: "back.inOut"

    })


  }, []);
  return (
    <>
      <div id="yellowBox" className="w-20 h-20 bg-amber-400 rounded-md"></div>
    </>
  );
}
