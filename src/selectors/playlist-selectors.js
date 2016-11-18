// @flow
import type { ApplicationState } from '../reducers';
import type { TrackType } from '../types';


export class PlaylistSelectors {
    static showMobilePlaylist(state: ApplicationState): boolean {
        return state.playlist.showPlaylist;
    }

    static getCurrentPlaylist(state: ApplicationState): TrackType[] {
        if (state.playlist.isRandom)
            return state.playlist.shuffledPlaylist;

        return state.playlist.currentPlaylist;
    }

    static getPrevTrack(state: ApplicationState): TrackType {
        const currentIndex = state.playlist.currentSongIndex;

        if (state.playlist.isRandom)
            return state.playlist.shuffledPlaylist[currentIndex - 1];

        return state.playlist.currentPlaylist[currentIndex - 1];
    }

    static getCurrentTrack(state: ApplicationState): ?TrackType {
        const currentIndex = state.playlist.currentSongIndex;

        if (state.playlist.isRandom)
            return state.playlist.shuffledPlaylist[currentIndex];

        return state.playlist.currentPlaylist[currentIndex];
    }


    static getPlayingTrack(state: ApplicationState): ?TrackType {
        const currentIndex = state.playlist.playingSongIndex;

        if (state.playlist.isRandom)
            return state.playlist.shuffledPlaylist[currentIndex];

        return state.playlist.currentPlaylist[currentIndex];
    }

    static getNextTrack(state: ApplicationState): TrackType {
        const currentIndex = state.playlist.currentSongIndex;

        if (state.playlist.isRandom)
            return state.playlist.shuffledPlaylist[currentIndex + 1];

        return state.playlist.currentPlaylist[currentIndex + 1];
    }

    static getLoadingSong(state: ApplicationState): TrackType {
        const currentLoadingIndex = state.playlist.loadingSong;
        return state.playlist.currentPlaylist[currentLoadingIndex];
    }
}
