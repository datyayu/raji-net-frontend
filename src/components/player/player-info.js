import React from 'react';


export function PlayerInfo({ track }) {
    return (
        <div className="player-info">
            <span className="player-info-title"> {track.name} </span>
            <a className="player-info-text" href="#"> {track.artists.join(', ')} </a>
            <a className="player-info-text" href="#"> {track.album.name} </a>
        </div>
    );
}