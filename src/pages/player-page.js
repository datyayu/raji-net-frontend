import React from 'react';
import { compose } from 'redux';

import { Player as PlayerComponent } from '../components';
import { PlayerContainer, PlaylistContainer } from '../containers';


const combinedContainer = compose(
    PlayerContainer, 
    PlaylistContainer,
);

const Player = combinedContainer(PlayerComponent);


export function PlayerPage() {
    return (
        <div className="player">
            <Player />
        </div>
    );
}
