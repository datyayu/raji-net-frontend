import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { SeasonsActions } from '../actions';
import sampleSeasonImage from '../assets/images/sample-season.jpg';


const mockSeasonList = 
    [   { id: 1, name: 'fall 2016', image: sampleSeasonImage }
    ,   { id: 2, name: 'fall 2016', image: sampleSeasonImage }
    ,   { id: 3, name: 'fall 2016', image: sampleSeasonImage }
    ,   { id: 4, name: 'fall 2016', image: sampleSeasonImage }
    ,   { id: 5, name: 'fall 2016', image: sampleSeasonImage }
    ,   { id: 6, name: 'fall 2016', image: sampleSeasonImage }
    ]
;

function mockApiCall() {
    return Promise.resolve(mockSeasonList);
}


function* fetchSeasonList(action) {
   try {
      const seasonList = yield call(mockApiCall);
      yield put(SeasonsActions.setSeasons(seasonList));
   } catch (error) {
      yield put(SeasonsActions.failedToGetSeasons(error));
   }
}


export default function* SeasonListSaga() {
  yield* takeLatest(SeasonsActions.GET_SEASONS, fetchSeasonList);
}