// @flow
import type { Action } from 'redux';
import type { SeriesModel } from '../models';

import { SeriesListActions } from '../actions';


export type SeriesListState = 
    { seriesList: SeriesModel[]
    , filter: string
    , isFetching: boolean
    , error: ?string
    }
;

const initialState: SeriesListState = 
    { seriesList: []
    , filter: ''
    , isFetching: false
    , error: null
    }
;

export function seriesListReducer(state: SeriesListState = initialState, action: Action): SeriesListState {
    switch(action.type) {
        case SeriesListActions.GET_SERIES_LIST:
            return (
                { ...state
                , seriesList: []
                , isFetching: true
                , error: null
                }
            );


        case SeriesListActions.SET_SERIES_LIST:
            return (
                { ...state
                , seriesList: action.payload
                , isFetching: false
                }
            );


        case SeriesListActions.FAILED_TO_GET_SERIES_LIST:
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