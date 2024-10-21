// import { useDispatch,useSelector } from 'react-redux';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from './pages/userDashboard/UserDashbord';
import Mainlayout from './Mainlayout';
import Register from './pages/reg/Register';
import Login from './pages/Login/Login';
import Admin from './pages/admin/Admin';
import UserDashboard from './UserDashboard';
import InvestorTransaction from "./components/investorTransactions/InvestorTransaction";
import Homepagelayout from './HomepageLayout';



function App() {

  return ( 
    <Router>
        <Routes>
        <Route path='/' element={<Homepagelayout /> } /> 
        <Route path="*" element={<Mainlayout />} />
          <Route path='/dashboard' element={<UserDashboard  />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/admin' element={<Admin />} /> */}
          <Route path='/alltransactions/:useId' element={<InvestorTransaction />} />
        </Routes>
     </Router>

  );
}


export default App;


// App.js


// // App.js
// import React, { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from './pages/userDashboard/UserDashbord';
// import Mainlayout from './Mainlayout';
// import Register from './pages/reg/Register';
// import Login from './pages/Login/Login';
// import Admin from './pages/admin/Admin';
// import  AuthContext  from './authcontext/authContext';

// const App = () => {
//   const { currentUser } = useContext(AuthContext);
  

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Mainlayout />}>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin" element={<Admin />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
