import React from 'react'
import './about.css'
import lettuce from '../../assets/lettuce.png'

const About = () => {
  return (
    <div className="about section__padding" id="about">
    <div className="about-content">
      <h1 className="gradient__text">About</h1>
      <p> Originally from Mississippi, I graduated from Mississippi State University in December of 2016. I have been working professionaly located out of Huntsville, Alabama since January of 2017.</p>
      <p> I belive myself to be self-driven in work and am continuously aiming to improve my current skills and learn new ones. One of my major goals when starting any new project or job is to get past the early trials of taking on something brand new and become a productive team meamber as quickly as possible.</p>
      <p> Why am I looking for new roles? Well, I always had dreams of working for NASA but when I discovered my love for software development I assumed it was out the window. However, I ended up seeing a job posting for a software engineer working on software for the International Space Station and had to apply, especially since it was located in my city.
          I have now been in that position for 4 years and even though I enjoy my job and find it very rewarding, the ISS has a decomission date on the horizon &#40;2028&#41; and I feel it's in my best interest to get out ahead of that date to start building my professional skills in non aerospace related fields. </p>
    </div> 
    {/* <div className="about-image">
      <img src={lettuce} alt="about" />
    </div> */}
  </div>
  )
}

export default About