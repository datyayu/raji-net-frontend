// @flow
import type { ApplicationState } from '../reducers';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PlayerActions } from '../actions';
import { PlayerSelectors } from '../selectors';


export function PlayerContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { isPlaying: PlayerSelectors.isPlaying(state)
            , volumeLevel: PlayerSelectors.getVolumeLevel(state)
            , isMuted: PlayerSelectors.isMuted(state)
            , isRandom: PlayerSelectors.isRandom(state)
            , currentPlayingTime: PlayerSelectors.getCurrentPlayingTime(state)
            , currentPlayingProgress: PlayerSelectors.getCurrentPlayingProgress(state)
            , totalPlayingTime: PlayerSelectors.getTotalPlayingTime(state)
            , isVolumeControlOpen: PlayerSelectors.isVolumeControlOpen(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { onPlay: PlayerActions.play
            , onPause: PlayerActions.pause
            , onPlayNext: PlayerActions.playNext
            , onPlayPrev: PlayerActions.playPrev
            , onToggleRandom: PlayerActions.toggleRandom
            , onSeek: PlayerActions.seekTo
            , onShowVolumeControl: PlayerActions.showVolumeControl
            , onHideVolumeControl: PlayerActions.hideVolumeControl
            , onSetVolume: PlayerActions.changeVolume
            }
        , dispatch);
    }


    return connect(mapStateToProps, mapActionsToProps)(WrappedComponent);
}
