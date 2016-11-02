// @flow
export class PlayerSelectors {
    static isPlaying(): boolean {
        return true;
    }

    static isMuted(): boolean {
        return true;
    }

    static isRandom(): boolean {
        return true;
    }

    static isVolumeControlOpen(): boolean {
        return true;
    }

    static getVolumeLevel(): number {
        return 40;
    }

    static getCurrentPlayingTime(): string {
        return '1:02';
    }

    static getTotalPlayingTime(): string {
        return '3:02';
    }

    static getCurrentPlayingProgress(): number {
        return 60;
    }
}