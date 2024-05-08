import React from "react";

function Details(props){
        return (
                <div className={props.class}>
                <img
                    src={props.src}
                    alt={props.alt}
                    className={props.img_class}
                />
                <h3>{props.h3}</h3>
                <p>{props.l1}<br />{props.l2}</p>
            </div>)
}

export default Details;