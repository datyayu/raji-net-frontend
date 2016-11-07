// @flow
import React from 'react';
import { Link } from 'react-router';

import type { LinkType } from '../../types';


type SidenavListItemProps =
    { link: LinkType
    , isActive?: boolean
    }
;


export function SidenavListItem(
    { link
    , isActive=false
    }
    : SidenavListItemProps
) {
    const activeClasses: string = isActive ? 'is-active' : '';

    return (
        <li className="sidenav-list-item">
            <Link className={`sidenav-list-link ${activeClasses}`} to={link.href}>
                <span className="sidenav-list-text">
                    {link.text}
                </span>
            </Link>
        </li>
    );
}
