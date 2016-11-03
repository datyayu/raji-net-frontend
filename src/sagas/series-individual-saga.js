import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { SeriesActions } from '../actions';

import seriesDefaultImage from '../assets/images/sample-series.jpg';
import albumDefaultImage from '../assets/images/sample-album.jpg';


const mockRelease =
    { id: 1
    , name: 'hello world'
    , image: albumDefaultImage
    , artists: ['Iguchi Yuka']
    , singleType: 'OP Single'
    , length: 2
    , plays: 33233
    , year: 2015
    }
;

const mockSeries =
    { id: 3
    , name: 'Dungeon de deai ni motomeru machigaiteru darou ka?'
    , image: seriesDefaultImage
    , albums:  
        [ mockRelease
        , mockRelease
        , mockRelease
        ]
    }
;


function mockApiCall() {
    return Promise.resolve(mockSeries);
}


function* fetchSeries(action) {
   try {
      const series = yield call(mockApiCall, action.payload);
      yield put(SeriesActions.setSeries(series));
   } catch (error) {
      yield put(SeriesActions.failedToGetSeries(error));
   }
}


export default function* seriesSaga() {
  yield* takeLatest(SeriesActions.GET_SERIES, fetchSeries);
}