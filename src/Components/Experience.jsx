import React from "react";
import Articles from "./articles";
import Arrow from "./Arrow";
import { DeveloperSkills, OtherSkills } from "../skills";

function Experience(){


    function createSkills(skills){ 
      return (<Articles key={skills.key} src={skills.src} alt={skills.alt} title={skills.title} description={skills.description} />)
    }
    return ( <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title"> Development</h2>
          <div className="article-container">
            {DeveloperSkills.map(createSkills)}
            
            
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Other Skills</h2>
          <div className="article-container">
            {OtherSkills.map(createSkills)}
          </div>
        </div>
      </div>
    </div>
    <Arrow location={() => {
                window.location.href = "./#projects";
              }} />  </section>
    ); } 


    export default Experience;  