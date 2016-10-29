import React from 'react';

import { SidenavList } from './sidenav-list';
import { SidenavLogo } from './sidenav-logo';


export const Sidenav = ({ links = [], isActive = false }) => (
    <div className={`navbar ${isActive ? 'is-active' : ''}`}>
        <nav className="navbar-nav">
            <SidenavLogo />
            <SidenavList links={links} />
        </nav>
    </div>
);