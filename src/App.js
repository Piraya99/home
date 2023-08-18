import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
 
export default function App() {
    // Toggle Language Function
  const [french, setFrench] = useState(false);
  const handleClick = () => {
    setFrench(!french);
  };

    return (
        <div className="app">
            <Router>
                    <header id="top">
                        <Navbar french={french} />

                        {/* Toggle Language Button */}
                        <button onClick={handleClick} className="languagePicker">
                          <span className="material-icons md-18">language</span>
                          <span>{french ? 'Français' : 'English'}</span>
                          <span className="material-icons md-18">expand_more</span>
                        </button>
                    </header>

                <Routes>
                        <Route exact path='/' exact element={<Home />} />
                        <Route path='/projectpage' element={<ProjectPage />} />
                </Routes>
            </Router>

            <Contact french={french}/>
            <Footer french={french}/>
        </div>
    );
}