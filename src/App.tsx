import { useRef, useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [step, setStep] = useState(0);

  return (
    <div>
      <Header
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        onComplete={() => setStep(1)}
      />
      <Home
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        play={step === 1}
      />
      <About setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
