import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Projects from "./Projects"
import Skils from "./Skils"
import MarqueeDemo from '../../Components/MarqueeDemo'

const Home = () => {
  return (
    <div>
   
        <Hero></Hero>
        <Skils></Skils>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
        <MarqueeDemo/>
    </div>
  )
}

export default Home