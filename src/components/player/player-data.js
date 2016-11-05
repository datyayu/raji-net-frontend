// @flow
import React from 'react';

import type { TrackModel } from '../../models';

import { PlayerCover } from './player-cover';
import { PlayerInfo } from './player-info';


type PlayerDataProps = {
    track: ?TrackModel;
}


export function PlayerData({ track }: PlayerDataProps) {
    return (
        <div className="player-data">
            <PlayerCover album={track && track.album} />
            <PlayerInfo track={track} />
        </div>
    );
};
