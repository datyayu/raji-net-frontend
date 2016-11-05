// @flow
import type { PlaylistModel } from '../../models';

import React from 'react';

import { PlaylistListItem } from './playlist-list-item';
import { Preloader } from '../shared';


type PlaylistListProps = {
    playlistList: PlaylistModel[];
    isFetching: boolean
}


export function PlaylistList({ playlistList=[], isFetching=false }: PlaylistListProps) {
    if (isFetching)
        return ( <Preloader /> );

    return (
        <ul className="playlist-list">
            {playlistList.map((playlist, idx) => 
                <PlaylistListItem key={idx} playlist={playlist} />
            )}
        </ul>
    );
};
