import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import MyApp from './components/Home';
import Footer from './components/Footer';
import Addtocart from './components/Addtocart';
import CombinedComponent from './components/Login'; 
import ContactUs from './components/Emailorderform'; 
import userIcon from './images/user.png';
import cartIcon from './images/cart.png';
import { Button } from 'bootstrap';
import axios from 'axios';
import Signup from './components/Signup';
import { Chat } from './components/Chat';


axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true

const App = () => {
  return (
    
    <Router>
      <div className="App">
        {/* Navbar */}
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav"> */}
              {/* <ul className="navbar-nav"> */}
                {/* Icons */}
                {/* <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <img src={userIcon} width="20px" alt="User Icon" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addtocart" className="nav-link">
                    <img src={cartIcon} width="20px" alt="Cart Icon" />

                  </Link>
                  <Link to={"/contact"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'></Link>
                </li> */}
              {/* </ul> */}
            {/* </div> */}
          {/* </div> */}
        {/* </nav> */}

        {/* Main Content */}
        <div className="main-content">
          <Routes>
          {/* <div>
      <Signup />
    </div> */}
            <Route path="/" element={<MyApp />} />
            <Route path="/addtocart" element={<Addtocart />} />
            <Route path="/login" element={<CombinedComponent />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/chat" element={<Chat />} />

            {/* <Route path="/" element={<MyApp />} />
        <Route path="/addtocart" element={<Addtocart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<ContactUs cart={cart} />} /> */}
          </Routes>
        </div>

        {/* Footer */}
        <FooterDisplay />
      </div>
    </Router>
  );
};

const FooterDisplay = () => {
  const location = useLocation();
  return location.pathname === '/' ? <Footer /> : null;
};

export default App;