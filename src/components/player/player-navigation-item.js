// @flow
import React from 'react';

import { Icon } from '../shared';
import type { TrackModel } from '../../models';


type PlayerNavigationItemProps = {
    track: TrackModel;
    isPrev?: boolean;
    isNext?: boolean;
    onClick?: (ev: Event) => any
}


export function PlayerNavigationItem({ 
    track,
    isPrev=false,
    isNext=false,
    onClick=()=>{}
}: PlayerNavigationItemProps) {
    const title = track.name;
    const artists = track.artists.join(', ');

    return (
        <div className="player-navigation-item" onClick={onClick}>
            { isPrev &&
                <Icon type="angle-left" className="player-navigation-icon" />
            }

            <div className="player-navigation-info">
                <p className="player-navigation-text">{title}</p>
                <p className="player-navigation-text">{artists}</p>
            </div>

            { isNext &&
                <Icon type="angle-right" className="player-navigation-icon" />
            }
        </div>
    );
};
