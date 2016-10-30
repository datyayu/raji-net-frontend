import React from 'react';
import { Icon } from '../shared';


export function PlayerControls({ 
    isPlaying=false,
    isRandom=false,
    isMuted=false,
}) {
    const randomClass = isRandom ? 'is-active' : '';
    const playingIcon = isPlaying ? 'pause' : 'play';
    const volumeIcon = isMuted ? 'volume-off' : 'volume-up'; 

    return (
        <div className="player-controls">
            <Icon type="random" className={`player-controls-icon ${randomClass}`} />
            <Icon type="backward" className="player-controls-icon" />
            <Icon type={playingIcon} className="player-controls-icon" />
            <Icon type="forward" className="player-controls-icon" />
            <Icon type={volumeIcon} className="player-controls-icon" />
        </div>
    );
}