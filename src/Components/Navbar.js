import React, { useState, useRef } from 'react';
import {links} from './dataNav';
import { IoMdMenu } from "react-icons/io";
import './Navbar.css';
function Navbar(){
  const [navLinks, setNavLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = ()=>{
    setNavLinks(!navLinks);
  };
  const linkStyles ={
    height: navLinks? `${linksRef.current?.getBoundingClientRect().height}px`: '0px',
  };
  return(
  <nav>
    <div className="nav-container">
      <div className="nav-header">
        <a href='/'>Travel & <span style={{color: "black"}}>Explore</span></a>
        <button className='toggle-btn' onClick={toggleLinks}><IoMdMenu /></button>
      </div>

      <div className="links-container"
      ref={linksContainerRef}
      style={linkStyles}>
        <ul className="links" ref={linksRef}>
          {links.map((link)=>{
            const {id, url, text, icon} =link;

            return(<li key={id}>
              <a href={url}><span className="icon">{icon}</span>{text}</a>
            </li>);
          })}
        </ul>
      </div>

      <button className="btn-signup">Sign Up</button>
    </div>
  </nav>
  );
}
export default Navbar;