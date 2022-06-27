import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <div className="contact section__padding" id="contact">
    <div className="contact-content">
      <h1 className="gradient__text">Contact Information</h1>
      <div className='contact-references'>
        <h2 className='contact-email' id='email'>E-mail:&nbsp; &nbsp; jppongetti@gmail.com</h2>
        <div className='contact-buttons'>
        <h2 className='contact-item'><a href='https://www.linkedin.com/in/jonathan-pongetti-47bb237a/'><button className='linkedin-btn'>LinkedIn</button></a></h2>
        <h2 className='contact-item'><a href='https://github.com/Jonathan-Pongetti'><button className='github-btn'>GitHub</button></a></h2> 
        </div>
      </div>
    </div> 
  </div>
  )
}

export default Contact