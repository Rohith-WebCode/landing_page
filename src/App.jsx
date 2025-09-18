import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
 <main>
    <NavBar/>
    <Hero/>
    

</main>
  )
}

export default App