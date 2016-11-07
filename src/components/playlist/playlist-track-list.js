// @flow
import type { TrackType } from '../../types';

import React from 'react';

import { PlaylistTrackItem } from './playlist-track-item';


type PlaylistTrackListProps =
    { tracks: TrackType[]
    , currentSongId: number
    , onItemClick: Function
    }
;


export function PlaylistTrackList(
    { tracks=[]
    , currentSongId=0
    , onItemClick=()=>{}
    }
    : PlaylistTrackListProps
) {
    return (
        <ul className="playlist-track-list">
        { tracks.map((track, idx) => (
            <PlaylistTrackItem
                key={idx}
                track={track}
                isPlaying={track.id === currentSongId}
                onClick={onItemClick.bind(null, tracks, idx)}
            />
        ))}
        </ul>
    );
}
