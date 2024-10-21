// import { useDispatch,useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Kabout from "./pages/about/kabout";
import Kforex from "./pages/trading cat/futures/kforex";
import Kfut from "./pages/trading cat/futures/kfut";
import Koilg from "./pages/trading cat/futures/Koil&gas";
import Kstock from "./pages/trading cat/futures/Kstock";
import Ksoft from "./pages/software/ksoft";
import Kinks from "./pages/insights/kinsights";

function Mainlayout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<Kabout />} />
        <Route path="/forex" element={<Kforex />} />
        <Route path="/futures" element={<Kfut />} />
        <Route path="/commodites" element={<Koilg />} />
        <Route path="/stock" element={<Kstock />} />
        <Route path="/software" element={<Ksoft />} />
        <Route path="/insight" element={<Kinks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Mainlayout;
