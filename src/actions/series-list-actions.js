// @flow
import type { SeriesModel } from '../models';
import type { Action } from 'redux';


export class SeriesListActions {
    static GET_SERIES_LIST = '[Series List] GET_SERIES_LIST';
    static getSeriesList(): Action {
        return { type: SeriesListActions.GET_SERIES_LIST };
    }

    static SET_SERIES_LIST = '[Series List] SET_SERIES_LIST';
    static setSeriesList(seriesList: SeriesModel[]): Action {
        return (
            { type: SeriesListActions.SET_SERIES_LIST
            , payload: seriesList
            }
        );
    }

    static FAILED_TO_GET_SERIES_LIST = '[Series List] FAILED_TO_GET_SERIES_LIST';
    static failedToGetSeriesList(error: Error): Action {
        return (
            { type: SeriesListActions.FAILED_TO_GET_SERIES_LIST
            , payload: error
            }
        );
    }
}