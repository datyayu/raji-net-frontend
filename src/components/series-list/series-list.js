// @flow
import type { SeriesModel } from '../../models';

import React from 'react';

import { SeriesListItem } from './series-list-item';
import { Preloader } from '../shared';



type SeriesListProps = {
    seriesList: SeriesModel[];
    isFetching: boolean;
}


export function SeriesList({ seriesList=[], isFetching=false }: SeriesListProps) {
    if (isFetching)
        return ( <Preloader /> );

    return (
        <ul className="series-list">
            {seriesList.map((series, idx) =>
                <SeriesListItem key={idx} series={series} />
            )}
        </ul>
    );
};
