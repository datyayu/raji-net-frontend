// @flow
import React from 'react';
import { PlaylistTrackList } from './playlist-track-list';

import type { TrackModel } from '../../models';


type PlaylistProps = {
    showPlaylistOnMobile: boolean;
    currentTrack: TrackModel;
    playlist: TrackModel[];
    playSong: (trackList: TrackModel[], trackIndex: number) => any;
}


export function Playlist({ 
    showPlaylistOnMobile = false, 
    playlist=[],
    currentTrack,
    playSong=()=>{},
}: PlaylistProps) {
    const currentSongId = currentTrack && currentTrack.id;
    const mobileClasses = showPlaylistOnMobile ? 'is-active' : ''; 

    return (
        <div className={`playlist ${mobileClasses}`}>
            <h2 className="playlist-header"> playlist </h2>
            <PlaylistTrackList 
                tracks={playlist}
                currentSongId={currentSongId}
                onItemClick={playSong}
            />
        </div>
    );
};
