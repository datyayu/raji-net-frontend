// @flow
import type { TrackType } from '../../types';

import React from 'react';

import { PlayerNavigationItem } from './player-navigation-item';


type PlayerNavigationProps =
    { prevTrack: ?TrackType
    , nextTrack: ?TrackType
    , onPrevClick: Function
    , onNextClick: Function
    }
;


export function PlayerNavigation(
    { prevTrack
    , nextTrack
    , onPrevClick=()=>{}
    , onNextClick=()=>{}
    }
    : PlayerNavigationProps
) {
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
}
