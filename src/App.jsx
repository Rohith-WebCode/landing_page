import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
       <p className="text-6xl text-blue-50">App</p> 
        </div>
  )
}

export default App