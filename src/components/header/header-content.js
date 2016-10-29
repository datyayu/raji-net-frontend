import React from 'react';


export const HeaderContent = ({ title='raji', hasPlaylist=false, hasSearch=false }) => (
    <div className="header-content">
        <i className="header-icon fa fa-bars js-toggle-sidenav" />
        <h1 className="header-title"> {title} </h1>

        { hasPlaylist &&
            <i className="header-icon fa fa-angle-left" />
        }
        { hasSearch &&
            <i className="header-icon fa fa-search" />
        }
    </div>
);