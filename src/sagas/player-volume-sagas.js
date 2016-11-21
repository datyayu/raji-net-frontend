import type { Action } from 'redux';

import { takeLatest } from 'redux-saga';
import { call, put, fork, take, select } from 'redux-saga/effects';

import { PlayerActions, PlaylistActions } from '../actions';
import { PlaylistSelectors } from '../selectors';
import { OngakuService } from '../utils';


function closeListenerChannel(): Generator<any, any, any> {
    return eventChannel(function(emitter) {
        function closeVolumeControl() {
            emitter(PlayerActions.hideVolumeControl();
        }

        function preventClose(evt: Event) {
            evt.preventDefault();
            evt.stopPropagation();
        }

        document.body.addEventListener('click', closeVolumeControl, false);
        document.querySelector('.player-volume-control').addEventListener('click', preventClose, false);


        return () => {
            document.body.removeEventListener('click', closeVolumeControl, false);
            document.querySelector('.player-volume-control').removeEventListener('click', preventClose, false);
        });
    });
}


/**
 * Saga handlers
 */

function* playCurrentSong(action: Action) {
    try {
        const currentPlayingSong: TrackType = yield select(PlaylistSelectors.getCurrentTrack);
        yield OngakuService.playAudio(currentPlayingSong.url);
        yield put(PlayerActions.playSuccess());
    } catch (error) {
        yield put(PlayerActions.playFailed(error));
    }
}

/**
 * Sagas
 */

function* addCloseVolumeControlListener(): Generator<any, any, any> {
  yield* takeLatest(PlaylistActions.PLAY_SONG_FROM_PLAYLIST_SUCCESS, addCloseListener);
}

/**
 * ROOT SAGA
 */
export default function* playerSagasRoot(): Generator<any, any, any> {
    yield (
        [ fork(addCloseVolumeControlListener)
        ]
    );
}