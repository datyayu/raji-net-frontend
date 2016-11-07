// @flow
import type { ApplicationState } from '../reducers';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ReleaseActions } from '../actions';
import { ReleaseSelectors, RoutingSelectors } from '../selectors';


export function ReleaseContainer(
    WrappedComponent: ReactClass<any>,
    // Due to this container being shared between release and playlist,
    // <willMount> is required to avoid calling <getRelease()> twice
    willMount: boolean = false,
): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { release: ReleaseSelectors.getRelease(state)
            , playlist: ReleaseSelectors.getReleaseTracks(state)
            , releaseId: RoutingSelectors.getIdFromUrl(state)
            , isFetching: ReleaseSelectors.isFetching(state)
            , error: ReleaseSelectors.getError(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { getRelease: ReleaseActions.getRelease
            }
        , dispatch);
    }


    class ReleaseContainerComponent extends Component {
        componentWillMount() {
            if (willMount) {
                this.props.getRelease(this.props.releaseId);
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }


    return connect(mapStateToProps, mapActionsToProps)(ReleaseContainerComponent);
}
