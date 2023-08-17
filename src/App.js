import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {

  // Toggle Language Function
  const [french, setFrench] = useState(false);
  const handleClick = () => {
    setFrench(!french);
  };

  return (
    <div className="App" id="top">
      <header>
        < Navbar french={french} />
        {/* Toggle Language Button */}
        <button onClick={handleClick} className="languagePicker">
          <span className="material-icons md-18">language</span>
          <span>{french ? 'Français' : 'English'}</span>
          <span className="material-icons md-18">expand_more</span>
        </button>
      </header>
      <Home french={french}/>
      <Footer french={french}/>
    </div>
  );
};
