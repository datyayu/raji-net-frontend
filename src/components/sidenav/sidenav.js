import React from 'react';

import { SidenavList } from './sidenav-list';
import { SidenavLogo } from './sidenav-logo';


export function Sidenav({ 
    links = [], 
    isActive = false,
}) {
    const styleClasses = `navbar ${isActive ? 'is-active' : ''}`
  
    return (
        <div className={styleClasses}>
            <nav className="navbar-nav">
                <SidenavLogo />
                <SidenavList links={links} />
            </nav>
        </div>
    );
};