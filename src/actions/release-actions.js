// @flow
import type { Action } from 'redux';
import type { AlbumModel } from '../models';


export class ReleaseActions {
    static GET_RELEASE = '[Release] GET_RELEASE';
    static getRelease(releaseId: number): Action {
        return (
            { type: ReleaseActions.GET_RELEASE
            , payload: releaseId
            }
        );
    }

    static SET_RELEASE = '[Release] SET_RELEASE';
    static setRelease(release: AlbumModel): Action {
        return (
            { type: ReleaseActions.SET_RELEASE
            , payload: release
            }
        );
    }

    static FAILED_TO_GET_RELEASE = '[Release] FAILED_TO_GET_RELEASE';
    static failedToGetRelease(error: Error): Action {
        return (
            { type: ReleaseActions.FAILED_TO_GET_RELEASE
            , payload: error
            }
        );
    }
}