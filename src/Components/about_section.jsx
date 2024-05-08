import React from "react";
import Arrow from "./Arrow";
import Details from "./details_container";

function About(){
    return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
       
      <Details class ="section__pic-container" src = "./assets/about-pic.jpeg"  alt="Profile picture" img_class="about-pic" />
        <div class="about-details-container">

        <div class="about-containers">
        <Details class="details-container" src = "./assets/experience.png"  alt="Experience icon" img_class="icon" h3 ="Experience" l1="2+ years " l2 ="Programming" />     
        <Details class="details-container" src = "./assets/education.png"  alt="Education icon" img_class="icon" h3 ="Education" l1="B.Tech - Bachelor's Degree" l2 ="IIIT - Kottayam" />
        </div>
        <div class="text-container">
            <p>
            Hi, I'm Sarthak Yadav, a bachelor's student and a passionate developer. I enjoy creating web applications that are user-friendly, responsive, and secure. I have experience in both front-end and back-end development, using technologies such as HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. I also love solving challenging problems and learning new skills through competitive programming and CTFs. You can find some of my projects and achievements on this website, as well as my resume and contact details. Feel free to reach out to me if you have any questions or if you are interested in working with me. Thank you for visiting my portfolio website. 😊
            </p>
          </div>
        </div>
      </div>
      <Arrow location={() => {
                window.location.href = "./#experience";
              }} />
    </section>)
}

export default About;