// @flow
import type { LinkType } from '../../types';

import React from 'react';

import { SidenavList } from './sidenav-list';
import { SidenavLogo } from './sidenav-logo';


type SidenavProps =
    { links: LinkType[]
    , isActive: boolean
    }
;


export function Sidenav(
    { links = []
    , isActive = false
    }
    : SidenavProps
) {
    const activeClases: string = isActive ? 'is-active' : ''

    return (
        <div className={`sidenav ${activeClases}`}>
            <nav className="sidenav-nav">
                <SidenavLogo />
                <SidenavList links={links} />
            </nav>
        </div>
    );
}
