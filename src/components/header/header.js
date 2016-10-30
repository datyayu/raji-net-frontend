import React from 'react';

import { HeaderContent } from './header-content';
import { HeaderSearch } from './header-search';


export function Header({ 
    title='raji', 
    hasPlaylist=false, 
    hasSearch=false,
    onNavIconClick=()=>{},
}) {
    return (
        <div className="header">
            <HeaderContent 
                title={title} 
                hasPlaylist={hasPlaylist} 
                hasSearch={hasSearch} 
                onNavIconClick={onNavIconClick} />

            <HeaderSearch />
        </div>
    );
};