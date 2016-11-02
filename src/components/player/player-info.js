// @flow
import React from 'react';

import type { TrackModel } from '../../models';


type PlayerInfoProps = {
    track: TrackModel;
}


export function PlayerInfo({ track }: PlayerInfoProps) {
    return (
        <div className="player-info">
            <span className="player-info-title"> {track.name} </span>
            <a className="player-info-text" href="#"> {track.artists.join(', ')} </a>
            <a className="player-info-text" href="#"> {track.album.name} </a>
        </div>
    );
};
