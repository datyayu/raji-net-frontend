// @flow
import type { Action } from 'redux';


export class PlaylistActions {
    static SHOW_PLAYLIST_ON_MOBILE = '[Playlist] SHOW_PLAYLIST_ON_MOBILE'; 
    static  showPlaylistOnMobile(): Action {
        return { type: PlaylistActions.SHOW_PLAYLIST_ON_MOBILE };
    }

    static CLOSE_PLAYLIST_ON_MOBILE = '[Playlist] CLOSE_PLAYLIST_ON_MOBILE'; 
    static closePlaylistOnMobile(): Action {
        return { type: PlaylistActions.CLOSE_PLAYLIST_ON_MOBILE };
    }
}