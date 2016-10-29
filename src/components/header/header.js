import React from 'react';

import { HeaderContent } from './header-content';
import { HeaderSearch } from './header-search';


export const Header = ({ title='raji', hasPlaylist=false, hasSearch=false }) => (
    <div className="header">
        <HeaderContent title={title} hasPlaylist={hasPlaylist} hasSearch={hasSearch} />
        <HeaderSearch />
    </div>
);