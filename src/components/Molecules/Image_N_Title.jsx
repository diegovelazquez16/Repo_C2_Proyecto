import React from "react";

function Image_N_Title (props) {
    return ( 
        <>
        <div>
            <img src={props.img} alt={props.altI} className={props.class} 
            id={props.id}
            link={props.href}/>
        </div>
        <div>
            <h2><a href={props.href}>{props.title}</a></h2>
            <p>{props.description}</p>
        </div>
        </>
    )
}

export default Image_N_Title;