import React from 'react';
import { Link } from 'react-router';

import { PlaylistListItemData } from './playlist-list-item-data';
import { PlaylistListItemTop } from './playlist-list-item-top';


export function PlaylistListItem({ playlist }) {
    return (
        <Link className="playlist-list-item" to={`/releases/${playlist.id}`}>
            <PlaylistListItemData playlist={playlist} />
            <PlaylistListItemTop top={playlist.top} />
        </Link>
    );
}

