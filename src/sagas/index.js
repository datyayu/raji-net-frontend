// @flow
import seriesListSaga from './series-list-saga';
import seriesIndividualSaga from './series-individual-saga';
import seasonsSaga from './seasons-saga';
import releaseSaga from './release-saga';


export const sagas = 
    [ seasonsSaga
    , releaseSaga
    , seriesListSaga
    , seriesIndividualSaga
    ]
;