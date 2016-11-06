// @flow
import type { AlbumModel, TrackModel } from '../models';
import type { ApplicationState } from '../reducers';


export class ReleaseSelectors {
    static getRelease(state: ApplicationState): ?AlbumModel {
        return state.release.release;
    }

    static getReleaseTracks(state: ApplicationState): ?TrackModel[] {
        return state.release.release ? state.release.release.tracks : [];
    }

    static isFetching(state: ApplicationState): boolean {
        return state.release.isFetching;
    }

    static getError(state: ApplicationState): ?string {
        return state.release.error;
    }
}