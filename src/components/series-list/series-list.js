import React from 'react';

import { SeriesListItem } from './series-list-item'


export function SeriesList({ seriesList=[] }) {
    return (
        <ul className="series-list">
            {seriesList.map((series, idx) =>
                <SeriesListItem key={idx} series={series} />
            )}
        </ul>
    );
}