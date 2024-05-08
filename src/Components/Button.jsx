import React from "react";

function Button(props){
    return (
      <button
        className={props.class}
        onClick={() => window.location.href = props.onclick}
      >
        {props.text}
      </button>
    );
}

export default Button;