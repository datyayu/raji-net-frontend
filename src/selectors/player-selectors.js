export class PlayerSelectors {
    static isPlaying() {
        return true;
    }

    static isMuted() {
        return true;
    }

    static isRandom() {
        return true;
    }

    static isVolumeControlOpen() {
        return true;
    }

    static getVolumeLevel() {
        return 40;
    }

    static getCurrentPlayingTime() {
        return '1:02';
    }

    static getTotalPlayingTime() {
        return '3:02';
    }

    static getCurrentPlayingProgress() {
        return 60;
    }
}