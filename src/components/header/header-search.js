// @flow
import React from 'react';

import { Icon } from '../shared';


export function HeaderSearch() {
    return (
        <div className="header-search">
            <Icon type="close" className="header-icon" />
            <input className="header-search-input" type="text" />
        </div>
    );
};
