// @flow
import type { ApplicationState } from '../reducers';
import type { PlaylistType } from '../types';


export class PlaylistListSelectors {
    static getPlaylistList(state: ApplicationState): ?PlaylistType[] {
        return state.playlistList.playlistList;
    }

    static isFetching(state: ApplicationState): boolean {
        return state.playlistList.isFetching;
    }

    static getError(state: ApplicationState): ?string {
        return state.playlistList.error;
    }
}
