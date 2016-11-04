// @flow
import type { PlaylistModel } from '../models';
import type { ApplicationState } from '../reducers';


export class PlaylistListSelectors {
    static getPlaylistList(state: ApplicationState): ?PlaylistModel[] {
        return state.playlistList.playlistList;
    }

    static isFetching(state: ApplicationState): boolean {
        return state.playlistList.isFetching;
    }
}