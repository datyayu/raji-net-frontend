// @flow
import type { ApplicationState } from '../reducers';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ReleaseSelectors, RoutingSelectors } from '../selectors';
import { ReleaseActions } from '../actions';



export function ReleaseContainer(WrappedComponent: ReactClass<any>) {
    function mapStateToProps(state: ApplicationState) {
        return (
            { release: ReleaseSelectors.getRelease(state)
            , releaseId: RoutingSelectors.getIdFromUrl(state)
            , isFeching: ReleaseSelectors.isFetching(state)
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
            this.props.getRelease(this.props.releaseId);
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return connect(mapStateToProps, mapActionsToProps)(ReleaseContainerComponent);
};