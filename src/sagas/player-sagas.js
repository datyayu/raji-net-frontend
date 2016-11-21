import type { Action } from 'redux';
import type { TrackType } from '../types';

import { takeLatest, eventChannel, END } from 'redux-saga';
import { call, put, fork, take, select } from 'redux-saga/effects';

import { PlayerActions, PlaylistActions } from '../actions';
import { PlaylistSelectors } from '../selectors';
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


/**
 * Saga handlers
 */

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
        yield put(PlayerActions.playFailed(error));
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

function* playCurrentSong(action: Action) {
    try {
        const currentPlayingSong: TrackType = yield select(PlaylistSelectors.getCurrentTrack);

        yield OngakuService.playAudio(currentPlayingSong.url);
        yield put(PlayerActions.playSuccess());
    } catch (error) {
        yield put(PlayerActions.playFailed(error));
    }
}

function* changeVolume(action: Action) {
    try {

       const volume = yield OngakuService.setVolume(action.payload);
        yield put(PlayerActions.changeVolumeSuccess(volume));
    } catch (error) {
        yield put(PlayerActions.changeVolumeFailed(error));
    }
}

/**
 * Sagas
 */

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

function * playNextSaga(): Generator<any, any, any> {
    yield* takeLatest(PlayerActions.PLAY_NEXT, playCurrentSong)
}
function * playPrevSaga(): Generator<any, any, any> {
    yield* takeLatest(PlayerActions.PLAY_PREV, playCurrentSong)
}

function* autoSeekSaga2(): Generator<any, any, any> {
    yield* takeLatest(PlaylistActions.PLAY_SONG_FROM_PLAYLIST_SUCCESS, autoSeek);
}

function* changeVolumeSaga(): Generator<any, any, any> {
    yield* takeLatest(PlayerActions.CHANGE_VOLUME, changeVolume);
}

/**
 * ROOT SAGA
 */
export default function* playerSagasRoot(): Generator<any, any, any> {
    yield (
        [ fork(playFromPlaylistSaga)
        , fork(playSaga)
        , fork(pauseSaga)
        , fork(seekSaga)
        , fork(autoSeekSaga1)
        , fork(autoSeekSaga2)
        , fork(playNextSaga)
        , fork(playPrevSaga)
        , fork(changeVolumeSaga)
        ]
    );
}