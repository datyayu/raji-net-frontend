// @flow
import type { Action } from 'redux';
import type { TrackType } from '../types';

import { takeLatest, eventChannel } from 'redux-saga';
import { call, put, select, fork, take } from 'redux-saga/effects';

import { PlaylistSelectors, PlayerSelectors } from '../selectors';
import { PlaylistActions, PlayerActions } from '../actions';
import { OngakuService } from '../utils';

/**
 * TYPES
 */
type ActionPayload =
    { tracks: TrackType[]
    , songIndex: number
    }
;


/**
 * Event channels
 */
function onSongEndedChannel(): Generator<any, any, any> {
    return eventChannel(function(emitter) {
        OngakuService.setOnEndCallback(() => {
            emitter(1)
        });
        return () => {};
    });
}


/**
 * Helpers
 */
function playAudioViaOngaku(songToPlay: TrackType) {
    const fileUrl = songToPlay.url;

    return OngakuService.playAudio(fileUrl);
}


/**
 * Sagas handler
 */
function* playTrack(action: Action) {
    try {
        const { tracks, songIndex }: ActionPayload = action.payload;
        const songToPlay = tracks[songIndex];

        const songPlaying = yield select(PlaylistSelectors.getPlayingTrack);
        const isPlaying = yield select(PlayerSelectors.isPlaying);

        if (songToPlay && songPlaying && songToPlay.id === songPlaying.id && isPlaying) {
            yield put(PlayerActions.pause());
        } else {
            const duration = yield call(playAudioViaOngaku, songToPlay);
            yield put(PlaylistActions.playSongFromPlaylistSuccess(duration || 0));
        }
    } catch (error) {
        yield put(PlaylistActions.playSongFromPlaylistFailed(error));
    }
}

function* playNextOnSongEnded(action: Action): Generator<any, any, any> {
    const songEndedChannel = yield call(onSongEndedChannel);

    while (true) {
        const _ = yield take(songEndedChannel);
        yield put(PlayerActions.playNext());
    }
}


/**
 * Sagas
 */

function* playlistListSaga(): Generator<any, any, any> {
  yield* takeLatest(PlaylistActions.PLAY_SONG_FROM_PLAYLIST, playTrack);
}

function* playlistNextSongSaga(): Generator<any, any, any> {
  yield* takeLatest(PlaylistActions.PLAY_SONG_FROM_PLAYLIST, playNextOnSongEnded);
}

/**
 * Root saga
 */
export default function* playlistSagasRoot(): Generator<any, any, any> {
    yield (
        [ fork(playlistListSaga)
        , fork(playlistNextSongSaga)
        ]
    );
}