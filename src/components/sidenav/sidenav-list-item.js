import React from 'react';


export const SidenavListItem = ({ link, isActive = false }) => (
    <li className="navbar-list-item">
        <a className={`navbar-list-link ${isActive ? 'is-active' : ''}`} href={link.href}>
            <span className="navbar-list-text"> {link.text} </span>
        </a>
    </li>
);