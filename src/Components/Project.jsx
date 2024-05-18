import React from "react";
import Container from "./project_container";
import Arrow from "./Arrow";


function Project(){
  
 
    return  (
        
    <section id="projects" >
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
      <div class="about-containers project-container">
        <Container src="./assets/puma-1.webp" alt="Project 1" h2="The Puma-Store" githubLink="https://github.com/Sarthakyadav98/puma-app" liveDemoLink="https://puma-store.netlify.app/" imgHeight="300px" />
        <Container src="./assets/restaurant_logo.jpg" alt="Project 2" h2="The LocalCraft-Food" githubLink="https://github.com/Sarthakyadav98/restaurant_app__001" liveDemoLink="https://thelocalcraft-food.netlify.app/" imgHeight="300px" />
        {/* <Container src ="./assets/qr.png" alt="Project "h2="QR Code Generator" githubLink="https://github.com/Sarthakyadav98/qr-code-generator" imgHeight="300px"/> */}
        <Container src ="https://pics.craiyon.com/2023-07-26/12f1ebb62505481fa27ceb801ec791e1.webp" h2="Mini Games" alt="Project 3" imgHeight="300px" githubLink ="https://github.com/Sarthakyadav98/mini-games" liveDemoLink ="https://mini-games-sarthak.netlify.app/"/>
     
      </div>
    </div>
    <Arrow location={() => {
                window.location.href = "./#contact";
              }} />     
  </section>)}


export default Project;