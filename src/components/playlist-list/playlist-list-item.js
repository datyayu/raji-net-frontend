import React from 'react';

import { PlaylistListItemData } from './playlist-list-item-data';
import { PlaylistListItemTop } from './playlist-list-item-top';


export function PlaylistListItem({ playlist }) {
    return (
        <a className="playlist-list-item" href="#">
            <PlaylistListItemData playlist={playlist} />
            <PlaylistListItemTop top={playlist.top} />
        </a>
    );
}

