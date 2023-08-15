import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Feature from './components/Feature';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {

  // Toggle Language Function
  const [french, setFrench] = useState(false);
  const handleClick = () => {
    setFrench(!french);
  };

  return (
    <div className="App">
      <header>
        <Navbar french={french}/>

        <button onClick={handleClick} className="languagePicker">
          <span className="material-icons md-18">language</span>
          <span>{french ? 'Français' : 'English'}</span>
          <span className="material-icons md-18">expand_more</span>
        </button>
      </header>
      <main>
        <Bio french={french}/>
        <Feature french={french}/>
        <Experience french={french}/>
      </main>

      <Footer french={french}/>
    </div>
  );
}

export default App;
