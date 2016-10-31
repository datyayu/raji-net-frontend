import React from 'react';

import { PlaylistListItem } from './playlist-list-item';


export function PlaylistList({ playlistList=[] }) {
    return (
        <ul className="playlist-list">
            {playlistList.map((playlist, idx) => 
                <PlaylistListItem key={idx} playlist={playlist} />
            )}
        </ul>
    );
}