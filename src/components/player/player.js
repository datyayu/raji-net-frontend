// @flow
import React from 'react';

import { PlayerNavigation } from './player-navigation';
import { PlayerData } from './player-data';
import { PlayerSeekBar } from './player-seekbar';
import { PlayerControls } from './player-controls';

import type { TrackModel } from '../../models';


type PlayerProps = 
    { prevTrack: ?TrackModel
    , currentTrack: ?TrackModel
    , nextTrack: ?TrackModel

    , isPlaying: boolean
    , isRandom: boolean
    , isMuted: boolean
    , volume: number
    , currentPlayingProgress: number
    , currentPlayingTime: string
    , totalPlayingTime: string

    , onPlay: (ev: Event)=> any
    , onPause: (ev: Event)=> any
    , onPlayNext: (ev: Event) => any
    , onPlayPrev: (ev: Event) => any
    , onToggleRandom: (ev: Event) => any
    , onSeek: (ev: Event) => any
    , onShowVolumeControl: (ev: Event) => any
    , onHideVolumeControl: (ev: Event) => any
    , onSetVolume: (ev: Event) => any
}


export function Player({
    prevTrack,
    currentTrack,
    nextTrack,
    isPlaying=false,
    isRandom=false,
    isMuted=false,
    volume=100,
    currentPlayingTime='0:00',
    currentPlayingProgress=0,
    totalPlayingTime='Loading...',
    onSeek=()=>{},
    onPlay=()=>{},
    onPause=()=>{},
    onPlayNext=()=>{},
    onPlayPrev=()=>{},
    onToggleRandom=()=>{},
    onShowVolumeControl=()=>{},
    onHideVolumeControl=()=>{},
    onSetVolume=()=>{},
}: PlayerProps) {
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
                volume={volume}
                onPlayClick={onPlay}
                onPauseClick={onPause}
                onNextClick={onPlayNext}
                onPrevClick={onPlayPrev}
                onRandomClick={onToggleRandom}
            />
        </div>
    );
};
