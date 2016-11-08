// @flow
import type { TrackType } from '../../types';

import React from 'react';

import { PlaylistTrackItem } from './playlist-track-item';


type PlaylistTrackListProps =
    { tracks: TrackType[]
    , isPlaying: boolean
    , currentSongId: number
    , currentLoadingSongId: number
    , onItemPlay: Function
    , onItemPlayFromStart: Function
    , onItemPause: Function
    }
;


export function PlaylistTrackList(
    { tracks=[]
    , isPlaying=false
    , currentSongId=0
    , onItemPlay=()=>{}
    , onItemPlayFromStart=()=>{}
    , onItemPause=()=>{}
    , currentLoadingSongId=0
    }
    : PlaylistTrackListProps
) {
    return (
        <ul className="playlist-track-list">
        { tracks.map((track, idx) => (
            <PlaylistTrackItem
                key={idx}
                track={track}
                isLoading={track.id === currentLoadingSongId}
                isActive={track.id === currentSongId}
                isPlaying={track.id === currentSongId && isPlaying}
                onItemPlay={onItemPlay}
                onItemPlayFromStart={onItemPlayFromStart.bind(null, tracks, idx)}
                onItemPause={onItemPause}
            />
        ))}
        </ul>
    );
}
