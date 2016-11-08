// @flow
import type { ApplicationState } from '../reducers';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SearchActions, PlaylistActions, PlayerActions } from '../actions';
import { PlaylistSelectors, PlayerSelectors } from '../selectors';


export function PlaylistContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { showPlaylistOnMobile: PlaylistSelectors.showMobilePlaylist(state)
            , playlist: PlaylistSelectors.getCurrentPlaylist(state)
            , prevTrack: PlaylistSelectors.getPrevTrack(state)
            , currentTrack: PlaylistSelectors.getCurrentTrack(state)
            , isPlaying: PlayerSelectors.isPlaying(state)
            , nextTrack: PlaylistSelectors.getNextTrack(state)
            , currentLoadingSong: PlaylistSelectors.getLoadingSong(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { showSearch: SearchActions.showMobileSearch
            , hideSearch: SearchActions.hideMobileSearch
            , showPlaylist: PlaylistActions.showPlaylistOnMobile
            , hidePlaylist: PlaylistActions.closePlaylistOnMobile
            , playNewSong: PlaylistActions.playSongFromPlaylist
            , playCurrentSong: PlayerActions.play
            , pauseSong: PlayerActions.pause
            }
        , dispatch);
    }


    return connect(mapStateToProps, mapActionsToProps)(WrappedComponent);
}
