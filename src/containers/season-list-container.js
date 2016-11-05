// @flow
import type { ApplicationState } from '../reducers';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SeasonListSelectors } from '../selectors';
import { SeasonsActions } from '../actions';



export function SeasonListContainer(WrappedComponent: ReactClass<any>) {
    function mapStateToProps(state: ApplicationState) {
        return (
            { seasonList: SeasonListSelectors.getSeasons(state)
            , isFetching: SeasonListSelectors.isFetching(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { getSeasons: SeasonsActions.getSeasons
            }
        , dispatch);
    }

    class SeasonListContainerComponent extends Component {
        componentWillMount() {
            this.props.getSeasons();
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return connect(mapStateToProps, mapActionsToProps)(SeasonListContainerComponent);
};