import { useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Home"); //used to underline the active page when clicked from the header or when scrolled to;  individual components are wrapped in <motion.div> to detect when they enter the viewport
  const [step, setStep] = useState(0); //Header sets step = 1 when animation completes, then home animations begins ("play")

  return (
    <div>
      <Header
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        onComplete={() => setStep(1)}
      />
      <Home setSelectedPage={setSelectedPage} play={step === 1} />
      <About setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
