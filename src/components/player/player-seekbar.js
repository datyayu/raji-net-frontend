// @flow
import React from 'react';


type PlayerSeekBarProps = {
    currentTime: string;
    totalTime: string;
    progress: number;
    onClick: Function;
}

function mapEventToSeekPercentage(cb: Function) {
    return function(event: any) {
        const totalWidth = (event.target: HTMLElement).clientWidth;
        const clickPosition = event.pageX - (event.target: HTMLElement).offsetLeft;
        const seekPercentage = (clickPosition / totalWidth) * 100;

        cb(seekPercentage);
    }
}


export function PlayerSeekBar({ 
    currentTime='0:00', 
    totalTime='Loading...', 
    progress=0,
    onClick=()=>{}
}: PlayerSeekBarProps) {
    return (
        <div className="player-seek-bar">
            <div className="player-seek-bar-total-bar" onClick={mapEventToSeekPercentage(onClick)}>
                <div className="player-seek-bar-current-bar" style={{width: `${progress}%`}} />
            </div>

            <div className="player-seek-bar-time">
                <div className="player-seek-bar-time-text"> {currentTime} </div>
                <div className="player-seek-bar-time-text"> {totalTime} </div>
            </div>
        </div>
    );
};
