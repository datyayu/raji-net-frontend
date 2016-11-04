// @flow
import React from 'react';

import { Icon } from '../shared';


type HeaderSearchProps = {
    value: string;
    onChange: (ev: Event) => any;    
    onClose: (ev: Event) => any;    
};


export function HeaderSearch({
    onClose=()=>{},
    onChange=()=>{},
    value='',
}: HeaderSearchProps) {
    return (
        <div className="header-search">
            <Icon type="times" className="header-icon" onClick={onClose} />
            <input className="header-search-input" type="text" onChange={onChange} value={value} />
        </div>
    );
};
