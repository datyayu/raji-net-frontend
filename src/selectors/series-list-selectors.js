// @flow
import type { SeriesModel } from '../models';
import type { ApplicationState } from '../reducers';


export class SeriesListSelectors {
    static getSeriesList(state: ApplicationState): SeriesModel[] {
        return state.seriesList.seriesList;
    }

    static isFeching(state: ApplicationState): boolean {
        return state.seriesList.isFetching;
    }
}