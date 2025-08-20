import { motion, useScroll, useTransform } from "framer-motion";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function App() {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(180deg, #0f172a 60%, #166534 100%)",  // top
      "linear-gradient(180deg, #0f172a 60%, #166534 100%)"   // bottom
    ]
  );

  return (
    <motion.div className="App" style={{ background }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default App;
