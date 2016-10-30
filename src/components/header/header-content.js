import React from 'react';

import { Icon } from '../shared';


export function HeaderContent({ 
    title='raji', 
    hasPlaylist=false, 
    hasSearch=false,
    onNavIconClick=()=>{},
}) {
    return (
        <div className="header-content">
            <Icon type="bars" className="header-icon" onClick={onNavIconClick} />
            
            <h1 className="header-title"> {title} </h1>

            { hasPlaylist &&
                <Icon type="angle-left" className="header-icon" />
            }

            { hasSearch &&
                <Icon type="search" className="header-icon" />
            }
        </div>
    );
};