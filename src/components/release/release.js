// @flow
import React from 'react';

import { ReleaseCover } from './release-cover';
import { ReleaseInfo } from './release-info';

import type { AlbumModel } from '../../models';


type ReleaseProps = {
    release: AlbumModel;
}


export function Release({ release }: ReleaseProps) {
    return (
        <div className="series-album">
            <ReleaseCover image={release.image} alt={release.name} />
            <ReleaseInfo release={release} alt={release.name} />
        </div>
    );
};
