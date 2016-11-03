// @flow
import type { SeriesModel } from '../models';
import type { ApplicationState } from '../reducers';


export class SeriesIndividualSelectors {
    static getSeries(state: ApplicationState): ?SeriesModel {
        return state.series.series;
    }

    static isFetching(state: ApplicationState): boolean {
        return state.series.isFetching;
    }
}