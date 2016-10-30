import React from 'react';
import { PlaylistTrackList } from './playlist-track-list';


export function Playlist({ playlist=[], currentTrack }) {
    const currentSongId = currentTrack.id;

    return (
        <div className="playlist">
            <h2 className="playlist-header"> current playlist </h2>
            <PlaylistTrackList tracks={playlist} currentSongId={currentSongId} />
        </div>
    );
}