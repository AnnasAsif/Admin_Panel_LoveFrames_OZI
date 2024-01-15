import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import LoveFrames from './components/LoveFrames/LoveFrames';
import EZWhatsapp from './components/EZWhatsapp/EZWhatsapp';
// import Login from './components/Login';
// import AdminLogin from './components/AdminLogin';
// import Register from './components/Register';
import Frames from './components/LoveFrames/Frames'
import Effects from './components/LoveFrames/Effects';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Admin_Panel_OZI">Home</Link>
            </li>
            <li>
              <Link to="/loveframes">Love_Frames</Link>
            </li>
            <li>
              <Link to="/ezwhatsapp">EZWhatsapp</Link>
            </li>
            {/* <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/Admin_Panel_OZI" element={<>HOME</>} />

          <Route path="/loveframes" element={<LoveFrames/>} />
          <Route path="/ezwhatsapp" element={<EZWhatsapp />} />

          {/* <Route path="/admin" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} /> */}

          <Route path="/frames" element={<Frames/>}/>
          <Route path="/effects" element={<Effects/>}/>


        </Routes>
      </div>
    </Router>
  );
};

export default App;
