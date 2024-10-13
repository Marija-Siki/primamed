import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";

const Landing = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="gallery">
        <Gallery />
      </div>
    </>
  );
};

export default Landing;
