// @flow
import React from 'react';

import { PlaylistTrackItem } from './playlist-track-item';
import type { TrackModel } from '../../models';


type PlaylistTrackListProps = {
    tracks: TrackModel[];
    currentSongId: number;
    onItemClick: (trackList: TrackModel[], trackIndex: number) => any;
}


export function PlaylistTrackList({ 
    tracks=[], 
    currentSongId=0,
    onItemClick=()=>{},
}: PlaylistTrackListProps) {
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
};
