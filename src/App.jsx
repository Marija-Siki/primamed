import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Prices from "./pages/cenovnik";
import Landing from "./pages/index";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/cenovnik" element={<Prices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
