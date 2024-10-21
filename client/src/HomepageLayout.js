// import { useDispatch,useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navigation';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function Homepagelayout () {

  return ( 
    <>
      <Navbar />
        <Routes>
          <Route index element={<Home />}/>
        </Routes>
        <Footer />
    </>

  );
}


export default Homepagelayout 