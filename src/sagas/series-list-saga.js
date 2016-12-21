import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { SeriesListActions } from '../actions';


function* apiCall() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = { method: 'GET', headers };

    const request = yield fetch('/api/series', options);
    const seriesList = yield request.json();
    return seriesList;
}


function* fetchSeriesList(action) {
   try {
      const seriesList = yield call(apiCall);
      yield put(SeriesListActions.setSeriesList(seriesList));
   } catch (error) {
      yield put(SeriesListActions.failedToGetSeriesList(error));
   }
}


export default function* seriesListSaga() {
  yield* takeLatest(SeriesListActions.GET_SERIES_LIST, fetchSeriesList);
}