// @flow
import type { Action } from 'redux';
import type { LocationModel } from '../models';

import { RoutingActions } from '../actions';
import { createBrowserHistory } from 'history';


const history =
    createBrowserHistory();

const pagesWithPlaylist: string[] = 
    [ '/player'
    , '/releases'
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
    , pageTitle: string
    , action: string
    , location: LocationModel
    }
;

const initialState: RoutingState =
    { hasPlaylist: false
    , pageTitle: pageTitles[history.location.pathname] || 'raji'
    , location: history.location
    , action: history.action
    }
;

 
export function routingReducer(state: RoutingState = initialState, action: Action): RoutingState {
    switch (action.type) {
        case RoutingActions.NAVIGATE:
            const location: LocationModel = action.payload.location;
            const pageTitle: string = pageTitles[location.pathname] || 'raji';

            return (
                { ...state
                , action: action.payload.action
                , location: location
                , hasPlaylist: pagesWithPlaylist.some(page => location.pathname.startsWith(page))
                , pageTitle: pageTitle
                }
            );


        default:
            return state;
    }
}