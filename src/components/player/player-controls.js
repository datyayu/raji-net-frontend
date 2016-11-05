// @flow
import React from 'react';

import { Icon } from '../shared';


type PlayerControlsProps = {
    isPlaying: boolean;
    isRandom: boolean;
    isMuted: boolean;

    onPlayClick: Function;
    onPauseClick: Function;
    onNextClick: Function;
    onPrevClick: Function;
    onRandomClick: Function;
}


export function PlayerControls({
    isPlaying=false,
    isRandom=false,
    isMuted=false,

    onPlayClick=()=>{},
    onPauseClick=()=>{},
    onNextClick=()=>{},
    onPrevClick=()=>{},
    onRandomClick=()=>{},
}: PlayerControlsProps) {
    const randomClass = isRandom ? 'is-active' : '';
    const volumeIcon = isMuted ? 'volume-off' : 'volume-up'; 

    return (
        <div className="player-controls">
            <Icon type="random" className={`player-controls-icon ${randomClass}`}  onClick={onRandomClick} />
            <Icon type="backward" className="player-controls-icon" onClick={onPrevClick} />
            { isPlaying
                ? <Icon type="pause" className="player-controls-icon" onClick={onPauseClick} />
                : <Icon type="play" className="player-controls-icon" onClick={onPlayClick} />
            }
            <Icon type="forward" className="player-controls-icon" onClick={onNextClick} />
            <Icon type={volumeIcon} className="player-controls-icon" />
        </div>
    );
};
