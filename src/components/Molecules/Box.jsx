import React from "react";

function Box (props) {
    return (
        <>
        <div className="box">
            <p>{props.description}
                 <a href={props.href} target={props.target}>{props.descriptiona} 
                 </a>
            </p>
        </div>
        </>
    )
}

export default Box;