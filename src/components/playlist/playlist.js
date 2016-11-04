// @flow
import React from 'react';
import { PlaylistTrackList } from './playlist-track-list';

import type { TrackModel, PlaylistModel } from '../../models';


type PlaylistProps = {
    showOnMobile: boolean;
    currentTrack: TrackModel;
    playlist: PlaylistModel;
}


export function Playlist({ showOnMobile = false, playlist, currentTrack }: PlaylistProps) {
    const currentSongId = currentTrack.id;
    const mobileClasses = showOnMobile ? 'isActive' : ''; 

    return (
        <div className={`playlist ${mobileClasses}`}>
            <h2 className="playlist-header"> current playlist </h2>
            <PlaylistTrackList tracks={playlist.tracks} currentSongId={currentSongId} />
        </div>
    );
};
