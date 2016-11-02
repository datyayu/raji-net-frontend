// @flow
import React from 'react';

import { PlaylistListItem } from './playlist-list-item';
import type { PlaylistModel } from '../../models';


type PlaylistListProps = {
    playlistList: PlaylistModel[];
}


export function PlaylistList({ playlistList=[] }: PlaylistListProps) {
    return (
        <ul className="playlist-list">
            {playlistList.map((playlist, idx) => 
                <PlaylistListItem key={idx} playlist={playlist} />
            )}
        </ul>
    );
};
