import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { ReleaseActions } from '../actions';


function* mockApiCall(id) {
    const request = yield fetch(`/api/releases/${id}`);
    const release = yield request.json();
    return release;
}


function* fetchRelease(action) {
   try {
      const release = yield call(mockApiCall, action.payload);
      yield put(ReleaseActions.setRelease(release));
   } catch (error) {
      yield put(ReleaseActions.failedToGetRelease(error));
   }
}


export default function* releaseSaga() {
  yield* takeLatest(ReleaseActions.GET_RELEASE, fetchRelease);
}