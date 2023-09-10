import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import './App.css';


import ScrollToTop from "./functions/scrollToTop";

import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Home from './pages/Home';

import Experience from './pages/Experience';
import Projects from './pages/Projects';

// ImportProject Pages
import QueueFree from './pages/QueueFree';
import HomeSwitchHome from './pages/HomeSwitchHome';
import Astromania from './pages/Astromania';
import Maynooth from './pages/Maynooth';
import LaRousseliere from './pages/LaRousseliere';
import FocalDesign from './pages/FocalDesign';

import language from './img/icon/language.svg';
import expand from './img/icon/expand.svg';
 
export default function App() {
    // Toggle Language Function
  const [french, setFrench] = useState(false);
  const handleClick = () => {
    setFrench(!french);
  };

    return (
        <div className="app">
            <Router>
                <ScrollToTop />
                    <Header french={french}/>

                    {/* Toggle Language Button */}
                    <div className="languagePicker">
                        <button onClick={handleClick}>
                          <img src={language} alt="languageIcon" />
                          <span>{french ? 'Français' : 'English'}</span>
                          <img src={expand} alt="expand" />
                        </button>
                    </div>

                <Routes>
                        <Route exact path='/' exact element={<Home french={french} />} />
                        <Route path='/experience' element={<Experience french={french}/>} />
                        <Route path='/projects' element={<Projects french={french}/>} />
                        <Route path='/projects/queuefree' element={<QueueFree french={french}/>} />
                        <Route path='/projects/homeswitchhome' element={<HomeSwitchHome french={french}/>} />
                        <Route path='/projects/astromania' element={<Astromania french={french}/>} />
                        <Route path='/projects/maynooth' element={<Maynooth french={french}/>} />
                        <Route path='/projects/larousseliere' element={<LaRousseliere french={french}/>} />
                        <Route path='/projects/focaldesign' element={<FocalDesign french={french}/>} />
                </Routes>
            </Router>

            <Contact french={french}/>
            <Footer french={french}/>
        </div>
    );
}