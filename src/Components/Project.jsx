import React from "react";
import Container from "./project_container";
import Arrow from "./Arrow";


function Project(){
    return  (
        
    <section id="projects">
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <Container src ="https://pics.craiyon.com/2023-07-26/12f1ebb62505481fa27ceb801ec791e1.webp" h2="Mini Games" alt="Project 1" githubLink ="https://github.com/Sarthakyadav98/mini-games" liveDemoLink ="https://mini-games-sarthak.netlify.app/"/>
        <Container src ="./assets/qr.png" alt="Project 2"h2="QR Code Generator" githubLink="https://github.com/Sarthakyadav98/qr-code-generator" imgHeight="300px"/>
        <Container src="./assets/project-3.png" alt="Project 3" h2="Project Three" githubLink="https://github.com/Sarthakyadav98/" />
        
      </div>
    </div>
    <Arrow location={() => {
                window.location.href = "./#contact";
              }} />     
  </section>)}


export default Project;