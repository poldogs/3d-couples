import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Proceso">
        <Parallax type="proceso" />
      </section>
      <Portfolio />
      <section id="¡Queremos uno!">
        <Contact />
      </section>
    </div>
  );
};

export default App;
