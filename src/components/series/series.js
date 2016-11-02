// @flow
import React from 'react';

import { SeriesReleaseList } from './series-release-list';
import type { SeriesModel, AlbumModel } from '../../models';


type SeriesProps = {
    series: SeriesModel;
    releases: AlbumModel[];
}


export function Series({ series, releases }: SeriesProps) {
    return (
        <div className="series-individual">
            <img className="series-individual-image" src={series.image} alt={series.name} />
            <SeriesReleaseList releaseList={releases} />
        </div>
    );
};
