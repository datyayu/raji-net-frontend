// @flow
import type { TrackType } from '../../types';

import React from 'react';

import { PlayerNavigation } from './player-navigation';
import { PlayerData } from './player-data';
import { PlayerSeekBar } from './player-seekbar';
import { PlayerControls } from './player-controls';
import { PlayerVolumeControl } from './player-volume-control';


type PlayerProps =
    { prevTrack: ?TrackType
    , currentTrack: ?TrackType
    , nextTrack: ?TrackType
    , currentLoadingSong: TrackType

    , isPlaying: boolean
    , isRandom: boolean
    , isMuted: boolean
    , isVolumeControlOpen: boolean
    , volumeLevel: number
    , currentPlayingProgress: number
    , currentPlayingTime: string
    , totalPlayingTime: string

    , onPlay: Function
    , onPause: Function
    , onPlayNext: Function
    , onPlayPrev: Function
    , onToggleRandom: Function
    , onSeek: Function
    , onShowVolumeControl: Function
    , onHideVolumeControl: Function
    , onSetVolume: Function
    }
;


export function Player(
    { prevTrack
    , currentTrack
    , currentLoadingSong
    , nextTrack
    , isPlaying=false
    , isRandom=false
    , isMuted=false
    , isVolumeControlOpen=false
    , volumeLevel=100
    , currentPlayingTime='0:00'
    , currentPlayingProgress=0
    , totalPlayingTime='Loading...'
    , onSeek=()=>{}
    , onPlay=()=>{}
    , onPause=()=>{}
    , onPlayNext=()=>{}
    , onPlayPrev=()=>{}
    , onToggleRandom=()=>{}
    , onShowVolumeControl=()=>{}
    , onHideVolumeControl=()=>{}
    , onSetVolume=()=>{}
    }
    : PlayerProps
) {
    return (
        <div className="player">
            <PlayerNavigation
                prevTrack={prevTrack}
                nextTrack={nextTrack}
                onNextClick={onPlayNext}
                onPrevClick={onPlayPrev}
            />

            <PlayerData
                track={currentTrack}
            />

            <PlayerSeekBar
                currentTime={currentPlayingTime}
                progress={currentPlayingProgress}
                totalTime={totalPlayingTime}
                onClick={onSeek}
            />

            <PlayerControls
                isRandom={isRandom}
                isPlaying={isPlaying}
                isMuted={isMuted}
                isLoading={!!currentLoadingSong}
                volume={volumeLevel}
                onPlayClick={onPlay}
                onPauseClick={onPause}
                onNextClick={onPlayNext}
                onPrevClick={onPlayPrev}
                onRandomClick={onToggleRandom}
                onVolumeClick={onShowVolumeControl}
            />

            <PlayerVolumeControl
                isShowing={isVolumeControlOpen}
                onHide={onHideVolumeControl}
                volume={volumeLevel}
                onVolumeChange={onSetVolume}
            />
        </div>
    );
}
