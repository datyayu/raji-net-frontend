// @flow
import type { Action } from 'redux';

import { RoutingActions, SearchActions } from '../actions';


export type SearchState =
    { searchValue: string
    , showOnMobile: boolean
    }
;

const initialState: SearchState =
    { searchValue: ''
    , showOnMobile: false
    }
;


export function searchReducer(state: SearchState = initialState, action: Action): SearchState {
    switch(action.type) {
        case RoutingActions.NAVIGATE:
            return (
                {...state
                , searchValue: ''
                , showOnMobile: false
                }
            );


        case SearchActions.SET_SEARCH_VALUE:
            return (
                { ...state
                , searchValue: action.payload
                }
            );


        case SearchActions.SHOW_MOBILE_SEARCH:
            return (
                { ...state
                , showOnMobile: true
                }
            );


        case SearchActions.HIDE_MOBILE_SEARCH:
            return (
                { ...state
                , showOnMobile: false
                }
            );


        default:
            return state;
    }
}
