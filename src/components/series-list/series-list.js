// @flow
import React from 'react';

import { SeriesListItem } from './series-list-item'
import type { SeriesModel } from '../../models';


type SeriesListProps = {
    seriesList: SeriesModel[];
}


export function SeriesList({ seriesList=[] }: SeriesListProps) {
    return (
        <ul className="series-list">
            {seriesList.map((series, idx) =>
                <SeriesListItem key={idx} series={series} />
            )}
        </ul>
    );
};
