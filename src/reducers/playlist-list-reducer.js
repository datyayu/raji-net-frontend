// @flow
import type { Action } from 'redux';
import type { PlaylistType } from '../types';

import { PlaylistListActions } from '../actions';


export type PlaylistListState =
    { playlistList: PlaylistType[]
    , isFetching: boolean
    , error: ?string
    }
;

const initialState: PlaylistListState =
    { playlistList: []
    , isFetching: false
    , error: null
    }
;


export function playlistListReducer(state: PlaylistListState = initialState, action: Action): PlaylistListState {
    switch(action.type) {
        case PlaylistListActions.GET_PLAYLIST_LIST:
            return (
                { ...state
                , playlistList: []
                , isFetching: true
                , error: null
                }
            );


        case PlaylistListActions.SET_PLAYLIST_LIST:
            return (
                { ...state
                , playlistList: action.payload
                , isFetching: false
                }
            );


        case PlaylistListActions.FAILED_TO_GET_PLAYLIST_LIST:
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
