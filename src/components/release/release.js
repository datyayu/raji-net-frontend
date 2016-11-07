// @flow
import type { ReleaseType } from '../../types';

import React from 'react';

import { Preloader, ErrorMessage } from '../shared';
import { ReleaseCover } from './release-cover';
import { ReleaseInfo } from './release-info';


type ReleaseProps =
    { release: ?ReleaseType
    , isFetching: boolean
    , error: ?string
    }
;


export function Release(
    { release
    , isFetching=false
    , error
    }
    : ReleaseProps
) {
    if (isFetching)
        return <Preloader />;

    if (error)
        return <ErrorMessage text={error} />;

    if (!release)
        return ( null );

    return (
        <div className="release">
            <ReleaseCover image={release.image} alt={release.name} />
            <ReleaseInfo release={release} alt={release.name} />
        </div>
    );
}
