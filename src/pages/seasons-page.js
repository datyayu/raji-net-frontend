// @flow
import React from 'react';

import { SeasonsContainer } from '../containers';
import { SeasonList as SeasonListComponent } from '../components';


const SeasonList = SeasonsContainer(SeasonListComponent);


export function SeasonsPage() {
    return (
        <div className="seasons-container">
            <SeasonList />
        </div>
    );
}
