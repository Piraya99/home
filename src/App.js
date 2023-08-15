import React, { useState } from 'react';
import './App.css';

import Bio from './components/Bio';
import Footer from './components/Footer';

function App() {

  const [french, setFrench] = useState(false);
  const handleClick = () => {
    setFrench(!french);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#timeline">{french ? 'Expériences' : 'Experiences'}</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      <button onClick={handleClick}>
        <span className="material-icons md-18">language</span>
        <span>{french ? 'Français' : 'English'}</span>
        <span className="material-icons md-18">expand_more</span>
      </button>
      </nav>
      
      <main>
        <Bio french={french}/>
      </main>

      <Footer french={french}/>
    </div>
  );
}

export default App;
