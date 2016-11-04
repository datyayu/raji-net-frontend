// @flow
import React from 'react';

import { Release as ReleaseComponent, Playlist as PlaylistComponent } from '../components';
import { ReleaseContainer, PlaylistContainer } from '../containers';



const Release = ReleaseContainer(ReleaseComponent);
const Playlist = PlaylistContainer(ReleaseContainer(PlaylistComponent));


export function ReleasePage() {
    return (
        <div>
            <Release />
            <Playlist />
        </div>
    );
}