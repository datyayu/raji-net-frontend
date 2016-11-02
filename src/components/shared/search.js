// @flow
import React from 'react';

import { Icon } from './icon';


type SearchProps = {
    value: string;
    onChange: (ev: Event) => any;
}


export function Search({
    value='',
    onChange=()=>{} 
}: SearchProps) {
    return (
        <div className="search">
            <div className="search-input-wrapper">
                <Icon 
                    type="search" 
                    className="search-input-icon" 
                />
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
