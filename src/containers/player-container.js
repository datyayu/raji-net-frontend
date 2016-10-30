import React, { Component } from 'react';

import { PlayerSelectors } from '../selectors';


export function PlayerContainer(WrappedComponent) {
    class PlayerWrappedComponent extends Component {
        render() {
            const volumeLevel = PlayerSelectors.getVolumeLevel();
            const isPlaying   = PlayerSelectors.isPlaying();
            const isMuted     = PlayerSelectors.isMuted();
            const isRandom    = PlayerSelectors.isRandom();

            const currentPlayingTime = PlayerSelectors.getCurrentPlayingTime();
            const currentPlayingProgress = PlayerSelectors.getCurrentPlayingProgress();
            const totalPlayingTime = PlayerSelectors.getTotalPlayingTime();
            
            return (
                <WrappedComponent {...this.props}
                    isPlaying={isPlaying}
                    isRandom={isRandom}
                    isMuted={isMuted}
                    volume={volumeLevel}
                    currentPlayingTime={currentPlayingTime}
                    currentPlayingProgress={currentPlayingProgress}
                    totalPlayingTime={totalPlayingTime}
                />
            );
        }
    }

    return PlayerWrappedComponent;
}