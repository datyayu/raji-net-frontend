// @flow
import React from 'react';

import { Icon } from '../shared';


type HeaderSearchProps =
    { value: string
    , onChange: Function
    , onClose: Function
    }
;


export function HeaderSearch(
    { value=''
    , onChange=()=>{}
    , onClose=()=>{}
    }
    : HeaderSearchProps
) {
    return (
        <div className="header-search">
            <Icon type="times" className="header-icon" onClick={onClose} />
            <input className="header-search-input" type="text" onChange={onChange} value={value} />
        </div>
    );
}
