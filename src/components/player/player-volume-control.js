// @flow
import React from 'react';
import { Icon } from '../shared';


type PlayerVolumeControlProps =
    { currentValue?: number
    , isShowing?: boolean
    , onVolumeChange?: Function
    }
;


export function PlayerVolumeControl({
    currentValue=100,
    isShowing=false,
    onVolumeChange=()=>{},
}: PlayerVolumeControlProps) {
    const activeClass = isShowing ? 'is-active' : '';

    return (
        <div className={`player-volume-control ${activeClass}`}>
            <Icon  type="volume-up" className="player-volume-control-icon"  />

            <div className="player-volume-control-seek">
                <div className="player-volume-control-seek-total">
                    <div className="player-volume-control-seek-current" />
                </div>
            </div>

            <Icon  type="volume-down" className="player-volume-control-icon"  />
        </div>
    );
}
