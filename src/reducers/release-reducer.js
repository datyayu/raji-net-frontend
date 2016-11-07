// @flow
import type { Action } from 'redux';
import type { ReleaseType } from '../types';

import { ReleaseActions } from '../actions';


export type ReleaseState =
    { release: ?ReleaseType
    , isFetching: boolean
    , error: ?string
    }
;

const initialState: ReleaseState =
    { release: null
    , isFetching: false
    , error: null
    }
;


export function releaseReducer(state: ReleaseState = initialState, action: Action): ReleaseState {
    switch(action.type) {
        case ReleaseActions.GET_RELEASE:
            return (
                { ...state
                , release: null
                , isFetching: true
                , error: null
                }
            );


        case ReleaseActions.SET_RELEASE:
            return (
                { ...state
                , release: action.payload
                , isFetching: false
                }
            );


        case ReleaseActions.FAILED_TO_GET_RELEASE:
            return (
                { ...state
                , isFetching: false
                , error: action.payload
                }
            );


        default:
            return state;
    }
}
