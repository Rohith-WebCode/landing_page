import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Cocktails from "./Components/Cocktails";
import About from "./Components/About";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
 <main>
    <NavBar/>
    <Hero/>
    <Cocktails/>
    <About/>
    

</main>
  )
}

export default App