// @flow
import type { Action } from 'redux';
import type { TrackType } from '../types';


export class PlaylistActions {
    static SHOW_PLAYLIST_ON_MOBILE = '[Playlist] SHOW_PLAYLIST_ON_MOBILE';
    static showPlaylistOnMobile(): Action {
        return (
            { type: PlaylistActions.SHOW_PLAYLIST_ON_MOBILE
            }
        );
    }

    static CLOSE_PLAYLIST_ON_MOBILE = '[Playlist] CLOSE_PLAYLIST_ON_MOBILE';
    static closePlaylistOnMobile(): Action {
        return (
            { type: PlaylistActions.CLOSE_PLAYLIST_ON_MOBILE
            }
        );
    }

    static PLAY_SONG_FROM_PLAYLIST = '[Playlist] PLAY_SONG_FROM_PLAYLIST';
    static playSongFromPlaylist(tracks: TrackType[], index: number): Action {
        return (
            { type: PlaylistActions.PLAY_SONG_FROM_PLAYLIST
            , payload:
                { tracks: tracks
                , songIndex: index
                }
            }
        );
    }

    static PLAY_SONG_FROM_PLAYLIST_SUCCESS = '[Playlist] PLAY_SONG_FROM_PLAYLIST_SUCCESS';
    static playSongFromPlaylistSuccess(currentTrackDuration: number): Action {
        return (
            { type: PlaylistActions.PLAY_SONG_FROM_PLAYLIST_SUCCESS
            , payload: currentTrackDuration
            }
        );
    }

    static PLAY_SONG_FROM_PLAYLIST_FAILED = '[Playlist] PLAY_SONG_FROM_PLAYLIST_FAILED';
    static playSongFromPlaylistFailed(error: string): Action {
        return (
            { type: PlaylistActions.PLAY_SONG_FROM_PLAYLIST_FAILED
            , error: error
            }
        );
    }
}
