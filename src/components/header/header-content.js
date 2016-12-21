// @flow
import React from 'react';

import { Icon } from '../shared';


type HeaderContentProps =
    { title: string
    , hasPlaylist?: boolean
    , hasSearch?: boolean
    , onNavIconClick?: Function
    , onSearchIconClick?: Function
    , onPlaylistIconClick?: Function
    }
;


export function HeaderContent(
    { title='raji'
    , hasPlaylist=false
    , hasSearch=false
    , onNavIconClick=()=>{}
    , onPlaylistIconClick=()=>{}
    , onSearchIconClick=()=>{}
    }
    : HeaderContentProps
) {
    return (
        <div className="header-content">
            <Icon type="bars" className="header-icon header-menu-icon" onClick={onNavIconClick} />

            <h1 className="header-title"> {title} </h1>

            { hasPlaylist &&
                <Icon type="angle-left" className="header-icon" onClick={onPlaylistIconClick} />
            }

            { hasSearch &&
                <Icon type="search" className="header-icon" onClick={onSearchIconClick} />
            }
        </div>
    );
}
