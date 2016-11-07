// @flow
import type { ApplicationState } from '../reducers';
import type { TrackType } from '../types';


export class PlaylistSelectors {
    static showMobilePlaylist(state: ApplicationState): boolean {
        return state.playlist.showPlaylist;
    }

    static getCurrentPlaylist(state: ApplicationState): TrackType[] {
        return state.playlist.currentPlaylist;
    }

    static getPrevTrack(state: ApplicationState): TrackType {
        const currentIndex = state.playlist.currentSongIndex;
        return state.playlist.currentPlaylist[currentIndex - 1];
    }

    static getCurrentTrack(state: ApplicationState): TrackType {
        const currentIndex = state.playlist.currentSongIndex;
        return state.playlist.currentPlaylist[currentIndex];
    }

    static getNextTrack(state: ApplicationState): TrackType {
        const currentIndex = state.playlist.currentSongIndex;
        return state.playlist.currentPlaylist[currentIndex + 1];
    }
}
