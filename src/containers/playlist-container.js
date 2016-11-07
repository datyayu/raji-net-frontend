// @flow
import type { ApplicationState } from '../reducers';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SearchActions, PlaylistActions } from '../actions';
import { PlaylistSelectors } from '../selectors';


export function PlaylistContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { showPlaylistOnMobile: PlaylistSelectors.showMobilePlaylist(state)
            , playlist: PlaylistSelectors.getCurrentPlaylist(state)
            , prevTrack: PlaylistSelectors.getPrevTrack(state)
            , currentTrack: PlaylistSelectors.getCurrentTrack(state)
            , nextTrack: PlaylistSelectors.getNextTrack(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { showSearch: SearchActions.showMobileSearch
            , hideSearch: SearchActions.hideMobileSearch
            , showPlaylist: PlaylistActions.showPlaylistOnMobile
            , hidePlaylist: PlaylistActions.closePlaylistOnMobile
            , playSong: PlaylistActions.playSongFromPlaylist
            }
        , dispatch);
    }


    return connect(mapStateToProps, mapActionsToProps)(WrappedComponent);
}
