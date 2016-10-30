import React from 'react';


export function Icon({ 
    type,
    className='',
    onClick=()=>{},
}) {
    return (
        <i className={`fa fa-${type} ${className}`} onClick={onClick} />
    );
};