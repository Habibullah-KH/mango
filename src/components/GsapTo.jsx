import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function GsapTo() {
    useGSAP(()=>{
        gsap.to("#boxA", {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: "power1.inOut"
        })

        gsap.from("#boxB", {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: "power1.inOut"
        })

        gsap.fromTo("#boxC", {
            x:0,
            rotation: 0,
            borderRadius: '0%',
        },

        {
            x:250,
            rotation: 360,
            repeat: -1,
            yoyo: true,
            borderRadius: '100%',
            duration: 2,
            ease: 'power1.inOut'
        })
    }, [])


  return (
    <>
        <div id='boxA' className='bg-red-500 h-20 w-20 rounded-xl flex items-center justify-center'>
        gsap to
        </div>


        <div id='boxB' className='bg-lime-500 text-black h-20 w-20 rounded-xl flex items-center justify-center'>
        gsap from
        </div>

        <div id='boxC' className='bg-blue-500 h-20 w-20 rounded-xl flex items-center justify-center'>
        gsap fromTo
        </div>


    </>
  )
}
