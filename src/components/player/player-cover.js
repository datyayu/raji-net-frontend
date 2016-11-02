// @flow
import React from 'react';

import type { AlbumModel } from '../../models';


type PlayerCoverProps = {
    album: AlbumModel;
}


export function PlayerCover({ album }: PlayerCoverProps) {
    return (
        <div className="player-cover">
            <a className="player-cover-link" href="#">
                <img className="player-cover-image" src={album.image} alt={album.name} />
            </a>
        </div>
    );
};
