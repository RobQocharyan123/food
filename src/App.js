import "./App.css";
import { About } from "./components/about/About.jsx";
import { BreakFast } from "./components/breakfast/BreakFast";
import { Delivery } from "./components/delivery/Delivery";
import { Duration } from "./components/duration/Duration";
import { Header } from "./components/header/Header";
import { Nutrition } from "./components/nutrition/Nutrition";
import { Sample } from "./components/sample/Sample";
import { Testimonlials } from "./components/testimonlials/Testimonlials";
import { Footer } from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        {/* <Route path="breakfast" element={<BreakFast />} /> */}
        {/* <Route path="/sample" element={<Sample />} />
        <Route path="/duration" element={<Duration />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/testimonlials" element={<Testimonlials />} />
        <Route path="/about" element={<About />} />
        <Route path="/Nutrition" element={<Nutrition />} /> */}
      </Routes>
              
        <BreakFast />
        <Sample />
        <Duration />
        <Delivery />
        <Testimonlials />
        <About />
        <Nutrition />
      <Footer />
    </div>
  );
}

export default App;
