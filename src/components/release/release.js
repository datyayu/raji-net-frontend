// @flow
import type { AlbumModel } from '../../models';

import React from 'react';

import { ReleaseCover } from './release-cover';
import { ReleaseInfo } from './release-info';

import { Preloader } from '../shared';


type ReleaseProps = {
    release: ?AlbumModel;
    isFetching: boolean;
}


export function Release({ release, isFetching=false }: ReleaseProps) {
    if (isFetching)
        return ( <Preloader /> );

    if (!release)
        return ( null );

    return (
        <div className="series-album">
            <ReleaseCover image={release.image} alt={release.name} />
            <ReleaseInfo release={release} alt={release.name} />
        </div>
    );
};
