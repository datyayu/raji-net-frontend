import React from 'react';

import { PlayerNavigation } from './player-navigation';
import { PlayerData } from './player-data';


export function Player({ prevTrack, currentTrack, nextTrack }) {
    return (
        <div className="player">
            <PlayerNavigation prevTrack={prevTrack} nextTrack={nextTrack} />
            <PlayerData track={currentTrack} />
        </div>
    );
};
