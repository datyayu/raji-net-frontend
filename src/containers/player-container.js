import React, { Component } from 'react';

import { PlayerSelectors } from '../selectors';


export function PlayerContainer(WrappedComponent) {
    class PlayerWrappedComponent extends Component {
        render() {
            const prevTrack    = PlayerSelectors.getPrevTrack();
            const currentTrack = PlayerSelectors.getCurrentTrack();
            const nextTrack    = PlayerSelectors.getNextTrack();
            
            return (
                <WrappedComponent 
                    prevTrack={prevTrack} 
                    currentTrack={currentTrack}
                    nextTrack={nextTrack} 
                />
            );
        }
    }

    return PlayerWrappedComponent;
}