import React from 'react';
import { Link } from 'react-router';

import logoSVG from '../../assets/images/logo.svg';


export function SidenavLogo() {
    return (
        <Link className="navbar-logo" to="/">
            <h1 className="navbar-logo-text"> raji </h1>
            <img className="navbar-logo-image" src={logoSVG} alt="Raji logo" />
        </Link>
    );
}