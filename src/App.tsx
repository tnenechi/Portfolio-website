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

  return (
    <div>
      <Header setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
