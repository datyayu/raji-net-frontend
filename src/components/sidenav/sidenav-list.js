import React from 'react';

import { SidenavListItem } from './sidenav-list-item';


export function SidenavList({
    links = [],
}) {
    
    return (
        <ul className="navbar-list">
        {
            links.map((link, idx) => 
                <SidenavListItem key={idx} link={link} />
            )
        }
        </ul>
    );
};