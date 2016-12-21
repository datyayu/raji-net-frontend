import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { SeriesActions } from '../actions';
import { SERIES_ENDPOINT } from '../configs';

function* apiCall(id) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = { method: 'GET', headers };

    const request = yield fetch(`${SERIES_ENDPOINT}/${id}`, options);
    const seriesList = yield request.json();
    return seriesList;
}


function* fetchSeries(action) {
   try {
      const series = yield call(apiCall, action.payload);
      yield put(SeriesActions.setSeries(series));
   } catch (error) {
      yield put(SeriesActions.failedToGetSeries(error));
   }
}


export default function* seriesSaga() {
  yield* takeLatest(SeriesActions.GET_SERIES, fetchSeries);
}
