// @flow
import React from 'react';

import { SeasonList as SeasonListComponent } from '../components';
import { SeasonListContainer } from '../containers';


const SeasonList = SeasonListContainer(SeasonListComponent);


export function SeasonListPage() {
    return (
        <div className="season-list-container">
            <SeasonList />
        </div>
    );
}