import React from 'react';

import { PlayerNavigationItem } from './player-navigation-item';


export function PlayerNavigation({ prevTrack, nextTrack }) {
    return (
        <div className="player-navigation">
            <PlayerNavigationItem track={prevTrack} isPrev />
            <PlayerNavigationItem track={nextTrack} isNext />
        </div>
    );
};