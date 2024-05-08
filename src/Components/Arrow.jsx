import React from "react";

function Arrow(props){
    return (
    <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onClick={props.location}
      />
    )
}

export default Arrow;