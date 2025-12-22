import { useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ContactForm } from "./pages/ContactForm";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <div>
      <Header setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Home setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
