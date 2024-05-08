import React from "react";

function Articles(props){
    return  <article>
    <img
      src={props.src}
      alt={props.alt}
      className="icon"
    />
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  </article>
}

export default Articles;