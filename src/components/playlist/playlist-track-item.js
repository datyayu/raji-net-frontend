// @flow
import type { TrackType } from '../../types';

import React from 'react';

import { Icon } from '../shared';


type PlaylistTrackItemProps =
    { track: TrackType
    , isPlaying: boolean
    , isActive: boolean
    , isLoading: boolean
    , onItemPlay: Function
    , onItemPlayFromStart: Function
    , onItemPause: Function
    }
;


export function PlaylistTrackItem({
    track,
    isLoading=false,
    isPlaying=false,
    isActive=false,
    onItemPlay=()=>{},
    onItemPlayFromStart=()=>{},
    onItemPause=()=>{},
    }
    : PlaylistTrackItemProps
) {
    const iconType: string = isPlaying ? 'pause' : 'play';
    const activeClass: string = isActive ? 'is-active' : '';

    // If it isnt selected, play from start. If it is, just continue playing.
    const onPlayCallback = isActive ? onItemPlay : onItemPlayFromStart;
    // Callback depending on player's current state.
    const onClickCallback = isPlaying ? onItemPause : onPlayCallback;

    return (
        <li className={`playlist-track ${activeClass}`} onClick={onClickCallback}>
            <img className="playlist-track-cover" src={track.album.image} alt={track.album.name} />

            <div className="playlist-track-info">
                <span className="playlist-track-info-text">{track.name}</span>
                <span className="playlist-track-info-text">{track.artists.join(',')}</span>
            </div>

            <div className="playlist-track-icons">
                { isLoading
                    ? <span> Loading... </span>
                    : <Icon type={iconType} className="playlist-track-icon" />
                }
            </div>
        </li>
    );
};
