import React from 'react';



export function PlayerCover({ album }) {
    return (
        <div className="player-cover">
            <a className="player-cover-link" href="#">
                <img className="player-cover-image" src={album.image} alt={album.name} />
            </a>
        </div>
    );
};