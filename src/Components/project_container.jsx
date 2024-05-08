import React from "react";
import Button from "./Button";

function Container (props){
    return (<div class="details-container color-container">
    <div class="article-container">
      <img
        src={props.src}
        alt={props.alt}
        class="project-img"
        style={{ height: props.imgHeight }}

      />
    </div>
    <h2 class="experience-sub-title project-title">{props.h2}</h2>
    <div class="btn-container">
      <Button class="btn btn-color-2 project-btn" text="Github" onclick={props.githubLink} />
      <Button class="btn btn-color-2 project-btn" text="Live Demo" onclick={props.liveDemoLink} />
    </div>
  </div>)
}

export default Container;