import React from 'react';


export function HeaderSearch() {
    return (
        <div className="header-search">
            <i className="header-icon fa fa-close js-toggle-search" />
            <input className="header-search-input" type="text" />
        </div>
    );
};