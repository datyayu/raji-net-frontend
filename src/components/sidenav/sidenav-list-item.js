// @flow
import React from 'react';
import { Link } from 'react-router';

import type { LinkModel } from '../../models';


type SidenavListItemProps = {
    link: LinkModel;
    isActive?: boolean;
}


export function SidenavListItem({
    link, 
    isActive = false,
}: SidenavListItemProps) {
    const styleClasses: string = `navbar-list-link ${isActive ? 'is-active' : ''}`;
 
    return (
        <li className="navbar-list-item">
            <Link className={styleClasses} to={link.href}>
                <span className="navbar-list-text"> 
                    {link.text}
                </span>
            </Link>
        </li>
    );
}