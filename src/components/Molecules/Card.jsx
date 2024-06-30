import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <a href={props.href}>
                <img src={props.image} alt={props.alt} />
            </a>
            <div className="content">
                <p>{props.description}</p>
                <div className="rating">
                    {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
