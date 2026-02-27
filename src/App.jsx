import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Juices from './components/Juices';
import About from './components/About';
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <>
     <main>
      <Navbar/>
      <Hero/>
      <Juices/>
      <About/>
     </main>


    </>
  )
}

export default App
