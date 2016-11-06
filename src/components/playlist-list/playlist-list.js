// @flow
import type { PlaylistModel } from '../../models';

import React from 'react';

import { PlaylistListItem } from './playlist-list-item';
import { Preloader, ErrorMessage } from '../shared';


type PlaylistListProps = {
    playlistList: PlaylistModel[];
    isFetching: boolean;
    error: ?string;
}


export function PlaylistList({ playlistList=[], isFetching=false, error }: PlaylistListProps) {
    if (isFetching)
        return ( <Preloader /> );

    if (error)
        return <ErrorMessage text={error} />;

    return (
        <ul className="playlist-list">
            {playlistList.map((playlist, idx) => 
                <PlaylistListItem key={idx} playlist={playlist} />
            )}
        </ul>
    );
};
