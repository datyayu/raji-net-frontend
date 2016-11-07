// @flow
import type { ReleaseType } from '../../types';

import React from 'react';
import { Link } from 'react-router';


type SeriesReleaseItemProps =
    { release: ReleaseType
    }
;


export function SeriesReleaseItem(
    { release
    }
    : SeriesReleaseItemProps
) {
    return (
        <li className="series-release-item">
            <Link className="series-release-item-link" to={`/releases/${release.id}`}>
                <img className="series-release-cover" src={release.image} alt={release.name} />
                <h4 className="series-release-type"> {release.singleType} </h4>
            </Link>
        </li>
    );
}
