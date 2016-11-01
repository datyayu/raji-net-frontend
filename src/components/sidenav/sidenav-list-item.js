import React from 'react';
import { Link } from 'react-router';


export function SidenavListItem({ 
    link, 
    isActive = false,
}) {
    const styleClasses = `navbar-list-link ${isActive ? 'is-active' : ''}`;
 
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