// @flow
import type { Action } from 'redux';
import type { TrackType } from '../types';

import { PlaylistActions, RoutingActions, SidenavActions, PlayerActions } from '../actions';
import { shuffleArray } from '../utils';


export type PlaylistState =
    { showPlaylist: boolean
    , currentPlaylist: TrackType[]
    , currentSongIndex: number
    , playingSongIndex: number
    , loadingSong: number
    , isRandom: boolean
    , shuffledPlaylist: TrackType[]
    }
;

const initialState: PlaylistState =
    { showPlaylist: false
    , currentPlaylist: []
    , currentSongIndex: -1
    , loadingSong: -1
    , playingSongIndex: -1
    , isRandom: false
    , shuffledPlaylist: []
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
                , currentSongIndex: action.payload.songIndex
                , loadingSong: action.payload.songIndex
                , currentPlaylist: action.payload.tracks
                }
            );

        case PlaylistActions.PLAY_SONG_FROM_PLAYLIST_SUCCESS:
            return (
                { ...state
                , loadingSong: -1
                , playingSongIndex: state.currentSongIndex
                }
            );

        case PlaylistActions.PLAY_SONG_FROM_PLAYLIST_FAILED:
            return (
                { ...state
                , loadingSong: -1
                , playingSongIndex: state.currentSongIndex
                }
            );


        case PlayerActions.TOGGLE_RANDOM:
            const isRandom = !state.isRandom;
            const shuffledPlaylist = shuffleArray(state.currentPlaylist);


            const lastActivePlaylist = isRandom ? state.currentPlaylist : state.shuffledPlaylist;
            const currentActivePlaylist = isRandom ? shuffledPlaylist : state.currentPlaylist;

            const currentSongId = lastActivePlaylist[state.currentSongIndex].id;
            console.log(lastActivePlaylist[state.currentSongIndex].name)
            const newIndex = currentActivePlaylist.findIndex(track => track.id === currentSongId);

            return (
                { ...state
                , isRandom: isRandom
                , shuffledPlaylist: isRandom ? shuffledPlaylist : []
                , currentSongIndex: newIndex
                }
            );


        case PlayerActions.PLAY_NEXT:
            const nextIndex = state.currentSongIndex + 1;
            const canPlayNext = nextIndex < state.currentPlaylist.length;

            return (
                { ...state
                , currentSongIndex: canPlayNext ? nextIndex : 0
                }
            );


        case PlayerActions.PLAY_PREV:
            const prevIndex = state.currentSongIndex - 1;
            const canPlayPrev = prevIndex >= 0;
            const lastTrackIndex = state.currentPlaylist.length - 1;

            return (
                { ...state
                , currentSongIndex: canPlayPrev ? prevIndex : lastTrackIndex
                }
            );


        default:
            return state;
    }
}
