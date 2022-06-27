import React, {useState} from 'react';
import './navbar.css';
import { FaLeaf } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
    <>
      <p><a href="#about">About</a></p>
      <p><a href="#workexp">Work Experience</a></p>
      <p><a href="#skills">Skills</a></p>
      <p><a href="#contact">Contact Info</a></p>
    </>
  );

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="top__navbar">
      <div className="top__navbar-links">
        <div className="top__navbar-links_logo">
            <FaLeaf />
        </div>
        <div className="top__navbar-links_container">
            <Menu />
        </div>
      </div>
      <div className='top__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#175e14' size={27} onClick={()=> setToggleMenu(false)} />
        : <RiMenu3Line color='#175e14' size={27} onClick={()=> setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className="top__navbar-menu_container scale-up-center">
          <div className="top__navbar-menu_container-links">
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
    
  );
};

export default Navbar;