import React from 'react';

function Recommendation(props) {
    return (
        <div className="recommendation">
            <a href={props.href}>
                <img src={props.image} alt={props.alt} />
            </a>
        </div>
    );
}

export default Recommendation;
