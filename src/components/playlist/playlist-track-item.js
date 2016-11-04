// @flow
import React from 'react';

import { Icon } from '../shared';
import type { TrackModel } from '../../models';


type PlaylistTrackItemProps = {
    track: TrackModel;
    isPlaying: boolean;
    onClick: (ev: Event)=> any;
}


export function PlaylistTrackItem({ 
    track, 
    isPlaying=false,
    onClick=()=>{},
}: PlaylistTrackItemProps) {
    const iconType: string = isPlaying ? 'pause' : 'play';
    const activeClass: string = isPlaying ? 'is-active' : '';

    return (
        <li className={`playlist-song ${activeClass}`} onClick={onClick}>
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
};
