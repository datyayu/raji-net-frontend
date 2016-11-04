import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { ReleaseActions } from '../actions';
import sampleAlbum from '../assets/images/sample-album.jpg';


const mockRelease =
    { id: 1
    , name: 'hello world'
    , image: sampleAlbum
    , artists: ['Iguchi Yuka']
    , singleType: 'OP Single'
    , length: 12
    , plays: 323
    , year: 2015
    }
;

function mockApiCall() {
    return Promise.resolve(mockRelease);
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