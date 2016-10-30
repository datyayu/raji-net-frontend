import React from 'react';

import logoSVG from '../../assets/images/logo.svg';


export function SidenavLogo() {
    return (
        <a className="navbar-logo" href="#">
            <h1 className="navbar-logo-text"> raji </h1>
            <img className="navbar-logo-image" src={logoSVG} alt="Raji logo" />
        </a>
    );
}