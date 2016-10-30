import React from 'react';

export function MobileOverlay({ 
    isActive = false, 
    onClick=()=>{},
}) {
    const styleClasses = isActive 
        ? "application-overlay is-active"
        : 'application-overlay';

    return (
       <div className={styleClasses} onClick={onClick} />
    );
};