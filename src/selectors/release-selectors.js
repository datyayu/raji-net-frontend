// @flow
import type { ApplicationState } from '../reducers';
import type { ReleaseType, TrackType } from '../types';


export class ReleaseSelectors {
    static getRelease(state: ApplicationState): ?ReleaseType {
        return state.release.release;
    }

    static getReleaseTracks(state: ApplicationState): ?TrackType[] {
        return state.release.release ? state.release.release.tracks : [];
    }

    static isFetching(state: ApplicationState): boolean {
        return state.release.isFetching;
    }

    static getError(state: ApplicationState): ?string {
        return state.release.error;
    }
}
