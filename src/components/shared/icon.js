// @flow
import React from 'react';

type IconProps = {
    type: string;
    className?: string;
    onClick?: (ev: Event) => any;
}

export function Icon({
    type,
    className='',
    onClick=()=>{},
}: IconProps) {
    return (
        <i className={`fa fa-${type} ${className}`} onClick={onClick} />
    );
};