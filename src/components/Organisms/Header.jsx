import React from 'react';
import LogoText from '../Atoms/LogoText';
import NavLink from '../Atoms/NavLink';
// import NavLink from '../Atoms/NavLink';
import SearchInput from '../Atoms/SearchInput';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <LogoText text="MR" />
                </div>
            </div>
            <nav>
                <ul>
                    <NavLink href="visual3.html" text="Inicio" />
                    <NavLink href="login.html" text="Login" />
                    <li><SearchInput placeholder="Buscar" /></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
