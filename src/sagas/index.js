// @flow
import seriesListSaga from './series-list-saga';
import seriesIndividualSaga from './series-individual-saga';
import seasonsSaga from './seasons-saga';
import releaseSaga from './release-saga';
import playlistListSaga from './playlist-list-saga';
import playlistSaga from './playlist-saga';
import playerSagas from './player-sagas';


export const sagas =
    [ seasonsSaga
    , releaseSaga
    , seriesListSaga
    , seriesIndividualSaga
    , playlistListSaga
    , playlistSaga
    , playerSagas
    ]
;