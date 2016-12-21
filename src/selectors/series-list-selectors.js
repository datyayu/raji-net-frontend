// @flow
import type { ApplicationState } from '../reducers';
import type { SeriesType } from '../types';


export class SeriesListSelectors {
    static getSeriesList(state: ApplicationState): SeriesType[] {
        const searchValue = state.search.searchValue.toLowerCase();
        return state.seriesList.seriesList
            .filter(series => series.name.toLowerCase().includes(searchValue));
    }

    static isFetching(state: ApplicationState): boolean {
        return state.seriesList.isFetching;
    }

    static getError(state: ApplicationState): ?string {
        return state.seriesList.error;
    }
}
