// @flow
import type { ApplicationState } from '../reducers';
import type { SeriesType } from '../types';


export class SeriesSelectors {
    static getSeries(state: ApplicationState): ?SeriesType {
        return state.series.series;
    }

    static isFetching(state: ApplicationState): boolean {
        return state.series.isFetching;
    }

    static getError(state: ApplicationState): ?string {
        return state.series.error;
    }
}
