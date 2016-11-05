// @flow
import React from 'react';

import { PlayerNavigationItem } from './player-navigation-item';
import type { TrackModel } from '../../models';


type PlayerNavigationProps = {
    prevTrack: ?TrackModel;
    nextTrack: ?TrackModel;

    onPrevClick: (ev: Event) => any;
    onNextClick: (ev: Event) => any;
}


export function PlayerNavigation({
    prevTrack,
    nextTrack,
    onPrevClick=()=>{},
    onNextClick=()=>{},
}: PlayerNavigationProps) {
    return (
        <div className="player-navigation">
            { prevTrack && 
                <PlayerNavigationItem track={prevTrack} isPrev onClick={onPrevClick} />
            }
            { nextTrack &&
                <PlayerNavigationItem track={nextTrack} isNext onClick={onNextClick} />
            }
        </div>
    );
};
