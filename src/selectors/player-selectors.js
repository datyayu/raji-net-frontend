// @flow
import type { ApplicationState } from '../reducers';
import { msToTimeString } from '../utils';


export class PlayerSelectors {
    static isPlaying(state: ApplicationState): boolean {
        return state.player.isPlaying;
    }

    static isMuted(state: ApplicationState): boolean {
        return state.player.volumeLevel === 0;
    }

    static isRandom(state: ApplicationState): boolean {
        return state.player.isRandom;
    }

    static isVolumeControlOpen(state: ApplicationState): boolean {
        return state.player.showVolumeControls;
    }

    static getVolumeLevel(state: ApplicationState): number {
        return state.player.volumeLevel;
    }

    static getCurrentPlayingTime(state: ApplicationState): string {
        const currentTime = state.player.progress;
        return msToTimeString(currentTime);
    }

    static getTotalPlayingTime(state: ApplicationState): string {
        const totalTime = state.player.totalTime;
        return msToTimeString(totalTime);
    }

    static getCurrentPlayingProgress(state: ApplicationState): number {
        const totalTime = state.player.totalTime;
        const currentTime = state.player.progress;

        return (currentTime/totalTime)*100;
    }
}