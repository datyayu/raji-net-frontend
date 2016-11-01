import React from 'react';

import { ReleaseCover } from './release-cover';
import { ReleaseInfo } from './release-info';


export function Release({ release }) {
    return (
        <div className="series-album">
            <ReleaseCover image={release.image} />
            <ReleaseInfo release={release} alt={release.name} />
        </div>
    );
}