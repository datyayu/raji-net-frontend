// @flow
import type { Action } from 'redux';
import type { SeriesModel } from '../models';


export class SeriesActions {
    static GET_SERIES = '[Series] GET_SERIES';
    static getSeries(seriesId: number): Action {
        return (
            { type: SeriesActions.GET_SERIES
            , payload: seriesId
            }
        );
    }

    static SET_SERIES = '[Series] SET_SERIES';
    static setSeries(series: SeriesModel): Action {
        return (
            { type: SeriesActions.SET_SERIES
            , payload: series
            }
        );
    }

    static FAILED_TO_GET_SERIES = '[Series] FAILED_TO_GET_SERIES';
    static failedToGetSeries(error: Error): Action {
        return (
            { type: SeriesActions.FAILED_TO_GET_SERIES
            , payload: error
            }
        );
    }
}