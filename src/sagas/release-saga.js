import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { ReleaseActions } from '../actions';
import { RELEASES_ENDPOINT } from '../configs';


function* apiCall(id) {
    const request = yield fetch(`${RELEASES_ENDPOINT}/${id}`);
    const release = yield request.json();
    return release;
}


function* fetchRelease(action) {
   try {
      const release = yield call(apiCall, action.payload);
      yield put(ReleaseActions.setRelease(release));
   } catch (error) {
      yield put(ReleaseActions.failedToGetRelease(error));
   }
}


export default function* releaseSaga() {
  yield* takeLatest(ReleaseActions.GET_RELEASE, fetchRelease);
}