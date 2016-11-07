// @flow
import React from 'react';

type MobileOverlayProps = {|
    isActive: boolean;
    showPlaylistOnMobile: boolean;
    closeSidenav?: (ev: Event) => any;
|} 


export function MobileOverlay({ 
    isActive = false,
    showPlaylistOnMobile=false,
    closeSidenav=()=>{},
}: MobileOverlayProps) {
    const styleClasses = (isActive || showPlaylistOnMobile)
        ? 'mobile-overlay is-active'
        : 'mobile-overlay';

    return (
       <div className={styleClasses} onClick={closeSidenav} />
    );
};
