import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import GsapScrollTriger from './components/GsapScrollTriger'
import GsapStager from './components/GsapStager'
import GsapTimeLine from './components/GsapTimeLine'
import GsapTo from './components/gsapTo'
import Navbar from './components/Navbar'
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <>
     <main>
      <Navbar/>
     </main>
      {/* <GsapTo/>

      <GsapTimeLine/> */}

      {/* <GsapStager/> */}

      {/* <GsapScrollTriger/> */}

    </>
  )
}

export default App
