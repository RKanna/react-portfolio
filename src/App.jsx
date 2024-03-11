import "./App.css";
import Navbar from "./components/Navbar.component";
import Hero from "./components/hero.component";
import About from "./components/About.component";
import Services from "./components/Services.component";
import ProjectList from "./components/ListProject.component";
import Contact from "./components/Contact.component";
import Footer from "./components/Footer.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <About />
      <Services />
      <ProjectList />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
