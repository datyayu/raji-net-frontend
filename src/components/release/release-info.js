// @flow
import React from 'react';

import type { AlbumModel } from '../../models';


type ReleaseInfoProps = {
    release: AlbumModel;
}


export function ReleaseInfo({ release }: ReleaseInfoProps) {
    return (
        <div className="series-album-info">
            <h2 className="series-album-info-title"> {release.name} </h2>
            <h4 className="series-album-info-text"> {release.length} tracks </h4>
            <h4 className="series-album-info-text"> by {release.artists.join(', ')} </h4>
            <h4 className="series-album-info-text"> {release.year} </h4>
        </div>
    );
};
