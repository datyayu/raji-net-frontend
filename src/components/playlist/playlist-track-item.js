import React from 'react';

import { Icon } from '../shared';


export function PlaylistTrackItem({ track, isPlaying=false }) {
    const iconType = isPlaying ? 'pause' : 'play';
    const activeClass = isPlaying ? 'is-active' : '';

    return (
        <li className={`playlist-song ${activeClass}`}>
            <img className="playlist-song-cover" src={track.album.image} alt={track.album.name} />
        
            <div className="playlist-song-info">
                <span className="playlist-song-info-text">{track.name}</span>
                <span className="playlist-song-info-text">{track.artists.join(',')}</span>
            </div>

            <div className="playlist-song-icons">
                <Icon type={iconType} className="playlist-song-icon" />
            </div>
        </li>
    );
}