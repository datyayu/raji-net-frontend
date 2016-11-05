// @flow
import React from 'react';

import type { AlbumModel } from '../../models';
import defaultAlbum from '../../assets/images/default-album.png'


type PlayerCoverProps = {
    album: ?AlbumModel;
}


export function PlayerCover({ album }: PlayerCoverProps) {
    const albumImage = album ? album.image : defaultAlbum;
    const albumAlt = album ? album.name : 'No track selected';

    return (
        <div className="player-cover">
            <img className="player-cover-image" src={albumImage} alt={albumAlt} />
        </div>
    );
};
