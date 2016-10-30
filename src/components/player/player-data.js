import React from 'react';

import { PlayerCover } from './player-cover';

export function PlayerData({ track }) {
    console.log(track)
    return (
        <div className="player-data">
            <PlayerCover album={track && track.album } />
        </div>
    );
};
