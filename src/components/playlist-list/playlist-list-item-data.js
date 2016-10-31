import React from 'react';


export function PlaylistListItemData({ playlist }) {
    return (
        <div className="playlist-list-item-data">
            <img className="playlist-list-item-image" src={playlist.image} alt={playlist.name} />

            <div className="playlist-list-item-info">
                <h2 className="playlist-list-item-title">{playlist.name}</h2>
                <p className="playlist-list-item-text">by {playlist.author}</p>
                <p className="playlist-list-item-text">{playlist.length} tracks</p>
                <p className="playlist-list-item-text">{playlist.plays} plays</p>
            </div>
        </div>
    );
}