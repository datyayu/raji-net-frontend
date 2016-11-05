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
            <span className="player-info-text"> {track.artists.join(', ')} </span>
            <span className="player-info-text"> {track.album.name} </span>
        </div>
    );
};
