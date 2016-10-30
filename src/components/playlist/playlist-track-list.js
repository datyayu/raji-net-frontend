import React from 'react';

import { PlaylistTrackItem } from './playlist-track-item';


export function PlaylistTrackList({ tracks=[], currentSongId=0 }) {
    return (
        <ul className="playlist-song-list">
        { tracks.map((track, idx) => (
            <PlaylistTrackItem 
                key={idx} 
                track={track} 
                isPlaying={track.id === currentSongId}
            />
        ))}
        </ul>
    );
}