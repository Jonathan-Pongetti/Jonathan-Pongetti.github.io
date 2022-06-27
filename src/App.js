import React, {useEffect} from 'react';
import {Navbar, About, Header, Workexp, Skills, Contact} from './components';

import './App.css';

const App = () => {
  useEffect(() => {
    document.title = "Jonathan Pongetti";
  }, []);
 return ( <div className="App">
    <title>Jonathan Pongetti</title>
    <div className='gradient__bg'>
      <Navbar />
      <Header />    
      <About />
      <Workexp />
      <Skills />
      <Contact />
    </div>

  </div>
);
}

export default App;