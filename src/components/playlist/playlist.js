// @flow
import React from 'react';
import { PlaylistTrackList } from './playlist-track-list';

import type { TrackModel, PlaylistModel } from '../../models';


type PlaylistProps = {
    showPlaylistOnMobile: boolean;
    currentTrack: TrackModel;
    playlist: PlaylistModel;
}


export function Playlist({ 
    showPlaylistOnMobile = false, 
    playlist, 
    currentTrack 
}: PlaylistProps) {
    const currentSongId = currentTrack.id;
    const mobileClasses = showPlaylistOnMobile ? 'is-active' : ''; 

    return (
        <div className={`playlist ${mobileClasses}`}>
            <h2 className="playlist-header"> playlist </h2>
            <PlaylistTrackList tracks={playlist.tracks} currentSongId={currentSongId} />
        </div>
    );
};
