import React from 'react';


export function PlayerNavigationItem({ track, isPrev=false, isNext=false }) {
    const title = track.name;
    const artists = track.artists.join(', ');

    return (
        <div className="player-navigation-item">
            { isPrev &&
                <i className="player-navigation-icon fa fa-angle-left" />
            }

            <div className="player-navigation-info">
                <p className="player-navigation-text">{title}</p>
                <p className="player-navigation-text">{artists}</p>
            </div>

            { isNext &&
                <i className="player-navigation-icon fa fa-angle-right" />
            }
        </div>
    );
};