// @flow
import type { ReleaseType } from '../../types';

import React from 'react';

import { SeriesReleaseItem } from './series-release-item';


type SeriesReleaseListProps =
    { releaseList: ReleaseType[]
    }
;


export function SeriesReleaseList(
    { releaseList=[]
    }
    : SeriesReleaseListProps
) {
    return (
        <div className="series-releases">
            <h4 className="series-releases-title"> Releases </h4>

            <ul className="series-releases-list">
                { releaseList.map((release, idx) =>
                    <SeriesReleaseItem key={idx} release={release} />
                ) }
            </ul>
        </div>
    );
}
