// @flow
import type { ApplicationState } from '../reducers';
import type { SeasonModel } from '../models';


export class SeasonListSelectors {
    static getSeasons(state: ApplicationState): ?SeasonModel[] {
        return state.seasons.seasons;
    }

    static isFetching(state: ApplicationState): boolean {
        return state.seasons.isFetching;
    }
}