import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.component";
import Hero from "./components/hero.component";
import About from "./components/About.component";
import Services from "./components/Services.component";
import ProjectList from "./components/ListProject.component";
import Contact from "./components/Contact.component";
import Footer from "./components/Footer.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
