// @flow
import type { TrackType } from '../../types';

import React from 'react';
import { PlaylistTrackList } from './playlist-track-list';


type PlaylistProps =
    { showPlaylistOnMobile: boolean
    , isPlaying: boolean
    , currentTrack: TrackType
    , currentLoadingSong: TrackType
    , playlist: TrackType[]
    , playNewSong: Function
    , playCurrentSong: Function
    , pauseSong: Function
    }
;


export function Playlist(
    { showPlaylistOnMobile=false
    , isPlaying=false
    , playlist=[]
    , currentLoadingSong
    , currentTrack
    , playNewSong=()=>{}
    , playCurrentSong=()=>{}
    , pauseSong=()=>{}
    }
    : PlaylistProps
) {
    const currentSongId = currentTrack && currentTrack.id;
    const currentLoadingSongId = currentLoadingSong && currentLoadingSong.id;
    const mobileClasses = showPlaylistOnMobile ? 'is-active' : '';

    return (
        <div className={`playlist ${mobileClasses}`}>
            <h2 className="playlist-header"> playlist </h2>
            <PlaylistTrackList
                tracks={playlist}
                currentLoadingSongId={currentLoadingSongId}
                currentSongId={currentSongId}
                onItemPlay={playCurrentSong}
                onItemPlayFromStart={playNewSong}
                onItemPause={pauseSong}
                isPlaying={isPlaying}
            />
        </div>
    );
}
