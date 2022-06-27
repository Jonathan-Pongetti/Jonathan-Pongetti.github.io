import React from 'react'
import './workexp.css'

const Workexp = () => {
  return (
    <div className="workexp section__padding" id="workexp">
    <div className="workexp-content">
      <h1 className="gradient__text">Work Experience</h1>
      <h2>Boeing (NASA Contractor)</h2>
      <ul className='workexp-list'>
        <li>Worked on real-time software involving environmental and life support systems onboard the ISS</li>
        <li>Regularly work with distributed people and teams including requirements and testing to organize work completion</li>
        <li>Created and reviewed time critical software patches for in-flight issues in the event of hardware or software malfunctions </li>
        <li>Attended and reported on the ISS Research & Development conference in Atlanta, GA</li>
        <li> Implemented/updated new and existing commands available for use by NASA Command & Control and astronauts </li>
      </ul>
      <h2>Hexagon Safety & Infrastructure</h2>
      <ul className='workexp-list'>
        <li>Full-Stack development of enterprise level software in an Agile environment</li>
        <li>Created and maintained OGC compliant web services as well as proprietary analytical services</li>
        <li>Created and maintained SQL/PLSQL packages for software upgrades </li>
        <li>Worked directly with customers to determine and resolve issues</li>
        <li>Researched and created DevOps procedures using Jenkins for automated testing </li>
      </ul>
    </div> 
  </div>
  )
}

export default Workexp