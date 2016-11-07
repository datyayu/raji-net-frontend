// @flow
import React from 'react';
import { Link } from 'react-router';

import logoSVG from '../../assets/images/logo.svg';


export function SidenavLogo() {
    return (
        <Link className="sidenav-logo" to="/">
            <h1 className="sidenav-logo-text"> raji </h1>
            <img className="sidenav-logo-image" src={logoSVG} alt="Raji logo" />
        </Link>
    );
}
