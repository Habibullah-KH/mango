import { useRef, useState } from "react";
import { sliderLists } from "../../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Menu() {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(()=>{
    gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1,} );
    gsap.fromTo('.juice img', {opacity: 0, xPercent: -100}, {
      xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
    })
    gsap.fromTo('.details h2', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 100, ease: 'power1.inOut'})
    gsap.fromTo('.details p', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 100, ease: 'power1.inOut'})
  }, [currentIndex]);



  const totalCocktails = sliderLists.length;
  const goToSlide = (i) => {
    const newIndex = (i + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  }

  const getCocktailAt = (i) => {
    return sliderLists[(currentIndex + i + totalCocktails) % totalCocktails]
  }

  const current = getCocktailAt(0);
  const prev = getCocktailAt(-1);
  const next = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 dir="menu-heading" className="sr-only">
        Juice menu
      </h2>

      <nav className="cocktail-tabs" aria-label="juices navigation">
        {sliderLists.map((juice, i) => {
          const isActive = i === currentIndex;

          return (
            <button key={juice.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`} onClick={() => goToSlide(i)}>
              {juice.name}
            </button>
          )

        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={()=>goToSlide(currentIndex - 1)}>
            <span>{prev.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true"/>
          </button>
          <button className="text-left" onClick={()=>goToSlide(currentIndex + 1)}>
            <span>{next.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true"/>
          </button>
        </div>


        <div className="juice">
          <img src={current.image} className="object-contain"/>
        </div>

        <div className="recipe">
        <div ref={contentRef} className="info">
          <p>Recipe for:</p>
          <p id="title">{current.name}</p>
        </div>

        <div className="details">
          <h2>{current.title}</h2>
          <p>{current.description}</p>
        </div>

        </div>
      </div>
    </section>
  );
}
