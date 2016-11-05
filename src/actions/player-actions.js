// @flow
import type { Action } from 'redux';


export class PlayerActions {
    static PLAY = '[Player] PLAY'; 
    static  play(): Action {
        return { type: PlayerActions.PLAY };
    }

    static PAUSE = '[Player] PAUSE'; 
    static pause(): Action {
        return { type: PlayerActions.PAUSE };
    }

    static PLAY_NEXT = '[Player] PLAY_NEXT';
    static playNext(): Action {
        return { type: PlayerActions.PLAY_NEXT };
    }    
    
    static PLAY_PREV = '[Player] PLAY_PREV';
    static playPrev(): Action {
        return { type: PlayerActions.PLAY_PREV };
    }

    static TOGGLE_RANDOM = '[Player] TOGGLE_RANDOM';
    static toggleRandom(): Action {
        return { type: PlayerActions.TOGGLE_RANDOM };
    }

    static SET_TOTAL_TIME = '[Player] SET_TOTAL_TIME';
    static setTotalTime(time: number): Action {
        return (
            { type: PlayerActions.SET_TOTAL_TIME 
            , payload: time
            }
        );
    }

    static SEEK_TO = '[Player] SEEK_TO';
    static seekTo(percentage: number): Action {
        return (
            { type: PlayerActions.SEEK_TO
            , payload: percentage
            }
        );
    }

    static SHOW_VOLUME_CONTROL = '[Player] SHOW_VOLUME_CONTROL';
    static showVolumeControl(): Action {
        return { type: PlayerActions.SHOW_VOLUME_CONTROL };
    }

    static HIDE_VOLUME_CONTROL = '[Player] HIDE_VOLUME_CONTROL';
    static hideVolumeControl(): Action {
        return { type: PlayerActions.HIDE_VOLUME_CONTROL };
    }

    static CHANGE_VOLUME = '[Player] CHANGE_VOLUME';
    static changeVolume(volumeLevel: number): Action {
        return (
            { type: PlayerActions.CHANGE_VOLUME
            , payload: volumeLevel 
            }
        );
    }
}