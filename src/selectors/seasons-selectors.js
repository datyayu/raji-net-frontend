// @flow
import type { ApplicationState } from '../reducers';
import type { SeasonType } from '../types';


export class SeasonsSelectors {
    static getSeasons(state: ApplicationState): ?SeasonType[] {
        return state.seasons.seasons;
    }

    static isFetching(state: ApplicationState): boolean {
        return state.seasons.isFetching;
    }

    static getError(state: ApplicationState): ?string {
        return state.seasons.error;
    }
}
