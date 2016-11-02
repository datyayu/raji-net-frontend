// @flow
import React from 'react';
import { PlaylistTrackList } from './playlist-track-list';

import type { TrackModel, PlaylistModel } from '../../models';


type PlaylistProps = {
    currentTrack: TrackModel;
    playlist: PlaylistModel;
}


export function Playlist({ playlist, currentTrack }: PlaylistProps) {
    const currentSongId = currentTrack.id;

    return (
        <div className="playlist">
            <h2 className="playlist-header"> current playlist </h2>
            <PlaylistTrackList tracks={playlist.tracks} currentSongId={currentSongId} />
        </div>
    );
};
