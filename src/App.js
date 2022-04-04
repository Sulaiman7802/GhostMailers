import Navbar from "./NavBar";
import "./global.css";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Contact from "./Contact";
function App() {
  return (
    <div className="wrapper h-full bg-zinc-900 text-white overflow-hidden">
      <Navbar />
      <div className="hero">
        <Hero />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="services">
        <Services />
      </div>
      <div className="work">
        <Work />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
