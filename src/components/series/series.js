import React from 'react';

import { SeriesReleaseList } from './series-release-list';


export function Series({ series, releases }) {
    return (
        <div className="series-individual">
            <img className="series-individual-image" src={series.image} alt={series.name} />
            <SeriesReleaseList releaseList={releases} />
        </div>
    );
}
