// @flow
import type { Action } from 'redux';
import type { PlaylistType } from '../types';


export class PlaylistListActions {
    static GET_PLAYLIST_LIST = '[Playlist List] GET_PLAYLIST_LIST';
    static getPlaylistList(): Action {
        return (
            { type: PlaylistListActions.GET_PLAYLIST_LIST 
            }
        );
    }

    static SET_PLAYLIST_LIST = '[Playlist List] SET_PLAYLIST_LIST';
    static setPlaylistList(playlistList: PlaylistType[]): Action {
        return (
            { type: PlaylistListActions.SET_PLAYLIST_LIST
            , payload: playlistList
            }
        );
    }

    static FAILED_TO_GET_PLAYLIST_LIST = '[Playlist List] FAILED_TO_GET_PLAYLIST_LIST';
    static failedToGetPlaylistList(error: Error): Action {
        return (
            { type: PlaylistListActions.FAILED_TO_GET_PLAYLIST_LIST
            , payload: error
            }
        );
    }
}
