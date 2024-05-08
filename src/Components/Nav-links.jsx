import React from "react";

function NavLinks(props) {
  return (
    <ul className={props.name}>
       <li><a href="#about" onClick={props.onclick}>About</a></li>
        <li><a href="#experience" onClick={props.onclick}>Experience</a></li>
        <li><a href="#projects" onClick={props.onclick}>Projects</a></li>
        <li><a href="#contact" onClick={props.onclick}>Contact</a></li>
    </ul>
  );
}

export default NavLinks;