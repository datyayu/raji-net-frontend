// @flow
import type { ApplicationState } from '../reducers';
import type { SeriesType } from '../types';


export class SeriesListSelectors {
    static getSeriesList(state: ApplicationState): SeriesType[] {
        return state.seriesList.seriesList;
    }

    static isFetching(state: ApplicationState): boolean {
        return state.seriesList.isFetching;
    }

    static getError(state: ApplicationState): ?string {
        return state.seriesList.error;
    }
}
