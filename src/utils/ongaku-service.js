// @flow
import Ongaku from 'ongaku';


const ongaku = new Ongaku();

export function setOnEndCallback(cb: Function) {
    ongaku._callbacks.onPlaybackEnd = cb;
}


export function playAudio(fileUrl: string, onEndedCb: Function = ()=>{}): Promise<number> {
    return new Promise((resolve) => {
        ongaku._callbacks.onPlaybackStart = function() {
            ongaku._callbacks.onPlaybackStart = undefined;
            resolve(ongaku._buffer.duration);
        };

        ongaku.playAudio(fileUrl);
    });
}

export function play(): Promise<void> {
    return new Promise((resolve) => {
        ongaku._callbacks.onPlaybackStart = function() {
            ongaku._callbacks.onPlaybackStart = undefined;
            resolve();
        };

        ongaku.play();
    });
}

export function pause(): Promise<void> {
    return new Promise((resolve) => {
        ongaku._callbacks.onPlaybackPause = function() {
            ongaku._callbacks.onPlaybackPause = undefined;
            resolve();
        };

        ongaku.pause();
    });
}

export function seek(seekTime: number): Promise<number> {
    return new Promise((resolve) => {
        ongaku._callbacks.onPlaybackSeek = function(time) {
            ongaku._callbacks.onPlaybackSeek = undefined;
            resolve(time);
        };

        ongaku.seek(seekTime);
    });
}

export function seekPercentage(percentage: number): Promise<number> {
    return new Promise((resolve) => {
        ongaku._callbacks.onPlaybackSeek = function(time: number) {
            ongaku._callbacks.onPlaybackSeek = undefined;
            resolve(time);
        };

        ongaku.seekPercentage(percentage);
    });
}

export function setVolume(): Promise<number> {
    return new Promise((resolve) => {
        ongaku._callbacks.onVolumeChange = function(newLevel) {
            ongaku._callbacks.onVolumeChange = undefined;
            resolve(newLevel);
        };

        ongaku.pause();
    });
}

export function mute(): Promise<void> {
    return new Promise((resolve) => {
        ongaku.mute();
        resolve();
    });
}

export function unmute(): Promise<void> {
    return new Promise((resolve) => {
        ongaku.mute();
        resolve();
    });
}

export function getTime(): number {
    return ongaku.getPlaybackTime();
}


export function isPlaying(): boolean {
    return ongaku.isPlaying();
}

export function getTrackDuration(): number {
    return ongaku.getCurrentBufferDuration();
}

// TODO: REMOVE ON PROD
window.ongaku = ongaku;
