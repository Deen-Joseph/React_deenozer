import React, { useRef } from "react";
// import { BrowserRouter as Link, Router, Routes, Route} from 'react-router-dom'
import '../../styles/main.css'
// import  Players from "../pages/Players";
// import  Home from "../pages/Home";
// import  FA from "../pages/FA";
// import  Events from "../pages/Events"; 
// import  Clubs from "../pages/Clubs"; 

const Header = () => {
const navRef = useRef() //Access DOM elements

const showNav =()=>{
  navRef.current.classList.toggle('responsive_nav');
}

  return (
    <header>
      <nav><h3><a href="/home">deenozer.com</a></h3></nav>
      
      {/* <Router> */}
      <nav ref={navRef}>
        <a href="/home">Home</a>
        <a href="/players">Players</a>
        <a href="/clubs">Clubs</a>
        <a href="/fa">FA</a>
        <a href="/events">Events</a>
        <a href="/database">Database</a>
        <button className="nav-btn nav-close-btn" onClick={showNav}>Menu</button>
      </nav>
        <button className="nav-btn" onClick={showNav}>Menu</button>
        {/* <Routes>
        <Route  element={<Home />} path="/Home" />
          <Route  element={<Players />} path="/Players" />
          <Route  element={<FA />} path="/FA" />
          <Route  element={<Events />} path="/Events" />
          <Route  element={<Clubs />} path="/Clubs" />
        </Routes>
        </Router> */}
    </header>
  );
};

export default Header;
