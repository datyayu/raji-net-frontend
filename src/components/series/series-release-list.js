import React from 'react';

import { SeriesReleaseItem } from './series-release-item';


export function SeriesReleaseList({ releaseList=[] }) {
    return (
        <div className="series-individual-releases">
            <h4 className="series-individual-releases-title"> Releases </h4>

            <ul className="series-individual-releases-list">
                { releaseList.map((release, idx) =>
                    <SeriesReleaseItem key={idx} release={release} />
                ) }
            </ul>
        </div>
    );
}