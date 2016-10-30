import React from 'react';


export function HeaderContent({ 
    title='raji', 
    hasPlaylist=false, 
    hasSearch=false,
    onNavIconClick=()=>{},
}) {
    return (
        <div className="header-content">
            <i className="header-icon fa fa-bars" onClick={onNavIconClick} />
            
            <h1 className="header-title"> {title} </h1>

            { hasPlaylist &&
                <i className="header-icon fa fa-angle-left" />
            }

            { hasSearch &&
                <i className="header-icon fa fa-search" />
            }
        </div>
    );
};