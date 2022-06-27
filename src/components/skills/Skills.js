import React from 'react';
import './skills.css';
import * as icons from '../../assets/icons';

const Image = (props) =>{
    return (
        <div>
            <img src={props.src} alt='img'/>
        </div>
    );

}

const Skills = () => {
  return (
    <div className="skills section__padding" id="skills">
    <div className="skills-content">
      <h1 className="skills-title">Skills</h1>
      <div className='skills-images-container'>
        <div className='skills-images'>
            <Image src= {icons.csharp} />
            <Image src= {icons.docker} />
            <Image src= {icons.go} />
            <Image src= {icons.javascript} />
            <Image src= {icons.postgresql} />
            <Image src= {icons.python} />
            <Image src= {icons.react} />
            <Image src= {icons.solidity} />
        </div>
      </div>
    </div> 
  </div>
  )
}

export default Skills