import React from 'react';


export function PlaylistListItemTop({ top=[] }) {
    return (
        <div className="playlist-list-item-top">
            <h3 className="playlist-list-item-top-title"> Top 3 </h3>

            <div className="playlist-list-item-top-list">
                { top.slice(0, 3).map((track, idx) =>
                    <p key={idx} className="playlist-list-item-text"> {track.name} </p>
                ) }
            </div>
        </div>
    );
}