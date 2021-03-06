// @flow
import type { Action } from 'redux';
import type { LocationType } from '../types';

import { createBrowserHistory } from 'history';

import * as Actions from '../actions';


const history =
    createBrowserHistory();


const pagesWithPlaylist: string[] =
    [ '/player'
    , '/releases'
    ]
;

const pagesWithSearch: string[] =
    [ '/playlists'
    , '/series'
    ]
;

const pageTitles =
    { '/': 'raji'
    , '/player': 'now playing'
    , '/series': 'series list'
    , '/seasons': 'seasons'
    , '/playlists': 'playlists'
    }
;


export type RoutingState =
    { hasPlaylist: boolean
    , hasSearch: boolean
    , pageTitle: string
    , action: string
    , location: LocationType
    }
;

const initialState: RoutingState =
    { hasPlaylist: pagesWithPlaylist.some(page => history.location.pathname.toLowerCase().startsWith(page))
    , hasSearch: pagesWithSearch.some(page => page === history.location.pathname.toLowerCase())
    , pageTitle: pageTitles[history.location.pathname] || 'raji'
    , action: history.action
    , location: history.location
    }
;


export function routingReducer(state: RoutingState = initialState, action: Action): RoutingState {
    switch (action.type) {
        case Actions.RoutingActions.NAVIGATE:
            const location = action.payload.location;
            const currentPath = location.pathname.toLowerCase();
            const pageTitle = pageTitles[currentPath];

            return (
                { ...state
                , hasPlaylist: pagesWithPlaylist.some(page => currentPath.startsWith(page))
                , hasSearch: pagesWithSearch.some(page => page === currentPath)
                , pageTitle: pageTitle
                , location: location
                , action: action.payload.action
                }
            );


        case Actions.SeriesActions.SET_SERIES:
        case Actions.ReleaseActions.SET_RELEASE:
            return (
                { ...state
                , pageTitle: action.payload.name
                }
            );


        default:
            return state;
    }
}
