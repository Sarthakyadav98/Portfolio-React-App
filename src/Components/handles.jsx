import React from "react";

function Handles(){
    return ( <div><h1 class="title1">Other Handles</h1>



    <div class="contact-info-upper-container">

      <div class="contact-info-container">
        <img
                src="./assets/codechef.png"
                alt="My codechef profile"
                class="icon"
                onclick="location.href='https://www.codechef.com/users/sarthak_yadav'"
              />
              
       
        <p><a href="https://www.codechef.com/users/sarthak_yadav">Codechef Handle</a></p>
      </div>


      <div class="contact-info-container">
        <img
                src="./assets/codeforces.png"
                alt="My Codeforces profile"
                class="icon"
                onclick="location.href='https://codeforces.com/profile/the___enigma_'"
              />
        
        <p><a href="https://codeforces.com/profile/the___enigma">Codeforces Handle</a></p>
      </div>
    </div>
  </div>)
}

export default Handles;