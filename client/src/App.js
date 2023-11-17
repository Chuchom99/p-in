// import { useDispatch,useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navigation';
// import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
// import Coin from './pages/Coin';
// import News from './pages/News';
// 
function App() {

  return (
    
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />}/>
        </Routes>
        {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;
