import React from 'react'
import './header.css'
import geometric from '../../assets/geometric.png';

const Header = () => {
    return (
    <div className="header" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Jonathan Pongetti</h1>
      <h2 className='gradient__text'>Software Engineer</h2>
      <p>Hi, I am a Software Engineer with 6 years of experience seeking oppurtunities in exciting fields of work using modern and fast paced software practices.  </p>
      <p>I am currently employed as a NASA contractor through Boeing. Working on software that controls environmental and life support systems running onboard the International Space Station.</p>
        <p>I was previously employed by Hexagon Safety &amp; Infrastructure working on utility company based geospatial web services. </p>
    </div>

    <div className="header-image">
        <img src={geometric} alt='back'/>
    </div>
  </div>
    );
}

export default Header