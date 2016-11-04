// @flow
import React from 'react';

import { PlayerNavigation } from './player-navigation';
import { PlayerData } from './player-data';
import { PlayerSeekBar } from './player-seekbar';
import { PlayerControls } from './player-controls';

import type { TrackModel } from '../../models';


type PlayerProps = {
    prevTrack: ?TrackModel;
    currentTrack: ?TrackModel;
    nextTrack: ?TrackModel;
    
    isPlaying: boolean;
    isRandom: boolean;
    isMuted: boolean;

    volume: number;
    currentPlayingProgress: number;
    currentPlayingTime: string;
    totalPlayingTime: string;
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
}: PlayerProps) {
    return (
        <div className="player">
            <PlayerNavigation 
                prevTrack={prevTrack} 
                nextTrack={nextTrack} 
            />
            <PlayerData 
                track={currentTrack} 
            />
            <PlayerSeekBar 
                currentTime={currentPlayingTime} 
                progress={currentPlayingProgress}
                totalTime={totalPlayingTime}
            />
            <PlayerControls 
                isRandom={isRandom} 
                isPlaying={isPlaying}
                isMuted={isMuted} 
                volume={volume} 
            />
        </div>
    );
};
