// @flow
import type { AlbumModel } from '../../models';

import React from 'react';

import { ReleaseCover } from './release-cover';
import { ReleaseInfo } from './release-info';

import { Preloader, ErrorMessage } from '../shared';


type ReleaseProps = {
    release: ?AlbumModel;
    isFetching: boolean;
    error: ?string;
}


export function Release({ release, isFetching=false, error }: ReleaseProps) {
    if (isFetching)
        return ( <Preloader /> );

    if (error)
        return <ErrorMessage text={error} />;

    if (!release)
        return ( null );

    return (
        <div className="series-album">
            <ReleaseCover image={release.image} alt={release.name} />
            <ReleaseInfo release={release} alt={release.name} />
        </div>
    );
};
