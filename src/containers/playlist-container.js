import React, { Component } from 'react';

import { PlaylistSelectors } from '../selectors';


export function PlaylistContainer(WrappedComponent) {
    class PlaylistWrappedComponent extends Component {
        render() {
            const prevTrack    = PlaylistSelectors.getPrevTrack();
            const currentTrack = PlaylistSelectors.getCurrentTrack();
            const nextTrack    = PlaylistSelectors.getNextTrack();
            
            return (
                <WrappedComponent {...this.props}
                    prevTrack={prevTrack} 
                    currentTrack={currentTrack}
                    nextTrack={nextTrack} 
                />
            );
        }
    }

    return PlaylistWrappedComponent;
}