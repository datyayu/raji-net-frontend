import React from 'react';

import { Release as ReleaseComponent, Playlist as PlaylistComponent } from '../components';
import { ReleaseContainer, PlaylistContainer } from '../containers';



const Release = ReleaseContainer(ReleaseComponent);
const Playlist = PlaylistContainer(PlaylistComponent);


export function ReleasePage() {
    return (
        <div className="playlist-list-container">
            <Release />
            <Playlist />
        </div>
    );
}