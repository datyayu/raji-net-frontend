// @flow
import type { Action } from 'redux';
import type { SeriesModel } from '../models';

import { SeriesActions } from '../actions';


export type SeriesState = 
    { series: ?SeriesModel
    , isFetching: boolean
    , error: ?string
    }
;

const initialState: SeriesState = 
    { series: null
    , isFetching: false
    , error: null
    }
;

export function seriesReducer(state: SeriesState = initialState, action: Action): SeriesState {
    switch(action.type) {
        case SeriesActions.GET_SERIES:
            return (
                { ...state
                , series: null
                , isFetching: true
                , error: null
                }
            );


        case SeriesActions.SET_SERIES:
            return (
                { ...state
                , series: action.payload
                , isFetching: false
                }
            );


        case SeriesActions.FAILED_TO_GET_SERIES:
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