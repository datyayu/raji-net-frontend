// @flow
import type { Action } from 'redux';

import { PlaylistActions, RoutingActions, SidenavActions } from '../actions';


export type PlaylistState = 
    { showPlaylist: boolean
    }
;

const initialState: PlaylistState =
    { showPlaylist: false
    }
;

export function playlistReducer(state: PlaylistState = initialState, action: Action): PlaylistState {
    switch(action.type) {
        case PlaylistActions.SHOW_PLAYLIST_ON_MOBILE:
            return (
                { ...state
                , showPlaylist: true
                }
            );


        case PlaylistActions.CLOSE_PLAYLIST_ON_MOBILE:
        case SidenavActions.CLOSE_SIDENAV: // <-- dispatched on click on MobileOverlay
        case RoutingActions.NAVIGATE:
            return (
                { ...state
                , showPlaylist: false
                }
            );
            

        default:
            return state;
    }
}