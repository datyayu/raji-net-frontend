// @flow
import type { SeriesModel } from '../../models';

import React from 'react';

import { SeriesReleaseList } from './series-release-list';
import { Preloader } from '../shared';


type SeriesProps = {
    series: SeriesModel;
    isFetching: boolean;
}


export function Series({ series, isFetching=false }: SeriesProps) {
    if (isFetching)
        return ( <Preloader /> );


    if (!series)
        return null;

    return (
        <div className="series-individual">
            <img className="series-individual-image" src={series.image} alt={series.name} />
            <SeriesReleaseList releaseList={series && series.albums} />
        </div>
    );
};
