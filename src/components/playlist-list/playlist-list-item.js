// @flow
import type { PlaylistType } from '../../types';

import React from 'react';
import { Link } from 'react-router';

import { PlaylistListItemData } from './playlist-list-item-data';
import { PlaylistListItemTop } from './playlist-list-item-top';


type PlaylistListItemProps =
    { playlist: PlaylistType
    }
;


export function PlaylistListItem(
    { playlist
    }
    : PlaylistListItemProps
) {
    return (
        <Link className="playlist-list-item" to={`/releases/${playlist.id}`}>
            <PlaylistListItemData playlist={playlist} />
            <PlaylistListItemTop top={playlist.top} tracks={playlist.tracks} />
        </Link>
    );
}
