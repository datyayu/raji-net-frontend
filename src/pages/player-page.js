// @flow
import React from 'react';
import { compose } from 'redux';

import { PlayerContainer, PlaylistContainer } from '../containers';
import { Player as PlayerComponent, Playlist as PlaylistComponent } from '../components';


const CombinedContainer = compose(
    PlayerContainer,
    PlaylistContainer,
);

const Player = CombinedContainer(PlayerComponent);
const Playlist = PlaylistContainer(PlaylistComponent);


export function PlayerPage() {
    return (
        <div className="player">
            <Player />
            <Playlist />
        </div>
    );
}
