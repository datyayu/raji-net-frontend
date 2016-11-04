// @flow
import React from 'react';

import { PlayerNavigationItem } from './player-navigation-item';
import type { TrackModel } from '../../models';


type PlayerNavigationProps = {
    prevTrack: ?TrackModel;
    nextTrack: ?TrackModel;
}


export function PlayerNavigation({ prevTrack, nextTrack }: PlayerNavigationProps) {
    return (
        <div className="player-navigation">
            { prevTrack && 
                <PlayerNavigationItem track={prevTrack} isPrev />
            }
            { nextTrack &&
                <PlayerNavigationItem track={nextTrack} isNext />
            }
        </div>
    );
};
