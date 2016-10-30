import React from 'react';

import { PlayerNavigation as PlayerNavigationComponent } from '../components';
import { PlayerNavigationContainer } from '../containers';


const PlayerNavigation = PlayerNavigationContainer(PlayerNavigationComponent);


export function PlayerPage() {
    return (
        <div className="player">
            <PlayerNavigation />
        </div>
    );
}
