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
        <li className={`playlist-track ${activeClass}`} onClick={onClick}>
            <img className="playlist-track-cover" src={track.album.image} alt={track.album.name} />
        
            <div className="playlist-track-info">
                <span className="playlist-track-info-text">{track.name}</span>
                <span className="playlist-track-info-text">{track.artists.join(',')}</span>
            </div>

            <div className="playlist-track-icons">
                <Icon type={iconType} className="playlist-track-icon" />
            </div>
        </li>
    );
};
