// @flow
import SeriesListSaga from './series-list-saga';
import SeriesIndividualSaga from './series-individual-saga';
import SeasonsSaga from './seasons-saga';


export const sagas = 
    [ SeasonsSaga
    , SeriesListSaga
    , SeriesIndividualSaga
    ]
;