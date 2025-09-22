import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Cocktails from "./Components/Cocktails";
import About from "./Components/About";
import Art from "./Components/Art";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
 <main>
    <NavBar/>
    <Hero/>
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Contact/>

</main>
  )
}

export default App