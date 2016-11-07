// @flow
import React from 'react';

import { SidenavListItem } from './sidenav-list-item';
import type { LinkModel } from '../../models';


type SidenavListProps = {
    links: LinkModel[];
}


export function SidenavList({
    links = [],
}: SidenavListProps) {
    return (
        <ul className="sidenav-list">
        {
            links.map((link, idx) => 
                <SidenavListItem key={idx} link={link} />
            )
        }
        </ul>
    );
};