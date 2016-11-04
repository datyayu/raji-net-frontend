import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { PlaylistListActions } from '../actions';
import sampleAlbum from '../assets/images/sample-album.jpg';


const mockPlaylist: PlaylistModel =
    { id: 1
    , name: 'Gochiusa soundtrack'
    , image: sampleAlbum
    , author: '@datyayu'
    , length: 24
    , plays: 2456
    , top: [1,2,3]
    , year: 2015
    , tracks:
        [
            { id: 1
            , name: 'puengue'
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
            , name: 'Rainbow Girl'
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
            , name: 'Sketch Switch'
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
    return Promise.resolve([
        mockPlaylist,
        mockPlaylist,
        mockPlaylist,
        mockPlaylist,
        mockPlaylist,
        mockPlaylist,
        mockPlaylist,
        mockPlaylist,
    ]);
}


function* fetchPlaylistList(action) {
   try {
      const playlistList = yield call(mockApiCall);
      yield put(PlaylistListActions.setPlaylistList(playlistList));
   } catch (error) {
      yield put(PlaylistListActions.failedToGetPlaylistList(error));
   }
}


export default function* playlistListSaga() {
  yield* takeLatest(PlaylistListActions.GET_PLAYLIST_LIST, fetchPlaylistList);
}