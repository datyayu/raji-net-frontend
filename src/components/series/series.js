// @flow
import type { SeriesModel } from '../../models';

import React from 'react';

import { SeriesReleaseList } from './series-release-list';
import { Preloader, ErrorMessage } from '../shared';


type SeriesProps = {
    series: SeriesModel;
    isFetching: boolean;
    error: ?string;
}


export function Series({ series, isFetching=false, error }: SeriesProps) {
    if (isFetching)
        return ( <Preloader /> );

    if (error)
        return <ErrorMessage text={error} />;

    if (!series)
        return null;

    return (
        <div className="series-individual">
            <img className="series-individual-image" src={series.image} alt={series.name} />
            <SeriesReleaseList releaseList={series && series.albums} />
        </div>
    );
};
