import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";

const Landing = () => {
  return (
    <>
      <div id="pocetna">
        <Home />
      </div>

      <div id="o-nama">
        <About />
      </div>

      <div id="usluge">
        <Services />
      </div>

      <div id="galerija">
        <Gallery />
      </div>
    </>
  );
};

export default Landing;
