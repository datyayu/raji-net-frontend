// @flow
import type { SeriesType } from '../../types';

import React from 'react';

import { Preloader, ErrorMessage } from '../shared';
import { SeriesListItem } from './series-list-item';


type SeriesListProps =
    { seriesList: SeriesType[]
    , isFetching: boolean
    , error: ?string
    }
;


export function SeriesList(
    { seriesList=[]
    , isFetching=false
    , error
    }
    : SeriesListProps
) {
    if (isFetching)
        return <Preloader />;

    if (error)
        return <ErrorMessage text={error} />;

    return (
        <ul className="series-list">
            {seriesList.map((series, idx) =>
                <SeriesListItem key={idx} series={series} />
            )}
        </ul>
    );
}
