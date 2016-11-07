// @flow
import type { ApplicationState } from '../reducers';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PlaylistListActions } from '../actions';
import { PlaylistListSelectors } from '../selectors';


export function PlaylistListContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { playlistList: PlaylistListSelectors.getPlaylistList(state)
            , isFetching: PlaylistListSelectors.isFetching(state)
            , error: PlaylistListSelectors.getError(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { getPlaylistList: PlaylistListActions.getPlaylistList
            }
        , dispatch);
    }


    class PlaylistListContainerComponent extends Component {
        componentWillMount() {
            this.props.getPlaylistList();
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }


    return connect(mapStateToProps, mapActionsToProps)(PlaylistListContainerComponent);
}
