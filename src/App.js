import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ScrollToTop from "./functions/scrollToTop";

import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Home from './pages/Home';

import QueueFree from './pages/QueueFree';
import HomeSwitchHome from './pages/HomeSwitchHome';
import Astromania from './pages/Astromania';
import Maynooth from './pages/Maynooth';
import LaRousseliere from './pages/LaRousseliere';
import FocalDesign from './pages/FocalDesign';

import signature from './img/signature.png';
 
export default function App() {
    // Toggle Language Function
  const [french, setFrench] = useState(false);
  const handleClick = () => {
    setFrench(!french);
  };

    return (
        <div className="app" id="top">
            <Router>
                <ScrollToTop />
                    <header>
                        
                        <img className="signature" src={signature} alt="signature" />
                        <span className="headerRight"> 
                            <Navbar french={french} />

                            {/* Toggle Language Button */}
                            <button onClick={handleClick} className="languagePicker">
                              <span className="material-icons md-18">language</span>
                              <span>{french ? 'Français' : 'English'}</span>
                              <span className="material-icons md-18">expand_more</span>
                            </button>
                        </span>
                    </header>

                <Routes>
                        <Route exact path='/' exact element={<Home french={french} />} />
                        <Route path='/queuefree' element={<QueueFree french={french}/>} />
                        <Route path='/homeswitchhome' element={<HomeSwitchHome french={french}/>} />
                        <Route path='/astromania' element={<Astromania french={french}/>} />
                        <Route path='/maynooth' element={<Maynooth french={french}/>} />
                        <Route path='/larousseliere' element={<LaRousseliere french={french}/>} />
                        <Route path='/focaldesign' element={<FocalDesign french={french}/>} />
                </Routes>
            </Router>

            <Contact french={french}/>
            <Footer french={french}/>
        </div>
    );
}