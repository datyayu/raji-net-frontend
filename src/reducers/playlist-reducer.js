// @flow
import type { Action } from 'redux';
import type { TrackModel } from '../models';

import { PlaylistActions, RoutingActions, SidenavActions } from '../actions';


export type PlaylistState = 
    { showPlaylist: boolean
    , currentPlaylist: TrackModel[]
    , currentSongIndex: number
    }
;

const initialState: PlaylistState =
    { showPlaylist: false
    , currentPlaylist: []
    , currentSongIndex: 0
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


        case PlaylistActions.PLAY_SONG_FROM_PLAYLIST:
            return (
                { ...state
                , currentPlaylist: action.payload.tracks
                , currentSongIndex: action.payload.songIndex
                }
            );
            

        default:
            return state;
    }
}