// @flow
import type { PlaylistType } from '../../types';

import React from 'react';

import { Preloader, ErrorMessage } from '../shared';
import { PlaylistListItem } from './playlist-list-item';


type PlaylistListProps =
    { playlistList: PlaylistType[]
    , isFetching: boolean
    , error: ?string
    }
;


export function PlaylistList(
    { playlistList=[]
    , isFetching=false
    , error
    }
    : PlaylistListProps
) {
    if (isFetching)
        return <Preloader />;

    if (error)
        return <ErrorMessage text={error} />;

    return (
        <ul className="playlist-list">
            {playlistList.map((playlist, idx) =>
                <PlaylistListItem key={idx} playlist={playlist} />
            )}
        </ul>
    );
}
