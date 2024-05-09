import React from "react";
import socialData from "../social-data";
import Button from "./Button";

function Section() {
  function createSocials(social) {
      return (
        <img
          key={social.key}
          src={social.src}
          alt={social.alt}
          class={social.class}
          onClick={social.onclick}
        />
      );
  }
  
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src="/assets/pic.jpg"
            alt="Sarthak's profile pic"
            id="pic_001"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Sarthak Yadav</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
            <Button
              class="btn btn-color-2"
              text="Download CV"
              onclick="../assets/resume.pdf"
            />
            <Button
              class="btn btn-color-1"
              text="Contact Info"
              onclick="../#contact"            
            />
          </div>
          <div id="socials-container">
            {socialData.map(createSocials)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
