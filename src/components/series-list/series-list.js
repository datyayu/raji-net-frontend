// @flow
import type { SeriesModel } from '../../models';

import React from 'react';

import { SeriesListItem } from './series-list-item';
import { Preloader, ErrorMessage } from '../shared';



type SeriesListProps = {
    seriesList: SeriesModel[];
    isFetching: boolean;
    error: ?string;
}


export function SeriesList({ seriesList=[], isFetching=false, error }: SeriesListProps) {
    if (isFetching)
        return ( <Preloader /> );

    if (error)
        return <ErrorMessage text={error} />;

    return (
        <ul className="series-list">
            {seriesList.map((series, idx) =>
                <SeriesListItem key={idx} series={series} />
            )}
        </ul>
    );
};
