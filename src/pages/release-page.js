// @flow
import React from 'react';

import { ReleaseContainer, PlaylistContainer } from '../containers';
import { Release as ReleaseComponent, Playlist as PlaylistComponent } from '../components';


const Release = ReleaseContainer(ReleaseComponent, true);
const Playlist = PlaylistContainer(ReleaseContainer(PlaylistComponent));


export function ReleasePage() {
    return (
        <div>
            <Release />
            <Playlist />
        </div>
    );
}
