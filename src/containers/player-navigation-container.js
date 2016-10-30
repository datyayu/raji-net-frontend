import React, { Component } from 'react';

import { PlayerSelectors } from '../selectors';


export function PlayerNavigationContainer(WrappedComponent) {
    class PlayerNavigationWrappedComponent extends Component {
        render() {
            const prevTrack = PlayerSelectors.getPrevTrack();
            const nextTrack = PlayerSelectors.getNextTrack();
            
            return (
                <WrappedComponent prevTrack={prevTrack} nextTrack={nextTrack} />
            );
        }
    }

    return PlayerNavigationWrappedComponent;
}