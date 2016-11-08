import type { Action } from 'redux';

import { takeLatest, eventChannel, END } from 'redux-saga';
import { call, put, fork, take } from 'redux-saga/effects';

import { PlayerActions, PlaylistActions } from '../actions';
import { OngakuService } from '../utils';



function getTimeAtInterval(): Generator<any, any, any> {
    return eventChannel(function(emitter) {
        const iv = setInterval(() => {
            if (OngakuService.isPlaying()) {
                emitter(OngakuService.getTime());
            } else {
                emitter(END);
            }
        }, 500);

        return () => clearInterval(iv);
    });
}


function* autoSeek(action: Action): Generator<any, any, any> {
    const ongakuPlaybackInterval = yield call(getTimeAtInterval);

    while (true) {
        let time = yield take(ongakuPlaybackInterval);
        yield put(PlayerActions.forceSeek(time));
    }
}


function* playTrack(action: Action): Generator<any, any, any> {
    try {
        yield OngakuService.play();
        yield put(PlayerActions.playSuccess());
    } catch (error) {
        yield put(PlayerActions.playFailed());
    }
}

function* pauseTrack(action: Action) {
    try {
        yield OngakuService.pause();
        yield put(PlayerActions.pauseSuccess());
    } catch (error) {
        yield put(PlayerActions.pauseFailed());
    }
}

function* seekTrack(action: Action) {
    try {
        const seekTime = action.payload;
        yield OngakuService.seekPercentage(seekTime);
    } catch (error) {
        yield put(PlayerActions.pauseFailed());
    }
}

function* playFromPlaylistSaga(): Generator<any, any, any> {
  yield* takeLatest(PlaylistActions.PLAY_SONG_FROM_PLAYLIST_SUCCESS, playTrack);
}

function* playSaga(): Generator<any, any, any> {
  yield* takeLatest(PlayerActions.PLAY, playTrack);
}

function* pauseSaga(): Generator<any, any, any> {
  yield* takeLatest(PlayerActions.PAUSE, pauseTrack);
}

function* seekSaga(): Generator<any, any, any> {
  yield* takeLatest(PlayerActions.SEEK_TO, seekTrack);
}

function* autoSeekSaga1(): Generator<any, any, any> {
  yield* takeLatest(PlayerActions.PLAY_SUCCESS, autoSeek);
}

function* autoSeekSaga2(): Generator<any, any, any> {
  yield* takeLatest(PlaylistActions.PLAY_SONG_FROM_PLAYLIST_SUCCESS, autoSeek);
}

export default function* playerSagasRoot(): Generator<any, any, any> {
    yield (
        [ fork(playFromPlaylistSaga)
        , fork(playSaga)
        , fork(pauseSaga)
        , fork(seekSaga)
        , fork(autoSeekSaga1)
        , fork(autoSeekSaga2)
        ]
    );
}