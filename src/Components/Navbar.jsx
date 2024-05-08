import React from "react";
import NavLinks from "./Nav-links";


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function Navbar(){
    return <div><nav id="desktop-nav">
    <div className="logo">Sarthak Yadav</div>
    <div>
      <NavLinks name="nav-links" onclick = {null} />
    </div>
  </nav>
  <nav id="hamburger-nav">
    <div className="logo">Sarthak Yadav</div>
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-links">
      <NavLinks name="menu-links" onClick={toggleMenu} /> 
      </div>
    </div>
  </nav>
  </div>
}
export default Navbar;