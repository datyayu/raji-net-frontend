import React from 'react';


export function SidenavListItem({ 
    link, 
    isActive = false,
}) {
    const styleClasses = `navbar-list-link ${isActive ? 'is-active' : ''}`;
 
    return (
        <li className="navbar-list-item">
            <a className={styleClasses} href={link.href}>
                <span className="navbar-list-text"> 
                    {link.text}
                </span>
            </a>
        </li>
    );
}