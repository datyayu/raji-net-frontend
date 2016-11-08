// @flow
import type { Action } from 'redux';
import type { TrackType } from '../types';

import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

import { PlaylistSelectors, PlayerSelectors } from '../selectors';
import { PlaylistActions, PlayerActions } from '../actions';
import { OngakuService } from '../utils';


type ActionPayload =
    { tracks: TrackType[]
    , songIndex: number
    }
;

function playAudioViaOngaku(songToPlay: TrackType) {
    const fileUrl = songToPlay.url;

    return OngakuService.playAudio(fileUrl);
}


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


export default function* playlistListSaga(): Generator<any, any, any> {
  yield* takeLatest(PlaylistActions.PLAY_SONG_FROM_PLAYLIST, playTrack);
}