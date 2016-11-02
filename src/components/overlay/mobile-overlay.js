// @flow
import React from 'react';

type MobileOverlayProps = {|
    isActive: boolean;
    onClick?: (ev: Event) => any;
|} 


export function MobileOverlay({ 
    isActive = false, 
    onClick=()=>{},
}: MobileOverlayProps) {
    const styleClasses = isActive 
        ? "application-overlay is-active"
        : 'application-overlay';

    return (
       <div className={styleClasses} onClick={onClick} />
    );
};
