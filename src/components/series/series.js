// @flow
import React from 'react';

import { SeriesReleaseList } from './series-release-list';
import type { SeriesModel } from '../../models';


type SeriesProps = {
    series: SeriesModel;
}


export function Series({ series }: SeriesProps) {
    if (!series)
        return null;

    return (
        <div className="series-individual">
            <img className="series-individual-image" src={series.image} alt={series.name} />
            <SeriesReleaseList releaseList={series && series.albums} />
        </div>
    );
};
