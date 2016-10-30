import React from 'react';

import { Player as PlayerComponent } from '../components';
import { PlayerContainer } from '../containers';


const Player = PlayerContainer(PlayerComponent);


export function PlayerPage() {
    return (
        <div className="player">
            <Player />
        </div>
    );
}
