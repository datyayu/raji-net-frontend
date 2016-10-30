import React from 'react';


export function PlayerSeekBar({ 
    currentTime='0:00', 
    totalTime='Loading...', 
    progress=0,
}) {
    return (
        <div className="player-seek-bar">
            <div className="player-seek-bar-total-bar">
                <div className="player-seek-bar-current-bar" style={{width: `${progress}%`}} />
            </div>

            <div className="player-seek-bar-time">
                <div className="player-seek-bar-time-text"> 0:22 </div>
                <div className="player-seek-bar-time-text"> 13:58 </div>
            </div>
        </div>
    );
}