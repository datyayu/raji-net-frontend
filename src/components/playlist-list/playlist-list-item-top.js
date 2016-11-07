// @flow
import React from 'react';

import type { TrackType } from '../../types';


type PlaylistListItemTopProps =
    { tracks: TrackType[]
    , top: number[]
    }
;


export function PlaylistListItemTop(
    { tracks=[]
    , top=[]
    }
    : PlaylistListItemTopProps
) {
    return (
        <div className="playlist-list-item-top">
            <h3 className="playlist-list-item-top-title"> Top 3 </h3>

            <div className="playlist-list-item-top-list">
                { top.slice(0, 3)
                    .map(id => tracks.find(track => track.id === id))
                    .map((track, idx) =>
                        track &&
                            <p key={idx} className="playlist-list-item-text"> {track.name} </p>
                    )
                }
            </div>
        </div>
    );
}
