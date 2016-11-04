// @flow
import React from 'react';

import { HeaderContent } from './header-content';
import { HeaderSearch } from './header-search';


type HeaderProps = {|
    title: string;
    hasPlaylist: boolean;
    hasSearch: boolean;
    showSearchOnMobile: boolean;
    searchValue: string;
    openSidenav: (ev: Event) => any;
    showSearch: (ev: Event) => any;
    hideSearch: (ev: Event) => any;
    onSearchChange: (ev: Event) => any;
|}


export function Header({ 
    title='raji', 
    hasPlaylist=false, 
    hasSearch=false,
    searchValue='',
    showSearchOnMobile=false,
    openSidenav=()=>{},
    showSearch=()=>{},
    hideSearch=()=>{},
    onSearchChange=()=>{},
}: HeaderProps) {
    const searchClasses = showSearchOnMobile ? 'has-search' : '';

    return (
        <div className={`header ${searchClasses}`}>
            <HeaderContent 
                title={title} 
                hasPlaylist={hasPlaylist} 
                hasSearch={hasSearch}
                onSearchIconClick={showSearch}
                onNavIconClick={openSidenav} />

            <HeaderSearch show={showSearch}
                          onClose={hideSearch}
                          onChange={onSearchChange} 
                          value={searchValue} />
        </div>
    );
};
