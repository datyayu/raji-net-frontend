// @flow
import React from 'react';


type MobileOverlayProps =
    { isActive: boolean
    , showPlaylistOnMobile: boolean
    , closeSidenav?: Function
    }
;


export function MobileOverlay(
    { isActive = false
    , showPlaylistOnMobile=false
    , closeSidenav=()=>{}
    }
    : MobileOverlayProps
) {
    const activeClass = (isActive || showPlaylistOnMobile) ? 'is-active' : '';

    return (
       <div className={`mobile-overlay ${activeClass}`} onClick={closeSidenav} />
    );
}
