// @flow
import type { TrackType } from '../../types';

import React from 'react';

import { PlayerCover } from './player-cover';
import { PlayerInfo } from './player-info';


type PlayerDataProps =
    { track: ?TrackType;
    }
;


export function PlayerData(
    { track
    }
    : PlayerDataProps
) {
    return (
        <div className="player-data">
            <PlayerCover album={track && track.release} />
            <PlayerInfo track={track} />
        </div>
    );
}

