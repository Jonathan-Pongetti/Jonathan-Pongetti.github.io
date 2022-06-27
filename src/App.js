import React from 'react';
import {Navbar, About, Header, Workexp, Skills, Contact} from './components';

import './App.css';

const App = () => (
  <div className="App">
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

export default App;