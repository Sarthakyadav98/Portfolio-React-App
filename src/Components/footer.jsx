import React from "react";
import NavLinks from "./Nav-links";

function Footer (){
    return   <footer>
    <nav>
      <div class="nav-links-container">
        <NavLinks name="nav-links" />
      </div>
    </nav>
    <p>Copyright &#169; 2024 Sarthak Yadav. All Rights Reserved.</p>
  </footer>
}


export default Footer;