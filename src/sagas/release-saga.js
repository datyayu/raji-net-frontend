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
    , tracks: 
        [
            { id: 1
            , name: 'puengue #1'
            , artists: ['Iguchi Yuka']
            , album: 
                { id: 1
                , name: 'Hafa Adai'
                , artists: ['Iguchi Yuka']
                , image: sampleAlbum
                , year: 2015
                , singleType: "OP single"
                , plays: 32
                , length: 2
                }
            }
        ,   { id: 2
            , name: 'Rainbow Girl #2'
            , artists: ['Iguchi Yuka']
            , album: 
                { id: 1
                , name: 'Hafa Adai'
                , artists: ['Iguchi Yuka']
                , image: sampleAlbum
                , year: 2015
                , singleType: "OP single"
                , plays: 32
                , length: 2
                }
            }
        ,   { id: 3
            , name: 'Sketch Switch #3'
            , artists: ['Asumi Kana', 'Mizuhashi Kaori', 'Yuuko Goto', 'Ryoko Shintani']
            , album: 
                { id: 1
                , name: 'Hafa Adai'
                , artists: ['Iguchi Yuka']
                , image: sampleAlbum
                , year: 2015
                , singleType: "OP single"
                , plays: 32
                , length: 2
                }
            }
        ]
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