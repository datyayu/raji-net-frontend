// @flow
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Icon } from '../shared';


type PlayerVolumeControlProps =
    { volume: number
    , isShowing?: boolean
    , onVolumeChange: Function
    , onHide: Function
    }
;

export class PlayerVolumeControl extends Component {
    props: PlayerVolumeControlProps;
    sliderContainer: ?HTMLElement;

    handleClick: (evt: Event) => void;
    refHandler: (ref: HTMLElement) => void;
    mapEventToOnClickAction: (evt: Event) => void;

    static defaultProps =
        { volume: 0
        , isShowing: true
        }
    ;

    constructor(_props: PlayerVolumeControlProps) {
        super(_props);

        this.sliderContainer = null;

        this.handleClick = this.handleClick.bind(this);
        this.refHandler = this.refHandler.bind(this);
        this.mapEventToOnClickAction = this.mapEventToOnClickAction.bind(this);
    }


    // Only listen for click outside when is showing.
    componentWillReceiveProps(props: PlayerVolumeControlProps) {
        if (props.isShowing) {
            document.addEventListener('click', this.handleClick, false);
        } else {
            document.removeEventListener('click', this.handleClick, false);
        }
    }


    // Only hide if the click was outside the volume control component.
    handleClick(evt: Event) {
        const clickWasOnComponent = findDOMNode(this).contains(evt.target);

        if (!clickWasOnComponent) {
            this.props.onHide();
        }
    }


    // Save ref instance.
    refHandler(ref: HTMLElement) {
        this.sliderContainer = ref;
    }

    // transform a click event to a action dispatch with the position of the slider that was clicked.
    mapEventToOnClickAction(event: any) {
        if (!this.sliderContainer) return;

        const totalWidth = this.sliderContainer.clientWidth;
        const clickPosition = event.pageX - (event.target: HTMLElement).getBoundingClientRect().left;
        const slidePercentage = Math.round((clickPosition / totalWidth) * 100); // Only use integers

        this.props.onVolumeChange(slidePercentage);
    }


    render() {
        const { isShowing, volume, onVolumeChange } = this.props;
        const activeClass = isShowing ? 'is-active' : '';
        const widthStyle = {width: `${volume}%`};

        const volumeStepDown = volume < 10 ? 0 : volume - 10;
        const volumeStepUp = volume > 90 ? 100 : volume + 10;

        return (
            <div className={`player-volume-control ${activeClass}`}>
                <Icon
                    type="volume-down"
                    className="player-volume-control-icon"
                    onClick={onVolumeChange.bind(null, volumeStepDown)}
                />

                <div className="player-volume-control-seek">
                    <div
                        className="player-volume-control-seek-total"
                        ref={this.refHandler}
                        onClick={this.mapEventToOnClickAction}
                    >
                        <div className="player-volume-control-seek-current" style={widthStyle} />
                    </div>
                </div>

                <Icon
                    type="volume-up"
                    className="player-volume-control-icon"
                    onClick={onVolumeChange.bind(null, volumeStepUp)}
                />
            </div>
        );
    }
}