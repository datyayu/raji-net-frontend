// @flow
import React from 'react';

import { PlaylistTrackItem } from './playlist-track-item';
import type { TrackModel } from '../../models';


type PlaylistTrackListProps = {
    tracks: TrackModel[];
    currentSongId: number;
}


export function PlaylistTrackList({ tracks=[], currentSongId=0 }: PlaylistTrackListProps) {
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
};
