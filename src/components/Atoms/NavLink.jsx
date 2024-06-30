import React from 'react';

function NavLink(props) {
    return (
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
}

export default NavLink;
