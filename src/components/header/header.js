// @flow
import React from 'react';

import { HeaderContent } from './header-content';
import { HeaderSearch } from './header-search';


type HeaderProps =
    { title: string
    , hasPlaylist: boolean
    , hasSearch: boolean
    , showSearchOnMobile: boolean
    , isFetching: boolean
    , searchValue: string
    , openSidenav: Function
    , showSearch: Function
    , hideSearch: Function
    , showPlaylist: Function
    , onSearchChange: Function
    }
;


export function Header(
    { title='raji'
    , hasPlaylist=false
    , hasSearch=false
    , searchValue=''
    , showSearchOnMobile=false
    , isFetching=false
    , openSidenav=()=>{}
    , showSearch=()=>{}
    , hideSearch=()=>{}
    , showPlaylist=()=>{}
    , onSearchChange=()=>{}
    }
    : HeaderProps
) {
    const searchClasses = showSearchOnMobile ? 'has-search' : '';
    const pageTitle = isFetching ? 'Loading...' : title;

    return (
        <div className={`header ${searchClasses}`}>
            <HeaderContent
                title={pageTitle}
                hasPlaylist={hasPlaylist}
                hasSearch={hasSearch}
                onSearchIconClick={showSearch}
                onNavIconClick={openSidenav}
                onPlaylistIconClick={showPlaylist}
            />

            <HeaderSearch show={showSearch}
                          onClose={hideSearch}
                          onChange={onSearchChange}
                          value={searchValue}
            />
        </div>
    );
}
