import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadStarsPreset } from "tsparticles-preset-stars";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function App() {
  // Ensure the star preset is loaded
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(180deg, #0f172a 60%, #166534 100%)",  // top
      "linear-gradient(180deg, #0f172a 60%, #166534 100%)"   // bottom
    ]
  );

  return (
    <motion.div className="App" style={{ background, position: "relative", overflow: "hidden" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "stars",
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          detectRetina: true,
        }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar scrollYProgress={scrollYProgress} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.div>
        <About />
        <Projects />
        <Contact />
      </div>
    </motion.div>
  );
}

export default App;
