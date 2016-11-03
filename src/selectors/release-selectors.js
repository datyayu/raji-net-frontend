// @flow
import type { AlbumModel } from '../models';
import type { ApplicationState } from '../reducers';


export class ReleaseSelectors {
    static getRelease(state: ApplicationState): ?AlbumModel {
        return state.release.release;
    }

    static isFetching(state: ApplicationState): boolean {
        return state.release.isFetching;
    }
}