// @flow
import type { TrackModel } from '../models';
import type { ApplicationState } from '../reducers';


export class PlaylistSelectors {

    static showMobilePlaylist(state: ApplicationState): boolean {
        return state.playlist.showPlaylist;
    }

    static getCurrentPlaylist(state: ApplicationState): TrackModel[] {
        return state.playlist.currentPlaylist;
    }

    static getPrevTrack(state: ApplicationState): TrackModel {
        const currentIndex = state.playlist.currentSongIndex;
        return state.playlist.currentPlaylist[currentIndex - 1];
    }

    static getCurrentTrack(state: ApplicationState): TrackModel {
        const currentIndex = state.playlist.currentSongIndex;
        return state.playlist.currentPlaylist[currentIndex];
    }

    static getNextTrack(state: ApplicationState): TrackModel {
        const currentIndex = state.playlist.currentSongIndex;
        return state.playlist.currentPlaylist[currentIndex + 1];
    }
}