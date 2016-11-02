// @flow
import React from 'react';

import { HeaderContent } from './header-content';
import { HeaderSearch } from './header-search';


type HeaderProps = {|
    title: string;
    hasPlaylist: boolean;
    hasSearch: boolean;
    openSidenav: (ev: Event) => any;
|}


export function Header({ 
    title='raji', 
    hasPlaylist=false, 
    hasSearch=false,
    openSidenav=()=>{},
}: HeaderProps) {
    return (
        <div className="header">
            <HeaderContent 
                title={title} 
                hasPlaylist={hasPlaylist} 
                hasSearch={hasSearch} 
                onNavIconClick={openSidenav} />

            <HeaderSearch />
        </div>
    );
};
