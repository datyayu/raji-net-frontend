// @flow
import React from 'react';
import { Link } from 'react-router';

import { PlaylistListItemData } from './playlist-list-item-data';
import { PlaylistListItemTop } from './playlist-list-item-top';

import type { PlaylistModel } from '../../models';


type PlaylistListItemProps = {
    playlist: PlaylistModel;
}


export function PlaylistListItem({ playlist }: PlaylistListItemProps) {
    return (
        <Link className="playlist-list-item" to={`/releases/${playlist.id}`}>
            <PlaylistListItemData playlist={playlist} />
            <PlaylistListItemTop top={playlist.top} tracks={playlist.tracks} />
        </Link>
    );
};
