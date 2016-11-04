// @flow
import React from 'react';

import { Icon } from './icon';


type SearchProps = {
    searchValue: string;
    onSearchChange: (ev: Event) => any;
}


export function Search({
    searchValue='',
    onSearchChange=()=>{} 
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
                    value={searchValue}
                    onChange={onSearchChange}
                />
            </div>
        </div>
    );
};
