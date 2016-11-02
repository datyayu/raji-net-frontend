// @flow
import React from 'react';

type MobileOverlayProps = {|
    isActive: boolean;
    closeSidenav?: (ev: Event) => any;
|} 


export function MobileOverlay({ 
    isActive = false, 
    closeSidenav=()=>{},
}: MobileOverlayProps) {
    const styleClasses = isActive 
        ? "application-overlay is-active"
        : 'application-overlay';

    return (
       <div className={styleClasses} onClick={closeSidenav} />
    );
};
