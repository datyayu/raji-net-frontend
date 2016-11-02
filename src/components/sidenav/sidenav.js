// @flow
import React from 'react';

import { SidenavList } from './sidenav-list';
import { SidenavLogo } from './sidenav-logo';
import type { LinkModel } from '../../models';


type SidenavProps = {
    links: LinkModel[];
    isActive: boolean;
}


export function Sidenav({
    links = [], 
    isActive = false,
}: SidenavProps) {
    const styleClasses: string = `navbar ${isActive ? 'is-active' : ''}`
  
    return (
        <div className={styleClasses}>
            <nav className="navbar-nav">
                <SidenavLogo />
                <SidenavList links={links} />
            </nav>
        </div>
    );
};