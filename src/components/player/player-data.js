import React from 'react';

import { PlayerCover } from './player-cover';
import { PlayerInfo } from './player-info';

export function PlayerData({ track }) {
    return (track &&
        <div className="player-data">
            <PlayerCover album={track.album } />
            <PlayerInfo track={track} />
        </div>
    );
};
