import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"; 

import './App.css';
import styles from './components/Header.module.css';

import ScrollToTop from "./functions/scrollToTop";

import NavItem from './components/NavItem';
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
                        
                        <Link to="/"><img className={styles.signature} src={signature} alt="signature" /></Link>
                        <span className={styles.headerRight}> 
                            <NavItem french={french} />

                            {/* Toggle Language Button */}
                            <button onClick={handleClick} className={styles.languagePicker}>
                              <span className="material-icons md-18">language</span>
                              <span>{french ? 'Français' : 'English'}</span>
                              <span className="material-icons md-18">expand_more</span>
                            </button>
                        </span>
                    </header>

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