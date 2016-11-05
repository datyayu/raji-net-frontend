// @flow
import React, { Component } from 'react';


type PlayerSeekBarProps = {
    currentTime: string;
    totalTime: string;
    progress: number;
    onClick: Function;
}


export class PlayerSeekBar extends Component {
    seekContainer: ?HTMLElement;
    refHandler: (ref: HTMLElement) => void;
    mapEventToOnClickAction: (event: any) => void;


    constructor(props: PlayerSeekBarProps) {
        super(props);

        this.seekContainer = null;

        this.mapEventToOnClickAction = this.mapEventToOnClickAction.bind(this);
        this.refHandler = this.refHandler.bind(this);
    }


    mapEventToOnClickAction(event: any) {
        if (!this.seekContainer) return;

        const totalWidth = this.seekContainer.clientWidth;
        const clickPosition = event.pageX - (event.target: HTMLElement).offsetLeft;
        const seekPercentage = (clickPosition / totalWidth) * 100;
        console.log(totalWidth, clickPosition, seekPercentage);

        this.props.onClick(seekPercentage);
    }

    refHandler(ref: HTMLElement) {
        this.seekContainer = ref;
    }


    render() {
        const { currentTime='0:00', totalTime='Loading...', progress=0 } = this.props;

        return (
            <div className="player-seek-bar">
                <div className="player-seek-bar-total-bar"
                     ref={this.refHandler} 
                     onClick={this.mapEventToOnClickAction}>
                    <div className="player-seek-bar-current-bar" style={{width: `${progress}%`}} />
                </div>

                <div className="player-seek-bar-time">
                    <div className="player-seek-bar-time-text"> {currentTime} </div>
                    <div className="player-seek-bar-time-text"> {totalTime} </div>
                </div>
            </div>
        );
    }
}

