// @flow
import type { Action } from 'redux';
import type { SeasonModel } from '../models';


export class SeasonsActions {
    static GET_SEASONS = '[Seasons] GET_SEASONS';
    static getSeasons(seasonId: number): Action {
        return (
            { type: SeasonsActions.GET_SEASONS
            , payload: seasonId
            }
        );
    }

    static SET_SEASONS = '[Seasons] SET_SEASONS';
    static setSeasons(seasons: SeasonModel[]): Action {
        return (
            { type: SeasonsActions.SET_SEASONS
            , payload: seasons
            }
        );
    }

    static FAILED_TO_GET_SEASONS = '[Seasons] FAILED_TO_GET_SEASONS';
    static failedToGetSeasons(error: Error): Action {
        return (
            { type: SeasonsActions.FAILED_TO_GET_SEASONS
            , payload: error
            }
        );
    }
}