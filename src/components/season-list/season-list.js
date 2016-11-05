// @flow
import React from 'react';

import { SeasonListItem } from './season-list-item';
import type { SeasonModel } from '../../models';
import { Preloader } from '../shared';


type SeasonListProps = {
    seasonList: SeasonModel[];
    isFetching: boolean;
}


export function SeasonList({ seasonList=[], isFetching=false }: SeasonListProps) {
    if (isFetching)
        return ( <Preloader /> );


    return (
        <div className="season-list">
            { seasonList.map((season, idx) =>
                <SeasonListItem key={idx} season={season} />
            )}
        </div>
    );
};
