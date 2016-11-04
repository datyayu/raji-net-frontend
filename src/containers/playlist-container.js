// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PlaylistSelectors } from '../selectors';
import { SearchActions, PlaylistActions } from '../actions';

import type { ApplicationState } from '../reducers';



type PlaylistContainerProps = {
    hasPlaylist: boolean;
    hasSearch: boolean;
    title: string;
}


export function PlaylistContainer(WrappedComponent: ReactClass<any>): ReactClass<PlaylistContainerProps> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { showPlaylistOnMobile: PlaylistSelectors.showMobilePlaylist(state)

            , prevTrack: PlaylistSelectors.getPrevTrack(state)
            , currentTrack: PlaylistSelectors.getCurrentTrack(state)
            , nextTrack: PlaylistSelectors.getNextTrack(state)
            , playlist: PlaylistSelectors.getCurrentPlaylist(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { showSearch: SearchActions.showMobileSearch
            , hideSearch: SearchActions.hideMobileSearch
            , showPlaylist: PlaylistActions.showPlaylistOnMobile
            , hidePlaylist: PlaylistActions.closePlaylistOnMobile
            }
        , dispatch);
    }


    return connect(mapStateToProps, mapActionsToProps)(WrappedComponent);
};
