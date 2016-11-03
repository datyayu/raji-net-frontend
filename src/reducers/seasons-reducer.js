// @flow
import type { Action } from 'redux';
import type { SeasonModel } from '../models';

import { SeasonsActions } from '../actions';


export type SeasonsState =
    { seasons: ?SeasonModel[]
    , isFetching: boolean
    , error: ?string
    }
;

const initialState: SeasonsState =
    { seasons: []
    , isFetching: false
    , error: null
    }
;


export function seasonsReducer(state: SeasonsState = initialState, action: Action): SeasonsState {
    switch(action.type) {
        case SeasonsActions.GET_SEASONS:
            return (
                { ...state
                , seasons: []
                , isFetching: true
                , error: null
                }
            );


        case SeasonsActions.SET_SEASONS:
            return (
                { ...state
                , seasons: action.payload
                , isFetching: false
                }
            );


        case SeasonsActions.FAILED_TO_GET_SEASONS:
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