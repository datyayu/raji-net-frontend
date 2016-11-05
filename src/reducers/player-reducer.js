// @flow
import type { Action } from 'redux';

import { PlayerActions } from '../actions';


export type PlayerState = 
    { isPlaying: boolean
    , isRandom: boolean
    , progress: number
    , totalTime: number
    , volumeLevel: number
    , showVolumeControls: boolean
    }
;

const initialState: PlayerState =
    { isPlaying: false
    , isRandom: false
    , progress: 0
    , totalTime: 0
    , volumeLevel: 100
    , showVolumeControls: false
    }
;


export function playerReducer(state: PlayerState = initialState, action: Action): PlayerState {
    switch(action.type) {
        case PlayerActions.PLAY:
            return (
                { ...state
                , isPlaying: true
                }
            );


        case PlayerActions.PAUSE:
            return (
                { ...state
                , isPlaying: false
                }
            );


        case PlayerActions.TOGGLE_RANDOM:
            return (
                { ...state
                , isRandom: !state.isRandom
                }
            );

        
        case PlayerActions.SET_TOTAL_TIME:
            return (
                { ...state
                , totalTime: action.payload
                }
            );


        case PlayerActions.SEEK_TO:
            return (
                { ...state
                , progress: state.totalTime * (action.payload / 100)
                }
            );


        case PlayerActions.SHOW_VOLUME_CONTROL:
            return (
                { ...state
                , showVolumeControls: true
                }
            );


        case PlayerActions.HIDE_VOLUME_CONTROL:
            return (
                { ...state
                , showVolumeControls: false
                }
            );


        case PlayerActions.CHANGE_VOLUME:
            return (
                { ...state
                , volumeLevel: action.payload
                }
            );


        default:
            return state;
    }
}